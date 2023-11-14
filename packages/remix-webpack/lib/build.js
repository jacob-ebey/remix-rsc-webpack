import { createBrowserConfig } from "./config.browser.js";
import { createServerConfig } from "./config.server.js";
import { createSSRConfig } from "./config.ssr.js";
import { toServerManifest } from "./manifest.js";
import { runWebpack } from "./run-webpack.js";

/**
 * @param {import("@remix-run/dev").ResolvedRemixConfig} remixConfig
 * @param {string} mode
 */
export async function build(remixConfig, mode) {
  // TODO: Allow users to merge their own webpack config
  const serverManifest = await toServerManifest(remixConfig);

  const serverConfig = createServerConfig(
    remixConfig,
    // @ts-expect-error
    serverManifest,
    mode
  );
  const serverBuildStats = await runWebpack(serverConfig);

  const browserConfig = createBrowserConfig(remixConfig, mode);
  const browserBuildStats = await runWebpack(browserConfig);

  const ssrConfig = createSSRConfig(remixConfig, mode);
  const ssrBuildStats = await runWebpack(ssrConfig);
}
