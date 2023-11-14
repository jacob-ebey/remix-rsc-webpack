import webpack from "webpack";

/**
 * @typedef {Object} WebpackResult
 * @property {Error | undefined} err
 * @property {webpack.Stats | undefined} stats
 */

/**
 *
 * @param {webpack.Configuration} config
 * @returns {Promise<webpack.Stats>}
 */
export const runWebpack = async (config) => {
  const pRes = new Promise((resolve) => {
    webpack(config, (err, stats) => {
      resolve({ err, stats });
    });
  });
  const { err, stats } = await pRes;
  const ok = report({ err, stats });
  if (!ok) {
    throw new Error(
      "Encountered errors from webpack, aborting. See output above"
    );
  }
  if (!stats) {
    throw new Error("missing stats!");
  }
  return stats;
};

/**
 * based on https://webpack.js.org/api/node/#error-handling
 * @param {WebpackResult} param0
 */
const report = ({ err, stats }) => {
  // webpack crashed
  if (err) {
    console.error(err.stack || err);
    const castErr = /** @type {Error & { details?: string }} */ (err);
    if (castErr.details) {
      console.error(castErr.details);
    }
    return false;
  }

  if (!stats) {
    throw new Error("missing stats!");
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    logMany(info.errors);
    return false;
  }

  if (stats.hasWarnings()) {
    logMany(
      info.warnings?.filter(
        (warning) =>
          warning.message !==
          "Critical dependency: the request of a dependency is an expression"
      )
    );
  }

  console.log(
    stats.toString({
      colors: true,
    })
  );
  return true;
};

/**
 *
 * @param {webpack.StatsError[] | undefined} items
 */
const logMany = (items) => {
  if (!items) return;
  for (const item of items) {
    console.log("message" in item ? item.message : item);
  }
};
