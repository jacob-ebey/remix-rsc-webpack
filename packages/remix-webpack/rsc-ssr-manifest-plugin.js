import { pathToFileURL } from "url";
import webpack from "webpack";

const { Compilation } = webpack;

/** @typedef {{
  isClientModule(resource: string): boolean;
  ssrManifestFromClient: SSRManifest;
  ssrManifestFilename: string;
}} RSCPluginOptions */

export class SSRManifestPlugin {
  static pluginName = "RscSsrManifestPlugin";

  constructor(/** @type {RSCPluginOptions} */ options) {
    this.options = options;
  }

  apply(/** @type {webpack.Compiler} */ compiler) {
    // Rewrite the SSR manifest that RSDW generated to match the real moduleIds
    compiler.hooks.make.tap(SSRManifestPlugin.pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: SSRManifestPlugin.pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_REPORT,
        },
        () => {
          /** @typedef {{
            [id: string]: {
              moduleId: string,
              chunkIds: string[],
            },
          }} Rewrites */

          /** @type {Rewrites} */
          const ssrManifestSpecifierRewrite = {};

          compilation.chunkGroups.forEach((chunkGroup) => {
            const chunkIds = chunkGroup.chunks
              .map((c) => c.id)
              .filter((id) => id !== null)
              .map((id) => ensureString(id)); // we want numeric ids to be strings.

            const visitModule = (
              /** @type {webpack.Module & { modules?: webpack.Module[] }} */ mod,
              /** @type {string | number} */ parentModuleId
            ) => {
              // If this is a concatenation, register each child to the parent ID.
              if (mod.modules) {
                const moduleId =
                  parentModuleId ?? compilation.chunkGraph.getModuleId(mod);

                mod.modules.forEach((concatenatedMod) => {
                  visitModule(concatenatedMod, moduleId);
                });
                return;
              }

              if (!(mod instanceof webpack.NormalModule)) return;
              if (!this.options.isClientModule(mod.resource)) return;

              const moduleId = ensureString(
                parentModuleId ?? compilation.chunkGraph.getModuleId(mod)
              );

              if (!(mod instanceof webpack.NormalModule)) {
                throw new Error(
                  `Expected generated module ${moduleId} to be a NormalModule`
                );
              }

              // Assumption: RSDW uses file:// ids to identify SSR modules
              const currentIdInSSRManifest = pathToFileURL(mod.resource).href;

              ssrManifestSpecifierRewrite[currentIdInSSRManifest] = {
                moduleId,
                chunkIds,
              };
            };

            chunkGroup.chunks.forEach(function (chunk) {
              const chunkModules =
                compilation.chunkGraph.getChunkModulesIterable(chunk);

              Array.from(chunkModules).forEach((mod) => {
                visitModule(mod);
              });
            });
          });

          // /** @type {SSRManifestActual} */
          const finalSSRModuleMap = {};
          const toRewrite = new Set(Object.keys(ssrManifestSpecifierRewrite));
          for (const [clientModuleId, moduleExportMap] of Object.entries(
            this.options.ssrManifestFromClient.moduleMap
          )) {
            for (const [exportName, exportInfo] of Object.entries(
              moduleExportMap
            )) {
              if (exportInfo.specifier in ssrManifestSpecifierRewrite) {
                const rewriteInfo =
                  ssrManifestSpecifierRewrite[exportInfo.specifier];
                const newExportInfo = {
                  name: exportName,
                  id: rewriteInfo.moduleId,
                  chunks: rewriteInfo.chunkIds, // TODO: these are server-side chunks, is this right...?
                  async: true, // TODO
                };
                finalSSRModuleMap[clientModuleId] ||= {};
                finalSSRModuleMap[clientModuleId][exportName] = newExportInfo;
                toRewrite.delete(ensureString(exportInfo.specifier));
              }
            }
          }

          // if (LOG_OPTIONS.manifestRewrites) {
          //   console.log("manifest rewrites", ssrManifestSpecifierRewrite);
          // }
          // if (LOG_OPTIONS.ssrManifest) {
          //   console.log("final ssr manifest", finalSSRModuleMap);
          // }

          if (toRewrite.size > 0) {
            throw new Error(
              "INTERNAL ERROR: Not all modules rewritten:\n" +
                [...toRewrite].join("\n")
            );
          }

          const emitJson = (
            /** @type {string} */ filename,
            /** @type {Record<string, any>} */ toStringify
          ) => {
            const output = JSON.stringify(toStringify, null, 2);
            compilation.emitAsset(
              filename,
              new webpack.sources.RawSource(output, false)
            );
          };

          emitJson(this.options.ssrManifestFilename, {
            moduleLoading: { crossorigin: null },
            moduleMap: finalSSRModuleMap,
          });
        }
      );
    });
  }
}

const ensureString = (/** @type {string | number} */ id) => id + "";
