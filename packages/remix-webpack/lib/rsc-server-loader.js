import { parse } from "es-module-lexer";
import path from "node:path";
import { pathToFileURL } from "node:url";

// /** @type {import('webpack').LoaderDefinitionFunction<{}>} */

/**
 * @this {import('webpack').LoaderContext<{}>}
 * @param {string} source
 * @returns {string | void | Buffer | Promise<string | Buffer>}
 * */
export default function load(source) {
  // const options = this.getOptions();
  if (source.search(/['"]use client['"]/) === -1) {
    return source;
  }

  // const manifestPath = "/__/" + path.relative(this.rootContext, this.resourcePath);
  const manifestPath = this.resourcePath;

  const [, foundExports] = parse(source);
  return createProxyOfClientModule({
    resource: manifestPath,
    exports: foundExports.map((e) => e.n),
  });
}

//=============================
// Client module proxy codegen
//=============================

const stringLiteral = (/** @type {string} */ val) => JSON.stringify(val);

const getManifestId = (/** @type {string} */ resource) =>
  pathToFileURL(resource);

/** @typedef {{
  resource: string,
  exports: string[],
}} CreateArgs */

const createProxyOfClientModule = (
  /** @type {CreateArgs} */ { resource, exports: modExports }
) => {
  const manifestIdUrl = getManifestId(resource);
  const manifestId = stringLiteral(manifestIdUrl.href);
  // NOTE: we don't need to call `registerClientReference`,
  // because when we access a property on the proxy, it gives us the appropriate reference
  // (and calls `registerClientReferenceImpl` internally)
  const generatedCode = [
    `import { createClientModuleProxy } from 'react-server-dom-webpack/server';`,
    ``,
    `const $$PROXY = /*@__PURE__*/ createClientModuleProxy(${manifestId});`,
  ];

  const getProxyExpr = (/** @type {string} */ exportName) => {
    const name = stringLiteral(exportName);
    return `(/*@__PURE__*/ $$PROXY[${name}])`;
  };

  for (const exportName of modExports) {
    const expr = getProxyExpr(exportName);
    if (exportName === "default") {
      generatedCode.push(`export default ${expr};`);
    } else {
      generatedCode.push(`export const ${exportName} = ${expr};`);
    }
  }
  return generatedCode.join("\n");
};
