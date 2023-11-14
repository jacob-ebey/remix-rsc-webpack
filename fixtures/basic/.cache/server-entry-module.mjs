
  import * as adapter from "__remix_virtual__adapter__";
  import * as route0 from "../app/root.tsx";
import * as route1 from "../app/routes/_index/route.tsx";
import * as route2 from "../app/routes/about/route.tsx";
  export const routes = {
    "root": {
      action: undefined,
      loader: undefined,
    },
  "routes/_index": {
      action: undefined,
      loader: adapter.wrapLoader(route1.loader),
    },
  "routes/about": {
      action: undefined,
      loader: undefined,
    }
  };
