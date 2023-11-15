import webpack from "webpack";
const {
  AsyncDependenciesBlock,
  Compilation,
  WebpackError,
  dependencies: webpackDependencies,
} = webpack;

/** @typedef {{
  clientModules: string[],
  type: "client" | "server",
  isRSDW: (resource: string) => boolean,
  chunkName: string,
}} PluginOpts */

export const createReferenceDependencyPlugin = (
  /** @type {PluginOpts} */ { clientModules, isRSDW, type, chunkName }
) =>
  function ReferenceDependencyPlugin(
    /** @type {import('webpack').Compiler} */ compiler
  ) {
    const pluginName = `ReferenceDependencyPlugin(${type})`;

    let rsdwFound = false;

    class ManifestReferenceDependency extends webpackDependencies.ModuleDependency {
      constructor(/** @type {string} */ request) {
        super(request);
      }

      get type() {
        return `${type}-reference`;
      }
    }

    compiler.hooks.thisCompilation.tap(
      pluginName,
      (compilation, { normalModuleFactory }) => {
        compilation.dependencyFactories.set(
          ManifestReferenceDependency,
          normalModuleFactory
        );
        compilation.dependencyTemplates.set(
          ManifestReferenceDependency,
          new webpackDependencies.NullDependency.Template()
        );

        tapParserJS(normalModuleFactory, pluginName, (parser) => {
          parser.hooks.program.tap(pluginName, () => {
            if (rsdwFound) {
              return;
            }

            const mod = parser.state.module;

            if (!isRSDW(mod.resource)) {
              return;
            }

            rsdwFound = true;

            for (const referencedModuleResource of clientModules) {
              const dep = new ManifestReferenceDependency(
                // this kicks off the imports for some SSR modules, so they might not go through
                // our SSR/proxy resolution hacks in NormalModuleReplacementPlugin
                referencedModuleResource
              );

              const block = new AsyncDependenciesBlock(
                {
                  name: chunkName,
                },
                undefined,
                dep.request
              );

              block.addDependency(dep);
              mod.addBlock(block);
            }
          });
        });
      }
    );

    compiler.hooks.make.tap(pluginName, (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,
          stage: Compilation.PROCESS_ASSETS_STAGE_REPORT,
        },
        function () {
          if (rsdwFound === false) {
            compilation.warnings.push(
              new WebpackError(`React ${type} runtime was not found.`)
            );
            return;
          }
        }
      );
    });
  };

//=========================
// Misc
//=========================

const tapParserJS = (
  /** @type {any} */ nmf /* Webpack.NormalModuleFactory */,
  /** @type {string} */ name,
  /** @type {(parser: import('webpack').javascript.JavascriptParser) => void} */ onParse
) => {
  nmf.hooks.parser.for("javascript/auto").tap(name, onParse);
  nmf.hooks.parser.for("javascript/dynamic").tap(name, onParse);
  nmf.hooks.parser.for("javascript/esm").tap(name, onParse);
};
