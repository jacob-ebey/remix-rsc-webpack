import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
/******/ var __webpack_modules__ = ({

/***/ 8109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var cookieSignature = __webpack_require__(4238);
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var cookieSignature__default = /* @__PURE__ */ _interopDefaultLegacy(cookieSignature);
const sign = async (value, secret) => {
  return cookieSignature__default["default"].sign(value, secret);
};
const unsign = async (signed, secret) => {
  return cookieSignature__default["default"].unsign(signed, secret);
};
exports.sign = sign;
exports.unsign = unsign;


/***/ }),

/***/ 8019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var webFetch = __webpack_require__(2868);
var webStream = __webpack_require__(2356);
function installGlobals() {
  global.File = webFetch.File;
  global.Headers = webFetch.Headers;
  global.Request = webFetch.Request;
  global.Response = webFetch.Response;
  global.fetch = webFetch.fetch;
  global.FormData = webFetch.FormData;
  global.ByteLengthQueuingStrategy = webStream.ByteLengthQueuingStrategy;
  global.CountQueuingStrategy = webStream.CountQueuingStrategy;
  global.ReadableByteStreamController = webStream.ReadableByteStreamController;
  global.ReadableStream = webStream.ReadableStream;
  global.ReadableStreamBYOBReader = webStream.ReadableStreamBYOBReader;
  global.ReadableStreamBYOBRequest = webStream.ReadableStreamBYOBRequest;
  global.ReadableStreamDefaultController = webStream.ReadableStreamDefaultController;
  global.ReadableStreamDefaultReader = webStream.ReadableStreamDefaultReader;
  global.TransformStream = webStream.TransformStream;
  global.TransformStreamDefaultController = webStream.TransformStreamDefaultController;
  global.WritableStream = webStream.WritableStream;
  global.WritableStreamDefaultController = webStream.WritableStreamDefaultController;
  global.WritableStreamDefaultWriter = webStream.WritableStreamDefaultWriter;
}
exports.installGlobals = installGlobals;


/***/ }),

/***/ 5089:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var serverRuntime = __webpack_require__(2118);
var crypto = __webpack_require__(8109);
const createCookie = serverRuntime.createCookieFactory({
  sign: crypto.sign,
  unsign: crypto.unsign
});
const createCookieSessionStorage = serverRuntime.createCookieSessionStorageFactory(createCookie);
const createSessionStorage = serverRuntime.createSessionStorageFactory(createCookie);
const createMemorySessionStorage = serverRuntime.createMemorySessionStorageFactory(createSessionStorage);
exports.createCookie = createCookie;
exports.createCookieSessionStorage = createCookieSessionStorage;
exports.createMemorySessionStorage = createMemorySessionStorage;
exports.createSessionStorage = createSessionStorage;


/***/ }),

/***/ 6493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
__webpack_unused_export__ = ({ value: true });
var globals = __webpack_require__(8019);
var fileStorage = __webpack_require__(9990);
var fileUploadHandler = __webpack_require__(62);
var implementations = __webpack_require__(5089);
var stream = __webpack_require__(7350);
var serverRuntime = __webpack_require__(2118);
__webpack_unused_export__ = globals.installGlobals;
__webpack_unused_export__ = fileStorage.createFileSessionStorage;
__webpack_unused_export__ = fileUploadHandler.NodeOnDiskFile;
__webpack_unused_export__ = fileUploadHandler.createFileUploadHandler;
__webpack_unused_export__ = implementations.createCookie;
__webpack_unused_export__ = implementations.createCookieSessionStorage;
__webpack_unused_export__ = implementations.createMemorySessionStorage;
__webpack_unused_export__ = implementations.createSessionStorage;
exports.A$ = stream.createReadableStreamFromReadable;
__webpack_unused_export__ = stream.readableStreamToString;
__webpack_unused_export__ = stream.writeAsyncIterableToWritable;
__webpack_unused_export__ = stream.writeReadableStreamToWritable;
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.MaxPartSizeExceededError;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.broadcastDevReady;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.createRequestHandler;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.createSession;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.defer;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.isCookie;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.isSession;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.json;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.logDevReady;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.redirect;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.redirectDocument;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.unstable_composeUploadHandlers;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.unstable_createMemoryUploadHandler;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function() {
    return serverRuntime.unstable_parseMultipartFormData;
  }
});


/***/ }),

/***/ 9990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var crypto = __webpack_require__(6005);
var node_fs = __webpack_require__(7561);
var path = __webpack_require__(9411);
var implementations = __webpack_require__(5089);
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = /* @__PURE__ */ Object.create(null);
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var crypto__namespace = /* @__PURE__ */ _interopNamespace(crypto);
var path__namespace = /* @__PURE__ */ _interopNamespace(path);
function createFileSessionStorage({
  cookie,
  dir
}) {
  return implementations.createSessionStorage({
    cookie,
    async createData(data, expires) {
      let content = JSON.stringify({
        data,
        expires
      });
      while (true) {
        let randomBytes = crypto__namespace.webcrypto.getRandomValues(new Uint8Array(8));
        let id = Buffer.from(randomBytes).toString("hex");
        try {
          let file = getFile(dir, id);
          await node_fs.promises.mkdir(path__namespace.dirname(file), {
            recursive: true
          });
          await node_fs.promises.writeFile(file, content, {
            encoding: "utf-8",
            flag: "wx"
          });
          return id;
        } catch (error) {
          if (error.code !== "EEXIST")
            throw error;
        }
      }
    },
    async readData(id) {
      try {
        let file = getFile(dir, id);
        let content = JSON.parse(await node_fs.promises.readFile(file, "utf-8"));
        let data = content.data;
        let expires = typeof content.expires === "string" ? new Date(content.expires) : null;
        if (!expires || expires > /* @__PURE__ */ new Date()) {
          return data;
        }
        if (expires)
          await node_fs.promises.unlink(file);
        return null;
      } catch (error) {
        if (error.code !== "ENOENT")
          throw error;
        return null;
      }
    },
    async updateData(id, data, expires) {
      let content = JSON.stringify({
        data,
        expires
      });
      let file = getFile(dir, id);
      await node_fs.promises.mkdir(path__namespace.dirname(file), {
        recursive: true
      });
      await node_fs.promises.writeFile(file, content, "utf-8");
    },
    async deleteData(id) {
      if (!id) {
        return;
      }
      try {
        await node_fs.promises.unlink(getFile(dir, id));
      } catch (error) {
        if (error.code !== "ENOENT")
          throw error;
      }
    }
  });
}
function getFile(dir, id) {
  return path__namespace.join(dir, id.slice(0, 4), id.slice(4));
}
exports.createFileSessionStorage = createFileSessionStorage;
exports.getFile = getFile;


/***/ }),

/***/ 7350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var node_stream = __webpack_require__(4492);
async function writeReadableStreamToWritable(stream, writable) {
  let reader = stream.getReader();
  let flushable = writable;
  try {
    while (true) {
      let {
        done,
        value
      } = await reader.read();
      if (done) {
        writable.end();
        break;
      }
      writable.write(value);
      if (typeof flushable.flush === "function") {
        flushable.flush();
      }
    }
  } catch (error) {
    writable.destroy(error);
    throw error;
  }
}
async function writeAsyncIterableToWritable(iterable, writable) {
  try {
    for await (let chunk of iterable) {
      writable.write(chunk);
    }
    writable.end();
  } catch (error) {
    writable.destroy(error);
    throw error;
  }
}
async function readableStreamToString(stream, encoding) {
  let reader = stream.getReader();
  let chunks = [];
  while (true) {
    let {
      done,
      value
    } = await reader.read();
    if (done) {
      break;
    }
    if (value) {
      chunks.push(value);
    }
  }
  return Buffer.concat(chunks).toString(encoding);
}
const createReadableStreamFromReadable = (source) => {
  let pump = new StreamPump(source);
  let stream = new ReadableStream(pump, pump);
  return stream;
};
class StreamPump {
  constructor(stream) {
    this.highWaterMark = stream.readableHighWaterMark || new node_stream.Stream.Readable().readableHighWaterMark;
    this.accumalatedSize = 0;
    this.stream = stream;
    this.enqueue = this.enqueue.bind(this);
    this.error = this.error.bind(this);
    this.close = this.close.bind(this);
  }
  size(chunk) {
    return (chunk === null || chunk === void 0 ? void 0 : chunk.byteLength) || 0;
  }
  start(controller) {
    this.controller = controller;
    this.stream.on("data", this.enqueue);
    this.stream.once("error", this.error);
    this.stream.once("end", this.close);
    this.stream.once("close", this.close);
  }
  pull() {
    this.resume();
  }
  cancel(reason) {
    if (this.stream.destroy) {
      this.stream.destroy(reason);
    }
    this.stream.off("data", this.enqueue);
    this.stream.off("error", this.error);
    this.stream.off("end", this.close);
    this.stream.off("close", this.close);
  }
  enqueue(chunk) {
    if (this.controller) {
      try {
        let bytes = chunk instanceof Uint8Array ? chunk : Buffer.from(chunk);
        let available = (this.controller.desiredSize || 0) - bytes.byteLength;
        this.controller.enqueue(bytes);
        if (available <= 0) {
          this.pause();
        }
      } catch (error) {
        this.controller.error(new Error("Could not create Buffer, chunk must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object"));
        this.cancel();
      }
    }
  }
  pause() {
    if (this.stream.pause) {
      this.stream.pause();
    }
  }
  resume() {
    if (this.stream.readable && this.stream.resume) {
      this.stream.resume();
    }
  }
  close() {
    if (this.controller) {
      this.controller.close();
      delete this.controller;
    }
  }
  error(error) {
    if (this.controller) {
      this.controller.error(error);
      delete this.controller;
    }
  }
}
exports.createReadableStreamFromReadable = createReadableStreamFromReadable;
exports.readableStreamToString = readableStreamToString;
exports.writeAsyncIterableToWritable = writeAsyncIterableToWritable;
exports.writeReadableStreamToWritable = writeReadableStreamToWritable;


/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
/**
 * @remix-run/node v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var crypto = __webpack_require__(6005);
var node_fs = __webpack_require__(7561);
var promises = __webpack_require__(3977);
var node_os = __webpack_require__(612);
var path = __webpack_require__(9411);
var node_stream = __webpack_require__(4492);
var node_util = __webpack_require__(7261);
var serverRuntime = __webpack_require__(2118);
var streamSlice = __webpack_require__(7844);
var stream = __webpack_require__(7350);
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = /* @__PURE__ */ Object.create(null);
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var streamSlice__namespace = /* @__PURE__ */ _interopNamespace(streamSlice);
let defaultFilePathResolver = ({
  filename
}) => {
  let ext = filename ? path.extname(filename) : "";
  return "upload_" + crypto.randomBytes(4).readUInt32LE(0) + ext;
};
async function uniqueFile(filepath) {
  let ext = path.extname(filepath);
  let uniqueFilepath = filepath;
  for (let i = 1; await promises.stat(uniqueFilepath).then(() => true).catch(() => false); i++) {
    uniqueFilepath = (ext ? filepath.slice(0, -ext.length) : filepath) + `-${(/* @__PURE__ */ new Date()).getTime()}${ext}`;
  }
  return uniqueFilepath;
}
function createFileUploadHandler({
  directory = node_os.tmpdir(),
  avoidFileConflicts = true,
  file = defaultFilePathResolver,
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    name,
    filename,
    contentType,
    data
  }) => {
    if (!filename || filter && !await filter({
      name,
      filename,
      contentType
    })) {
      return void 0;
    }
    let dir = typeof directory === "string" ? directory : directory({
      name,
      filename,
      contentType
    });
    if (!dir) {
      return void 0;
    }
    let filedir = path.resolve(dir);
    let path$1 = typeof file === "string" ? file : file({
      name,
      filename,
      contentType
    });
    if (!path$1) {
      return void 0;
    }
    let filepath = path.resolve(filedir, path$1);
    if (avoidFileConflicts) {
      filepath = await uniqueFile(filepath);
    }
    await promises.mkdir(path.dirname(filepath), {
      recursive: true
    }).catch(() => {
    });
    let writeFileStream = node_fs.createWriteStream(filepath);
    let size = 0;
    let deleteFile = false;
    try {
      for await (let chunk of data) {
        size += chunk.byteLength;
        if (size > maxPartSize) {
          deleteFile = true;
          throw new serverRuntime.MaxPartSizeExceededError(name, maxPartSize);
        }
        writeFileStream.write(chunk);
      }
    } finally {
      writeFileStream.end();
      await node_util.promisify(node_stream.finished)(writeFileStream);
      if (deleteFile) {
        await promises.rm(filepath).catch(() => {
        });
      }
    }
    return new NodeOnDiskFile(filepath, contentType);
  };
}
class NodeOnDiskFile {
  constructor(filepath, type, slicer) {
    __publicField(this, "lastModified", 0);
    __publicField(this, "webkitRelativePath", "");
    // TODO: remove this property once TS fixed File class regression
    //  https://github.com/microsoft/TypeScript/issues/52166
    __publicField(this, "prototype", File.prototype);
    this.filepath = filepath;
    this.type = type;
    this.slicer = slicer;
    this.name = path.basename(filepath);
  }
  get size() {
    let stats = node_fs.statSync(this.filepath);
    if (this.slicer) {
      let slice = this.slicer.end - this.slicer.start;
      return slice < 0 ? 0 : slice > stats.size ? stats.size : slice;
    }
    return stats.size;
  }
  slice(start, end, type) {
    var _this$slicer;
    if (typeof start === "number" && start < 0)
      start = this.size + start;
    if (typeof end === "number" && end < 0)
      end = this.size + end;
    let startOffset = ((_this$slicer = this.slicer) === null || _this$slicer === void 0 ? void 0 : _this$slicer.start) || 0;
    start = startOffset + (start || 0);
    end = startOffset + (end || this.size);
    return new NodeOnDiskFile(
      this.filepath,
      typeof type === "string" ? type : this.type,
      {
        start,
        end
      }
      // TODO: remove this typecast once TS fixed File class regression
      //  https://github.com/microsoft/TypeScript/issues/52166
    );
  }
  async arrayBuffer() {
    let stream2 = node_fs.createReadStream(this.filepath);
    if (this.slicer) {
      stream2 = stream2.pipe(streamSlice__namespace.slice(this.slicer.start, this.slicer.end));
    }
    return new Promise((resolve, reject) => {
      let buf = [];
      stream2.on("data", (chunk) => buf.push(chunk));
      stream2.on("end", () => resolve(Buffer.concat(buf)));
      stream2.on("error", (err) => reject(err));
    });
  }
  stream() {
    let stream$1 = node_fs.createReadStream(this.filepath);
    if (this.slicer) {
      stream$1 = stream$1.pipe(streamSlice__namespace.slice(this.slicer.start, this.slicer.end));
    }
    return stream.createReadableStreamFromReadable(stream$1);
  }
  async text() {
    return stream.readableStreamToString(this.stream());
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  remove() {
    return promises.unlink(this.filepath);
  }
  getFilePath() {
    return this.filepath;
  }
}
exports.NodeOnDiskFile = NodeOnDiskFile;
exports.createFileUploadHandler = createFileUploadHandler;


/***/ }),

/***/ 2118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  MaxPartSizeExceededError: () => (/* reexport */ MaxPartSizeExceededError),
  broadcastDevReady: () => (/* reexport */ broadcastDevReady),
  createCookieFactory: () => (/* reexport */ createCookieFactory),
  createCookieSessionStorageFactory: () => (/* reexport */ createCookieSessionStorageFactory),
  createMemorySessionStorageFactory: () => (/* reexport */ createMemorySessionStorageFactory),
  createRequestHandler: () => (/* reexport */ createRequestHandler),
  createSession: () => (/* reexport */ createSession),
  createSessionStorageFactory: () => (/* reexport */ createSessionStorageFactory),
  defer: () => (/* reexport */ responses_defer),
  isCookie: () => (/* reexport */ isCookie),
  isSession: () => (/* reexport */ isSession),
  json: () => (/* reexport */ responses_json),
  logDevReady: () => (/* reexport */ logDevReady),
  redirect: () => (/* reexport */ responses_redirect),
  redirectDocument: () => (/* reexport */ responses_redirectDocument),
  unstable_composeUploadHandlers: () => (/* reexport */ composeUploadHandlers),
  unstable_createMemoryUploadHandler: () => (/* reexport */ createMemoryUploadHandler),
  unstable_parseMultipartFormData: () => (/* reexport */ parseMultipartFormData)
});

// EXTERNAL MODULE: ../../node_modules/@remix-run/server-runtime/node_modules/cookie/index.js
var cookie = __webpack_require__(3987);
;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/warnings.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const alreadyWarned = {};
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned[message]) {
    alreadyWarned[message] = true;
    console.warn(message);
  }
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/cookies.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


const createCookieFactory = ({
  sign,
  unsign
}) => (name, cookieOptions = {}) => {
  let {
    secrets = [],
    ...options
  } = {
    path: "/",
    sameSite: "lax",
    ...cookieOptions
  };
  warnOnceAboutExpiresCookie(name, options.expires);
  return {
    get name() {
      return name;
    },
    get isSigned() {
      return secrets.length > 0;
    },
    get expires() {
      return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
    },
    async parse(cookieHeader, parseOptions) {
      if (!cookieHeader)
        return null;
      let cookies = (0,cookie/* parse */.Q)(cookieHeader, {
        ...options,
        ...parseOptions
      });
      return name in cookies ? cookies[name] === "" ? "" : await decodeCookieValue(unsign, cookies[name], secrets) : null;
    },
    async serialize(value, serializeOptions) {
      return (0,cookie/* serialize */.q)(name, value === "" ? "" : await encodeCookieValue(sign, value, secrets), {
        ...options,
        ...serializeOptions
      });
    }
  };
};
const isCookie = (object) => {
  return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
};
async function encodeCookieValue(sign, value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(unsign, value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length)
    result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(!expires, `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`);
}


// EXTERNAL MODULE: ../../node_modules/@web3-storage/multipart-parser/cjs/src/index.js
var src = __webpack_require__(9252);
;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/formData.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function composeUploadHandlers(...handlers) {
  return async (part) => {
    for (let handler of handlers) {
      let value = await handler(part);
      if (typeof value !== "undefined" && value !== null) {
        return value;
      }
    }
    return void 0;
  };
}
async function parseMultipartFormData(request, uploadHandler) {
  let contentType = request.headers.get("Content-Type") || "";
  let [type, boundary] = contentType.split(/\s*;\s*boundary=/);
  if (!request.body || !boundary || type !== "multipart/form-data") {
    throw new TypeError("Could not parse content as FormData.");
  }
  let formData = new FormData();
  let parts = (0,src.streamMultipart)(request.body, boundary);
  for await (let part of parts) {
    if (part.done)
      break;
    if (typeof part.filename === "string") {
      part.filename = part.filename.split(/[/\\]/).pop();
    }
    let value = await uploadHandler(part);
    if (typeof value !== "undefined" && value !== null) {
      formData.append(part.name, value);
    }
  }
  return formData;
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/router/dist/router.js
/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries;
  entries = initialEntries.map((entry, index2) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index2 === 0 ? "default" : void 0));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substr(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], 'Found a route id collision on id "' + id + `".  Route id's must be globally unique within Data Router usages`);
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: void 0
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
    path = path.replace(/\*$/, "/*");
  }
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    if (isLastSegment && segment === "*") {
      const star = "*";
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:(\w+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, 'Missing ":' + key + '" param');
      return stringify(param);
    }
    return segment.replace(/\?$/g, "");
  }).filter((segment) => !!segment);
  return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = safelyDecodeURIComponent(value || "", paramName);
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to) {
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
const json = function json2(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {
}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = /* @__PURE__ */ new Set();
    this.subscribers = /* @__PURE__ */ new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    let promise = Promise.race([value, this.abortPromise]).then((data) => this.onSettle(promise, key, void 0, data), (error) => this.onSettle(promise, key, error));
    promise.catch(() => {
    });
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      this.unlistenAbortSignal();
    }
    if (error === void 0 && data === void 0) {
      let undefinedError = new Error('Deferred data for key "' + key + '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === void 0) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach((subscriber) => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise((resolve) => {
        this.subscribe((aborted2) => {
          signal.removeEventListener("abort", onAbort);
          if (aborted2 || this.done) {
            resolve(aborted2);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref3) => {
      let [key, value] = _ref3;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
const defer = function defer2(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
const redirect = function redirect2(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
const IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
const TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, void 0, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let future = _extends({
    v7_fetcherPersist: false,
    v7_normalizeFormMethod: false,
    v7_prependBasename: false
  }, init.future);
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions = null;
  let getScrollRestorationKey = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized = (
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    !initialMatches.some((m) => m.route.lazy) && // And we have to either have no loaders or have been provided hydrationData
    (!initialMatches.some((m) => m.route.loader) || init.hydrationData != null)
  );
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  };
  let pendingAction = Action.Pop;
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledDeferredRoutes = [];
  let cancelledFetcherLoads = [];
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeFetchers = /* @__PURE__ */ new Map();
  let deletedFetchers = /* @__PURE__ */ new Set();
  let activeDeferreds = /* @__PURE__ */ new Map();
  let blockerFunctions = /* @__PURE__ */ new Map();
  let ignoreNextHistoryUpdate = false;
  function initialize() {
    unlistenHistory = init.history.listen((_ref) => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1);
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location
            });
            init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    if (isBrowser) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }
    return router;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, viewTransitionOpts) {
    state = _extends({}, state, newState);
    let completedFetchers = [];
    let deletedFetchersKeys = [];
    if (future.v7_fetcherPersist) {
      state.fetchers.forEach((fetcher, key) => {
        if (fetcher.state === "idle") {
          if (deletedFetchers.has(key)) {
            deletedFetchersKeys.push(key);
          } else {
            completedFetchers.push(key);
          }
        }
      });
    }
    subscribers.forEach((subscriber) => subscriber(state, {
      deletedFetchers: deletedFetchersKeys,
      unstable_viewTransitionOpts: viewTransitionOpts
    }));
    if (future.v7_fetcherPersist) {
      completedFetchers.forEach((key) => state.fetchers.delete(key));
      deletedFetchersKeys.forEach((key) => deleteFetcher(key));
    }
  }
  function completeNavigation(location, newState) {
    var _location$state, _location$state2;
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation)
      ;
    else if (pendingAction === Action.Pop)
      ;
    else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    if (pendingAction === Action.Pop) {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }), viewTransitionOpts);
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false)
      ;
    else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.unstable_viewTransition
    });
  }
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    if (state.navigation.state === "submitting") {
      return;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    }
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;
    if (opts && opts.pendingError) {
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });
      if (actionOutput.shortCircuited) {
        return;
      }
      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      request = new Request(request.url, {
        signal: request.signal
      });
    }
    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  }
  async function handleAction(request, location, submission, matches, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    });
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename);
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        replace = result.location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  }
  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
    cancelActiveDeferreds((routeId) => !(matches && matches.some((m) => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m) => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}, updatedFetchers2 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      return {
        shortCircuited: true
      };
    }
    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach((rf) => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(void 0, fetcher ? fetcher.data : void 0);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }
    revalidatingFetchers.forEach((rf) => {
      if (fetchControllers.has(rf.key)) {
        abortFetcher(rf.key);
      }
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect3 = findRedirect(results);
    if (redirect3) {
      if (redirect3.idx >= matchesToLoad.length) {
        let fetcherKey = revalidatingFetchers[redirect3.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      await startRedirectNavigation(state, redirect3.result, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe((aborted) => {
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getFetcher(key) {
    if (future.v7_fetcherPersist) {
      activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
      if (deletedFetchers.has(key)) {
        deletedFetchers.delete(key);
      }
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key))
      abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }));
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error);
      return;
    }
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    }
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId
      });
      setFetcherError(key, routeId, error);
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    let fetcher = getSubmittingFetcher(submission, existingFetcher);
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename);
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (deletedFetchers.has(key)) {
      state.fetchers.set(key, getDoneFetcher(void 0));
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      if (pendingNavigationLoadId > originatingLoadId) {
        let doneFetcher = getDoneFetcher(void 0);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        let loadingFetcher = getLoadingFetcher(submission);
        state.fetchers.set(key, loadingFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return startRedirectNavigation(state, actionResult, {
          fetcherSubmission: submission
        });
      }
    }
    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      submission,
      nextLocation,
      isRevalidationRequired,
      cancelledDeferredRoutes,
      cancelledFetcherLoads,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      {
        [match.route.id]: actionResult.data
      },
      void 0
      // No need to send through errors since we short circuit above
    );
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(void 0, existingFetcher2 ? existingFetcher2.data : void 0);
      state.fetchers.set(staleKey, revalidatingFetcher);
      if (fetchControllers.has(staleKey)) {
        abortFetcher(staleKey);
      }
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    let redirect3 = findRedirect(results);
    if (redirect3) {
      if (redirect3.idx >= matchesToLoad.length) {
        let fetcherKey = revalidatingFetchers[redirect3.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(state, redirect3.result);
    }
    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, void 0, revalidatingFetchers, fetcherResults, activeDeferreds);
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key);
    let loadingFetcher = getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : void 0);
    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename);
    if (isDeferredResult(result)) {
      result = await resolveDeferredData(result, fetchRequest.signal, true) || result;
    }
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (deletedFetchers.has(key)) {
      state.fetchers.set(key, getDoneFetcher(void 0));
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        let doneFetcher2 = getDoneFetcher(void 0);
        state.fetchers.set(key, doneFetcher2);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(state, result);
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    let doneFetcher = getDoneFetcher(result.data);
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  async function startRedirectNavigation(state2, redirect3, _temp) {
    let {
      submission,
      fetcherSubmission,
      replace
    } = _temp === void 0 ? {} : _temp;
    if (redirect3.revalidate) {
      isRevalidationRequired = true;
    }
    let redirectLocation = createLocation(state2.location, redirect3.location, {
      _isRedirect: true
    });
    invariant(redirectLocation, "Expected a location on the redirect navigation");
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect3.reloadDocument) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(redirect3.location)) {
        const url = init.history.createURL(redirect3.location);
        isDocumentReload = // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(redirect3.location);
        } else {
          routerWindow.location.assign(redirect3.location);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    let {
      formMethod,
      formAction,
      formEncType
    } = state2.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state2.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect3.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: redirect3.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    let results = await Promise.all([...matchesToLoad.map((match) => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename)), ...fetchersToLoad.map((f) => {
      if (f.matches && f.match && f.controller) {
        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename);
      } else {
        let error = {
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        };
        return error;
      }
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map((f) => f.match), fetcherResults, fetchersToLoad.map((f) => f.controller ? f.controller.signal : null), true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    deletedFetchers.delete(key);
    state.fetchers.delete(key);
  }
  function deleteFetcherAndUpdateState(key) {
    if (future.v7_fetcherPersist) {
      let count = (activeFetchers.get(key) || 0) - 1;
      if (count <= 0) {
        activeFetchers.delete(key);
        deletedFetchers.add(key);
      } else {
        activeFetchers.set(key, count);
      }
    } else {
      deleteFetcher(key);
    }
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, void 0, manifest);
  }
  router = {
    get basename() {
      return basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: deleteFetcherAndUpdateState,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = (route) => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, void 0, manifest);
  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext);
    if (isResponse(result)) {
      return result;
    }
    return _extends({
      location,
      basename
    }, result);
  }
  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0) {
      throw error;
    }
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return void 0;
  }
  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result2 = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result2;
      }
      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error) {
          throw e.response;
        }
        return e.response;
      }
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, {
        isStaticRequest: true,
        isRouteRequest,
        requestContext
      });
      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted: " + request.method + " " + request.url);
      }
    }
    if (isRedirectResult(result)) {
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context2 = await loadRouteData(request, matches, requestContext, void 0, {
        [boundaryMatch.route.id]: result.error
      });
      return _extends({}, context2, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }
  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null;
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter((m) => m.route.loader || m.route.lazy);
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await Promise.all([...matchesToLoad.map((match) => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, {
      isStaticRequest: true,
      isRouteRequest,
      requestContext
    }))]);
    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    let activeDeferreds = /* @__PURE__ */ new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
    let executedLoaders = new Set(matchesToLoad.map((match) => match.route.id));
    matches.forEach((match) => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, prependBasename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId != null && relative !== "path") {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(to ? to : ".", getPathContributingMatches(contextualMatches).map((m) => m.pathnameBase), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce((acc, _ref3) => {
          let [name, value] = _ref3;
          return "" + acc + name + "=" + value + "\n";
        }, "")
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json3 = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json: json3,
            text: void 0
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex((m) => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let boundaryId = pendingError ? Object.keys(pendingError)[0] : void 0;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.lazy) {
      return true;
    }
    if (match.route.loader == null) {
      return false;
    }
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id) => id === match.route.id)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || // Clicked the same link, resubmitted a GET form
        currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    }));
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (!matches.some((m) => m.route.id === f.routeId)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.includes(key)) {
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate: isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  );
  let isMissingData = currentLoaderData[match.route.id] === void 0;
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, 'Route "' + routeToUpdate.id + '" has a static property "' + lazyRouteProperty + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + lazyRouteProperty + '" will be ignored.'));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: void 0
  }));
}
async function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let resultType;
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    return Promise.race([handler({
      request,
      params: match.params,
      context: opts.requestContext
    }), abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy) {
      if (handler) {
        let handlerError;
        let values = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          loadLazyRouteModule(match.route, mapRouteProperties, manifest)
        ]);
        if (handlerError) {
          throw handlerError;
        }
        result = values[0];
      } else {
        await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return {
            type: ResultType.data,
            data: void 0
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result !== void 0, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ('"' + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  if (isResponse(result)) {
    let status = result.status;
    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      if (!ABSOLUTE_URL_REGEX.test(location)) {
        location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location);
      } else if (!opts.isStaticRequest) {
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
          location = url.pathname + url.search + url.hash;
        }
      }
      if (opts.isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }
      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    if (opts.isRouteRequest) {
      let queryRouteResponse = {
        type: resultType === ResultType.error ? ResultType.error : ResultType.data,
        response: result
      };
      throw queryRouteResponse;
    }
    let data;
    let contentType = result.headers.get("Content-Type");
    if (contentType && (/\bapplication\/json\b/.test(contentType) || /\btext\/x\-component\b/.test(contentType))) {
      data = await result.json();
    } else {
      data = await result.text();
    }
    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponseImpl(status, result.statusText, data),
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }
  if (isDeferredData(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error;
      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = void 0;
      }
      errors = errors || {};
      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      }
      loaderData[id] = void 0;
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      }
      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = void 0;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== void 0 && fetcherResults[index] !== void 0, "Did not find corresponding fetcher result");
    let result = fetcherResults[index];
    if (controller && controller.signal.aborted) {
      continue;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== void 0) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== void 0 && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + ' request to "' + pathname + '" but ' + ('did not provide a `loader` for route "' + routeId + '", ') + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = 'Route "' + routeId + '" does not match URL "' + pathname + '"';
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = 'No route matches URL "' + pathname + '"';
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + ' request to "' + pathname + '" but ' + ('did not provide an `action` for route "' + routeId + '", ') + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = 'Invalid request method "' + method.toUpperCase() + '"';
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return {
        result,
        idx: i
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find((m) => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== void 0;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      let signal = signals[index];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
      await resolveDeferredData(result, signal, isFetcher).then((result2) => {
        if (result2) {
          results[index] = result2 || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json: json3
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json3 !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: json3,
      text: void 0
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
    if (sessionPositions) {
      let json3 = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json3 || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json3 = {};
    for (let [k, v] of transitions) {
      json3[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json3));
    } catch (error) {
      warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
    }
  }
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/mode.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
let ServerMode = /* @__PURE__ */ function(ServerMode2) {
  ServerMode2["Development"] = "development";
  ServerMode2["Production"] = "production";
  ServerMode2["Test"] = "test";
  return ServerMode2;
}({});
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/errors.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== ServerMode.Development) {
    let sanitized = new Error("Unexpected Server Error");
    sanitized.stack = void 0;
    return sanitized;
  }
  return error;
}
function sanitizeErrors(errors, serverMode) {
  return Object.entries(errors).reduce((acc, [routeId, error]) => {
    return Object.assign(acc, {
      [routeId]: sanitizeError(error, serverMode)
    });
  }, {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors(errors, serverMode) {
  if (!errors)
    return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = {
        ...val,
        __type: "RouteErrorResponse"
      };
    } else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/responses.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


const responses_json = (data, init = {}) => {
  return json(data, init);
};
const responses_defer = (data, init = {}) => {
  return defer(data, init);
};
const responses_redirect = (url, init = 302) => {
  return redirect(url, init);
};
const responses_redirectDocument = (url, init = 302) => {
  return redirectDocument(url, init);
};
function responses_isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function responses_isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
const responses_redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function isRedirectStatusCode(statusCode) {
  return responses_redirectStatusCodes.has(statusCode);
}
function responses_isRedirectResponse(response) {
  return isRedirectStatusCode(response.status);
}
function responses_isTrackedPromise(value) {
  return value != null && typeof value.then === "function" && value._tracked === true;
}
const DEFERRED_VALUE_PLACEHOLDER_PREFIX = "__deferred_promise:";
function createDeferredReadableStream(deferredData, signal, serverMode) {
  let encoder = new TextEncoder();
  let stream = new ReadableStream({
    async start(controller) {
      let criticalData = {};
      let preresolvedKeys = [];
      for (let [key, value] of Object.entries(deferredData.data)) {
        if (responses_isTrackedPromise(value)) {
          criticalData[key] = `${DEFERRED_VALUE_PLACEHOLDER_PREFIX}${key}`;
          if (typeof value._data !== "undefined" || typeof value._error !== "undefined") {
            preresolvedKeys.push(key);
          }
        } else {
          criticalData[key] = value;
        }
      }
      controller.enqueue(encoder.encode(JSON.stringify(criticalData) + "\n\n"));
      for (let preresolvedKey of preresolvedKeys) {
        enqueueTrackedPromise(controller, encoder, preresolvedKey, deferredData.data[preresolvedKey], serverMode);
      }
      let unsubscribe = deferredData.subscribe((aborted, settledKey) => {
        if (settledKey) {
          enqueueTrackedPromise(controller, encoder, settledKey, deferredData.data[settledKey], serverMode);
        }
      });
      await deferredData.resolveData(signal);
      unsubscribe();
      controller.close();
    }
  });
  return stream;
}
function enqueueTrackedPromise(controller, encoder, settledKey, promise, serverMode) {
  var _a;
  if ("_error" in promise) {
    controller.enqueue(encoder.encode("error:" + JSON.stringify({
      [settledKey]: promise._error instanceof Error ? serializeError(promise._error, serverMode) : promise._error
    }) + "\n\n"));
  } else {
    controller.enqueue(encoder.encode("data:" + JSON.stringify({
      [settledKey]: (_a = promise._data) != null ? _a : null
    }) + "\n\n"));
  }
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/entry.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}


// EXTERNAL MODULE: ../../node_modules/set-cookie-parser/lib/set-cookie.js
var set_cookie = __webpack_require__(9536);
;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/headers.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function getDocumentHeadersRR(build, context) {
  let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
  let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
  let errorHeaders;
  if (boundaryIdx >= 0) {
    let {
      actionHeaders,
      actionData,
      loaderHeaders,
      loaderData
    } = context;
    context.matches.slice(boundaryIdx).some((match) => {
      let id = match.route.id;
      if (actionHeaders[id] && (!actionData || actionData[id] === void 0)) {
        errorHeaders = actionHeaders[id];
      } else if (loaderHeaders[id] && loaderData[id] === void 0) {
        errorHeaders = loaderHeaders[id];
      }
      return errorHeaders != null;
    });
  }
  return matches.reduce((parentHeaders, match, idx) => {
    let {
      id
    } = match.route;
    let routeModule = build.routes[id].module;
    let loaderHeaders = context.loaderHeaders[id] || new Headers();
    let actionHeaders = context.actionHeaders[id] || new Headers();
    let includeErrorHeaders = errorHeaders != void 0 && idx === matches.length - 1;
    let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
    if (routeModule.headers == null) {
      let headers2 = new Headers(parentHeaders);
      if (includeErrorCookies) {
        prependCookies(errorHeaders, headers2);
      }
      prependCookies(actionHeaders, headers2);
      prependCookies(loaderHeaders, headers2);
      return headers2;
    }
    let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders,
      errorHeaders: includeErrorHeaders ? errorHeaders : void 0
    }) : routeModule.headers : void 0);
    if (includeErrorCookies) {
      prependCookies(errorHeaders, headers);
    }
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0,set_cookie.splitCookiesString)(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/invariant.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function invariant_invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    console.error("The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new");
    throw new Error(message);
  }
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/routeMatching.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function matchServerRoutes(routes, pathname) {
  let matches = matchRoutes(routes, pathname);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/data.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

async function callRouteActionRR({
  loadContext,
  action,
  params,
  request,
  routeId
}) {
  let result = await action({
    request: stripDataParam(stripIndexParam(request)),
    context: loadContext,
    params
  });
  if (result === void 0) {
    throw new Error(`You defined an action for route "${routeId}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return responses_isResponse(result) ? result : responses_json(result);
}
async function callRouteLoaderRR({
  loadContext,
  loader,
  params,
  request,
  routeId
}) {
  let result = await loader({
    request: stripDataParam(stripIndexParam(request)),
    context: loadContext,
    params
  });
  if (result === void 0) {
    throw new Error(`You defined a loader for route "${routeId}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`);
  }
  if (responses_isDeferredData(result)) {
    if (result.init && isRedirectStatusCode(result.init.status || 200)) {
      return responses_redirect(new Headers(result.init.headers).get("Location"), result.init);
    }
    return result;
  }
  return responses_isResponse(result) ? result : responses_json(result);
}
function stripIndexParam(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
function stripDataParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_data");
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/routes.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function groupRoutesByParentId(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    let parentId = route.parentId || "";
    if (!routes[parentId]) {
      routes[parentId] = [];
    }
    routes[parentId].push(route);
  });
  return routes;
}
function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
}
function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let commonRoute = {
      // Always include root due to default boundaries
      hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
      id: route.id,
      path: route.path,
      loader: route.module.loader ? (
        // Need to use RR's version here to permit the optional context even
        // though we know it'll always be provided in remix
        (args) => callRouteLoaderRR({
          request: args.request,
          params: args.params,
          loadContext: args.context,
          loader: route.module.loader,
          routeId: route.id
        })
      ) : void 0,
      action: route.module.action ? (args) => callRouteActionRR({
        request: args.request,
        params: args.params,
        loadContext: args.context,
        action: route.module.action,
        routeId: route.id
      }) : void 0,
      handle: route.module.handle
    };
    return route.index ? {
      index: true,
      ...commonRoute
    } : {
      caseSensitive: route.caseSensitive,
      children: createStaticHandlerDataRoutes(manifest, future, route.id, routesByParentId),
      ...commonRoute
    };
  });
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/markup.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/serverHandoff.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function createServerHandoffString(serverHandoff) {
  return escapeHtml(JSON.stringify(serverHandoff));
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/server.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */










function derive(build, mode) {
  let routes = createRoutes(build.routes);
  let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
  let serverMode = isServerMode(mode) ? mode : ServerMode.Production;
  let staticHandler = createStaticHandler(dataRoutes);
  let errorHandler = build.entry.module.handleError || ((error, {
    request
  }) => {
    if (serverMode !== ServerMode.Test && !request.signal.aborted) {
      console.error(
        // @ts-expect-error This is "private" from users but intended for internal use
        isRouteErrorResponse(error) && error.error ? error.error : error
      );
    }
  });
  return {
    routes,
    dataRoutes,
    serverMode,
    staticHandler,
    errorHandler
  };
}
const createRequestHandler = (build, mode) => {
  let _build;
  let routes;
  let serverMode;
  let staticHandler;
  let errorHandler;
  return async function requestHandler(request, loadContext = {}, {
    __criticalCss: criticalCss
  } = {}) {
    _build = typeof build === "function" ? await build() : build;
    if (typeof build === "function") {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    }
    let url = new URL(request.url);
    let matches = matchServerRoutes(routes, url.pathname);
    let handleError = (error) => errorHandler(error, {
      context: loadContext,
      params: matches && matches.length > 0 ? matches[0].params : {},
      request
    });
    let response;
    if (url.searchParams.has("_data")) {
      let routeId = url.searchParams.get("_data");
      response = await handleDataRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError);
      if (_build.entry.module.handleDataRequest) {
        var _matches$find;
        response = await _build.entry.module.handleDataRequest(response, {
          context: loadContext,
          params: (matches === null || matches === void 0 ? void 0 : (_matches$find = matches.find((m) => m.route.id == routeId)) === null || _matches$find === void 0 ? void 0 : _matches$find.params) || {},
          request
        });
      }
    } else if (matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
      response = await handleResourceRequestRR(serverMode, staticHandler, matches.slice(-1)[0].route.id, request, loadContext, handleError);
    } else {
      response = await handleDocumentRequestRR(serverMode, _build, staticHandler, request, loadContext, handleError, criticalCss);
    }
    if (request.method === "HEAD") {
      return new Response(null, {
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
      });
    }
    return response;
  };
};
async function handleDataRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    if (responses_isRedirectResponse(response)) {
      let headers = new Headers(response.headers);
      headers.set("X-Remix-Redirect", headers.get("Location"));
      headers.set("X-Remix-Status", response.status);
      headers.delete("Location");
      if (response.headers.get("Set-Cookie") !== null) {
        headers.set("X-Remix-Revalidate", "yes");
      }
      return new Response(null, {
        status: 204,
        headers
      });
    }
    if (UNSAFE_DEFERRED_SYMBOL in response) {
      let deferredData = response[UNSAFE_DEFERRED_SYMBOL];
      let body = createDeferredReadableStream(deferredData, request.signal, serverMode);
      let init = deferredData.init || {};
      let headers = new Headers(init.headers);
      headers.set("Content-Type", "text/remix-deferred");
      headers.set("X-Remix-Response", "yes");
      init.headers = headers;
      return new Response(body, init);
    }
    response.headers.set("X-Remix-Response", "yes");
    return response;
  } catch (error) {
    if (responses_isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    let errorInstance = error instanceof Error ? error : new Error("Unexpected Server Error");
    handleError(errorInstance);
    return json(serializeError(errorInstance, serverMode), {
      status: 500,
      headers: {
        "X-Remix-Error": "yes"
      }
    });
  }
}
async function handleDocumentRequestRR(serverMode, build, staticHandler, request, loadContext, handleError, criticalCss) {
  let context;
  try {
    context = await staticHandler.query(request, {
      requestContext: loadContext
    });
  } catch (error) {
    handleError(error);
    return new Response(null, {
      status: 500
    });
  }
  if (responses_isResponse(context)) {
    return context;
  }
  if (context.errors) {
    Object.values(context.errors).forEach((err) => {
      if (!isRouteErrorResponse(err) || err.error) {
        handleError(err);
      }
    });
    context.errors = sanitizeErrors(context.errors, serverMode);
  }
  let headers = getDocumentHeadersRR(build, context);
  let entryContext = {
    manifest: build.assets,
    routeModules: createEntryRouteModules(build.routes),
    staticHandlerContext: context,
    criticalCss,
    serverHandoffString: createServerHandoffString({
      url: context.location.pathname,
      criticalCss,
      state: {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors(context.errors, serverMode)
      },
      future: build.future
    }),
    future: build.future,
    serializeError: (err) => serializeError(err, serverMode)
  };
  let handleDocumentRequestFunction = build.entry.module.default;
  try {
    return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
  } catch (error) {
    handleError(error);
    context = getStaticContextFromError(staticHandler.dataRoutes, context, error);
    if (context.errors) {
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    entryContext = {
      ...entryContext,
      staticHandlerContext: context,
      serverHandoffString: createServerHandoffString({
        url: context.location.pathname,
        state: {
          loaderData: context.loaderData,
          actionData: context.actionData,
          errors: serializeErrors(context.errors, serverMode)
        },
        future: build.future
      })
    };
    try {
      return await handleDocumentRequestFunction(request, context.statusCode, headers, entryContext, loadContext);
    } catch (error2) {
      handleError(error2);
      return returnLastResortErrorResponse(error2, serverMode);
    }
  }
}
async function handleResourceRequestRR(serverMode, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext
    });
    invariant_invariant(responses_isResponse(response), "Expected a Response to be returned from queryRoute");
    return response;
  } catch (error) {
    if (responses_isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    handleError(error);
    return returnLastResortErrorResponse(error, serverMode);
  }
}
function errorResponseToJson(errorResponse, serverMode) {
  return json(serializeError(
    // @ts-expect-error This is "private" from users but intended for internal use
    errorResponse.error || new Error("Unexpected Server Error"),
    serverMode
  ), {
    status: errorResponse.status,
    statusText: errorResponse.statusText,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function returnLastResortErrorResponse(error, serverMode) {
  let message = "Unexpected Server Error";
  if (serverMode !== ServerMode.Production) {
    message += `

${String(error)}`;
  }
  return new Response(message, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/sessions.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


function flash(name) {
  return `__flash_${name}__`;
}
const createSession = (initialData = {}, id = "") => {
  let map = new Map(Object.entries(initialData));
  return {
    get id() {
      return id;
    },
    get data() {
      return Object.fromEntries(map);
    },
    has(name) {
      return map.has(name) || map.has(flash(name));
    },
    get(name) {
      if (map.has(name))
        return map.get(name);
      let flashName = flash(name);
      if (map.has(flashName)) {
        let value = map.get(flashName);
        map.delete(flashName);
        return value;
      }
      return void 0;
    },
    set(name, value) {
      map.set(name, value);
    },
    flash(name, value) {
      map.set(flash(name), value);
    },
    unset(name) {
      map.delete(name);
    }
  };
};
const isSession = (object) => {
  return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
};
const createSessionStorageFactory = (createCookie) => ({
  cookie: cookieArg,
  createData,
  readData,
  updateData,
  deleteData
}) => {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      let id = cookieHeader && await cookie.parse(cookieHeader, options);
      let data = id && await readData(id);
      return createSession(data || {}, id || "");
    },
    async commitSession(session, options) {
      let {
        id,
        data
      } = session;
      let expires = (options === null || options === void 0 ? void 0 : options.maxAge) != null ? new Date(Date.now() + options.maxAge * 1e3) : (options === null || options === void 0 ? void 0 : options.expires) != null ? options.expires : cookie.expires;
      if (id) {
        await updateData(id, data, expires);
      } else {
        id = await createData(data, expires);
      }
      return cookie.serialize(id, options);
    },
    async destroySession(session, options) {
      await deleteData(session.id);
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
};
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(cookie.isSigned, `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`);
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/sessions/cookieStorage.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


const createCookieSessionStorageFactory = (createCookie) => ({
  cookie: cookieArg
} = {}) => {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie((cookieArg === null || cookieArg === void 0 ? void 0 : cookieArg.name) || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      return createSession(cookieHeader && await cookie.parse(cookieHeader, options) || {});
    },
    async commitSession(session, options) {
      let serializedCookie = await cookie.serialize(session.data, options);
      if (serializedCookie.length > 4096) {
        throw new Error("Cookie length will exceed browser maximum. Length: " + serializedCookie.length);
      }
      return serializedCookie;
    },
    async destroySession(_session, options) {
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
};


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/sessions/memoryStorage.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const createMemorySessionStorageFactory = (createSessionStorage) => ({
  cookie
} = {}) => {
  let map = /* @__PURE__ */ new Map();
  return createSessionStorage({
    cookie,
    async createData(data, expires) {
      let id = Math.random().toString(36).substring(2, 10);
      map.set(id, {
        data,
        expires
      });
      return id;
    },
    async readData(id) {
      if (map.has(id)) {
        let {
          data,
          expires
        } = map.get(id);
        if (!expires || expires > /* @__PURE__ */ new Date()) {
          return data;
        }
        if (expires)
          map.delete(id);
      }
      return null;
    },
    async updateData(id, data, expires) {
      map.set(id, {
        data,
        expires
      });
    },
    async deleteData(id) {
      map.delete(id);
    }
  });
};


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/upload/errors.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class MaxPartSizeExceededError extends Error {
  constructor(field, maxBytes) {
    super(`Field "${field}" exceeded upload size of ${maxBytes} bytes.`);
    this.field = field;
    this.maxBytes = maxBytes;
  }
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/upload/memoryUploadHandler.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function createMemoryUploadHandler({
  filter,
  maxPartSize = 3e6
} = {}) {
  return async ({
    filename,
    contentType,
    name,
    data
  }) => {
    if (filter && !await filter({
      filename,
      contentType,
      name
    })) {
      return void 0;
    }
    let size = 0;
    let chunks = [];
    for await (let chunk of data) {
      size += chunk.byteLength;
      if (size > maxPartSize) {
        throw new MaxPartSizeExceededError(name, maxPartSize);
      }
      chunks.push(chunk);
    }
    if (typeof filename === "string") {
      return new File(chunks, filename, {
        type: contentType
      });
    }
    return await new Blob(chunks, {
      type: contentType
    }).text();
  };
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/dev.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function broadcastDevReady(build, origin) {
  origin != null ? origin : origin = process.env.REMIX_DEV_ORIGIN;
  if (!origin)
    throw Error("Dev server origin not set");
  let url = new URL(origin);
  url.pathname = "ping";
  let response = await fetch(url.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      buildHash: build.assets.version
    })
  }).catch((error) => {
    console.error(`Could not reach Remix dev server at ${url}`);
    throw error;
  });
  if (!response.ok) {
    console.error(`Could not reach Remix dev server at ${url} (${response.status})`);
    throw Error(await response.text());
  }
}
function logDevReady(build) {
  console.log(`[REMIX DEV] ${build.assets.version} ready`);
}


;// CONCATENATED MODULE: ../../node_modules/@remix-run/server-runtime/dist/esm/index.js
/**
 * @remix-run/server-runtime v2.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */












/***/ }),

/***/ 3987:
/***/ ((__unused_webpack_module, exports) => {


/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
exports.Q = parse;
exports.q = serialize;
var decode = decodeURIComponent;
var encode = encodeURIComponent;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var pairs = str.split(";");
  var dec = opt.decode || decode;
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var index = pair.indexOf("=");
    if (index < 0) {
      continue;
    }
    var key = pair.substring(0, index).trim();
    if (void 0 == obj[key]) {
      var val = pair.substring(index + 1, pair.length).trim();
      if (val[0] === '"') {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== "function") {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ 9252:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var search = __webpack_require__(2401);
var utils = __webpack_require__(6332);
const mergeArrays2 = Function.prototype.apply.bind(utils.mergeArrays, void 0);
const dash = utils.stringToArray("--");
const CRLF = utils.stringToArray("\r\n");
function parseContentDisposition(header) {
  const parts = header.split(";").map((part) => part.trim());
  if (parts.shift() !== "form-data") {
    throw new Error('malformed content-disposition header: missing "form-data" in `' + JSON.stringify(parts) + "`");
  }
  const out = {};
  for (const part of parts) {
    const kv = part.split("=", 2);
    if (kv.length !== 2) {
      throw new Error("malformed content-disposition header: key-value pair not found - " + part + " in `" + header + "`");
    }
    const [name, value] = kv;
    if (value[0] === '"' && value[value.length - 1] === '"') {
      out[name] = value.slice(1, -1).replace(/\\"/g, '"');
    } else if (value[0] !== '"' && value[value.length - 1] !== '"') {
      out[name] = value;
    } else if (value[0] === '"' && value[value.length - 1] !== '"' || value[0] !== '"' && value[value.length - 1] === '"') {
      throw new Error("malformed content-disposition header: mismatched quotations in `" + header + "`");
    }
  }
  if (!out.name) {
    throw new Error("malformed content-disposition header: missing field name in `" + header + "`");
  }
  return out;
}
function parsePartHeaders(lines) {
  const entries = [];
  let disposition = false;
  let line;
  while (typeof (line = lines.shift()) !== "undefined") {
    const colon = line.indexOf(":");
    if (colon === -1) {
      throw new Error("malformed multipart-form header: missing colon");
    }
    const header = line.slice(0, colon).trim().toLowerCase();
    const value = line.slice(colon + 1).trim();
    switch (header) {
      case "content-disposition":
        disposition = true;
        entries.push(...Object.entries(parseContentDisposition(value)));
        break;
      case "content-type":
        entries.push([
          "contentType",
          value
        ]);
    }
  }
  if (!disposition) {
    throw new Error("malformed multipart-form header: missing content-disposition");
  }
  return Object.fromEntries(entries);
}
async function readHeaderLines(it, needle) {
  let firstChunk = true;
  let lastTokenWasMatch = false;
  const headerLines = [[]];
  const crlfSearch = new search.StreamSearch(CRLF);
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      throw new Error("malformed multipart-form data: unexpected end of stream");
    }
    if (firstChunk && result.value !== search.MATCH && utils.arraysEqual(result.value.slice(0, 2), dash)) {
      return [
        void 0,
        new Uint8Array()
      ];
    }
    let chunk;
    if (result.value !== search.MATCH) {
      chunk = result.value;
    } else if (!lastTokenWasMatch) {
      chunk = needle;
    } else {
      throw new Error("malformed multipart-form data: unexpected boundary");
    }
    if (!chunk.length) {
      continue;
    }
    if (firstChunk) {
      firstChunk = false;
    }
    const tokens = crlfSearch.feed(chunk);
    for (const [i, token] of tokens.entries()) {
      const isMatch = token === search.MATCH;
      if (!isMatch && !token.length) {
        continue;
      }
      if (lastTokenWasMatch && isMatch) {
        tokens.push(crlfSearch.end());
        return [
          headerLines.filter((chunks) => chunks.length).map(mergeArrays2).map(utils.arrayToString),
          utils.mergeArrays(...tokens.slice(i + 1).map((token2) => token2 === search.MATCH ? CRLF : token2))
        ];
      }
      if (lastTokenWasMatch = isMatch) {
        headerLines.push([]);
      } else {
        headerLines[headerLines.length - 1].push(token);
      }
    }
  }
}
async function* streamMultipart(body, boundary) {
  const needle = utils.mergeArrays(dash, utils.stringToArray(boundary));
  const it = new search.ReadableStreamSearch(needle, body)[Symbol.asyncIterator]();
  for (; ; ) {
    const result = await it.next();
    if (result.done) {
      return;
    }
    if (result.value === search.MATCH) {
      break;
    }
  }
  const crlfSearch = new search.StreamSearch(CRLF);
  for (; ; ) {
    let feedChunk = function(chunk) {
      const chunks = [];
      for (const token of crlfSearch.feed(chunk)) {
        if (trailingCRLF) {
          chunks.push(CRLF);
        }
        if (!(trailingCRLF = token === search.MATCH)) {
          chunks.push(token);
        }
      }
      return utils.mergeArrays(...chunks);
    };
    const [headerLines, tail] = await readHeaderLines(it, needle);
    if (!headerLines) {
      return;
    }
    async function nextToken() {
      const result = await it.next();
      if (result.done) {
        throw new Error("malformed multipart-form data: unexpected end of stream");
      }
      return result;
    }
    let trailingCRLF = false;
    let done = false;
    async function nextChunk() {
      const result = await nextToken();
      let chunk;
      if (result.value !== search.MATCH) {
        chunk = result.value;
      } else if (!trailingCRLF) {
        chunk = CRLF;
      } else {
        done = true;
        return { value: crlfSearch.end() };
      }
      return { value: feedChunk(chunk) };
    }
    const bufferedChunks = [{ value: feedChunk(tail) }];
    yield {
      ...parsePartHeaders(headerLines),
      data: {
        [Symbol.asyncIterator]() {
          return this;
        },
        async next() {
          for (; ; ) {
            const result = bufferedChunks.shift();
            if (!result) {
              break;
            }
            if (result.value.length > 0) {
              return result;
            }
          }
          for (; ; ) {
            if (done) {
              return {
                done,
                value: void 0
              };
            }
            const result = await nextChunk();
            if (result.value.length > 0) {
              return result;
            }
          }
        }
      }
    };
    while (!done) {
      bufferedChunks.push(await nextChunk());
    }
  }
}
async function* iterateMultipart(body, boundary) {
  for await (const part of streamMultipart(body, boundary)) {
    const chunks = [];
    for await (const chunk of part.data) {
      chunks.push(chunk);
    }
    yield {
      ...part,
      data: utils.mergeArrays(...chunks)
    };
  }
}
exports.iterateMultipart = iterateMultipart;
exports.streamMultipart = streamMultipart;


/***/ }),

/***/ 2401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils = __webpack_require__(6332);
function coerce(a) {
  if (a instanceof Uint8Array) {
    return (index) => a[index];
  }
  return a;
}
function jsmemcmp(buf1, pos1, buf2, pos2, len) {
  const fn1 = coerce(buf1);
  const fn2 = coerce(buf2);
  for (let i = 0; i < len; ++i) {
    if (fn1(pos1 + i) !== fn2(pos2 + i)) {
      return false;
    }
  }
  return true;
}
function createOccurenceTable(s) {
  const table = new Array(256).fill(s.length);
  if (s.length > 1) {
    for (let i = 0; i < s.length - 1; i++) {
      table[s[i]] = s.length - 1 - i;
    }
  }
  return table;
}
const MATCH = Symbol("Match");
class StreamSearch {
  constructor(needle) {
    this._lookbehind = new Uint8Array();
    if (typeof needle === "string") {
      this._needle = needle = utils.stringToArray(needle);
    } else {
      this._needle = needle;
    }
    this._lastChar = needle[needle.length - 1];
    this._occ = createOccurenceTable(needle);
  }
  feed(chunk) {
    let pos = 0;
    let tokens;
    const allTokens = [];
    while (pos !== chunk.length) {
      ;
      [pos, ...tokens] = this._feed(chunk, pos);
      allTokens.push(...tokens);
    }
    return allTokens;
  }
  end() {
    const tail = this._lookbehind;
    this._lookbehind = new Uint8Array();
    return tail;
  }
  _feed(data, bufPos) {
    const tokens = [];
    let pos = -this._lookbehind.length;
    if (pos < 0) {
      while (pos < 0 && pos <= data.length - this._needle.length) {
        const ch = this._charAt(data, pos + this._needle.length - 1);
        if (ch === this._lastChar && this._memcmp(data, pos, this._needle.length - 1)) {
          if (pos > -this._lookbehind.length) {
            tokens.push(this._lookbehind.slice(0, this._lookbehind.length + pos));
          }
          tokens.push(MATCH);
          this._lookbehind = new Uint8Array();
          return [
            pos + this._needle.length,
            ...tokens
          ];
        } else {
          pos += this._occ[ch];
        }
      }
      if (pos < 0) {
        while (pos < 0 && !this._memcmp(data, pos, data.length - pos)) {
          pos++;
        }
      }
      if (pos >= 0) {
        tokens.push(this._lookbehind);
        this._lookbehind = new Uint8Array();
      } else {
        const bytesToCutOff = this._lookbehind.length + pos;
        if (bytesToCutOff > 0) {
          tokens.push(this._lookbehind.slice(0, bytesToCutOff));
          this._lookbehind = this._lookbehind.slice(bytesToCutOff);
        }
        this._lookbehind = Uint8Array.from(new Array(this._lookbehind.length + data.length), (_, i) => this._charAt(data, i - this._lookbehind.length));
        return [
          data.length,
          ...tokens
        ];
      }
    }
    pos += bufPos;
    while (pos <= data.length - this._needle.length) {
      const ch = data[pos + this._needle.length - 1];
      if (ch === this._lastChar && data[pos] === this._needle[0] && jsmemcmp(this._needle, 0, data, pos, this._needle.length - 1)) {
        if (pos > bufPos) {
          tokens.push(data.slice(bufPos, pos));
        }
        tokens.push(MATCH);
        return [
          pos + this._needle.length,
          ...tokens
        ];
      } else {
        pos += this._occ[ch];
      }
    }
    if (pos < data.length) {
      while (pos < data.length && (data[pos] !== this._needle[0] || !jsmemcmp(data, pos, this._needle, 0, data.length - pos))) {
        ++pos;
      }
      if (pos < data.length) {
        this._lookbehind = data.slice(pos);
      }
    }
    if (pos > 0) {
      tokens.push(data.slice(bufPos, pos < data.length ? pos : data.length));
    }
    return [
      data.length,
      ...tokens
    ];
  }
  _charAt(data, pos) {
    if (pos < 0) {
      return this._lookbehind[this._lookbehind.length + pos];
    }
    return data[pos];
  }
  _memcmp(data, pos, len) {
    return jsmemcmp(this._charAt.bind(this, data), pos, this._needle, 0, len);
  }
}
class ReadableStreamSearch {
  constructor(needle, _readableStream) {
    this._readableStream = _readableStream;
    this._search = new StreamSearch(needle);
  }
  async *[Symbol.asyncIterator]() {
    const reader = this._readableStream.getReader();
    try {
      while (true) {
        const result = await reader.read();
        if (result.done) {
          break;
        }
        yield* this._search.feed(result.value);
      }
      const tail = this._search.end();
      if (tail.length) {
        yield tail;
      }
    } finally {
      reader.releaseLock();
    }
  }
}
const EOQ = Symbol("End of Queue");
class QueueableStreamSearch {
  constructor(needle) {
    this._chunksQueue = [];
    this._closed = false;
    this._search = new StreamSearch(needle);
  }
  push(...chunks) {
    if (this._closed) {
      throw new Error("cannot call push after close");
    }
    this._chunksQueue.push(...chunks);
    if (this._notify) {
      this._notify();
    }
  }
  close() {
    if (this._closed) {
      throw new Error("close was already called");
    }
    this._closed = true;
    this._chunksQueue.push(EOQ);
    if (this._notify) {
      this._notify();
    }
  }
  async *[Symbol.asyncIterator]() {
    while (true) {
      let chunk;
      while (!(chunk = this._chunksQueue.shift())) {
        await new Promise((resolve) => this._notify = resolve);
        this._notify = void 0;
      }
      if (chunk === EOQ) {
        break;
      }
      yield* this._search.feed(chunk);
    }
    const tail = this._search.end();
    if (tail.length) {
      yield tail;
    }
  }
}
function splitChunks(chunks, needle) {
  const search = new StreamSearch(needle);
  const outchunks = [[]];
  for (const chunk of chunks) {
    for (const token of search.feed(chunk)) {
      if (token === MATCH) {
        outchunks.push([]);
      } else {
        outchunks[outchunks.length - 1].push(token);
      }
    }
  }
  const end = search.end();
  outchunks[outchunks.length - 1].push(end);
  return outchunks.map((chunks2) => utils.mergeArrays(...chunks2));
}
function split(buf, needle) {
  return splitChunks([buf], needle);
}
async function* chunksIterator(iter) {
  let chunks = [];
  for await (const value of iter) {
    if (value === MATCH) {
      yield chunks;
      chunks = [];
    } else {
      chunks.push(value);
    }
  }
  yield chunks;
}
async function* stringIterator(iter) {
  for await (const chunk of chunksIterator(iter)) {
    yield chunk.map(utils.arrayToString).join("");
  }
}
async function allStrings(iter) {
  const segments = [];
  for await (const value of stringIterator(iter)) {
    segments.push(value);
  }
  return segments;
}
async function* arrayIterator(iter) {
  for await (const chunk of chunksIterator(iter)) {
    yield utils.mergeArrays(...chunk);
  }
}
exports.MATCH = MATCH;
exports.QueueableStreamSearch = QueueableStreamSearch;
exports.ReadableStreamSearch = ReadableStreamSearch;
exports.StreamSearch = StreamSearch;
exports.allStrings = allStrings;
exports.arrayIterator = arrayIterator;
exports.chunksIterator = chunksIterator;
exports.split = split;
exports.splitChunks = splitChunks;
exports.stringIterator = stringIterator;


/***/ }),

/***/ 6332:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function stringToArray(s) {
  const utf8 = unescape(encodeURIComponent(s));
  return Uint8Array.from(utf8, (_, i) => utf8.charCodeAt(i));
}
function arrayToString(a) {
  const utf8 = String.fromCharCode.apply(null, a);
  return decodeURIComponent(escape(utf8));
}
function mergeArrays(...arrays) {
  const out = new Uint8Array(arrays.reduce((total, arr) => total + arr.length, 0));
  let offset = 0;
  for (const arr of arrays) {
    out.set(arr, offset);
    offset += arr.length;
  }
  return out;
}
function arraysEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
exports.arrayToString = arrayToString;
exports.arraysEqual = arraysEqual;
exports.mergeArrays = mergeArrays;
exports.stringToArray = stringToArray;


/***/ }),

/***/ 1997:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var eventTargetShim = __webpack_require__(6290);
class AbortSignal extends eventTargetShim.EventTarget {
  /**
   * AbortSignal cannot be constructed directly.
   */
  constructor() {
    super();
    throw new TypeError("AbortSignal cannot be constructed directly");
  }
  /**
   * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
   */
  get aborted() {
    const aborted = abortedFlags.get(this);
    if (typeof aborted !== "boolean") {
      throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    }
    return aborted;
  }
}
eventTargetShim.defineEventAttribute(AbortSignal.prototype, "abort");
function createAbortSignal() {
  const signal = Object.create(AbortSignal.prototype);
  eventTargetShim.EventTarget.call(signal);
  abortedFlags.set(signal, false);
  return signal;
}
function abortSignal(signal) {
  if (abortedFlags.get(signal) !== false) {
    return;
  }
  abortedFlags.set(signal, true);
  signal.dispatchEvent({ type: "abort" });
}
const abortedFlags = /* @__PURE__ */ new WeakMap();
Object.defineProperties(AbortSignal.prototype, {
  aborted: { enumerable: true }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
  Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortSignal"
  });
}
class AbortController {
  /**
   * Initialize this controller.
   */
  constructor() {
    signals.set(this, createAbortSignal());
  }
  /**
   * Returns the `AbortSignal` object associated with this object.
   */
  get signal() {
    return getSignal(this);
  }
  /**
   * Abort and signal to any observers that the associated activity is to be aborted.
   */
  abort() {
    abortSignal(getSignal(this));
  }
}
const signals = /* @__PURE__ */ new WeakMap();
function getSignal(controller) {
  const signal = signals.get(controller);
  if (signal == null) {
    throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
  }
  return signal;
}
Object.defineProperties(AbortController.prototype, {
  signal: { enumerable: true },
  abort: { enumerable: true }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
  Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortController"
  });
}
exports.AbortController = AbortController;
exports.AbortSignal = AbortSignal;
exports["default"] = AbortController;
module.exports = AbortController;
module.exports.AbortController = module.exports["default"] = AbortController;
module.exports.AbortSignal = AbortSignal;


/***/ }),

/***/ 4238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var crypto = __webpack_require__(6113);
exports.sign = function(val, secret) {
  if ("string" != typeof val)
    throw new TypeError("Cookie value must be provided as a string.");
  if (null == secret)
    throw new TypeError("Secret key must be provided.");
  return val + "." + crypto.createHmac("sha256", secret).update(val).digest("base64").replace(/\=+$/, "");
};
exports.unsign = function(input, secret) {
  if ("string" != typeof input)
    throw new TypeError("Signed cookie string must be provided.");
  if (null == secret)
    throw new TypeError("Secret key must be provided.");
  var tentativeValue = input.slice(0, input.lastIndexOf(".")), expectedInput = exports.sign(tentativeValue, secret), expectedBuffer = Buffer.from(expectedInput), inputBuffer = Buffer.from(input);
  return expectedBuffer.length === inputBuffer.length && crypto.timingSafeEqual(expectedBuffer, inputBuffer) ? tentativeValue : false;
};


/***/ }),

/***/ 5485:
/***/ ((module) => {


function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
module.exports = dataUriToBuffer;


/***/ }),

/***/ 6290:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const privateData = /* @__PURE__ */ new WeakMap();
const wrappers = /* @__PURE__ */ new WeakMap();
function pd(event) {
  const retv = privateData.get(event);
  console.assert(
    retv != null,
    "'this' is expected an Event object, but got",
    event
  );
  return retv;
}
function setCancelFlag(data) {
  if (data.passiveListener != null) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "Unable to preventDefault inside passive event listener invocation.",
        data.passiveListener
      );
    }
    return;
  }
  if (!data.event.cancelable) {
    return;
  }
  data.canceled = true;
  if (typeof data.event.preventDefault === "function") {
    data.event.preventDefault();
  }
}
function Event(eventTarget, event) {
  privateData.set(this, {
    eventTarget,
    event,
    eventPhase: 2,
    currentTarget: eventTarget,
    canceled: false,
    stopped: false,
    immediateStopped: false,
    passiveListener: null,
    timeStamp: event.timeStamp || Date.now()
  });
  Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
  const keys = Object.keys(event);
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    if (!(key in this)) {
      Object.defineProperty(this, key, defineRedirectDescriptor(key));
    }
  }
}
Event.prototype = {
  /**
   * The type of this event.
   * @type {string}
   */
  get type() {
    return pd(this).event.type;
  },
  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get target() {
    return pd(this).eventTarget;
  },
  /**
   * The target of this event.
   * @type {EventTarget}
   */
  get currentTarget() {
    return pd(this).currentTarget;
  },
  /**
   * @returns {EventTarget[]} The composed path of this event.
   */
  composedPath() {
    const currentTarget = pd(this).currentTarget;
    if (currentTarget == null) {
      return [];
    }
    return [currentTarget];
  },
  /**
   * Constant of NONE.
   * @type {number}
   */
  get NONE() {
    return 0;
  },
  /**
   * Constant of CAPTURING_PHASE.
   * @type {number}
   */
  get CAPTURING_PHASE() {
    return 1;
  },
  /**
   * Constant of AT_TARGET.
   * @type {number}
   */
  get AT_TARGET() {
    return 2;
  },
  /**
   * Constant of BUBBLING_PHASE.
   * @type {number}
   */
  get BUBBLING_PHASE() {
    return 3;
  },
  /**
   * The target of this event.
   * @type {number}
   */
  get eventPhase() {
    return pd(this).eventPhase;
  },
  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopPropagation() {
    const data = pd(this);
    data.stopped = true;
    if (typeof data.event.stopPropagation === "function") {
      data.event.stopPropagation();
    }
  },
  /**
   * Stop event bubbling.
   * @returns {void}
   */
  stopImmediatePropagation() {
    const data = pd(this);
    data.stopped = true;
    data.immediateStopped = true;
    if (typeof data.event.stopImmediatePropagation === "function") {
      data.event.stopImmediatePropagation();
    }
  },
  /**
   * The flag to be bubbling.
   * @type {boolean}
   */
  get bubbles() {
    return Boolean(pd(this).event.bubbles);
  },
  /**
   * The flag to be cancelable.
   * @type {boolean}
   */
  get cancelable() {
    return Boolean(pd(this).event.cancelable);
  },
  /**
   * Cancel this event.
   * @returns {void}
   */
  preventDefault() {
    setCancelFlag(pd(this));
  },
  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   */
  get defaultPrevented() {
    return pd(this).canceled;
  },
  /**
   * The flag to be composed.
   * @type {boolean}
   */
  get composed() {
    return Boolean(pd(this).event.composed);
  },
  /**
   * The unix time of this event.
   * @type {number}
   */
  get timeStamp() {
    return pd(this).timeStamp;
  },
  /**
   * The target of this event.
   * @type {EventTarget}
   * @deprecated
   */
  get srcElement() {
    return pd(this).eventTarget;
  },
  /**
   * The flag to stop event bubbling.
   * @type {boolean}
   * @deprecated
   */
  get cancelBubble() {
    return pd(this).stopped;
  },
  set cancelBubble(value) {
    if (!value) {
      return;
    }
    const data = pd(this);
    data.stopped = true;
    if (typeof data.event.cancelBubble === "boolean") {
      data.event.cancelBubble = true;
    }
  },
  /**
   * The flag to indicate cancellation state.
   * @type {boolean}
   * @deprecated
   */
  get returnValue() {
    return !pd(this).canceled;
  },
  set returnValue(value) {
    if (!value) {
      setCancelFlag(pd(this));
    }
  },
  /**
   * Initialize this event object. But do nothing under event dispatching.
   * @param {string} type The event type.
   * @param {boolean} [bubbles=false] The flag to be possible to bubble up.
   * @param {boolean} [cancelable=false] The flag to be possible to cancel.
   * @deprecated
   */
  initEvent() {
  }
};
Object.defineProperty(Event.prototype, "constructor", {
  value: Event,
  configurable: true,
  writable: true
});
if (typeof window !== "undefined" && typeof window.Event !== "undefined") {
  Object.setPrototypeOf(Event.prototype, window.Event.prototype);
  wrappers.set(window.Event.prototype, Event);
}
function defineRedirectDescriptor(key) {
  return {
    get() {
      return pd(this).event[key];
    },
    set(value) {
      pd(this).event[key] = value;
    },
    configurable: true,
    enumerable: true
  };
}
function defineCallDescriptor(key) {
  return {
    value() {
      const event = pd(this).event;
      return event[key].apply(event, arguments);
    },
    configurable: true,
    enumerable: true
  };
}
function defineWrapper(BaseEvent, proto) {
  const keys = Object.keys(proto);
  if (keys.length === 0) {
    return BaseEvent;
  }
  function CustomEvent(eventTarget, event) {
    BaseEvent.call(this, eventTarget, event);
  }
  CustomEvent.prototype = Object.create(BaseEvent.prototype, {
    constructor: { value: CustomEvent, configurable: true, writable: true }
  });
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    if (!(key in BaseEvent.prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, key);
      const isFunc = typeof descriptor.value === "function";
      Object.defineProperty(
        CustomEvent.prototype,
        key,
        isFunc ? defineCallDescriptor(key) : defineRedirectDescriptor(key)
      );
    }
  }
  return CustomEvent;
}
function getWrapper(proto) {
  if (proto == null || proto === Object.prototype) {
    return Event;
  }
  let wrapper = wrappers.get(proto);
  if (wrapper == null) {
    wrapper = defineWrapper(getWrapper(Object.getPrototypeOf(proto)), proto);
    wrappers.set(proto, wrapper);
  }
  return wrapper;
}
function wrapEvent(eventTarget, event) {
  const Wrapper = getWrapper(Object.getPrototypeOf(event));
  return new Wrapper(eventTarget, event);
}
function isStopped(event) {
  return pd(event).immediateStopped;
}
function setEventPhase(event, eventPhase) {
  pd(event).eventPhase = eventPhase;
}
function setCurrentTarget(event, currentTarget) {
  pd(event).currentTarget = currentTarget;
}
function setPassiveListener(event, passiveListener) {
  pd(event).passiveListener = passiveListener;
}
const listenersMap = /* @__PURE__ */ new WeakMap();
const CAPTURE = 1;
const BUBBLE = 2;
const ATTRIBUTE = 3;
function isObject(x) {
  return x !== null && typeof x === "object";
}
function getListeners(eventTarget) {
  const listeners = listenersMap.get(eventTarget);
  if (listeners == null) {
    throw new TypeError(
      "'this' is expected an EventTarget object, but got another value."
    );
  }
  return listeners;
}
function defineEventAttributeDescriptor(eventName) {
  return {
    get() {
      const listeners = getListeners(this);
      let node = listeners.get(eventName);
      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          return node.listener;
        }
        node = node.next;
      }
      return null;
    },
    set(listener) {
      if (typeof listener !== "function" && !isObject(listener)) {
        listener = null;
      }
      const listeners = getListeners(this);
      let prev = null;
      let node = listeners.get(eventName);
      while (node != null) {
        if (node.listenerType === ATTRIBUTE) {
          if (prev !== null) {
            prev.next = node.next;
          } else if (node.next !== null) {
            listeners.set(eventName, node.next);
          } else {
            listeners.delete(eventName);
          }
        } else {
          prev = node;
        }
        node = node.next;
      }
      if (listener !== null) {
        const newNode = {
          listener,
          listenerType: ATTRIBUTE,
          passive: false,
          once: false,
          next: null
        };
        if (prev === null) {
          listeners.set(eventName, newNode);
        } else {
          prev.next = newNode;
        }
      }
    },
    configurable: true,
    enumerable: true
  };
}
function defineEventAttribute(eventTargetPrototype, eventName) {
  Object.defineProperty(
    eventTargetPrototype,
    `on${eventName}`,
    defineEventAttributeDescriptor(eventName)
  );
}
function defineCustomEventTarget(eventNames) {
  function CustomEventTarget() {
    EventTarget.call(this);
  }
  CustomEventTarget.prototype = Object.create(EventTarget.prototype, {
    constructor: {
      value: CustomEventTarget,
      configurable: true,
      writable: true
    }
  });
  for (let i = 0; i < eventNames.length; ++i) {
    defineEventAttribute(CustomEventTarget.prototype, eventNames[i]);
  }
  return CustomEventTarget;
}
function EventTarget() {
  if (this instanceof EventTarget) {
    listenersMap.set(this, /* @__PURE__ */ new Map());
    return;
  }
  if (arguments.length === 1 && Array.isArray(arguments[0])) {
    return defineCustomEventTarget(arguments[0]);
  }
  if (arguments.length > 0) {
    const types = new Array(arguments.length);
    for (let i = 0; i < arguments.length; ++i) {
      types[i] = arguments[i];
    }
    return defineCustomEventTarget(types);
  }
  throw new TypeError("Cannot call a class as a function");
}
EventTarget.prototype = {
  /**
   * Add a given listener to this event target.
   * @param {string} eventName The event name to add.
   * @param {Function} listener The listener to add.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  addEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }
    if (typeof listener !== "function" && !isObject(listener)) {
      throw new TypeError("'listener' should be a function or an object.");
    }
    const listeners = getListeners(this);
    const optionsIsObj = isObject(options);
    const capture = optionsIsObj ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    const newNode = {
      listener,
      listenerType,
      passive: optionsIsObj && Boolean(options.passive),
      once: optionsIsObj && Boolean(options.once),
      next: null
    };
    let node = listeners.get(eventName);
    if (node === void 0) {
      listeners.set(eventName, newNode);
      return;
    }
    let prev = null;
    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        return;
      }
      prev = node;
      node = node.next;
    }
    prev.next = newNode;
  },
  /**
   * Remove a given listener from this event target.
   * @param {string} eventName The event name to remove.
   * @param {Function} listener The listener to remove.
   * @param {boolean|{capture?:boolean,passive?:boolean,once?:boolean}} [options] The options for this listener.
   * @returns {void}
   */
  removeEventListener(eventName, listener, options) {
    if (listener == null) {
      return;
    }
    const listeners = getListeners(this);
    const capture = isObject(options) ? Boolean(options.capture) : Boolean(options);
    const listenerType = capture ? CAPTURE : BUBBLE;
    let prev = null;
    let node = listeners.get(eventName);
    while (node != null) {
      if (node.listener === listener && node.listenerType === listenerType) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
        return;
      }
      prev = node;
      node = node.next;
    }
  },
  /**
   * Dispatch a given event.
   * @param {Event|{type:string}} event The event to dispatch.
   * @returns {boolean} `false` if canceled.
   */
  dispatchEvent(event) {
    if (event == null || typeof event.type !== "string") {
      throw new TypeError('"event.type" should be a string.');
    }
    const listeners = getListeners(this);
    const eventName = event.type;
    let node = listeners.get(eventName);
    if (node == null) {
      return true;
    }
    const wrappedEvent = wrapEvent(this, event);
    let prev = null;
    while (node != null) {
      if (node.once) {
        if (prev !== null) {
          prev.next = node.next;
        } else if (node.next !== null) {
          listeners.set(eventName, node.next);
        } else {
          listeners.delete(eventName);
        }
      } else {
        prev = node;
      }
      setPassiveListener(
        wrappedEvent,
        node.passive ? node.listener : null
      );
      if (typeof node.listener === "function") {
        try {
          node.listener.call(this, wrappedEvent);
        } catch (err) {
          if (typeof console !== "undefined" && typeof console.error === "function") {
            console.error(err);
          }
        }
      } else if (node.listenerType !== ATTRIBUTE && typeof node.listener.handleEvent === "function") {
        node.listener.handleEvent(wrappedEvent);
      }
      if (isStopped(wrappedEvent)) {
        break;
      }
      node = node.next;
    }
    setPassiveListener(wrappedEvent, null);
    setEventPhase(wrappedEvent, 0);
    setCurrentTarget(wrappedEvent, null);
    return !wrappedEvent.defaultPrevented;
  }
};
Object.defineProperty(EventTarget.prototype, "constructor", {
  value: EventTarget,
  configurable: true,
  writable: true
});
if (typeof window !== "undefined" && typeof window.EventTarget !== "undefined") {
  Object.setPrototypeOf(EventTarget.prototype, window.EventTarget.prototype);
}
exports.defineEventAttribute = defineEventAttribute;
exports.EventTarget = EventTarget;
exports["default"] = EventTarget;
module.exports = EventTarget;
module.exports.EventTarget = module.exports["default"] = EventTarget;
module.exports.defineEventAttribute = defineEventAttribute;


/***/ }),

/***/ 7994:
/***/ ((__unused_webpack_module, exports) => {


var e = { usingClientEntryPoint: false, Events: null, Dispatcher: { current: null } };
function f(b, a) {
  if ("font" === b)
    return "";
  if ("string" === typeof a)
    return "use-credentials" === a ? a : "";
}
var h = e.Dispatcher;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e;
exports.preconnect = function(b, a) {
  var c = h.current;
  c && "string" === typeof b && (a ? (a = a.crossOrigin, a = "string" === typeof a ? "use-credentials" === a ? a : "" : void 0) : a = null, c.preconnect(b, a));
};
exports.prefetchDNS = function(b) {
  var a = h.current;
  a && "string" === typeof b && a.prefetchDNS(b);
};
exports.preinit = function(b, a) {
  var c = h.current;
  if (c && "string" === typeof b && a && "string" === typeof a.as) {
    var d = a.as, g = f(d, a.crossOrigin), k = "string" === typeof a.integrity ? a.integrity : void 0, l = "string" === typeof a.fetchPriority ? a.fetchPriority : void 0;
    "style" === d ? c.preinitStyle(b, "string" === typeof a.precedence ? a.precedence : void 0, { crossOrigin: g, integrity: k, fetchPriority: l }) : "script" === d && c.preinitScript(b, { crossOrigin: g, integrity: k, fetchPriority: l, nonce: "string" === typeof a.nonce ? a.nonce : void 0 });
  }
};
exports.preinitModule = function(b, a) {
  var c = h.current;
  if (c && "string" === typeof b)
    if ("object" === typeof a && null !== a) {
      if (null == a.as || "script" === a.as) {
        var d = f(a.as, a.crossOrigin);
        c.preinitModuleScript(b, { crossOrigin: d, integrity: "string" === typeof a.integrity ? a.integrity : void 0, nonce: "string" === typeof a.nonce ? a.nonce : void 0 });
      }
    } else
      null == a && c.preinitModuleScript(b);
};
exports.preload = function(b, a) {
  var c = h.current;
  if (c && "string" === typeof b && "object" === typeof a && null !== a && "string" === typeof a.as) {
    var d = a.as, g = f(d, a.crossOrigin);
    c.preload(b, d, { crossOrigin: g, integrity: "string" === typeof a.integrity ? a.integrity : void 0, nonce: "string" === typeof a.nonce ? a.nonce : void 0, type: "string" === typeof a.type ? a.type : void 0, fetchPriority: "string" === typeof a.fetchPriority ? a.fetchPriority : void 0, referrerPolicy: "string" === typeof a.referrerPolicy ? a.referrerPolicy : void 0, imageSrcSet: "string" === typeof a.imageSrcSet ? a.imageSrcSet : void 0, imageSizes: "string" === typeof a.imageSizes ? a.imageSizes : void 0 });
  }
};
exports.preloadModule = function(b, a) {
  var c = h.current;
  if (c && "string" === typeof b)
    if (a) {
      var d = f(a.as, a.crossOrigin);
      c.preloadModule(b, { as: "string" === typeof a.as && "script" !== a.as ? a.as : void 0, crossOrigin: d, integrity: "string" === typeof a.integrity ? a.integrity : void 0 });
    } else
      c.preloadModule(b);
};


/***/ }),

/***/ 8985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
  module.exports = __webpack_require__(7994);
} else {}


/***/ }),

/***/ 2824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var aa = __webpack_require__(3837);
__webpack_require__(6113);
var ba = __webpack_require__(852), ca = __webpack_require__(6302), da = __webpack_require__(8985), l = null, m = 0, p = true;
function q(a, b) {
  a = a.write(b);
  p = p && a;
}
function r(a, b) {
  if ("string" === typeof b) {
    if (0 !== b.length)
      if (2048 < 3 * b.length)
        0 < m && (q(a, l.subarray(0, m)), l = new Uint8Array(2048), m = 0), q(a, ea.encode(b));
      else {
        var d = l;
        0 < m && (d = l.subarray(m));
        d = ea.encodeInto(b, d);
        var c = d.read;
        m += d.written;
        c < b.length && (q(a, l.subarray(0, m)), l = new Uint8Array(2048), m = ea.encodeInto(b.slice(c), l).written);
        2048 === m && (q(a, l), l = new Uint8Array(2048), m = 0);
      }
  } else
    0 !== b.byteLength && (2048 < b.byteLength ? (0 < m && (q(a, l.subarray(0, m)), l = new Uint8Array(2048), m = 0), q(a, b)) : (d = l.length - m, d < b.byteLength && (0 === d ? q(a, l) : (l.set(b.subarray(0, d), m), m += d, q(a, l), b = b.subarray(d)), l = new Uint8Array(2048), m = 0), l.set(b, m), m += b.byteLength, 2048 === m && (q(a, l), l = new Uint8Array(2048), m = 0)));
  return p;
}
var ea = new aa.TextEncoder(), t = Symbol.for("react.client.reference"), v = Symbol.for("react.server.reference");
function x(a, b, d) {
  return Object.defineProperties(a, { $$typeof: { value: t }, $$id: { value: b }, $$async: { value: d } });
}
var fa = Function.prototype.bind, ha = Array.prototype.slice;
function ia() {
  var a = fa.apply(this, arguments);
  if (this.$$typeof === v) {
    var b = ha.call(arguments, 1);
    a.$$typeof = v;
    a.$$id = this.$$id;
    a.$$bound = this.$$bound ? this.$$bound.concat(b) : b;
  }
  return a;
}
var ja = Promise.prototype, ka = { get: function(a, b) {
  switch (b) {
    case "$$typeof":
      return a.$$typeof;
    case "$$id":
      return a.$$id;
    case "$$async":
      return a.$$async;
    case "name":
      return a.name;
    case "displayName":
      return;
    case "defaultProps":
      return;
    case "toJSON":
      return;
    case Symbol.toPrimitive:
      return Object.prototype[Symbol.toPrimitive];
    case "Provider":
      throw Error("Cannot render a Client Context Provider on the Server. Instead, you can export a Client Component wrapper that itself renders a Client Context Provider.");
  }
  throw Error("Cannot access " + (String(a.name) + "." + String(b)) + " on the server. You cannot dot into a client module from a server component. You can only pass the imported name through.");
}, set: function() {
  throw Error("Cannot assign to a client module from a server module.");
} };
function la(a, b) {
  switch (b) {
    case "$$typeof":
      return a.$$typeof;
    case "$$id":
      return a.$$id;
    case "$$async":
      return a.$$async;
    case "name":
      return a.name;
    case "defaultProps":
      return;
    case "toJSON":
      return;
    case Symbol.toPrimitive:
      return Object.prototype[Symbol.toPrimitive];
    case "__esModule":
      var d = a.$$id;
      a.default = x(function() {
        throw Error("Attempted to call the default export of " + d + " from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
      }, a.$$id + "#", a.$$async);
      return true;
    case "then":
      if (a.then)
        return a.then;
      if (a.$$async)
        return;
      var c = x({}, a.$$id, true), e = new Proxy(c, ma);
      a.status = "fulfilled";
      a.value = e;
      return a.then = x(function(f) {
        return Promise.resolve(f(e));
      }, a.$$id + "#then", false);
  }
  c = a[b];
  c || (c = x(function() {
    throw Error("Attempted to call " + String(b) + "() from the server but " + String(b) + " is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
  }, a.$$id + "#" + b, a.$$async), Object.defineProperty(c, "name", { value: b }), c = a[b] = new Proxy(c, ka));
  return c;
}
var ma = { get: function(a, b) {
  return la(a, b);
}, getOwnPropertyDescriptor: function(a, b) {
  var d = Object.getOwnPropertyDescriptor(a, b);
  d || (d = { value: la(a, b), writable: false, configurable: false, enumerable: false }, Object.defineProperty(a, b, d));
  return d;
}, getPrototypeOf: function() {
  return ja;
}, set: function() {
  throw Error("Cannot assign to a client module from a server module.");
} }, ua = { prefetchDNS: na, preconnect: oa, preload: pa, preloadModule: qa, preinitStyle: ra, preinitScript: sa, preinitModuleScript: ta };
function na(a) {
  if ("string" === typeof a && a) {
    var b = y();
    if (b) {
      var d = b.hints, c = "D|" + a;
      d.has(c) || (d.add(c), z(b, "D", a));
    }
  }
}
function oa(a, b) {
  if ("string" === typeof a) {
    var d = y();
    if (d) {
      var c = d.hints, e = "C|" + (null == b ? "null" : b) + "|" + a;
      c.has(e) || (c.add(e), "string" === typeof b ? z(d, "C", [a, b]) : z(d, "C", a));
    }
  }
}
function pa(a, b, d) {
  if ("string" === typeof a) {
    var c = y();
    if (c) {
      var e = c.hints, f = "L";
      if ("image" === b && d) {
        var g = d.imageSrcSet, h = d.imageSizes, k = "";
        "string" === typeof g && "" !== g ? (k += "[" + g + "]", "string" === typeof h && (k += "[" + h + "]")) : k += "[][]" + a;
        f += "[image]" + k;
      } else
        f += "[" + b + "]" + a;
      e.has(f) || (e.add(f), (d = A(d)) ? z(c, "L", [a, b, d]) : z(c, "L", [a, b]));
    }
  }
}
function qa(a, b) {
  if ("string" === typeof a) {
    var d = y();
    if (d) {
      var c = d.hints, e = "m|" + a;
      if (!c.has(e))
        return c.add(e), (b = A(b)) ? z(d, "m", [a, b]) : z(d, "m", a);
    }
  }
}
function ra(a, b, d) {
  if ("string" === typeof a) {
    var c = y();
    if (c) {
      var e = c.hints, f = "S|" + a;
      if (!e.has(f))
        return e.add(f), (d = A(d)) ? z(c, "S", [a, "string" === typeof b ? b : 0, d]) : "string" === typeof b ? z(c, "S", [a, b]) : z(c, "S", a);
    }
  }
}
function sa(a, b) {
  if ("string" === typeof a) {
    var d = y();
    if (d) {
      var c = d.hints, e = "X|" + a;
      if (!c.has(e))
        return c.add(e), (b = A(b)) ? z(d, "X", [a, b]) : z(d, "X", a);
    }
  }
}
function ta(a, b) {
  if ("string" === typeof a) {
    var d = y();
    if (d) {
      var c = d.hints, e = "M|" + a;
      if (!c.has(e))
        return c.add(e), (b = A(b)) ? z(d, "M", [a, b]) : z(d, "M", a);
    }
  }
}
function A(a) {
  if (null == a)
    return null;
  var b = false, d = {}, c;
  for (c in a)
    null != a[c] && (b = true, d[c] = a[c]);
  return b ? d : null;
}
var va = da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher, wa = new ba.AsyncLocalStorage(), B = Symbol.for("react.element"), xa = Symbol.for("react.fragment"), ya = Symbol.for("react.provider"), za = Symbol.for("react.server_context"), Aa = Symbol.for("react.forward_ref"), Ba = Symbol.for("react.suspense"), Ca = Symbol.for("react.suspense_list"), Da = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), Ea = Symbol.for("react.default_value"), Fa = Symbol.for("react.memo_cache_sentinel"), Ga = Symbol.for("react.postpone"), Ha = Symbol.iterator, D = null;
function Ia(a, b) {
  if (a !== b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    var d = b.parent;
    if (null === a) {
      if (null !== d)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
    } else {
      if (null === d)
        throw Error("The stacks must reach the root at the same time. This is a bug in React.");
      Ia(a, d);
      b.context._currentValue = b.value;
    }
  }
}
function Ja(a) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  null !== a && Ja(a);
}
function Ka(a) {
  var b = a.parent;
  null !== b && Ka(b);
  a.context._currentValue = a.value;
}
function La(a, b) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  if (null === a)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  a.depth === b.depth ? Ia(a, b) : La(a, b);
}
function Ma(a, b) {
  var d = b.parent;
  if (null === d)
    throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
  a.depth === d.depth ? Ia(a, d) : Ma(a, d);
  b.context._currentValue = b.value;
}
function Na(a) {
  var b = D;
  b !== a && (null === b ? Ka(a) : null === a ? Ja(b) : b.depth === a.depth ? Ia(b, a) : b.depth > a.depth ? La(b, a) : Ma(b, a), D = a);
}
function Oa(a, b) {
  var d = a._currentValue;
  a._currentValue = b;
  var c = D;
  return D = a = { parent: c, depth: null === c ? 0 : c.depth + 1, context: a, parentValue: d, value: b };
}
var Pa = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
function Qa() {
}
function Ra(a, b, d) {
  d = a[d];
  void 0 === d ? a.push(b) : d !== b && (b.then(Qa, Qa), b = d);
  switch (b.status) {
    case "fulfilled":
      return b.value;
    case "rejected":
      throw b.reason;
    default:
      if ("string" !== typeof b.status)
        switch (a = b, a.status = "pending", a.then(function(c) {
          if ("pending" === b.status) {
            var e = b;
            e.status = "fulfilled";
            e.value = c;
          }
        }, function(c) {
          if ("pending" === b.status) {
            var e = b;
            e.status = "rejected";
            e.reason = c;
          }
        }), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
      Sa = b;
      throw Pa;
  }
}
var Sa = null;
function Ta() {
  if (null === Sa)
    throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
  var a = Sa;
  Sa = null;
  return a;
}
var E = null, Ua = 0, F = null;
function Va() {
  var a = F;
  F = null;
  return a;
}
function Wa(a) {
  return a._currentValue;
}
var $a = { useMemo: function(a) {
  return a();
}, useCallback: function(a) {
  return a;
}, useDebugValue: function() {
}, useDeferredValue: G, useTransition: G, readContext: Wa, useContext: Wa, useReducer: G, useRef: G, useState: G, useInsertionEffect: G, useLayoutEffect: G, useImperativeHandle: G, useEffect: G, useId: Xa, useSyncExternalStore: G, useCacheRefresh: function() {
  return Ya;
}, useMemoCache: function(a) {
  for (var b = Array(a), d = 0; d < a; d++)
    b[d] = Fa;
  return b;
}, use: Za };
function G() {
  throw Error("This Hook is not supported in Server Components.");
}
function Ya() {
  throw Error("Refreshing the cache is not supported in Server Components.");
}
function Xa() {
  if (null === E)
    throw Error("useId can only be used while React is rendering");
  var a = E.identifierCount++;
  return ":" + E.identifierPrefix + "S" + a.toString(32) + ":";
}
function Za(a) {
  if (null !== a && "object" === typeof a || "function" === typeof a) {
    if ("function" === typeof a.then) {
      var b = Ua;
      Ua += 1;
      null === F && (F = []);
      return Ra(F, a, b);
    }
    if (a.$$typeof === za)
      return a._currentValue;
  }
  throw Error("An unsupported type was passed to use(): " + String(a));
}
function ab() {
  return new AbortController().signal;
}
function bb() {
  var a = y();
  return a ? a.cache : /* @__PURE__ */ new Map();
}
var cb = { getCacheSignal: function() {
  var a = bb(), b = a.get(ab);
  void 0 === b && (b = ab(), a.set(ab, b));
  return b;
}, getCacheForType: function(a) {
  var b = bb(), d = b.get(a);
  void 0 === d && (d = a(), b.set(a, d));
  return d;
} }, db = Array.isArray, eb = Object.getPrototypeOf;
function fb(a) {
  return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(b, d) {
    return d;
  });
}
function gb(a) {
  switch (typeof a) {
    case "string":
      return JSON.stringify(10 >= a.length ? a : a.slice(0, 10) + "...");
    case "object":
      if (db(a))
        return "[...]";
      a = fb(a);
      return "Object" === a ? "{...}" : a;
    case "function":
      return "function";
    default:
      return String(a);
  }
}
function hb(a) {
  if ("string" === typeof a)
    return a;
  switch (a) {
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Aa:
        return hb(a.render);
      case Da:
        return hb(a.type);
      case C:
        var b = a._payload;
        a = a._init;
        try {
          return hb(a(b));
        } catch (d) {
        }
    }
  return "";
}
function I(a, b) {
  var d = fb(a);
  if ("Object" !== d && "Array" !== d)
    return d;
  d = -1;
  var c = 0;
  if (db(a)) {
    var e = "[";
    for (var f = 0; f < a.length; f++) {
      0 < f && (e += ", ");
      var g = a[f];
      g = "object" === typeof g && null !== g ? I(g) : gb(g);
      "" + f === b ? (d = e.length, c = g.length, e += g) : e = 10 > g.length && 40 > e.length + g.length ? e + g : e + "...";
    }
    e += "]";
  } else if (a.$$typeof === B)
    e = "<" + hb(a.type) + "/>";
  else {
    e = "{";
    f = Object.keys(a);
    for (g = 0; g < f.length; g++) {
      0 < g && (e += ", ");
      var h = f[g], k = JSON.stringify(h);
      e += ('"' + h + '"' === k ? h : k) + ": ";
      k = a[h];
      k = "object" === typeof k && null !== k ? I(k) : gb(k);
      h === b ? (d = e.length, c = k.length, e += k) : e = 10 > k.length && 40 > e.length + k.length ? e + k : e + "...";
    }
    e += "}";
  }
  return void 0 === b ? e : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + e + "\n  " + a) : "\n  " + e;
}
var ib = ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, jb = ib.ContextRegistry, J = ca.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
if (!J)
  throw Error('The "react" package in this environment is not configured correctly. The "react-server" condition must be enabled in any environment that runs React Server Components.');
var kb = Object.prototype, K = JSON.stringify, lb = J.TaintRegistryObjects, L = J.TaintRegistryValues, mb = J.TaintRegistryByteLengths, nb = J.TaintRegistryPendingRequests, ob = J.ReactCurrentCache, pb = ib.ReactCurrentDispatcher;
function M(a) {
  throw Error(a);
}
function qb(a) {
  a = a.taintCleanupQueue;
  nb.delete(a);
  for (var b = 0; b < a.length; b++) {
    var d = a[b], c = L.get(d);
    void 0 !== c && (1 === c.count ? L.delete(d) : c.count--);
  }
  a.length = 0;
}
function rb(a) {
  console.error(a);
}
function sb() {
}
function tb(a, b, d, c, e, f) {
  if (null !== ob.current && ob.current !== cb)
    throw Error("Currently React only supports one RSC renderer at a time.");
  va.current = ua;
  ob.current = cb;
  var g = /* @__PURE__ */ new Set(), h = [], k = [];
  nb.add(k);
  var n = /* @__PURE__ */ new Set(), w = {
    status: 0,
    flushScheduled: false,
    fatalError: null,
    destination: null,
    bundlerConfig: b,
    cache: /* @__PURE__ */ new Map(),
    nextChunkId: 0,
    pendingChunks: 0,
    hints: n,
    abortableTasks: g,
    pingedTasks: h,
    completedImportChunks: [],
    completedHintChunks: [],
    completedRegularChunks: [],
    completedErrorChunks: [],
    writtenSymbols: /* @__PURE__ */ new Map(),
    writtenClientReferences: /* @__PURE__ */ new Map(),
    writtenServerReferences: /* @__PURE__ */ new Map(),
    writtenProviders: /* @__PURE__ */ new Map(),
    writtenObjects: /* @__PURE__ */ new WeakMap(),
    identifierPrefix: e || "",
    identifierCount: 1,
    taintCleanupQueue: k,
    onError: void 0 === d ? rb : d,
    onPostpone: void 0 === f ? sb : f,
    toJSON: function(u, H) {
      return ub(w, this, u, H);
    }
  };
  w.pendingChunks++;
  b = vb(c);
  a = wb(w, a, b, g);
  h.push(a);
  return w;
}
var N = null;
function y() {
  if (N)
    return N;
  var a = wa.getStore();
  return a ? a : null;
}
var xb = {};
function yb(a, b) {
  a.pendingChunks++;
  var d = wb(a, null, D, a.abortableTasks);
  switch (b.status) {
    case "fulfilled":
      return d.model = b.value, zb(a, d), d.id;
    case "rejected":
      var c = b.reason;
      "object" === typeof c && null !== c && c.$$typeof === Ga ? (Ab(a, c.message), Bb(a, d.id)) : (c = O(a, c), P(a, d.id, c));
      return d.id;
    default:
      "string" !== typeof b.status && (b.status = "pending", b.then(function(e) {
        "pending" === b.status && (b.status = "fulfilled", b.value = e);
      }, function(e) {
        "pending" === b.status && (b.status = "rejected", b.reason = e);
      }));
  }
  b.then(function(e) {
    d.model = e;
    zb(a, d);
  }, function(e) {
    d.status = 4;
    a.abortableTasks.delete(d);
    e = O(a, e);
    P(a, d.id, e);
    null !== a.destination && Q(a, a.destination);
  });
  return d.id;
}
function z(a, b, d) {
  d = K(d);
  var c = a.nextChunkId++;
  b = "H" + b;
  b = c.toString(16) + ":" + b;
  a.completedHintChunks.push(b + d + "\n");
  Cb(a);
}
function Db(a) {
  if ("fulfilled" === a.status)
    return a.value;
  if ("rejected" === a.status)
    throw a.reason;
  throw a;
}
function Eb(a) {
  switch (a.status) {
    case "fulfilled":
    case "rejected":
      break;
    default:
      "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
        "pending" === a.status && (a.status = "fulfilled", a.value = b);
      }, function(b) {
        "pending" === a.status && (a.status = "rejected", a.reason = b);
      }));
  }
  return { $$typeof: C, _payload: a, _init: Db };
}
function R(a, b, d, c, e, f) {
  if (null !== c && void 0 !== c)
    throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
  if ("function" === typeof b) {
    if (b.$$typeof === t)
      return [B, b, d, e];
    Ua = 0;
    F = f;
    e = b(e);
    return "object" === typeof e && null !== e && "function" === typeof e.then ? "fulfilled" === e.status ? e.value : Eb(e) : e;
  }
  if ("string" === typeof b)
    return [B, b, d, e];
  if ("symbol" === typeof b)
    return b === xa ? e.children : [B, b, d, e];
  if (null != b && "object" === typeof b) {
    if (b.$$typeof === t)
      return [B, b, d, e];
    switch (b.$$typeof) {
      case C:
        var g = b._init;
        b = g(b._payload);
        return R(a, b, d, c, e, f);
      case Aa:
        return a = b.render, Ua = 0, F = f, a(e, void 0);
      case Da:
        return R(a, b.type, d, c, e, f);
      case ya:
        return Oa(b._context, e.value), [B, b, d, { value: e.value, children: e.children, __pop: xb }];
    }
  }
  throw Error("Unsupported Server Component type: " + gb(b));
}
function zb(a, b) {
  var d = a.pingedTasks;
  d.push(b);
  1 === d.length && (a.flushScheduled = null !== a.destination, setImmediate(function() {
    return Fb(a);
  }));
}
function wb(a, b, d, c) {
  var e = { id: a.nextChunkId++, status: 0, model: b, context: d, ping: function() {
    return zb(a, e);
  }, thenableState: null };
  c.add(e);
  return e;
}
function S(a) {
  return "$" + a.toString(16);
}
function Gb(a, b, d) {
  a = K(d);
  return b.toString(16) + ":" + a + "\n";
}
function Hb(a, b, d, c) {
  var e = c.$$async ? c.$$id + "#async" : c.$$id, f = a.writtenClientReferences, g = f.get(e);
  if (void 0 !== g)
    return b[0] === B && "1" === d ? "$L" + g.toString(16) : S(g);
  try {
    var h = a.bundlerConfig, k = c.$$id;
    g = "";
    var n = h[k];
    if (n)
      g = n.name;
    else {
      var w = k.lastIndexOf("#");
      -1 !== w && (g = k.slice(w + 1), n = h[k.slice(0, w)]);
      if (!n)
        throw Error('Could not find the module "' + k + '" in the React Client Manifest. This is probably a bug in the React Server Components bundler.');
    }
    var u = true === c.$$async ? [n.id, n.chunks, g, 1] : [
      n.id,
      n.chunks,
      g
    ];
    a.pendingChunks++;
    var H = a.nextChunkId++, dc = K(u), ec = H.toString(16) + ":I" + dc + "\n";
    a.completedImportChunks.push(ec);
    f.set(e, H);
    return b[0] === B && "1" === d ? "$L" + H.toString(16) : S(H);
  } catch (fc) {
    return a.pendingChunks++, b = a.nextChunkId++, d = O(a, fc), P(a, b, d), S(b);
  }
}
function T(a, b) {
  a.pendingChunks++;
  b = wb(a, b, D, a.abortableTasks);
  Ib(a, b);
  return b.id;
}
function U(a, b, d) {
  if (mb.has(d.byteLength)) {
    var c = L.get(String.fromCharCode.apply(String, new Uint8Array(d.buffer, d.byteOffset, d.byteLength)));
    void 0 !== c && M(c.message);
  }
  a.pendingChunks += 2;
  c = a.nextChunkId++;
  d = new Uint8Array(d.buffer, d.byteOffset, d.byteLength);
  var e = d.byteLength;
  b = c.toString(16) + ":" + b + e.toString(16) + ",";
  a.completedRegularChunks.push(b, d);
  return S(c);
}
var V = false;
function ub(a, b, d, c) {
  switch (c) {
    case B:
      return "$";
  }
  for (; "object" === typeof c && null !== c && (c.$$typeof === B || c.$$typeof === C); )
    try {
      switch (c.$$typeof) {
        case B:
          var e = a.writtenObjects, f = e.get(c);
          if (void 0 !== f) {
            if (-1 === f) {
              var g = T(a, c);
              return S(g);
            }
            if (V === c)
              V = null;
            else
              return S(f);
          } else
            e.set(c, -1);
          var h = c;
          c = R(a, h.type, h.key, h.ref, h.props, null);
          break;
        case C:
          var k = c._init;
          c = k(c._payload);
      }
    } catch (n) {
      d = n === Pa ? Ta() : n;
      if ("object" === typeof d && null !== d) {
        if ("function" === typeof d.then)
          return a.pendingChunks++, a = wb(a, c, D, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Va(), "$L" + a.id.toString(16);
        if (d.$$typeof === Ga)
          return c = d, a.pendingChunks++, d = a.nextChunkId++, Ab(a, c.message), Bb(a, d), "$L" + d.toString(16);
      }
      a.pendingChunks++;
      c = a.nextChunkId++;
      d = O(a, d);
      P(a, c, d);
      return "$L" + c.toString(16);
    }
  if (null === c)
    return null;
  if ("object" === typeof c) {
    e = lb.get(c);
    void 0 !== e && M(e);
    if (c.$$typeof === t)
      return Hb(a, b, d, c);
    b = a.writtenObjects;
    e = b.get(c);
    if ("function" === typeof c.then) {
      if (void 0 !== e)
        if (V === c)
          V = null;
        else
          return "$@" + e.toString(16);
      a = yb(a, c);
      b.set(c, a);
      return "$@" + a.toString(16);
    }
    if (c.$$typeof === ya)
      return c = c._context._globalName, b = a.writtenProviders, d = b.get(d), void 0 === d && (a.pendingChunks++, d = a.nextChunkId++, b.set(c, d), c = Gb(a, d, "$P" + c), a.completedRegularChunks.push(c)), S(d);
    if (c === xb) {
      a = D;
      if (null === a)
        throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      c = a.parentValue;
      a.context._currentValue = c === Ea ? a.context._defaultValue : c;
      D = a.parent;
      return;
    }
    if (void 0 !== e) {
      if (-1 === e)
        return a = T(a, c), S(a);
      if (V === c)
        V = null;
      else
        return S(e);
    } else
      b.set(c, -1);
    if (db(c))
      return c;
    if (c instanceof Map) {
      c = Array.from(c);
      for (d = 0; d < c.length; d++)
        b = c[d][0], "object" === typeof b && null !== b && (e = a.writtenObjects, void 0 === e.get(b) && e.set(b, -1));
      return "$Q" + T(a, c).toString(16);
    }
    if (c instanceof Set) {
      c = Array.from(c);
      for (d = 0; d < c.length; d++)
        b = c[d], "object" === typeof b && null !== b && (e = a.writtenObjects, void 0 === e.get(b) && e.set(b, -1));
      return "$W" + T(a, c).toString(16);
    }
    if (c instanceof ArrayBuffer)
      return U(a, "A", new Uint8Array(c));
    if (c instanceof Int8Array)
      return U(
        a,
        "C",
        c
      );
    if (c instanceof Uint8Array)
      return U(a, "c", c);
    if (c instanceof Uint8ClampedArray)
      return U(a, "U", c);
    if (c instanceof Int16Array)
      return U(a, "S", c);
    if (c instanceof Uint16Array)
      return U(a, "s", c);
    if (c instanceof Int32Array)
      return U(a, "L", c);
    if (c instanceof Uint32Array)
      return U(a, "l", c);
    if (c instanceof Float32Array)
      return U(a, "F", c);
    if (c instanceof Float64Array)
      return U(a, "D", c);
    if (c instanceof BigInt64Array)
      return U(a, "N", c);
    if (c instanceof BigUint64Array)
      return U(a, "m", c);
    if (c instanceof DataView)
      return U(
        a,
        "V",
        c
      );
    null === c || "object" !== typeof c ? a = null : (a = Ha && c[Ha] || c["@@iterator"], a = "function" === typeof a ? a : null);
    if (a)
      return Array.from(c);
    a = eb(c);
    if (a !== kb && (null === a || null !== eb(a)))
      throw Error("Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.");
    return c;
  }
  if ("string" === typeof c) {
    e = L.get(c);
    void 0 !== e && M(e.message);
    if ("Z" === c[c.length - 1] && b[d] instanceof Date)
      return "$D" + c;
    if (1024 <= c.length)
      return a.pendingChunks += 2, d = a.nextChunkId++, b = "string" === typeof c ? Buffer.byteLength(c, "utf8") : c.byteLength, b = d.toString(16) + ":T" + b.toString(16) + ",", a.completedRegularChunks.push(b, c), S(d);
    a = "$" === c[0] ? "$" + c : c;
    return a;
  }
  if ("boolean" === typeof c)
    return c;
  if ("number" === typeof c)
    return a = c, Number.isFinite(a) ? 0 === a && -Infinity === 1 / a ? "$-0" : a : Infinity === a ? "$Infinity" : -Infinity === a ? "$-Infinity" : "$NaN";
  if ("undefined" === typeof c)
    return "$undefined";
  if ("function" === typeof c) {
    e = lb.get(c);
    void 0 !== e && M(e);
    if (c.$$typeof === t)
      return Hb(
        a,
        b,
        d,
        c
      );
    if (c.$$typeof === v)
      return d = a.writtenServerReferences, b = d.get(c), void 0 !== b ? a = "$F" + b.toString(16) : (b = c.$$bound, b = { id: c.$$id, bound: b ? Promise.resolve(b) : null }, a = T(a, b), d.set(c, a), a = "$F" + a.toString(16)), a;
    if (/^on[A-Z]/.test(d))
      throw Error("Event handlers cannot be passed to Client Component props." + I(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
    throw Error('Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".' + I(b, d));
  }
  if ("symbol" === typeof c) {
    e = a.writtenSymbols;
    f = e.get(c);
    if (void 0 !== f)
      return S(f);
    f = c.description;
    if (Symbol.for(f) !== c)
      throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + I(b, d));
    a.pendingChunks++;
    d = a.nextChunkId++;
    b = Gb(a, d, "$S" + f);
    a.completedImportChunks.push(b);
    e.set(c, d);
    return S(d);
  }
  if ("bigint" === typeof c)
    return a = L.get(c), void 0 !== a && M(a.message), "$n" + c.toString(10);
  throw Error("Type " + typeof c + " is not supported in Client Component props." + I(b, d));
}
function Ab(a, b) {
  a = a.onPostpone;
  a(b);
}
function O(a, b) {
  a = a.onError;
  b = a(b);
  if (null != b && "string" !== typeof b)
    throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
  return b || "";
}
function Jb(a, b) {
  qb(a);
  null !== a.destination ? (a.status = 2, a.destination.destroy(b)) : (a.status = 1, a.fatalError = b);
}
function Bb(a, b) {
  b = b.toString(16) + ":P\n";
  a.completedErrorChunks.push(b);
}
function P(a, b, d) {
  d = { digest: d };
  b = b.toString(16) + ":E" + K(d) + "\n";
  a.completedErrorChunks.push(b);
}
function Ib(a, b) {
  if (0 === b.status) {
    Na(b.context);
    try {
      var d = b.model;
      if ("object" === typeof d && null !== d && d.$$typeof === B) {
        a.writtenObjects.set(d, b.id);
        var c = d, e = b.thenableState;
        b.model = d;
        d = R(a, c.type, c.key, c.ref, c.props, e);
        for (b.thenableState = null; "object" === typeof d && null !== d && d.$$typeof === B; )
          a.writtenObjects.set(d, b.id), c = d, b.model = d, d = R(a, c.type, c.key, c.ref, c.props, null);
      }
      "object" === typeof d && null !== d && a.writtenObjects.set(d, b.id);
      var f = b.id;
      V = d;
      var g = K(d, a.toJSON), h = f.toString(16) + ":" + g + "\n";
      a.completedRegularChunks.push(h);
      a.abortableTasks.delete(b);
      b.status = 1;
    } catch (k) {
      f = k === Pa ? Ta() : k;
      if ("object" === typeof f && null !== f) {
        if ("function" === typeof f.then) {
          a = b.ping;
          f.then(a, a);
          b.thenableState = Va();
          return;
        }
        if (f.$$typeof === Ga) {
          a.abortableTasks.delete(b);
          b.status = 4;
          Ab(a, f.message);
          Bb(a, b.id);
          return;
        }
      }
      a.abortableTasks.delete(b);
      b.status = 4;
      f = O(a, f);
      P(a, b.id, f);
    }
  }
}
function Fb(a) {
  var b = pb.current;
  pb.current = $a;
  var d = N;
  E = N = a;
  try {
    var c = a.pingedTasks;
    a.pingedTasks = [];
    for (var e = 0; e < c.length; e++)
      Ib(a, c[e]);
    null !== a.destination && Q(a, a.destination);
  } catch (f) {
    O(a, f), Jb(a, f);
  } finally {
    pb.current = b, E = null, N = d;
  }
}
function Q(a, b) {
  l = new Uint8Array(2048);
  m = 0;
  p = true;
  try {
    for (var d = a.completedImportChunks, c = 0; c < d.length; c++)
      if (a.pendingChunks--, !r(b, d[c])) {
        a.destination = null;
        c++;
        break;
      }
    d.splice(0, c);
    var e = a.completedHintChunks;
    for (c = 0; c < e.length; c++)
      if (!r(b, e[c])) {
        a.destination = null;
        c++;
        break;
      }
    e.splice(0, c);
    var f = a.completedRegularChunks;
    for (c = 0; c < f.length; c++)
      if (a.pendingChunks--, !r(b, f[c])) {
        a.destination = null;
        c++;
        break;
      }
    f.splice(0, c);
    var g = a.completedErrorChunks;
    for (c = 0; c < g.length; c++)
      if (a.pendingChunks--, !r(b, g[c])) {
        a.destination = null;
        c++;
        break;
      }
    g.splice(0, c);
  } finally {
    a.flushScheduled = false, l && 0 < m && b.write(l.subarray(0, m)), l = null, m = 0, p = true;
  }
  "function" === typeof b.flush && b.flush();
  0 === a.pendingChunks && (qb(a), b.end());
}
function Kb(a) {
  a.flushScheduled = null !== a.destination;
  setImmediate(function() {
    return wa.run(a, Fb, a);
  });
}
function Cb(a) {
  if (false === a.flushScheduled && 0 === a.pingedTasks.length && null !== a.destination) {
    var b = a.destination;
    a.flushScheduled = true;
    setImmediate(function() {
      return Q(a, b);
    });
  }
}
function Lb(a, b) {
  if (1 === a.status)
    a.status = 2, b.destroy(a.fatalError);
  else if (2 !== a.status && null === a.destination) {
    a.destination = b;
    try {
      Q(a, b);
    } catch (d) {
      O(a, d), Jb(a, d);
    }
  }
}
function Mb(a, b) {
  try {
    var d = a.abortableTasks;
    if (0 < d.size) {
      a.pendingChunks++;
      var c = a.nextChunkId++;
      if ("object" === typeof b && null !== b && b.$$typeof === Ga)
        Ab(a, b.message), Bb(a, c, b);
      else {
        var e = void 0 === b ? Error("The render was aborted by the server without a reason.") : b, f = O(a, e);
        P(a, c, f, e);
      }
      d.forEach(function(g) {
        g.status = 3;
        var h = S(c);
        g = Gb(a, g.id, h);
        a.completedErrorChunks.push(g);
      });
      d.clear();
    }
    null !== a.destination && Q(a, a.destination);
  } catch (g) {
    O(a, g), Jb(a, g);
  }
}
function vb(a) {
  if (a) {
    var b = D;
    Na(null);
    for (var d = 0; d < a.length; d++) {
      var c = a[d], e = c[0];
      c = c[1];
      if (!jb[e]) {
        var f = { $$typeof: za, _currentValue: Ea, _currentValue2: Ea, _defaultValue: Ea, _threadCount: 0, Provider: null, Consumer: null, _globalName: e };
        f.Provider = { $$typeof: ya, _context: f };
        jb[e] = f;
      }
      Oa(jb[e], c);
    }
    a = D;
    Na(b);
    return a;
  }
  return null;
}
function Nb(a, b) {
  var d = "", c = a[b];
  if (c)
    d = c.name;
  else {
    var e = b.lastIndexOf("#");
    -1 !== e && (d = b.slice(e + 1), c = a[b.slice(0, e)]);
    if (!c)
      throw Error('Could not find the module "' + b + '" in the React Server Manifest. This is probably a bug in the React Server Components bundler.');
  }
  return [c.id, c.chunks, d];
}
var Ob = /* @__PURE__ */ new Map();
function Pb(a) {
  var b = __webpack_require__(a);
  if ("function" !== typeof b.then || "fulfilled" === b.status)
    return null;
  b.then(function(d) {
    b.status = "fulfilled";
    b.value = d;
  }, function(d) {
    b.status = "rejected";
    b.reason = d;
  });
  return b;
}
function Qb() {
}
function Rb(a) {
  for (var b = a[1], d = [], c = 0; c < b.length; ) {
    var e = b[c++];
    b[c++];
    var f = Ob.get(e);
    if (void 0 === f) {
      f = __webpack_require__.e(e);
      d.push(f);
      var g = Ob.set.bind(Ob, e, null);
      f.then(g, Qb);
      Ob.set(e, f);
    } else
      null !== f && d.push(f);
  }
  return 4 === a.length ? 0 === d.length ? Pb(a[0]) : Promise.all(d).then(function() {
    return Pb(a[0]);
  }) : 0 < d.length ? Promise.all(d) : null;
}
function W(a) {
  var b = __webpack_require__(a[0]);
  if (4 === a.length && "function" === typeof b.then)
    if ("fulfilled" === b.status)
      b = b.value;
    else
      throw b.reason;
  return "*" === a[2] ? b : "" === a[2] ? b.__esModule ? b.default : b : b[a[2]];
}
function Sb(a, b, d, c) {
  this.status = a;
  this.value = b;
  this.reason = d;
  this._response = c;
}
Sb.prototype = Object.create(Promise.prototype);
Sb.prototype.then = function(a, b) {
  switch (this.status) {
    case "resolved_model":
      Tb(this);
  }
  switch (this.status) {
    case "fulfilled":
      a(this.value);
      break;
    case "pending":
    case "blocked":
      a && (null === this.value && (this.value = []), this.value.push(a));
      b && (null === this.reason && (this.reason = []), this.reason.push(b));
      break;
    default:
      b(this.reason);
  }
};
function Ub(a, b) {
  for (var d = 0; d < a.length; d++)
    (0, a[d])(b);
}
function Vb(a, b) {
  if ("pending" === a.status || "blocked" === a.status) {
    var d = a.reason;
    a.status = "rejected";
    a.reason = b;
    null !== d && Ub(d, b);
  }
}
function Wb(a, b, d, c, e, f) {
  var g = Nb(a._bundlerConfig, b);
  a = Rb(g);
  if (d)
    d = Promise.all([d, a]).then(function(h) {
      h = h[0];
      var k = W(g);
      return k.bind.apply(k, [null].concat(h));
    });
  else if (a)
    d = Promise.resolve(a).then(function() {
      return W(g);
    });
  else
    return W(g);
  d.then(Xb(c, e, f), Yb(c));
  return null;
}
var X = null, Y = null;
function Tb(a) {
  var b = X, d = Y;
  X = a;
  Y = null;
  try {
    var c = JSON.parse(a.value, a._response._fromJSON);
    null !== Y && 0 < Y.deps ? (Y.value = c, a.status = "blocked", a.value = null, a.reason = null) : (a.status = "fulfilled", a.value = c);
  } catch (e) {
    a.status = "rejected", a.reason = e;
  } finally {
    X = b, Y = d;
  }
}
function Zb(a, b) {
  a._chunks.forEach(function(d) {
    "pending" === d.status && Vb(d, b);
  });
}
function Z(a, b) {
  var d = a._chunks, c = d.get(b);
  c || (c = a._formData.get(a._prefix + b), c = null != c ? new Sb("resolved_model", c, null, a) : new Sb("pending", null, null, a), d.set(b, c));
  return c;
}
function Xb(a, b, d) {
  if (Y) {
    var c = Y;
    c.deps++;
  } else
    c = Y = { deps: 1, value: null };
  return function(e) {
    b[d] = e;
    c.deps--;
    0 === c.deps && "blocked" === a.status && (e = a.value, a.status = "fulfilled", a.value = c.value, null !== e && Ub(e, c.value));
  };
}
function Yb(a) {
  return function(b) {
    return Vb(a, b);
  };
}
function $b(a, b) {
  a = Z(a, b);
  "resolved_model" === a.status && Tb(a);
  if ("fulfilled" !== a.status)
    throw a.reason;
  return a.value;
}
function ac(a, b, d, c) {
  if ("$" === c[0])
    switch (c[1]) {
      case "$":
        return c.slice(1);
      case "@":
        return b = parseInt(c.slice(2), 16), Z(a, b);
      case "S":
        return Symbol.for(c.slice(2));
      case "F":
        return c = parseInt(c.slice(2), 16), c = $b(a, c), Wb(a, c.id, c.bound, X, b, d);
      case "Q":
        return b = parseInt(c.slice(2), 16), a = $b(a, b), new Map(a);
      case "W":
        return b = parseInt(c.slice(2), 16), a = $b(a, b), new Set(a);
      case "K":
        b = c.slice(2);
        var e = a._prefix + b + "_", f = new FormData();
        a._formData.forEach(function(g, h) {
          h.startsWith(e) && f.append(
            h.slice(e.length),
            g
          );
        });
        return f;
      case "I":
        return Infinity;
      case "-":
        return "$-0" === c ? -0 : -Infinity;
      case "N":
        return NaN;
      case "u":
        return;
      case "D":
        return new Date(Date.parse(c.slice(2)));
      case "n":
        return BigInt(c.slice(2));
      default:
        c = parseInt(c.slice(1), 16);
        a = Z(a, c);
        switch (a.status) {
          case "resolved_model":
            Tb(a);
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "pending":
          case "blocked":
            return c = X, a.then(Xb(c, b, d), Yb(c)), null;
          default:
            throw a.reason;
        }
    }
  return c;
}
function bc(a, b) {
  var d = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : new FormData(), c = /* @__PURE__ */ new Map(), e = { _bundlerConfig: a, _prefix: b, _formData: d, _chunks: c, _fromJSON: function(f, g) {
    return "string" === typeof g ? ac(e, this, f, g) : g;
  } };
  return e;
}
function cc(a, b, d) {
  a._formData.append(b, d);
  var c = a._prefix;
  if (b.startsWith(c) && (a = a._chunks, b = +b.slice(c.length), (b = a.get(b)) && "pending" === b.status && (c = b.value, a = b.reason, b.status = "resolved_model", b.value = d, null !== c)))
    switch (Tb(b), b.status) {
      case "fulfilled":
        Ub(c, b.value);
        break;
      case "pending":
      case "blocked":
        b.value = c;
        b.reason = a;
        break;
      case "rejected":
        a && Ub(a, b.reason);
    }
}
function gc(a) {
  Zb(a, Error("Connection closed."));
}
function hc(a, b, d) {
  var c = Nb(a, b);
  a = Rb(c);
  return d ? Promise.all([d, a]).then(function(e) {
    e = e[0];
    var f = W(c);
    return f.bind.apply(f, [null].concat(e));
  }) : a ? Promise.resolve(a).then(function() {
    return W(c);
  }) : Promise.resolve(W(c));
}
function ic(a, b, d) {
  a = bc(b, d, a);
  gc(a);
  a = Z(a, 0);
  a.then(function() {
  });
  if ("fulfilled" !== a.status)
    throw a.reason;
  return a.value;
}
function jc(a, b) {
  return function() {
    return Lb(b, a);
  };
}
function kc(a, b) {
  return function() {
    a.destination = null;
    Mb(a, Error(b));
  };
}
exports.createClientModuleProxy = function(a) {
  a = x({}, a, false);
  return new Proxy(a, ma);
};
exports.decodeAction = function(a, b) {
  var d = new FormData(), c = null;
  a.forEach(function(e, f) {
    f.startsWith("$ACTION_") ? f.startsWith("$ACTION_REF_") ? (e = "$ACTION_" + f.slice(12) + ":", e = ic(a, b, e), c = hc(b, e.id, e.bound)) : f.startsWith("$ACTION_ID_") && (e = f.slice(11), c = hc(b, e, null)) : d.append(f, e);
  });
  return null === c ? null : c.then(function(e) {
    return e.bind(null, d);
  });
};
exports.decodeFormState = function(a, b, d) {
  var c = b.get("$ACTION_KEY");
  if ("string" !== typeof c)
    return Promise.resolve(null);
  var e = null;
  b.forEach(function(g, h) {
    h.startsWith("$ACTION_REF_") && (g = "$ACTION_" + h.slice(12) + ":", e = ic(b, d, g));
  });
  if (null === e)
    return Promise.resolve(null);
  var f = e.id;
  return Promise.resolve(e.bound).then(function(g) {
    return null === g ? null : [a, c, f, g.length - 1];
  });
};
exports.decodeReply = function(a, b) {
  if ("string" === typeof a) {
    var d = new FormData();
    d.append("0", a);
    a = d;
  }
  a = bc(b, "", a);
  b = Z(a, 0);
  gc(a);
  return b;
};
exports.decodeReplyFromBusboy = function(a, b) {
  var d = bc(b, ""), c = 0, e = [];
  a.on("field", function(f, g) {
    0 < c ? e.push(f, g) : cc(d, f, g);
  });
  a.on("file", function(f, g, h) {
    var k = h.filename, n = h.mimeType;
    if ("base64" === h.encoding.toLowerCase())
      throw Error("React doesn't accept base64 encoded file uploads because we don't expect form data passed from a browser to ever encode data that way. If that's the wrong assumption, we can easily fix it.");
    c++;
    var w = [];
    g.on("data", function(u) {
      w.push(u);
    });
    g.on("end", function() {
      var u = new Blob(w, { type: n });
      d._formData.append(f, u, k);
      c--;
      if (0 === c) {
        for (u = 0; u < e.length; u += 2)
          cc(d, e[u], e[u + 1]);
        e.length = 0;
      }
    });
  });
  a.on("finish", function() {
    gc(d);
  });
  a.on("error", function(f) {
    Zb(d, f);
  });
  return Z(d, 0);
};
exports.registerClientReference = function(a, b, d) {
  return x(a, b + "#" + d, false);
};
exports.registerServerReference = function(a, b, d) {
  return Object.defineProperties(a, { $$typeof: { value: v }, $$id: { value: null === d ? b : b + "#" + d }, $$bound: { value: null }, bind: { value: ia } });
};
exports.renderToPipeableStream = function(a, b, d) {
  var c = tb(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0, d ? d.onPostpone : void 0), e = false;
  Kb(c);
  return { pipe: function(f) {
    if (e)
      throw Error("React currently only supports piping to one writable stream.");
    e = true;
    Lb(c, f);
    f.on("drain", jc(f, c));
    f.on("error", kc(c, "The destination stream errored while writing data."));
    f.on("close", kc(c, "The destination stream closed early."));
    return f;
  }, abort: function(f) {
    Mb(c, f);
  } };
};


/***/ }),

/***/ 6204:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
  module.exports = __webpack_require__(2824);
} else {}


/***/ }),

/***/ 2647:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

var f = __webpack_require__(6302), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
__webpack_unused_export__ = l;
exports.jsx = q;
exports.jsxs = q;


/***/ }),

/***/ 5344:
/***/ ((__unused_webpack_module, exports) => {


var l = Object.assign, n = { current: null };
function p() {
  return /* @__PURE__ */ new Map();
}
if ("function" === typeof fetch) {
  var q = fetch, r = function(a, b) {
    var c = n.current;
    if (!c || b && b.signal && b.signal !== c.getCacheSignal())
      return q(a, b);
    if ("string" !== typeof a || b) {
      var d = "string" === typeof a || a instanceof URL ? new Request(a, b) : a;
      if ("GET" !== d.method && "HEAD" !== d.method || d.keepalive)
        return q(a, b);
      var e = JSON.stringify([d.method, Array.from(d.headers.entries()), d.mode, d.redirect, d.credentials, d.referrer, d.referrerPolicy, d.integrity]);
      d = d.url;
    } else
      e = '["GET",[],null,"follow",null,null,null,null]', d = a;
    var f = c.getCacheForType(p);
    c = f.get(d);
    if (void 0 === c)
      a = q(a, b), f.set(d, [e, a]);
    else {
      d = 0;
      for (f = c.length; d < f; d += 2) {
        var h = c[d + 1];
        if (c[d] === e)
          return a = h, a.then(function(g) {
            return g.clone();
          });
      }
      a = q(a, b);
      c.push(e, a);
    }
    return a.then(function(g) {
      return g.clone();
    });
  };
  l(r, q);
  try {
    fetch = r;
  } catch (a) {
    try {
      globalThis.fetch = r;
    } catch (b) {
      console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
    }
  }
}
var t = { current: null }, u = { current: null }, v = {}, w = { ReactCurrentDispatcher: t, ReactCurrentOwner: u, ContextRegistry: v }, x = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), B = { ReactCurrentCache: n, TaintRegistryObjects: x, TaintRegistryValues: y, TaintRegistryByteLengths: z, TaintRegistryPendingRequests: A };
function C(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = Object.getPrototypeOf, E = B.TaintRegistryObjects, F = B.TaintRegistryValues, G = B.TaintRegistryByteLengths, aa = B.TaintRegistryPendingRequests, ba = D(Uint32Array.prototype).constructor;
function ca(a) {
  var b = F.get(a);
  void 0 !== b && (aa.forEach(function(c) {
    c.push(a);
    b.count++;
  }), 1 === b.count ? F.delete(a) : b.count--);
}
var H = "function" === typeof FinalizationRegistry ? new FinalizationRegistry(ca) : null, I = Symbol.for("react.element"), da = Symbol.for("react.portal"), ea = Symbol.for("react.fragment"), fa = Symbol.for("react.strict_mode"), ha = Symbol.for("react.profiler"), ia = Symbol.for("react.provider"), ja = Symbol.for("react.server_context"), ka = Symbol.for("react.forward_ref"), la = Symbol.for("react.suspense"), ma = Symbol.for("react.suspense_list"), na = Symbol.for("react.memo"), oa = Symbol.for("react.lazy"), pa = Symbol.for("react.debug_trace_mode"), J = Symbol.for("react.default_value"), qa = Symbol.for("react.postpone"), K = Symbol.iterator;
function ra(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = K && a[K] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var L = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, M = {};
function N(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = M;
  this.updater = c || L;
}
N.prototype.isReactComponent = {};
N.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(C(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
N.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function O() {
}
O.prototype = N.prototype;
function P(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = M;
  this.updater = c || L;
}
var Q = P.prototype = new O();
Q.constructor = P;
l(Q, N.prototype);
Q.isPureReactComponent = true;
var R = Array.isArray, S = Object.prototype.hasOwnProperty, T = { key: true, ref: true, __self: true, __source: true };
function sa(a, b) {
  return { $$typeof: I, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function U(a) {
  return "object" === typeof a && null !== a && a.$$typeof === I;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(c) {
    return b[c];
  });
}
var V = /\/+/g;
function W(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function X(a, b, c, d, e) {
  var f = typeof a;
  if ("undefined" === f || "boolean" === f)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (f) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case I:
          case da:
            h = true;
        }
    }
  if (h)
    return h = a, e = e(h), a = "" === d ? "." + W(h, 0) : d, R(e) ? (c = "", null != a && (c = a.replace(V, "$&/") + "/"), X(e, b, c, "", function(m) {
      return m;
    })) : null != e && (U(e) && (e = sa(e, c + (!e.key || h && h.key === e.key ? "" : ("" + e.key).replace(V, "$&/") + "/") + a)), b.push(e)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (R(a))
    for (var g = 0; g < a.length; g++) {
      f = a[g];
      var k = d + W(f, g);
      h += X(f, b, c, k, e);
    }
  else if (k = ra(a), "function" === typeof k)
    for (a = k.call(a), g = 0; !(f = a.next()).done; )
      f = f.value, k = d + W(f, g++), h += X(f, b, c, k, e);
  else if ("object" === f)
    throw b = String(a), Error(C(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function Y(a, b, c) {
  if (null == a)
    return a;
  var d = [], e = 0;
  X(a, d, "", "", function(f) {
    return b.call(c, f, e++);
  });
  return d;
}
function ta(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(c) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = c;
    }, function(c) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = c;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
function ua() {
  return /* @__PURE__ */ new WeakMap();
}
function Z() {
  return { s: 0, v: void 0, o: null, p: null };
}
exports.Children = { map: Y, forEach: function(a, b, c) {
  Y(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  Y(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return Y(a, function(b) {
    return b;
  }) || [];
}, only: function(a) {
  if (!U(a))
    throw Error(C(143));
  return a;
} };
exports.Fragment = ea;
exports.Profiler = ha;
exports.StrictMode = fa;
exports.Suspense = la;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w;
exports.__SECRET_SERVER_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B;
exports.cache = function(a) {
  return function() {
    var b = n.current;
    if (!b)
      return a.apply(null, arguments);
    var c = b.getCacheForType(ua);
    b = c.get(a);
    void 0 === b && (b = Z(), c.set(a, b));
    c = 0;
    for (var d = arguments.length; c < d; c++) {
      var e = arguments[c];
      if ("function" === typeof e || "object" === typeof e && null !== e) {
        var f = b.o;
        null === f && (b.o = f = /* @__PURE__ */ new WeakMap());
        b = f.get(e);
        void 0 === b && (b = Z(), f.set(e, b));
      } else
        f = b.p, null === f && (b.p = f = /* @__PURE__ */ new Map()), b = f.get(e), void 0 === b && (b = Z(), f.set(e, b));
    }
    if (1 === b.s)
      return b.v;
    if (2 === b.s)
      throw b.v;
    try {
      var h = a.apply(
        null,
        arguments
      );
      c = b;
      c.s = 1;
      return c.v = h;
    } catch (g) {
      throw h = b, h.s = 2, h.v = g, g;
    }
  };
};
exports.cloneElement = function(a, b, c) {
  if (null === a || void 0 === a)
    throw Error(C(267, a));
  var d = l({}, a.props), e = a.key, f = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (f = b.ref, h = u.current);
    void 0 !== b.key && (e = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (k in b)
      S.call(b, k) && !T.hasOwnProperty(k) && (d[k] = void 0 === b[k] && void 0 !== g ? g[k] : b[k]);
  }
  var k = arguments.length - 2;
  if (1 === k)
    d.children = c;
  else if (1 < k) {
    g = Array(k);
    for (var m = 0; m < k; m++)
      g[m] = arguments[m + 2];
    d.children = g;
  }
  return {
    $$typeof: I,
    type: a.type,
    key: e,
    ref: f,
    props: d,
    _owner: h
  };
};
exports.createElement = function(a, b, c) {
  var d, e = {}, f = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (f = "" + b.key), b)
      S.call(b, d) && !T.hasOwnProperty(d) && (e[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    e.children = c;
  else if (1 < g) {
    for (var k = Array(g), m = 0; m < g; m++)
      k[m] = arguments[m + 2];
    e.children = k;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === e[d] && (e[d] = g[d]);
  return { $$typeof: I, type: a, key: f, ref: h, props: e, _owner: u.current };
};
exports.createRef = function() {
  return { current: null };
};
exports.createServerContext = function(a, b) {
  var c = true;
  if (!v[a]) {
    c = false;
    var d = { $$typeof: ja, _currentValue: b, _currentValue2: b, _defaultValue: b, _threadCount: 0, Provider: null, Consumer: null, _globalName: a };
    d.Provider = { $$typeof: ia, _context: d };
    v[a] = d;
  }
  d = v[a];
  if (d._defaultValue === J)
    d._defaultValue = b, d._currentValue === J && (d._currentValue = b), d._currentValue2 === J && (d._currentValue2 = b);
  else if (c)
    throw Error(C(429, a));
  return d;
};
exports.experimental_taintObjectReference = function(a, b) {
  a = "" + (a || "A tainted value was attempted to be serialized to a Client Component or Action closure. This would leak it to the client.");
  if ("string" === typeof b || "bigint" === typeof b)
    throw Error(C(496));
  if (null === b || "object" !== typeof b && "function" !== typeof b)
    throw Error(C(497));
  E.set(b, a);
};
exports.experimental_taintUniqueValue = function(a, b, c) {
  a = "" + (a || "A tainted value was attempted to be serialized to a Client Component or Action closure. This would leak it to the client.");
  if (null === b || "object" !== typeof b && "function" !== typeof b)
    throw Error(C(493));
  if ("string" !== typeof c && "bigint" !== typeof c)
    if (c instanceof ba || c instanceof DataView)
      G.add(c.byteLength), c = String.fromCharCode.apply(String, new Uint8Array(c.buffer, c.byteOffset, c.byteLength));
    else {
      a = null === c ? "null" : typeof c;
      if ("object" === a || "function" === a)
        throw Error(C(494));
      throw Error(C(495, a));
    }
  var d = F.get(c);
  void 0 === d ? F.set(c, { message: a, count: 1 }) : d.count++;
  null !== H && H.register(b, c);
};
exports.forwardRef = function(a) {
  return { $$typeof: ka, render: a };
};
exports.isValidElement = U;
exports.lazy = function(a) {
  return { $$typeof: oa, _payload: { _status: -1, _result: a }, _init: ta };
};
exports.memo = function(a, b) {
  return { $$typeof: na, type: a, compare: void 0 === b ? null : b };
};
exports.startTransition = function(a) {
  a();
};
exports.unstable_DebugTracingMode = pa;
exports.unstable_SuspenseList = ma;
exports.unstable_getCacheForType = function(a) {
  var b = n.current;
  return b ? b.getCacheForType(a) : a();
};
exports.unstable_getCacheSignal = function() {
  var a = n.current;
  if (!a) {
    a = new AbortController();
    var b = Error(C(455));
    a.abort(b);
    return a.signal;
  }
  return a.getCacheSignal();
};
exports.unstable_postpone = function(a) {
  a = Error(a);
  a.$$typeof = qa;
  throw a;
};
exports.use = function(a) {
  return t.current.use(a);
};
exports.useCallback = function(a, b) {
  return t.current.useCallback(a, b);
};
exports.useContext = function(a) {
  return t.current.useContext(a);
};
exports.useDebugValue = function() {
};
exports.useId = function() {
  return t.current.useId();
};
exports.useMemo = function(a, b) {
  return t.current.useMemo(a, b);
};
exports.version = "18.3.0-experimental-6b3834a45-20231110";


/***/ }),

/***/ 5455:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
  module.exports = __webpack_require__(2647);
} else {}


/***/ }),

/***/ 6302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


if (true) {
  module.exports = __webpack_require__(5344);
} else {}


/***/ }),

/***/ 9536:
/***/ ((module) => {


var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value2);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key] = value2;
    }
  });
  return cookie;
}
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      input = input.headers["set-cookie"];
    } else {
      var sch = input.headers[Object.keys(input.headers).find(function(key) {
        return key.toLowerCase() === "set-cookie";
      })];
      if (!sch && input.headers.cookie && !options.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
module.exports = parse;
module.exports.parse = parse;
module.exports.parseString = parseString;
module.exports.splitCookiesString = splitCookiesString;


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var util = __webpack_require__(3837);
var Transform = (__webpack_require__(2781).Transform);
util.inherits(SliceStream, Transform);
function SliceStream(start, end) {
  if (!(this instanceof SliceStream)) {
    return new SliceStream();
  }
  Transform.call(this);
  this._start = start || 0;
  this._end = end || Infinity;
  this._offset = 0;
  this._state = 0;
  this._emitUp = false;
  this._emitDown = false;
}
SliceStream.prototype._transform = function(chunk, encoding, done) {
  this._offset += chunk.length;
  if (!this._emitUp && this._offset >= this._start) {
    this._emitUp = true;
    var start = chunk.length - (this._offset - this._start);
    if (this._offset > this._end) {
      var end = chunk.length - (this._offset - this._end);
      this._emitDown = true;
      this.push(chunk.slice(start, end));
    } else {
      this.push(chunk.slice(start, chunk.length));
    }
    return done();
  }
  if (this._emitUp && !this._emitDown) {
    if (this._offset >= this._end) {
      this._emitDown = true;
      this.push(chunk.slice(0, chunk.length - (this._offset - this._end)));
    } else {
      this.push(chunk);
    }
    return done();
  }
  return done();
};
exports.slice = function(start, end) {
  return new SliceStream(start, end);
};


/***/ }),

/***/ 852:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("async_hooks");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("fs");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("https");

/***/ }),

/***/ 6005:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:crypto");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:fs");

/***/ }),

/***/ 3977:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:fs/promises");

/***/ }),

/***/ 612:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:os");

/***/ }),

/***/ 9411:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:path");

/***/ }),

/***/ 4492:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:stream");

/***/ }),

/***/ 7261:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("node:util");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("stream");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("zlib");

/***/ }),

/***/ 108:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var webEncoding = __webpack_require__(8265);
var webStream = __webpack_require__(2356);

/**
 * @implements {globalThis.Blob}
 */
const WebBlob = class Blob {
  /**
   * @param {BlobPart[]} [init]
   * @param {BlobPropertyBag} [options]
   */
  constructor(init = [], options = {}) {
    /** @type {Uint8Array[]} */
    const parts = [];

    let size = 0;
    for (const part of init) {
      if (typeof part === "string") {
        const bytes = new webEncoding.TextEncoder().encode(part);
        parts.push(bytes);
        size += bytes.byteLength;
      } else if (part instanceof WebBlob) {
        size += part.size;
        // @ts-ignore - `_parts` is marked private so TS will complain about
        // accessing it.
        parts.push(...part._parts);
      } else if (part instanceof ArrayBuffer) {
        parts.push(new Uint8Array(part));
        size += part.byteLength;
      } else if (part instanceof Uint8Array) {
        parts.push(part);
        size += part.byteLength;
      } else if (ArrayBuffer.isView(part)) {
        const { buffer, byteOffset, byteLength } = part;
        parts.push(new Uint8Array(buffer, byteOffset, byteLength));
        size += byteLength;
      } else {
        const bytes = new webEncoding.TextEncoder().encode(String(part));
        parts.push(bytes);
        size += bytes.byteLength;
      }
    }

    /** @private */
    this._size = size;
    /** @private */
    this._type = readType(options.type);
    /** @private */
    this._parts = parts;

    Object.defineProperties(this, {
      _size: { enumerable: false },
      _type: { enumerable: false },
      _parts: { enumerable: false },
    });
  }

  /**
   * A string indicating the MIME type of the data contained in the Blob.
   * If the type is unknown, this string is empty.
   * @type {string}
   */
  get type() {
    return this._type
  }
  /**
   * The size, in bytes, of the data contained in the Blob object.
   * @type {number}
   */
  get size() {
    return this._size
  }

  /**
   * Returns a new Blob object containing the data in the specified range of
   * bytes of the blob on which it's called.
   * @param {number} [start=0] - An index into the Blob indicating the first
   * byte to include in the new Blob. If you specify a negative value, it's
   * treated as an offset from the end of the Blob toward the beginning. For
   * example, `-10` would be the 10th from last byte in the Blob. The default
   * value is `0`. If you specify a value for start that is larger than the
   * size of the source Blob, the returned Blob has size 0 and contains no
   * data.
   * @param {number} [end] - An index into the `Blob` indicating the first byte
   *  that will *not* be included in the new `Blob` (i.e. the byte exactly at
   * this index is not included). If you specify a negative value, it's treated
   * as an offset from the end of the Blob toward the beginning. For example,
   * `-10` would be the 10th from last byte in the `Blob`. The default value is
   * size.
   * @param {string} [type] - The content type to assign to the new Blob;
   * this will be the value of its type property. The default value is an empty
   * string.
   * @returns {Blob}
   */
  slice(start = 0, end = this.size, type = "") {
    const { size, _parts } = this;
    let offset = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);

    let limit = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(limit - offset, 0);
    const blob = new Blob([], { type });

    if (span === 0) {
      return blob
    }

    let blobSize = 0;
    const blobParts = [];
    for (const part of _parts) {
      const { byteLength } = part;
      if (offset > 0 && byteLength <= offset) {
        offset -= byteLength;
        limit -= byteLength;
      } else {
        const chunk = part.subarray(offset, Math.min(byteLength, limit));
        blobParts.push(chunk);
        blobSize += chunk.byteLength;
        // no longer need to take that into account
        offset = 0;

        // don't add the overflow to new blobParts
        if (blobSize >= span) {
          break
        }
      }
    }

    blob._parts = blobParts;
    blob._size = blobSize;

    return blob
  }

  /**
   * Returns a promise that resolves with an ArrayBuffer containing the entire
   * contents of the Blob as binary data.
   * @returns {Promise<ArrayBuffer>}
   */
  // eslint-disable-next-line require-await
  async arrayBuffer() {
    const buffer = new ArrayBuffer(this.size);
    const bytes = new Uint8Array(buffer);
    let offset = 0;
    for (const part of this._parts) {
      bytes.set(part, offset);
      offset += part.byteLength;
    }
    return buffer
  }

  /**
   * Returns a promise that resolves with a USVString containing the entire
   * contents of the Blob interpreted as UTF-8 text.
   * @returns {Promise<string>}
   */
  // eslint-disable-next-line require-await
  async text() {
    const decoder = new webEncoding.TextDecoder();
    let text = "";
    for (const part of this._parts) {
      text += decoder.decode(part);
    }
    return text
  }

  /**
   * @returns {BlobStream}
   */
  stream() {
    return new BlobStream(this._parts)
  }

  /**
   * @returns {string}
   */
  toString() {
    return "[object Blob]"
  }

  get [Symbol.toStringTag]() {
    return "Blob"
  }
};

// Marking export as a DOM File object instead of custom class.
/** @type {typeof globalThis.Blob} */
const Blob = WebBlob;

/**
 * Blob stream is a `ReadableStream` extension optimized to have minimal
 * overhead when consumed as `AsyncIterable<Uint8Array>`.
 * @extends {ReadableStream<Uint8Array>}
 * @implements {AsyncIterable<Uint8Array>}
 */
class BlobStream extends webStream.ReadableStream {
  /**
   * @param {Uint8Array[]} chunks
   */
  constructor(chunks) {
    // @ts-ignore
    super(new BlobStreamController(chunks.values()), { type: "bytes" });
    /** @private */
    this._chunks = chunks;
  }

  /**
   * @param {Object} [_options]
   * @property {boolean} [_options.preventCancel]
   * @returns {AsyncIterator<Uint8Array>}
   */
  async *[Symbol.asyncIterator](_options) {
    const reader = this.getReader();
    yield* this._chunks;
    reader.releaseLock();
  }
}

class BlobStreamController {
  /**
   * @param {Iterator<Uint8Array>} chunks
   */
  constructor(chunks) {
    this.chunks = chunks;
  }

  /**
   * @param {ReadableStreamDefaultController} controller
   */
  start(controller) {
    this.work(controller);
    this.isWorking = false;
    this.isCancelled = false;
  }
  /**
   *
   * @param {ReadableStreamDefaultController} controller
   */
  async work(controller) {
    const { chunks } = this;

    this.isWorking = true;
    while (!this.isCancelled && (controller.desiredSize || 0) > 0) {
      let next = null;
      try {
        next = chunks.next();
      } catch (error) {
        controller.error(error);
        break
      }

      if (next) {
        if (!next.done && !this.isCancelled) {
          controller.enqueue(next.value);
        } else {
          controller.close();
        }
      }
    }

    this.isWorking = false;
  }

  /**
   * @param {ReadableStreamDefaultController} controller
   */
  pull(controller) {
    if (!this.isWorking) {
      this.work(controller);
    }
  }
  cancel() {
    this.isCancelled = true;
  }
}

/**
 * @param {string} [input]
 * @returns {string}
 */
const readType = (input = "") => {
  const type = String(input).toLowerCase();
  return /[^\u0020-\u007E]/.test(type) ? "" : type
};

Object.defineProperty(exports, "TextDecoder", ({
  enumerable: true,
  get: function () {
    return webEncoding.TextDecoder;
  }
}));
Object.defineProperty(exports, "TextEncoder", ({
  enumerable: true,
  get: function () {
    return webEncoding.TextEncoder;
  }
}));
Object.defineProperty(exports, "ReadableStream", ({
  enumerable: true,
  get: function () {
    return webStream.ReadableStream;
  }
}));
exports.Blob = Blob;
//# sourceMappingURL=blob.cjs.map


/***/ }),

/***/ 6985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var webEncoding = __webpack_require__(8265);
var webStream = __webpack_require__(2356);
var blob = __webpack_require__(108);

/** @type {typeof globalThis.Blob} */
// Our first choise is to use global `Blob` because it may be available e.g. in
// electron renderrer process. If not available fall back to node native
// implementation, if also not available use our implementation.
const Blob =
  globalThis.Blob || 
  // Disable node native blob until impractical perf issue is fixed
  // @see https://github.com/nodejs/node/issues/42108
  // NodeBlob ||
  blob.Blob;

Object.defineProperty(exports, "TextDecoder", ({
  enumerable: true,
  get: function () {
    return webEncoding.TextDecoder;
  }
}));
Object.defineProperty(exports, "TextEncoder", ({
  enumerable: true,
  get: function () {
    return webEncoding.TextEncoder;
  }
}));
Object.defineProperty(exports, "ReadableStream", ({
  enumerable: true,
  get: function () {
    return webStream.ReadableStream;
  }
}));
exports.Blob = Blob;
//# sourceMappingURL=lib.node.cjs.map


/***/ }),

/***/ 2868:
/***/ ((module, exports, __webpack_require__) => {



const http = __webpack_require__(3685);
const https = __webpack_require__(5687);
const zlib = __webpack_require__(9796);
const fs = __webpack_require__(7147);
const mime = __webpack_require__(4634);
const dataUriToBuffer = __webpack_require__(5485);
const buffer = __webpack_require__(4300);
const Stream = __webpack_require__(2781);
const util = __webpack_require__(3837);
const webBlob = __webpack_require__(6985);
const webFile = __webpack_require__(2706);
const webFormData = __webpack_require__(1577);
const crypto = __webpack_require__(6113);
const multipartParser = __webpack_require__(9252);
const url = __webpack_require__(7310);
const abortController = __webpack_require__(1997);

class FetchBaseError extends Error {
	/**
	 * @param {string} message 
	 * @param {string} type 
	 */
	constructor(message, type) {
		super(message);
		// Hide custom error implementation details from end-users
		Error.captureStackTrace(this, this.constructor);

		this.type = type;
	}

	get name() {
		return this.constructor.name;
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}
}

/**
 * @typedef {{
 * address?: string
 * code: string
 * dest?: string
 * errno: number
 * info?: object
 * message: string
 * path?: string
 * port?: number
 * syscall: string
 * }} SystemError
*/

/**
 * FetchError interface for operational errors
 */
class FetchError extends FetchBaseError {
	/**
	 * @param  {string} message -      Error message for human
	 * @param  {string} type -        Error type for machine
	 * @param  {SystemError} [systemError] - For Node.js system error
	 */
	constructor(message, type, systemError) {
		super(message, type);
		// When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
		if (systemError) {
			// eslint-disable-next-line no-multi-assign
			this.code = this.errno = systemError.code;
			this.erroredSysCall = systemError.syscall;
		}
	}
}

/**
 * Is.js
 *
 * Object type checks.
 */

const NAME = Symbol.toStringTag;

/**
 * Check if `obj` is a URLSearchParams object
 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
 *
 * @param  {any} object
 * @return {obj is URLSearchParams}
 */
const isURLSearchParameters = (object) => {
	return (
		typeof object === "object" &&
		typeof object.append === "function" &&
		typeof object.delete === "function" &&
		typeof object.get === "function" &&
		typeof object.getAll === "function" &&
		typeof object.has === "function" &&
		typeof object.set === "function" &&
		typeof object.sort === "function" &&
		object[NAME] === "URLSearchParams"
	);
};

/**
 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
 *
 * @param  {*} object
 * @return {object is Blob}
 */
const isBlob = (object) => {
	return (
		typeof object === "object" &&
		typeof object.arrayBuffer === "function" &&
		typeof object.type === "string" &&
		typeof object.stream === "function" &&
		typeof object.constructor === "function" &&
		/^(Blob|File)$/.test(object[NAME])
	);
};

/**
 * Check if `obj` is a spec-compliant `FormData` object
 *
 * @param {*} object
 * @return {object is FormData}
 */
function isFormData(object) {
	return (
		typeof object === "object" &&
		typeof object.append === "function" &&
		typeof object.set === "function" &&
		typeof object.get === "function" &&
		typeof object.getAll === "function" &&
		typeof object.delete === "function" &&
		typeof object.keys === "function" &&
		typeof object.values === "function" &&
		typeof object.entries === "function" &&
		typeof object.constructor === "function" &&
		object[NAME] === "FormData"
	);
}

/**
 * Detect form data input from form-data module
 *
 * @param {any} value
 * @returns {value is Stream & {getBoundary():string, hasKnownLength():boolean, getLengthSync():number|null}}
 */
const isMultipartFormDataStream = (value) => {
	return (
		value instanceof Stream === true &&
		typeof value.getBoundary === "function" &&
		typeof value.hasKnownLength === "function" &&
		typeof value.getLengthSync === "function"
	);
};

/**
 * Check if `obj` is an instance of AbortSignal.
 *
 * @param  {any} object
 * @return {obj is AbortSignal}
 */
const isAbortSignal = (object) => {
	return (
		typeof object === "object" &&
		(object[NAME] === "AbortSignal" || object[NAME] === "EventTarget")
	);
};

/**
 * Check if `value` is a ReadableStream.
 *
 * @param {*} value
 * @returns {value is ReadableStream}
 */
const isReadableStream = (value) => {
	return (
		typeof value === "object" &&
		typeof value.getReader === "function" &&
		typeof value.cancel === "function" &&
		typeof value.tee === "function"
	);
};

/**
 *
 * @param {any} value
 * @returns {value is Iterable<unknown>}
 */
const isIterable = (value) => value && Symbol.iterator in value;

const carriage = '\r\n';
const dashes = '-'.repeat(2);
const carriageLength = Buffer.byteLength(carriage);

/**
 * @param {string} boundary
 */
const getFooter = boundary => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;

/**
 * @param {string} boundary
 * @param {string} name
 * @param {*} field
 *
 * @return {string}
 */
function getHeader(boundary, name, field) {
	let header = '';

	header += `${dashes}${boundary}${carriage}`;
	header += `Content-Disposition: form-data; name="${name}"`;

	if (isBlob(field)) {
		const { name = 'blob', type } = /** @type {Blob & {name?:string}} */ (field);
		header += `; filename="${name}"${carriage}`;
		header += `Content-Type: ${type || 'application/octet-stream'}`;
	}

	return `${header}${carriage.repeat(2)}`;
}

/**
 * @return {string}
 */
const getBoundary = () => crypto.randomBytes(8).toString('hex');

/**
 * @param {FormData} form
 * @param {string} boundary
 */
async function * formDataIterator(form, boundary) {
	const encoder = new TextEncoder();
	for (const [name, value] of form) {
		yield encoder.encode(getHeader(boundary, name, value));

		if (isBlob(value)) {
			// @ts-ignore - we know our streams implement aysnc iteration
			yield * value.stream();
		} else {
			yield encoder.encode(value);
		}

		yield encoder.encode(carriage);
	}

	yield encoder.encode(getFooter(boundary));
}

/**
 * @param {FormData} form
 * @param {string} boundary
 */
function getFormDataLength(form, boundary) {
	let length = 0;

	for (const [name, value] of form) {
		length += Buffer.byteLength(getHeader(boundary, name, value));

		if (isBlob(value)) {
			length += value.size;
		} else {
			length += Buffer.byteLength(String(value));
		}

		length += carriageLength;
	}

	length += Buffer.byteLength(getFooter(boundary));

	return length;
}

/**
 * @param {Body & {headers?:Headers}} source
 */
const toFormData = async (source) => {
  let { body, headers } = source;
  const contentType = headers?.get('Content-Type') || '';

  if (contentType.startsWith('application/x-www-form-urlencoded') && body != null) {
		const form = new webFormData.FormData();
		let bodyText = await source.text();
		new URLSearchParams(bodyText).forEach((v, k) => form.append(k, v));
		return form;
  }

  const [type, boundary] = contentType.split(/\s*;\s*boundary=/);
  if (type === 'multipart/form-data' && boundary != null && body != null) {
    const form = new webFormData.FormData();
    const parts = multipartParser.iterateMultipart(body, boundary);
    for await (const { name, data, filename, contentType } of parts) {
      if (typeof filename === 'string') {
        form.append(name, new webFile.File([data], filename, { type: contentType }));
      } else if (typeof filename !== 'undefined') {
        form.append(name, new webFile.File([], '', { type: contentType }));
      } else {
        form.append(name, new TextDecoder().decode(data), filename);
      }
    }
    return form
  } else {
    throw new TypeError('Could not parse content as FormData.')
  }
};

const encoder = new util.TextEncoder();
const decoder = new util.TextDecoder();

/**
 * @param {string} text
 */
const encode = text => encoder.encode(text);

/**
 * @param {Uint8Array} bytes
 */
const decode = bytes => decoder.decode(bytes);

// @ts-check
const {readableHighWaterMark} = new Stream.Readable();

const INTERNALS$2 = Symbol('Body internals');

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 * @implements {globalThis.Body}
 */

class Body {
	/**
	 * @param {BodyInit|Stream|null} body
	 * @param {{size?:number}} options
	 */
	constructor(body, {
		size = 0
	} = {}) {
		const state = {
			/** @type {null|ReadableStream<Uint8Array>} */
			body: null,
			/** @type {string|null} */
			type: null,
			/** @type {number|null} */
			size: null,
			/** @type {null|string} */
			boundary: null,
			disturbed: false,
			/** @type {null|Error} */
			error: null
		};
		/** @private */
		this[INTERNALS$2] = state;

		if (body === null) {
			// Body is undefined or null
			state.body = null;
			state.size = 0;
		} else if (isURLSearchParameters(body)) {
		// Body is a URLSearchParams
			const bytes = encode(body.toString());
			state.body = fromBytes(bytes);
			state.size = bytes.byteLength;
			state.type = 'application/x-www-form-urlencoded;charset=UTF-8';
		} else if (isBlob(body)) {
			// Body is blob
			state.size = body.size;
			state.type = body.type || null;
			state.body = body.stream();
		} else if (body instanceof Uint8Array) {
			// Body is Buffer
			state.body = fromBytes(body);
			state.size = body.byteLength;
		} else if (util.types.isAnyArrayBuffer(body)) {
			// Body is ArrayBuffer
			const bytes = new Uint8Array(body);
			state.body = fromBytes(bytes);
			state.size = bytes.byteLength;
		} else if (ArrayBuffer.isView(body)) {
			// Body is ArrayBufferView
			const bytes = new Uint8Array(body.buffer, body.byteOffset, body.byteLength);
			state.body = fromBytes(bytes);
			state.size = bytes.byteLength;
		} else if (isReadableStream(body)) {
			// Body is stream
			state.body = body;
		} else if (isFormData(body)) {
			// Body is an instance of formdata-node
			const boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
			state.type = `multipart/form-data; boundary=${boundary}`;
			state.size = getFormDataLength(body, boundary);
			state.body = fromAsyncIterable(formDataIterator(body, boundary));
		} else if (isMultipartFormDataStream(body)) {
			state.type = `multipart/form-data; boundary=${body.getBoundary()}`;
			state.size = body.hasKnownLength() ? body.getLengthSync() : null;
			state.body = fromStream(body);
		} else if (body instanceof Stream) {
			state.body = fromStream(body);
		} else {
			// None of the above
			// coerce to string then buffer
			const bytes = encode(String(body));
			state.type = 'text/plain;charset=UTF-8';
			state.size = bytes.byteLength;
			state.body = fromBytes(bytes);
		}

		this.size = size;

		// if (body instanceof Stream) {
		// 	body.on('error', err => {
		// 		const error = err instanceof FetchBaseError ?
		// 			err :
		// 			new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, 'system', err);
		// 		this[INTERNALS].error = error;
		// 	});
		// }
	}

	/** @type {Headers} */
	/* c8 ignore next 3 */
	get headers() {
		throw new TypeError(`'get headers' called on an object that does not implements interface.`)
	}

	get body() {
		return this[INTERNALS$2].body;
	}

	get bodyUsed() {
		return this[INTERNALS$2].disturbed;
	}

	/**
	 * Decode response as ArrayBuffer
	 *
	 * @return {Promise<ArrayBuffer>}
	 */
	async arrayBuffer() {
		const {buffer, byteOffset, byteLength} = await consumeBody(this);
		return buffer.slice(byteOffset, byteOffset + byteLength);
	}

	/**
	 * Return raw response as Blob
	 *
	 * @return Promise
	 */
	async blob() {
		const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS$2].body && this[INTERNALS$2].type) || '';
		const buf = await consumeBody(this);

		return new webBlob.Blob([buf], {
			type: ct
		});
	}

	/**
	 * Decode response as json
	 *
	 * @return  Promise
	 */
	async json() {
		return JSON.parse(await this.text());
	}

	/**
	 * Decode response as text
	 *
	 * @return  Promise
	 */
	async text() {
		const buffer = await consumeBody(this);
		return decode(buffer);
	}

	/**
	 * @returns {Promise<FormData>}
	 */
	async formData() {
		return toFormData(this)
	}
}

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: {enumerable: true},
	bodyUsed: {enumerable: true},
	arrayBuffer: {enumerable: true},
	blob: {enumerable: true},
	json: {enumerable: true},
	text: {enumerable: true},
	formData: {enumerable: true}
});

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @param {Body & {url?:string}} data
 * @return {Promise<Uint8Array>}
 */
async function consumeBody(data) {
	const state = data[INTERNALS$2];
	if (state.disturbed) {
		throw new TypeError(`body used already for: ${data.url}`);
	}

	state.disturbed = true;

	if (state.error) {
		throw state.error;
	}

	const {body} = state;

	// Body is null
	if (body === null) {
		return new Uint8Array(0);
	}

	// Body is stream
	// get ready to actually consume the body
	/** @type {[Uint8Array|null, Uint8Array[], number]} */
	const [buffer, chunks, limit] = data.size > 0 ?
		[new Uint8Array(data.size), [], data.size] :
		[null, [], Infinity];
	let offset = 0;

	const source = streamIterator(body);
	try {
		for await (const chunk of source) {
			const bytes = chunk instanceof Uint8Array ?
				chunk :
				Buffer.from(chunk);

			if (offset + bytes.byteLength > limit) {
				const error = new FetchError(`content size at ${data.url} over limit: ${limit}`, 'max-size');
				source.throw(error);
				throw error;
			} else if (buffer) {
				buffer.set(bytes, offset);
			} else {
				chunks.push(bytes);
			}

			offset += bytes.byteLength;
		}

		if (buffer) {
			if (offset < buffer.byteLength) {
				throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`, 'premature-close');
			} else {
				return buffer;
			}
		} else {
			return writeBytes(new Uint8Array(offset), chunks);
		}
	} catch (error) {
		if (error instanceof FetchBaseError) {
			throw error;
		// @ts-expect-error - we know it will have a name
		} else if (error && error.name === 'AbortError') {
			throw error;
		} else {
			const e = /** @type {import('./errors/fetch-error').SystemError} */(error);
			// Other errors, such as incorrect content-encoding
			throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${e.message}`, 'system', e);
		}
	}
}

/**
 * Clone body given Res/Req instance
 *
 * @param {Body} instance       Response or Request instance
 * @return {ReadableStream<Uint8Array> | null}
 */
const clone = instance => {
	const {body} = instance;

	// Don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	if (!body) {
		return null;
	}

	const [left, right] = body.tee();
	instance[INTERNALS$2].body = left;
	return right;
};

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param {Body} source Any options.body input
 * @returns {string | null}
 */
const extractContentType = source => source[INTERNALS$2].type;

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param {Body} source - Body object from the Body instance.
 * @returns {number | null}
 */
const getTotalBytes = source => source[INTERNALS$2].size;

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param {Stream.Writable} dest - The stream to write to.
 * @param {Body} source - Body object from the Body instance.
 * @returns {void}
 */
const writeToStream = (dest, {body}) => {
	if (body === null) {
		// Body is null
		dest.end();
	} else {
		Stream.Readable.from(streamIterator(body)).pipe(dest);
	}
};

/**
 * @template T
 * @implements {AsyncGenerator<T, void, void>}
 */
class StreamIterableIterator {
	/**
	 * @param {ReadableStream<T>} stream
	 */
	constructor(stream) {
		this.stream = stream;
		this.reader = null;
	}

	/**
	 * @returns {AsyncGenerator<T, void, void>}
	 */
	[Symbol.asyncIterator]() {
		return this;
	}

	getReader() {
		if (this.reader) {
			return this.reader;
		}

		const reader = this.stream.getReader();
		this.reader = reader;
		return reader;
	}

	/**
	 * @returns {Promise<IteratorResult<T, void>>}
	 */
	next() {
		return /** @type {Promise<IteratorResult<T, void>>} */ (this.getReader().read());
	}

	/**
	 * @returns {Promise<IteratorResult<T, void>>}
	 */
	async return() {
		if (this.reader) {
			await this.reader.cancel();
		}

		return {done: true, value: undefined};
	}

	/**
	 * 
	 * @param {any} error 
	 * @returns {Promise<IteratorResult<T, void>>}
	 */
	async throw(error) {
		await this.getReader().cancel(error);
		return {done: true, value: undefined};
	}
}

/**
 * @template T
 * @param {ReadableStream<T>} stream
 */
const streamIterator = stream => new StreamIterableIterator(stream);

/**
 * @param {Uint8Array} buffer
 * @param {Uint8Array[]} chunks
 */
const writeBytes = (buffer, chunks) => {
	let offset = 0;
	for (const chunk of chunks) {
		buffer.set(chunk, offset);
		offset += chunk.byteLength;
	}

	return buffer;
};

/**
 * @param {Uint8Array} bytes
 * @returns {ReadableStream<Uint8Array>}
 */
// @ts-ignore
const fromBytes = bytes => new webBlob.ReadableStream({
	start(controller) {
		controller.enqueue(bytes);
		controller.close();
	}
});

/**
 * @param {AsyncIterable<Uint8Array>} content
 * @returns {ReadableStream<Uint8Array>}
 */
const fromAsyncIterable = content =>
	new webBlob.ReadableStream(new AsyncIterablePump(content));

/**
 * @implements {UnderlyingSource<Uint8Array>}
 */
class AsyncIterablePump {
	/**
	 * @param {AsyncIterable<Uint8Array>} source
	 */
	constructor(source) {
		this.source = source[Symbol.asyncIterator]();
	}

	/**
	 * @param {ReadableStreamController<Uint8Array>} controller
	 */
	async pull(controller) {
		try {
			while (controller.desiredSize || 0 > 0) {
				// eslint-disable-next-line no-await-in-loop
				const next = await this.source.next();
				if (next.done) {
					controller.close();
					break;
				} else {
					controller.enqueue(next.value);
				}
			}
		} catch (error) {
			controller.error(error);
		}
	}

	/**
	 * @param {any} [reason]
	 */
	cancel(reason) {
		if (reason) {
			if (typeof this.source.throw === 'function') {
				this.source.throw(reason);
			} else if (typeof this.source.return === 'function') {
				this.source.return();
			}
		} else if (typeof this.source.return === 'function') {
			this.source.return();
		}
	}
}

/**
 * @param {Stream & {readableHighWaterMark?:number}} source
 * @returns {ReadableStream<Uint8Array>}
 */
const fromStream = source => {
	const pump = new StreamPump(source);
	const stream = new webBlob.ReadableStream(pump, pump);
	return stream;
};

/**
 * @implements {UnderlyingSource<Uint8Array>}
 * @implements {QueuingStrategy<Uint8Array>}
 */
class StreamPump {
	/**
	 * @param {Stream & {
	 * 	readableHighWaterMark?: number
	 * 	readable?:boolean,
	 * 	resume?: () => void,
	 * 	pause?: () => void
	 * 	destroy?: (error?:Error) => void
	 * }} stream
	 */
	constructor(stream) {
		this.highWaterMark = stream.readableHighWaterMark || readableHighWaterMark;
		this.accumalatedSize = 0;
		this.stream = stream;
		this.enqueue = this.enqueue.bind(this);
		this.error = this.error.bind(this);
		this.close = this.close.bind(this);
	}

	/**
	 * @param {Uint8Array} [chunk]
	 */
	size(chunk) {
		return chunk?.byteLength || 0;
	}

	/**
	 * @param {ReadableStreamController<Uint8Array>} controller
	 */
	start(controller) {
		this.controller = controller;
		this.stream.on('data', this.enqueue);
		this.stream.once('error', this.error);
		this.stream.once('end', this.close);
		this.stream.once('close', this.close);
	}

	pull() {
		this.resume();
	}

	/**
	 * @param {any} [reason]
	 */
	cancel(reason) {
		if (this.stream.destroy) {
			this.stream.destroy(reason);
		}

		this.stream.off('data', this.enqueue);
		this.stream.off('error', this.error);
		this.stream.off('end', this.close);
		this.stream.off('close', this.close);
	}

	/**
	 * @param {Uint8Array|string} chunk
	 */
	enqueue(chunk) {
		if (this.controller) {
			try {
				const bytes = chunk instanceof Uint8Array ?
					chunk :
					Buffer.from(chunk);

				const available = (this.controller.desiredSize || 0) - bytes.byteLength;
				this.controller.enqueue(bytes);
				if (available <= 0) {
					this.pause();
				}
			} catch {
				this.controller.error(new Error('Could not create Buffer, chunk must be of type string or an instance of Buffer, ArrayBuffer, or Array or an Array-like Object'));
				this.cancel();
			}
		}
	}

	pause() {
		if (this.stream.pause) {
			this.stream.pause();
		}
	}

	resume() {
		if (this.stream.readable && this.stream.resume) {
			this.stream.resume();
		}
	}

	close() {
		if (this.controller) {
			this.controller.close();
			delete this.controller;
		}
	}

	/**
	 * @param {Error} error 
	 */
	error(error) {
		if (this.controller) {
			this.controller.error(error);
			delete this.controller;
		}
	}
}

/**
 * Headers.js
 *
 * Headers class offers convenient helpers
 */

const validators = /** @type {{validateHeaderName?:(name:string) => any, validateHeaderValue?:(name:string, value:string) => any}} */
(http);

const validateHeaderName = typeof validators.validateHeaderName === 'function' ?
	validators.validateHeaderName :
	/**
	 * @param {string} name
	 */
	name => {
		if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
			const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
			Object.defineProperty(err, 'code', {value: 'ERR_INVALID_HTTP_TOKEN'});
			throw err;
		}
	};

const validateHeaderValue = typeof validators.validateHeaderValue === 'function' ?
	validators.validateHeaderValue :
	/**
	 * @param {string} name
	 * @param {string} value
	 */
	(name, value) => {
		if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
			const err = new TypeError(`Invalid character in header content ["${name}"]`);
			Object.defineProperty(err, 'code', {value: 'ERR_INVALID_CHAR'});
			throw err;
		}
	};

/**
 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
 */

/**
 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
 * These actions include retrieving, setting, adding to, and removing.
 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples.)
 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
 *
 * @implements {globalThis.Headers}
 */
class Headers extends URLSearchParams {
	/**
	 * Headers class
	 *
	 * @constructor
	 * @param {HeadersInit} [init] - Response headers
	 */
	constructor(init) {
		// Validate and normalize init object in [name, value(s)][]
		/** @type {string[][]} */
		let result = [];
		if (init instanceof Headers) {
			const raw = init.raw();
			for (const [name, values] of Object.entries(raw)) {
				result.push(...values.map(value => [name, value]));
			}
		} else if (init == null) ; else if (isIterable(init)) {
			// Sequence<sequence<ByteString>>
			// Note: per spec we have to first exhaust the lists then process them
			result = [...init]
				.map(pair => {
					if (
						typeof pair !== 'object' || util.types.isBoxedPrimitive(pair)
					) {
						throw new TypeError('Each header pair must be an iterable object');
					}

					return [...pair];
				}).map(pair => {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}

					return [...pair];
				});
		} else if (typeof init === "object" && init !== null) {
			// Record<ByteString, ByteString>
			result.push(...Object.entries(init));
		} else {
			throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
		}

		// Validate and lowercase
		result =
			result.length > 0 ?
				result.map(([name, value]) => {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return [String(name).toLowerCase(), String(value)];
				}) :
				[];

		super(result);

		// Returning a Proxy that will lowercase key names, validate parameters and sort keys
		// eslint-disable-next-line no-constructor-return
		return new Proxy(this, {
			get(target, p, receiver) {
				switch (p) {
					case 'append':
					case 'set':
						/**
						 * @param {string} name
						 * @param {string} value
						 */
						return (name, value) => {
							validateHeaderName(name);
							validateHeaderValue(name, String(value));
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase(),
								String(value)
							);
						};

					case 'delete':
					case 'has':
					case 'getAll':
						/**
						 * @param {string} name
						 */
						return name => {
							validateHeaderName(name);
							// @ts-ignore
							return URLSearchParams.prototype[p].call(
								target,
								String(name).toLowerCase()
							);
						};

					case 'keys':
						return () => {
							target.sort();
							return new Set(URLSearchParams.prototype.keys.call(target)).keys();
						};

					default:
						return Reflect.get(target, p, receiver);
				}
			}
			/* c8 ignore next */
		});
	}

	get [Symbol.toStringTag]() {
		return this.constructor.name;
	}

	toString() {
		return Object.prototype.toString.call(this);
	}

	/**
	 *
	 * @param {string} name
	 */
	get(name) {
		const values = this.getAll(name);
		if (values.length === 0) {
			return null;
		}

		let value = values.join(', ');
		if (/^content-encoding$/i.test(name)) {
			value = value.toLowerCase();
		}

		return value;
	}

	/**
	 * @param {(value: string, key: string, parent: this) => void} callback
	 * @param {any} thisArg
	 * @returns {void}
	 */
	forEach(callback, thisArg = undefined) {
		for (const name of this.keys()) {
			if (name.toLowerCase() === 'set-cookie') {
				let cookies = this.getAll(name);
				while (cookies.length > 0) {
					Reflect.apply(callback, thisArg, [cookies.shift(), name, this]);
				}
			} else {
				Reflect.apply(callback, thisArg, [this.get(name), name, this]);
			}
		}
	}

	/**
	 * @returns {IterableIterator<string>}
	 */
	* values() {
		for (const name of this.keys()) {
			if (name.toLowerCase() === 'set-cookie') {
				let cookies = this.getAll(name);
				while (cookies.length > 0) {
					yield /** @type {string} */(cookies.shift());
				}
			} else {
				yield /** @type {string} */(this.get(name));
			}
		}
	}

	/**
	 * @returns {IterableIterator<[string, string]>}
	 */
	* entries() {
		for (const name of this.keys()) {
			if (name.toLowerCase() === 'set-cookie') {
				let cookies = this.getAll(name);
				while (cookies.length > 0) {
					yield [name, /** @type {string} */(cookies.shift())];
				}
			} else {
				yield [name, /** @type {string} */(this.get(name))];
			}
		}
	}

	[Symbol.iterator]() {
		return this.entries();
	}

	/**
	 * Node-fetch non-spec method
	 * returning all headers and their values as array
	 * @returns {Record<string, string[]>}
	 */
	raw() {
		return [...this.keys()].reduce((result, key) => {
			result[key] = this.getAll(key);
			return result;
		}, /** @type {Record<string, string[]>} */({}));
	}

	/**
	 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
	 */
	[Symbol.for('nodejs.util.inspect.custom')]() {
		return [...this.keys()].reduce((result, key) => {
			const values = this.getAll(key);
			// Http.request() only supports string as Host header.
			// This hack makes specifying custom Host header possible.
			if (key === 'host') {
				result[key] = values[0];
			} else {
				result[key] = values.length > 1 ? values : values[0];
			}

			return result;
		}, /** @type {Record<string, string|string[]>} */({}));
	}
}

/**
 * Re-shaping object for Web IDL tests
 * Only need to do it for overridden methods
 */
Object.defineProperties(
	Headers.prototype,
	['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
		result[property] = {enumerable: true};
		return result;
	}, /** @type {Record<string, {enumerable:true}>} */ ({}))
);

/**
 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
 * not conform to HTTP grammar productions.
 * @param {import('http').IncomingMessage['rawHeaders']} headers
 */
function fromRawHeaders(headers = []) {
	return new Headers(
		headers
			// Split into pairs
			.reduce((result, value, index, array) => {
				if (index % 2 === 0) {
					result.push(array.slice(index, index + 2));
				}

				return result;
			}, /** @type {string[][]} */([]))
			.filter(([name, value]) => {
				try {
					validateHeaderName(name);
					validateHeaderValue(name, String(value));
					return true;
				} catch {
					return false;
				}
			})

	);
}

const redirectStatus = new Set([301, 302, 303, 307, 308]);

/**
 * Redirect code matching
 *
 * @param {number} code - Status code
 * @return {boolean}
 */
const isRedirect = code => {
	return redirectStatus.has(code);
};

/**
 * Response.js
 *
 * Response class provides content decoding
 */

const INTERNALS$1 = Symbol('Response internals');

/**
 * Response class
 * 
 * @typedef {Object} Ext
 * @property {number} [size]
 * @property {string} [url]
 * @property {number} [counter]
 * @property {number} [highWaterMark]
 * 
 * @implements {globalThis.Response}
 */
class Response extends Body {
	/**
	 * @param {BodyInit|import('stream').Stream|null} [body] - Readable stream
	 * @param {ResponseInit & Ext} [options] - Response options
	 */
	constructor(body = null, options = {}) {
		super(body, options);

		const status = options.status || 200;
		const headers = new Headers(options.headers);

		if (body !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		/**
		 * @private
		*/
		this[INTERNALS$1] = {
			url: options.url,
			status,
			statusText: options.statusText || '',
			headers,
			counter: options.counter || 0,
			highWaterMark: options.highWaterMark
		};
	}

	/**
	 * @type {ResponseType}
	 */
	get type() {
		return "default"
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
	 * Convenience property representing if the request ended normally
	 */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	/**
	 * @type {Headers}
	 */
	get headers() {
		return this[INTERNALS$1].headers;
	}

	get highWaterMark() {
		return this[INTERNALS$1].highWaterMark;
	}

	/**
	 * Clone this response
	 *
	 * @returns {Response}
	 */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			size: this.size
		});
	}

	/**
	 * @param {string} url    The URL that the new response is to originate from.
	 * @param {number} status An optional status code for the response (e.g., 302.)
	 * @returns {Response}    A Response object.
	 */
	static redirect(url, status = 302) {
		if (!isRedirect(status)) {
			throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
		}

		return new Response(null, {
			headers: {
				location: new URL(url).toString()
			},
			status
		});
	}

	get [Symbol.toStringTag]() {
		return 'Response';
	}
}

Object.defineProperties(Response.prototype, {
	url: {enumerable: true},
	status: {enumerable: true},
	ok: {enumerable: true},
	redirected: {enumerable: true},
	statusText: {enumerable: true},
	headers: {enumerable: true},
	clone: {enumerable: true}
});

/**
 * @param {URL} parsedURL 
 * @returns {string}
 */
const getSearch = parsedURL => {
	if (parsedURL.search) {
		return parsedURL.search;
	}

	const lastOffset = parsedURL.href.length - 1;
	const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
	return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
};

const INTERNALS = Symbol('Request internals');

const forbiddenMethods = new Set(["CONNECT", "TRACE", "TRACK"]);
const normalizedMethods = new Set(["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]);

/**
 * Check if `obj` is an instance of Request.
 *
 * @param  {any} object
 * @return {object is Request}
 */
const isRequest = object => {
	return (
		typeof object === 'object' &&
		typeof object[INTERNALS] === 'object'
	);
};


/**
 * Request class
 * @implements {globalThis.Request}
 *
 * @typedef {Object} RequestState
 * @property {string} method
 * @property {RequestRedirect} redirect
 * @property {globalThis.Headers} headers
 * @property {RequestCredentials} credentials
 * @property {URL} parsedURL
 * @property {AbortSignal|null} signal
 *
 * @typedef {Object} RequestExtraOptions
 * @property {number} [follow]
 * @property {boolean} [compress]
 * @property {number} [size]
 * @property {number} [counter]
 * @property {Agent} [agent]
 * @property {number} [highWaterMark]
 * @property {boolean} [insecureHTTPParser]
 *
 * @typedef {((url:URL) => import('http').Agent | import('https').Agent) | import('http').Agent | import('https').Agent} Agent
 *
 * @typedef {Object} RequestOptions
 * @property {string} [method]
 * @property {ReadableStream<Uint8Array>|null} [body]
 * @property {globalThis.Headers} [headers]
 * @property {RequestRedirect} [redirect]
 *
 */
class Request extends Body {
	/**
	 * @param {string|Request|URL} info  Url or Request instance
	 * @param {RequestInit & RequestExtraOptions} init   Custom options
	 */
	constructor(info, init = {}) {
		let parsedURL;
		/** @type {RequestOptions & RequestExtraOptions} */
		let settings;

		// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
		if (isRequest(info)) {
			parsedURL = new URL(info.url);
			settings = (info);
		} else {
			parsedURL = new URL(info);
			settings = {};
		}



		// Normalize method: https://fetch.spec.whatwg.org/#methods
		let method = init.method || settings.method || 'GET';
		if (forbiddenMethods.has(method.toUpperCase())) {
			throw new TypeError(`Failed to construct 'Request': '${method}' HTTP method is unsupported.`)
		} else if (normalizedMethods.has(method.toUpperCase())) {
			method = method.toUpperCase();
		}

		const inputBody = init.body != null
			? init.body
			: (isRequest(info) && info.body !== null)
			? clone(info)
			: null;

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (inputBody != null && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		super(inputBody, {
			size: init.size || settings.size || 0
		});
		const input = settings;


		const headers = /** @type {globalThis.Headers} */
			(new Headers(init.headers || input.headers || {}));

		if (inputBody !== null && !headers.has('Content-Type')) {
			const contentType = extractContentType(this);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = 'signal' in init
			? init.signal
			: isRequest(input)
			? input.signal
			: null;

		// eslint-disable-next-line no-eq-null, eqeqeq
		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
		}

		if (!signal) {
			let AbortControllerConstructor = typeof AbortController != "undefined"
			? AbortController
			: abortController.AbortController;
			/** @type {any} */
			let newSignal = new AbortControllerConstructor().signal;
			signal = newSignal;
		}

		/** @type {RequestState} */
		this[INTERNALS] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			credentials: init.credentials || 'same-origin',
			parsedURL,
			signal: signal || null
		};

		/** @type {boolean} */
		this.keepalive;

		// Node-fetch-only options
		/** @type {number} */
		this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
		/** @type {boolean} */
		this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
		/** @type {number} */
		this.counter = init.counter || input.counter || 0;
		/** @type {Agent|undefined} */
		this.agent = init.agent || input.agent;
		/** @type {number} */
		this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
		/** @type {boolean} */
		this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
	}

	/**
	 * @type {RequestCache}
	 */
	get cache() {
		return "default"
	}

	/**
	 * @type {RequestCredentials}
	 */

	get credentials() {
		return this[INTERNALS].credentials
	}

	/**
	 * @type {RequestDestination}
	 */
	get destination() {
		return ""
	}

	get integrity() {
		return ""
	}

	/** @type {RequestMode} */
	get mode() {
		return "cors"
	}

	/** @type {string} */
	get referrer() {
		return  ""
	}

	/** @type {ReferrerPolicy} */
	get referrerPolicy() {
		return ""
	}
	get method() {
		return this[INTERNALS].method;
	}

	/**
	 * @type {string}
	 */
	get url() {
		return url.format(this[INTERNALS].parsedURL);
	}

	/**
	 * @type {globalThis.Headers}
	 */
	get headers() {
		return this[INTERNALS].headers;
	}

	get redirect() {
		return this[INTERNALS].redirect;
	}

	/**
	 * @returns {AbortSignal}
	 */
	get signal() {
		// @ts-ignore
		return this[INTERNALS].signal;
	}

	/**
	 * Clone this request
	 *
	 * @return  {globalThis.Request}
	 */
	clone() {
		return new Request(this);
	}

	get [Symbol.toStringTag]() {
		return 'Request';
	}
}

Object.defineProperties(Request.prototype, {
	method: {enumerable: true},
	url: {enumerable: true},
	headers: {enumerable: true},
	redirect: {enumerable: true},
	clone: {enumerable: true},
	signal: {enumerable: true}
});

/**
 * Convert a Request to Node.js http request options.
 * The options object to be passed to http.request
 *
 * @param {Request & Record<INTERNALS, RequestState>} request -  A Request instance
 */
const getNodeRequestOptions = request => {
	const {parsedURL} = request[INTERNALS];
	const headers = new Headers(request[INTERNALS].headers);

	// Fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body === null && /^(post|put)$/i.test(request.method)) {
		contentLengthValue = '0';
	}

	if (request.body !== null) {
		const totalBytes = getTotalBytes(request);
		// Set Content-Length if totalBytes is a number (that is not NaN)
		if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
			contentLengthValue = String(totalBytes);
		}
	}

	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate,br');
	}

	let {agent} = request;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	const search = getSearch(parsedURL);

	// Manually spread the URL object instead of spread syntax
	const requestOptions = {
		path: parsedURL.pathname + search,
		pathname: parsedURL.pathname,
		hostname: parsedURL.hostname,
		protocol: parsedURL.protocol,
		port: parsedURL.port,
		hash: parsedURL.hash,
		search: parsedURL.search,
		// @ts-ignore - it does not has a query
		query: parsedURL.query,
		href: parsedURL.href,
		method: request.method,
		// @ts-ignore - not sure what this supposed to do
		headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
		insecureHTTPParser: request.insecureHTTPParser,
		agent
	};

	return requestOptions;
};

/**
 * AbortError interface for cancelled requests
 */
class AbortError extends FetchBaseError {
	/**
	 * @param {string} message 
	 * @param {string} [type]
	 */
	constructor(message, type = 'aborted') {
		super(message, type);
	}
}

/**
 * Index.js
 *
 * a request API compatible with window.fetch
 *
 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
 */

const supportedSchemas = new Set(['data:', 'http:', 'https:', 'file:']);

/**
 * Fetch function
 *
 * @param   {string | URL | import('./request.js').default} url - Absolute url or Request instance
 * @param   {RequestInit & import('./request.js').RequestExtraOptions} [options_] - Fetch options
 * @return  {Promise<import('./response.js').default>}
 */
async function fetch(url, options_ = {}) {
	return new Promise((resolve, reject) => {
		// Build request object
		const request = new Request(url, options_);
		const options = getNodeRequestOptions(request);
		if (!supportedSchemas.has(options.protocol)) {
			throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options.protocol.replace(/:$/, '')}" is not supported.`);
		}

		if (options.protocol === 'data:') {
			const data = dataUriToBuffer(request.url.toString());
			const response = new Response(data, {headers: {'Content-Type': data.typeFull}});
			resolve(response);
			return;
		}

		if (options.protocol === 'file:') {
			const stream = fs.createReadStream(new URL(request.url));
			const type = mime.lookup(request.url) || 'application/octet-stream';
			const response = new Response(stream, {headers: {'Content-Type': type }});
			resolve(response);
			return;
		}

		// Wrap http.request into fetch
		const send = (options.protocol === 'https:' ? https : http).request;
		const {signal} = request;
		/** @type {Response|null} */
		let response = null;
		/** @type {import('http').IncomingMessage|null} */
		let response_ = null;

		const abort = () => {
			const error = new AbortError('The operation was aborted.');
			reject(error);
			if (request.body) {
				request.body.cancel(error);
			}

			if (!response_) {
				return;
			}

			response_.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = () => {
			abort();
			finalize();
		};

		// Send request
		const request_ = send(options);

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		const finalize = () => {
			request_.abort();
			if (signal) {
				signal.removeEventListener('abort', abortAndFinalize);
			}
		};

		request_.on('error', err => {
			// @ts-expect-error - err may not be SystemError
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		fixResponseChunkedTransferBadEnding(request_, err => {
			if (signal && signal.aborted) {
				return
			}

			response_?.emit("error", err);
		});

		/* c8 ignore next 18 */
		if (parseInt(process.version.substring(1)) < 14) {
			// Before Node.js 14, pipeline() does not fully support async iterators and does not always
			// properly handle when the socket close/end events are out of order.
			request_.on('socket', s => {
				s.prependListener('close', hadError => {
					// if a data listener is still present we didn't end cleanly
					const hasDataListener = s.listenerCount('data') > 0;

					// if end happened before close but the socket didn't emit an error, do it now
					if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
						const err = Object.assign(new Error('Premature close'), {
							code: 'ERR_STREAM_PREMATURE_CLOSE'
						});
						response_?.emit('error', err);
					}
				});
			});
		}

		request_.on('response', incoming => {
			response_ = incoming;
			request_.setTimeout(0);
			const headers = fromRawHeaders(response_.rawHeaders);

			// HTTP fetch step 5
			if (isRedirect(Number(response_.statusCode))) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : new URL(location, request.url);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// Node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							headers.set('Location', locationURL.toString());
						}

						break;
					case 'follow': {
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOptions = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							// Note: We can not use `request.body` because send would have
							// consumed it already.
							body: options_.body,
							signal: signal,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						const isStreamBody =
							requestOptions.body instanceof webBlob.ReadableStream ||
							requestOptions.body instanceof Stream.Readable;
						if (response_.statusCode !== 303 && isStreamBody) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (response_.statusCode === 303 || ((response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST')) {
							requestOptions.method = 'GET';
							requestOptions.body = undefined;
							requestOptions.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						fetch(new Request(locationURL.href, requestOptions)).then(resolve, reject);
						finalize();
						return;
					}

					default:
						return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
				}
			}

			// Prepare response
			if (signal) {
				response_.once('end', () => {
					signal.removeEventListener('abort', abortAndFinalize);
				});
			}

			let body = Stream.pipeline(response_, new Stream.PassThrough(), reject);
			// see https://github.com/nodejs/node/pull/29376
			/* c8 ignore next 3 */
			if (process.version < 'v12.10') {
				response_.on('aborted', abortAndFinalize);
			}

			const responseOptions = {
				url: request.url,
				status: response_.statusCode,
				statusText: response_.statusMessage,
				headers,
				size: request.size,
				counter: request.counter,
				highWaterMark: request.highWaterMark
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
				response = new Response(body, responseOptions);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// For gzip
			if (codings === 'gzip' || codings === 'x-gzip') {
				body = Stream.pipeline(body, zlib.createGunzip(zlibOptions), reject);
				response = new Response(fromAsyncIterable(body), responseOptions);
				resolve(response);
				return;
			}

			// For deflate
			if (codings === 'deflate' || codings === 'x-deflate') {
				// Handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = Stream.pipeline(response_, new Stream.PassThrough(), reject);
				raw.once('data', chunk => {
					// See http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = Stream.pipeline(body, zlib.createInflate(), reject);
					} else {
						body = Stream.pipeline(body, zlib.createInflateRaw(), reject);
					}

					response = new Response(fromAsyncIterable(body), responseOptions);
					resolve(response);
				});
				return;
			}

			// For br
			if (codings === 'br') {
				body = Stream.pipeline(body, zlib.createBrotliDecompress(), reject);
				response = new Response(fromAsyncIterable(body), responseOptions);
				resolve(response);
				return;
			}

			// Otherwise, use response as-is
			response = new Response(fromAsyncIterable(body), responseOptions);
			resolve(response);
		});

		writeToStream(request_, request);
	});
}

/**
 *
 * @param {import('http').ClientRequest} request
 * @param {(error:Error) => void} errorCallback
 */
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
	const LAST_CHUNK = buffer.Buffer.from('0\r\n\r\n');

	let isChunkedTransfer = false;
	let properLastChunkReceived = false;
	/** @type {Buffer | undefined} */
	let previousChunk;

	request.on('response', response => {
		const {headers} = response;
		isChunkedTransfer = headers['transfer-encoding'] === 'chunked' && !headers['content-length'];
	});

	request.on('socket', socket => {
		const onSocketClose = () => {
			if (isChunkedTransfer && !properLastChunkReceived) {
				const error = Object.assign(new Error('Premature close'), {
					code: 'ERR_STREAM_PREMATURE_CLOSE'
				});
				errorCallback(error);
			}
		};

		/** @param {Buffer} buf */
		const onData = buf => {
			properLastChunkReceived = buffer.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;

			// Sometimes final 0-length chunk and end of message code are in separate packets
			if (!properLastChunkReceived && previousChunk) {
				properLastChunkReceived = (
					buffer.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 &&
					buffer.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0
				);
			}

			previousChunk = buf;
		};

		socket.prependListener('close', onSocketClose);
		socket.on('data', onData);

		const removeSocketListeners = () => {
			socket.removeListener('close', onSocketClose);
			socket.removeListener('data', onData);
		};

		request.on('close', removeSocketListeners);
		request.on('abort', removeSocketListeners);
	});
}

Object.defineProperty(exports, "Blob", ({
	enumerable: true,
	get: function () {
		return webBlob.Blob;
	}
}));
Object.defineProperty(exports, "ReadableStream", ({
	enumerable: true,
	get: function () {
		return webBlob.ReadableStream;
	}
}));
Object.defineProperty(exports, "File", ({
	enumerable: true,
	get: function () {
		return webFile.File;
	}
}));
Object.defineProperty(exports, "FormData", ({
	enumerable: true,
	get: function () {
		return webFormData.FormData;
	}
}));
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports["default"] = fetch;
exports.fetch = fetch;

exports = module.exports = Object.assign(fetch, exports);
//# sourceMappingURL=lib.node.cjs.map


/***/ }),

/***/ 9379:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var webBlob = __webpack_require__(6985);

/**
 * @implements {globalThis.File}
 */
class File extends webBlob.Blob {
  /**
   *
   * @param {BlobPart[]} init
   * @param {string} name - A USVString representing the file name or the path
   * to the file.
   * @param {FilePropertyBag} [options]
   */
  constructor(
    init,
    name = panic(new TypeError("File constructor requires name argument")),
    options = {}
  ) {
    super(init, options);
    // Per File API spec https://w3c.github.io/FileAPI/#file-constructor
    // Every "/" character of file name must be replaced with a ":".
    /** @private */
    this._name = name;
    // It appears that browser do not follow the spec here.
    // String(name).replace(/\//g, ":")
    /** @private */
    this._lastModified = options.lastModified || Date.now();
  }

  /**
   * The name of the file referenced by the File object.
   * @type {string}
   */
  get name() {
    return this._name
  }

  /**
   * The path the URL of the File is relative to.
   * @type {string}
   */
  get webkitRelativePath() {
    return ""
  }

  /**
   * Returns the last modified time of the file, in millisecond since the UNIX
   * epoch (January 1st, 1970 at Midnight).
   * @returns {number}
   */
  get lastModified() {
    return this._lastModified
  }

  get [Symbol.toStringTag]() {
    return "File"
  }
}

/**
 * @param {*} error
 * @returns {never}
 */
const panic = error => {
  throw error
};

exports.File = File;
//# sourceMappingURL=file.cjs.map


/***/ }),

/***/ 2706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var webBlob = __webpack_require__(6985);
var file = __webpack_require__(9379);

// Electron-renderer should get the browser implementation instead of node
// Browser configuration is not enough

// Marking export as a DOM File object instead of custom class.
/** @type {typeof globalThis.File} */
const File = file.File;

Object.defineProperty(exports, "Blob", ({
	enumerable: true,
	get: function () {
		return webBlob.Blob;
	}
}));
exports.File = File;
//# sourceMappingURL=lib.node.cjs.map


/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * @implements {globalThis.FormData}
 */
class FormData {
  /**
   * @param {HTMLFormElement} [form]
   */
  constructor(form) {
    /**
     * @private
     * @readonly
     * @type {Array<[string, FormDataEntryValue]>}
     */
    this._entries = [];

    Object.defineProperty(this, "_entries", { enumerable: false });

    if (isHTMLFormElement(form)) {
      for (const element of form.elements) {
        if (isSelectElement(element)) {
          for (const option of element.options) {
            if (option.selected) {
              this.append(element.name, option.value);
            }
          }
        } else if (
          isInputElement(element) &&
          (element.checked || !["radio", "checkbox"].includes(element.type)) &&
          element.name
        ) {
          this.append(element.name, element.value);
        }
      }
    }
  }
  get [Symbol.toStringTag]() {
    return "FormData";
  }

  /**
   * Appends a new value onto an existing key inside a FormData object, or adds
   * the key if it does not already exist.
   *
   * The difference between `set` and `append` is that if the specified key
   * already exists, `set` will overwrite all existing values with the new one,
   * whereas `append` will append the new value onto the end of the existing
   * set of values.
   *
   * @param {string} name
   * @param {string|Blob|File} value - The name of the field whose data is
   * contained in value.
   * @param {string} [filename] - The filename reported to the server, when a
   * value is a `Blob` or a `File`. The default filename for a `Blob` objects is
   * `"blob"`. The default filename for a `File` is the it's name.
   */
  append(
    name,
    value = panic(
      new TypeError("FormData.append: requires at least 2 arguments")
    ),
    filename
  ) {
    this._entries.push([name, toEntryValue(value, filename)]);
  }

  /**
   * Deletes a key and all its values from a FormData object.
   *
   * @param {string} name
   */
  delete(
    name = panic(new TypeError("FormData.delete: requires string argument"))
  ) {
    const entries = this._entries;
    let index = 0;
    while (index < entries.length) {
      const [entryName] = /** @type {[string, FormDataEntryValue]}*/ (
        entries[index]
      );
      if (entryName === name) {
        entries.splice(index, 1);
      } else {
        index++;
      }
    }
  }

  /**
   * Returns the first value associated with a given key from within a
   * FormData object.
   *
   * @param {string} name
   * @returns {FormDataEntryValue|null}
   */

  get(name = panic(new TypeError("FormData.get: requires string argument"))) {
    for (const [entryName, value] of this._entries) {
      if (entryName === name) {
        return value;
      }
    }
    return null;
  }

  /**
   * Returns an array of all the values associated with a given key from within
   * a FormData.
   *
   * @param {string} name
   * @returns {FormDataEntryValue[]}
   */
  getAll(
    name = panic(new TypeError("FormData.getAll: requires string argument"))
  ) {
    const values = [];
    for (const [entryName, value] of this._entries) {
      if (entryName === name) {
        values.push(value);
      }
    }
    return values;
  }

  /**
   * Returns a boolean stating whether a FormData object contains a certain key.
   *
   * @param {string} name
   */

  has(name = panic(new TypeError("FormData.has: requires string argument"))) {
    for (const [entryName] of this._entries) {
      if (entryName === name) {
        return true;
      }
    }
    return false;
  }

  /**
   * Sets a new value for an existing key inside a FormData object, or adds the
   * key/value if it does not already exist.
   *
   * @param {string} name
   * @param {string|Blob|File} value
   * @param {string} [filename]
   */

  set(
    name,
    value = panic(new TypeError("FormData.set: requires at least 2 arguments")),
    filename
  ) {
    let index = 0;
    const { _entries: entries } = this;
    const entryValue = toEntryValue(value, filename);
    let wasSet = false;
    while (index < entries.length) {
      const entry = /** @type {[string, FormDataEntryValue]}*/ (entries[index]);
      if (entry[0] === name) {
        if (wasSet) {
          entries.splice(index, 1);
        } else {
          wasSet = true;
          entry[1] = entryValue;
          index++;
        }
      } else {
        index++;
      }
    }

    if (!wasSet) {
      entries.push([name, entryValue]);
    }
  }

  /**
   * Method returns an iterator allowing to go through all key/value pairs
   * contained in this object.
   */
  entries() {
    return this._entries.values();
  }

  /**
   * Returns an iterator allowing to go through all keys of the key/value pairs
   * contained in this object.
   *
   * @returns {IterableIterator<string>}
   */
  *keys() {
    for (const [name] of this._entries) {
      yield name;
    }
  }

  /**
   * Returns an iterator allowing to go through all values contained in this
   * object.
   *
   * @returns {IterableIterator<FormDataEntryValue>}
   */
  *values() {
    for (const [_, value] of this._entries) {
      yield value;
    }
  }

  [Symbol.iterator]() {
    return this._entries.values();
  }

  /**
   * @param {(value: FormDataEntryValue, key: string, parent: globalThis.FormData) => void} fn
   * @param {any} [thisArg]
   * @returns {void}
   */
  forEach(fn, thisArg) {
    for (const [key, value] of this._entries) {
      fn.call(thisArg, value, key, this);
    }
  }
}

/**
 * @param {any} value
 * @returns {value is HTMLFormElement}
 */
const isHTMLFormElement = (value) =>
  Object.prototype.toString.call(value) === "[object HTMLFormElement]";

/**
 * @param {string|Blob|File} value
 * @param {string} [filename]
 * @returns {FormDataEntryValue}
 */
const toEntryValue = (value, filename) => {
  if (isFile(value)) {
    return filename != null ? new BlobFile([value], filename, value) : value;
  } else if (isBlob(value)) {
    return new BlobFile([value], filename != null ? filename : "blob");
  } else {
    if (filename != null && filename != "") {
      throw new TypeError(
        "filename is only supported when value is Blob or File"
      );
    }
    return `${value}`;
  }
};

/**
 * @param {any} value
 * @returns {value is File}
 */
const isFile = (value) =>
  Object.prototype.toString.call(value) === "[object File]" &&
  typeof value.name === "string";

/**
 * @param {any} value
 * @returns {value is Blob}
 */
const isBlob = (value) =>
  Object.prototype.toString.call(value) === "[object Blob]";

/**
 * Simple `File` implementation that just wraps a given blob.
 * @implements {globalThis.File}
 */
const BlobFile = class File {
  /**
   * @param {[Blob]} parts
   * @param {string} name
   * @param {FilePropertyBag} [options]
   */
  constructor([blob], name, { lastModified = Date.now() } = {}) {
    this.blob = blob;
    this.name = name;
    this.lastModified = lastModified;
  }
  get webkitRelativePath() {
    return "";
  }
  get size() {
    return this.blob.size;
  }
  get type() {
    return this.blob.type;
  }
  /**
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [contentType]
   */
  slice(start, end, contentType) {
    return this.blob.slice(start, end, contentType);
  }
  stream() {
    return this.blob.stream();
  }
  text() {
    return this.blob.text();
  }
  arrayBuffer() {
    return this.blob.arrayBuffer();
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
};

/**
 * @param {*} error
 * @returns {never}
 */
const panic = (error) => {
  throw error;
};

/**
 *
 * @param {Element} element
 * @returns {element is HTMLSelectElement}
 */
function isSelectElement(element) {
  return element.tagName === "SELECT";
}

/**
 *
 * @param {Element} element
 * @returns {element is HTMLInputElement}
 */
function isInputElement(element) {
  return element.tagName === "INPUT" || element.tagName === "TEXTAREA";
}

exports.FormData = FormData;
//# sourceMappingURL=form-data.cjs.map


/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({ value: true }));

var formData = __webpack_require__(880);

// @ts-check

const FormData = formData.FormData;

exports.FormData = FormData;
//# sourceMappingURL=lib.node.cjs.map


/***/ }),

/***/ 2356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5993);


/***/ }),

/***/ 4634:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lookup: () => (/* binding */ lookup),
/* harmony export */   mimes: () => (/* binding */ mimes)
/* harmony export */ });
const mimes = {
  "ez": "application/andrew-inset",
  "aw": "application/applixware",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "dwd": "application/atsc-dwd+xml",
  "held": "application/atsc-held+xml",
  "rsat": "application/atsc-rsat+xml",
  "bdoc": "application/bdoc",
  "xcs": "application/calendar+xml",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cu": "application/cu-seeme",
  "mpd": "application/dash+xml",
  "davmount": "application/davmount+xml",
  "dbk": "application/docbook+xml",
  "dssc": "application/dssc+der",
  "xdssc": "application/dssc+xml",
  "es": "application/ecmascript",
  "ecma": "application/ecmascript",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "epub": "application/epub+zip",
  "exi": "application/exi",
  "fdt": "application/fdt+xml",
  "pfr": "application/font-tdpfr",
  "geojson": "application/geo+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "hjson": "application/hjson",
  "stk": "application/hyperstudio",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "its": "application/its+xml",
  "jar": "application/java-archive",
  "war": "application/java-archive",
  "ear": "application/java-archive",
  "ser": "application/java-serialized-object",
  "class": "application/java-vm",
  "js": "application/javascript",
  "mjs": "application/javascript",
  "json": "application/json",
  "map": "application/json",
  "json5": "application/json5",
  "jsonml": "application/jsonml+json",
  "jsonld": "application/ld+json",
  "lgr": "application/lgr+xml",
  "lostxml": "application/lost+xml",
  "hqx": "application/mac-binhex40",
  "cpt": "application/mac-compactpro",
  "mads": "application/mads+xml",
  "webmanifest": "application/manifest+json",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ma": "application/mathematica",
  "nb": "application/mathematica",
  "mb": "application/mathematica",
  "mathml": "application/mathml+xml",
  "mbox": "application/mbox",
  "mscml": "application/mediaservercontrol+xml",
  "metalink": "application/metalink+xml",
  "meta4": "application/metalink4+xml",
  "mets": "application/mets+xml",
  "maei": "application/mmt-aei+xml",
  "musd": "application/mmt-usd+xml",
  "mods": "application/mods+xml",
  "m21": "application/mp21",
  "mp21": "application/mp21",
  "mp4s": "application/mp4",
  "m4p": "application/mp4",
  "doc": "application/msword",
  "dot": "application/msword",
  "mxf": "application/mxf",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "cjs": "application/node",
  "bin": "application/octet-stream",
  "dms": "application/octet-stream",
  "lrf": "application/octet-stream",
  "mar": "application/octet-stream",
  "so": "application/octet-stream",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "pkg": "application/octet-stream",
  "bpk": "application/octet-stream",
  "dump": "application/octet-stream",
  "elc": "application/octet-stream",
  "deploy": "application/octet-stream",
  "exe": "application/octet-stream",
  "dll": "application/octet-stream",
  "deb": "application/octet-stream",
  "dmg": "application/octet-stream",
  "iso": "application/octet-stream",
  "img": "application/octet-stream",
  "msi": "application/octet-stream",
  "msp": "application/octet-stream",
  "msm": "application/octet-stream",
  "buffer": "application/octet-stream",
  "oda": "application/oda",
  "opf": "application/oebps-package+xml",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "onetmp": "application/onenote",
  "onepkg": "application/onenote",
  "oxps": "application/oxps",
  "relo": "application/p2p-overlay+xml",
  "xer": "application/patch-ops-error+xml",
  "pdf": "application/pdf",
  "pgp": "application/pgp-encrypted",
  "asc": "application/pgp-signature",
  "sig": "application/pgp-signature",
  "prf": "application/pics-rules",
  "p10": "application/pkcs10",
  "p7m": "application/pkcs7-mime",
  "p7c": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "ac": "application/pkix-attr-cert",
  "cer": "application/pkix-cert",
  "crl": "application/pkix-crl",
  "pkipath": "application/pkix-pkipath",
  "pki": "application/pkixcmp",
  "pls": "application/pls+xml",
  "ai": "application/postscript",
  "eps": "application/postscript",
  "ps": "application/postscript",
  "provx": "application/provenance+xml",
  "cww": "application/prs.cww",
  "pskcxml": "application/pskc+xml",
  "raml": "application/raml+yaml",
  "rdf": "application/rdf+xml",
  "owl": "application/rdf+xml",
  "rif": "application/reginfo+xml",
  "rnc": "application/relax-ng-compact-syntax",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rs": "application/rls-services+xml",
  "rapd": "application/route-apd+xml",
  "sls": "application/route-s-tsid+xml",
  "rusd": "application/route-usd+xml",
  "gbr": "application/rpki-ghostbusters",
  "mft": "application/rpki-manifest",
  "roa": "application/rpki-roa",
  "rsd": "application/rsd+xml",
  "rss": "application/rss+xml",
  "rtf": "application/rtf",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "spq": "application/scvp-vp-request",
  "spp": "application/scvp-vp-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "shf": "application/shf+xml",
  "siv": "application/sieve",
  "sieve": "application/sieve",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "rq": "application/sparql-query",
  "srx": "application/sparql-results+xml",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "sru": "application/sru+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "swidtag": "application/swid+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "tfi": "application/thraud+xml",
  "tsd": "application/timestamped-data",
  "toml": "application/toml",
  "trig": "application/trig",
  "ttml": "application/ttml+xml",
  "ubj": "application/ubjson",
  "rsheet": "application/urc-ressheet+xml",
  "td": "application/urc-targetdesc+xml",
  "vxml": "application/voicexml+xml",
  "wasm": "application/wasm",
  "wgt": "application/widget",
  "hlp": "application/winhlp",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xdf": "application/xcap-diff+xml",
  "xel": "application/xcap-el+xml",
  "xns": "application/xcap-ns+xml",
  "xenc": "application/xenc+xml",
  "xhtml": "application/xhtml+xml",
  "xht": "application/xhtml+xml",
  "xlf": "application/xliff+xml",
  "xml": "application/xml",
  "xsl": "application/xml",
  "xsd": "application/xml",
  "rng": "application/xml",
  "dtd": "application/xml-dtd",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xslt": "application/xml",
  "xspf": "application/xspf+xml",
  "mxml": "application/xv+xml",
  "xhvml": "application/xv+xml",
  "xvml": "application/xv+xml",
  "xvm": "application/xv+xml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "zip": "application/zip",
  "3gpp": "video/3gpp",
  "adp": "audio/adpcm",
  "amr": "audio/amr",
  "au": "audio/basic",
  "snd": "audio/basic",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "kar": "audio/midi",
  "rmi": "audio/midi",
  "mxmf": "audio/mobile-xmf",
  "mp3": "audio/mpeg",
  "m4a": "audio/mp4",
  "mp4a": "audio/mp4",
  "mpga": "audio/mpeg",
  "mp2": "audio/mpeg",
  "mp2a": "audio/mpeg",
  "m2a": "audio/mpeg",
  "m3a": "audio/mpeg",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "spx": "audio/ogg",
  "opus": "audio/ogg",
  "s3m": "audio/s3m",
  "sil": "audio/silk",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "xm": "audio/xm",
  "ttc": "font/collection",
  "otf": "font/otf",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "exr": "image/aces",
  "apng": "image/apng",
  "avif": "image/avif",
  "bmp": "image/bmp",
  "cgm": "image/cgm",
  "drle": "image/dicom-rle",
  "emf": "image/emf",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gif": "image/gif",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "hsj2": "image/hsj2",
  "ief": "image/ief",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpg2": "image/jp2",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "jpe": "image/jpeg",
  "jph": "image/jph",
  "jhc": "image/jphc",
  "jpm": "image/jpm",
  "jpx": "image/jpx",
  "jpf": "image/jpx",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "png": "image/png",
  "btif": "image/prs.btif",
  "pti": "image/prs.pti",
  "sgi": "image/sgi",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "t38": "image/t38",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "tfx": "image/tiff-fx",
  "webp": "image/webp",
  "wmf": "image/wmf",
  "disposition-notification": "message/disposition-notification",
  "u8msg": "message/global",
  "u8dsn": "message/global-delivery-status",
  "u8mdn": "message/global-disposition-notification",
  "u8hdr": "message/global-headers",
  "eml": "message/rfc822",
  "mime": "message/rfc822",
  "3mf": "model/3mf",
  "gltf": "model/gltf+json",
  "glb": "model/gltf-binary",
  "igs": "model/iges",
  "iges": "model/iges",
  "msh": "model/mesh",
  "mesh": "model/mesh",
  "silo": "model/mesh",
  "mtl": "model/mtl",
  "obj": "model/obj",
  "stpz": "model/step+zip",
  "stpxz": "model/step-xml+zip",
  "stl": "model/stl",
  "wrl": "model/vrml",
  "vrml": "model/vrml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3d": "model/x3d+xml",
  "x3dz": "model/x3d+xml",
  "appcache": "text/cache-manifest",
  "manifest": "text/cache-manifest",
  "ics": "text/calendar",
  "ifb": "text/calendar",
  "coffee": "text/coffeescript",
  "litcoffee": "text/coffeescript",
  "css": "text/css",
  "csv": "text/csv",
  "html": "text/html",
  "htm": "text/html",
  "shtml": "text/html",
  "jade": "text/jade",
  "jsx": "text/jsx",
  "less": "text/less",
  "markdown": "text/markdown",
  "md": "text/markdown",
  "mml": "text/mathml",
  "mdx": "text/mdx",
  "n3": "text/n3",
  "txt": "text/plain",
  "text": "text/plain",
  "conf": "text/plain",
  "def": "text/plain",
  "list": "text/plain",
  "log": "text/plain",
  "in": "text/plain",
  "ini": "text/plain",
  "dsc": "text/prs.lines.tag",
  "rtx": "text/richtext",
  "sgml": "text/sgml",
  "sgm": "text/sgml",
  "shex": "text/shex",
  "slim": "text/slim",
  "slm": "text/slim",
  "spdx": "text/spdx",
  "stylus": "text/stylus",
  "styl": "text/stylus",
  "tsv": "text/tab-separated-values",
  "t": "text/troff",
  "tr": "text/troff",
  "roff": "text/troff",
  "man": "text/troff",
  "me": "text/troff",
  "ms": "text/troff",
  "ttl": "text/turtle",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "vtt": "text/vtt",
  "yaml": "text/yaml",
  "yml": "text/yaml",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "m4s": "video/iso.segment",
  "jpgv": "video/jpeg",
  "jpgm": "image/jpm",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "ts": "video/mp2t",
  "mp4": "video/mp4",
  "mp4v": "video/mp4",
  "mpg4": "video/mp4",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "qt": "video/quicktime",
  "mov": "video/quicktime",
  "webm": "video/webm"
};

function lookup(extn) {
	let tmp = ('' + extn).trim().toLowerCase();
	let idx = tmp.lastIndexOf('.');
	return mimes[!~idx ? tmp : tmp.substring(++idx)];
}


/***/ }),

/***/ 8265:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextDecoder: () => (/* binding */ Decoder),
/* harmony export */   TextEncoder: () => (/* binding */ Encoder)
/* harmony export */ });
// In node `export { TextEncoder }` throws:
// "Export 'TextEncoder' is not defined in module"
// To workaround we first define constants and then export with as.
const Encoder = TextEncoder
const Decoder = TextDecoder




/***/ }),

/***/ 5993:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteLengthQueuingStrategy: () => (/* binding */ ByteLengthQueuingStrategy),
/* harmony export */   CountQueuingStrategy: () => (/* binding */ CountQueuingStrategy),
/* harmony export */   ReadableByteStreamController: () => (/* binding */ ReadableByteStreamController),
/* harmony export */   ReadableStream: () => (/* binding */ ReadableStream),
/* harmony export */   ReadableStreamBYOBReader: () => (/* binding */ ReadableStreamBYOBReader),
/* harmony export */   ReadableStreamBYOBRequest: () => (/* binding */ ReadableStreamBYOBRequest),
/* harmony export */   ReadableStreamDefaultController: () => (/* binding */ ReadableStreamDefaultController),
/* harmony export */   ReadableStreamDefaultReader: () => (/* binding */ ReadableStreamDefaultReader),
/* harmony export */   TransformStream: () => (/* binding */ TransformStream),
/* harmony export */   TransformStreamDefaultController: () => (/* binding */ TransformStreamDefaultController),
/* harmony export */   WritableStream: () => (/* binding */ WritableStream),
/* harmony export */   WritableStreamDefaultController: () => (/* binding */ WritableStreamDefaultController),
/* harmony export */   WritableStreamDefaultWriter: () => (/* binding */ WritableStreamDefaultWriter)
/* harmony export */ });
/**
 * web-streams-polyfill v3.2.1
 */
/// <reference lib="es2015.symbol" />
var SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ?
    Symbol :
    function (description) { return "Symbol(" + description + ")"; };

/// <reference lib="dom" />
function noop() {
    return undefined;
}
function getGlobals() {
    if (typeof self !== 'undefined') {
        return self;
    }
    else if (typeof window !== 'undefined') {
        return window;
    }
    else if (typeof global !== 'undefined') {
        return global;
    }
    return undefined;
}
var globals = getGlobals();

function typeIsObject(x) {
    return (typeof x === 'object' && x !== null) || typeof x === 'function';
}
var rethrowAssertionErrorRejection = noop;

var originalPromise = Promise;
var originalPromiseThen = Promise.prototype.then;
var originalPromiseResolve = Promise.resolve.bind(originalPromise);
var originalPromiseReject = Promise.reject.bind(originalPromise);
function newPromise(executor) {
    return new originalPromise(executor);
}
function promiseResolvedWith(value) {
    return originalPromiseResolve(value);
}
function promiseRejectedWith(reason) {
    return originalPromiseReject(reason);
}
function PerformPromiseThen(promise, onFulfilled, onRejected) {
    // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
    // approximation.
    return originalPromiseThen.call(promise, onFulfilled, onRejected);
}
function uponPromise(promise, onFulfilled, onRejected) {
    PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
}
function uponFulfillment(promise, onFulfilled) {
    uponPromise(promise, onFulfilled);
}
function uponRejection(promise, onRejected) {
    uponPromise(promise, undefined, onRejected);
}
function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
    return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
}
function setPromiseIsHandledToTrue(promise) {
    PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
}
var queueMicrotask = (function () {
    var globalQueueMicrotask = globals && globals.queueMicrotask;
    if (typeof globalQueueMicrotask === 'function') {
        return globalQueueMicrotask;
    }
    var resolvedPromise = promiseResolvedWith(undefined);
    return function (fn) { return PerformPromiseThen(resolvedPromise, fn); };
})();
function reflectCall(F, V, args) {
    if (typeof F !== 'function') {
        throw new TypeError('Argument is not a function');
    }
    return Function.prototype.apply.call(F, V, args);
}
function promiseCall(F, V, args) {
    try {
        return promiseResolvedWith(reflectCall(F, V, args));
    }
    catch (value) {
        return promiseRejectedWith(value);
    }
}

// Original from Chromium
// https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
var QUEUE_MAX_ARRAY_SIZE = 16384;
/**
 * Simple queue structure.
 *
 * Avoids scalability issues with using a packed array directly by using
 * multiple arrays in a linked list and keeping the array size bounded.
 */
var SimpleQueue = /** @class */ (function () {
    function SimpleQueue() {
        this._cursor = 0;
        this._size = 0;
        // _front and _back are always defined.
        this._front = {
            _elements: [],
            _next: undefined
        };
        this._back = this._front;
        // The cursor is used to avoid calling Array.shift().
        // It contains the index of the front element of the array inside the
        // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
        this._cursor = 0;
        // When there is only one node, size === elements.length - cursor.
        this._size = 0;
    }
    Object.defineProperty(SimpleQueue.prototype, "length", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    // For exception safety, this method is structured in order:
    // 1. Read state
    // 2. Calculate required state mutations
    // 3. Perform state mutations
    SimpleQueue.prototype.push = function (element) {
        var oldBack = this._back;
        var newBack = oldBack;
        if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
                _elements: [],
                _next: undefined
            };
        }
        // push() is the mutation most likely to throw an exception, so it
        // goes first.
        oldBack._elements.push(element);
        if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
        }
        ++this._size;
    };
    // Like push(), shift() follows the read -> calculate -> mutate pattern for
    // exception safety.
    SimpleQueue.prototype.shift = function () { // must not be called on an empty queue
        var oldFront = this._front;
        var newFront = oldFront;
        var oldCursor = this._cursor;
        var newCursor = oldCursor + 1;
        var elements = oldFront._elements;
        var element = elements[oldCursor];
        if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
        }
        // No mutations before this point.
        --this._size;
        this._cursor = newCursor;
        if (oldFront !== newFront) {
            this._front = newFront;
        }
        // Permit shifted element to be garbage collected.
        elements[oldCursor] = undefined;
        return element;
    };
    // The tricky thing about forEach() is that it can be called
    // re-entrantly. The queue may be mutated inside the callback. It is easy to
    // see that push() within the callback has no negative effects since the end
    // of the queue is checked for on every iteration. If shift() is called
    // repeatedly within the callback then the next iteration may return an
    // element that has been removed. In this case the callback will be called
    // with undefined values until we either "catch up" with elements that still
    // exist or reach the back of the queue.
    SimpleQueue.prototype.forEach = function (callback) {
        var i = this._cursor;
        var node = this._front;
        var elements = node._elements;
        while (i !== elements.length || node._next !== undefined) {
            if (i === elements.length) {
                node = node._next;
                elements = node._elements;
                i = 0;
                if (elements.length === 0) {
                    break;
                }
            }
            callback(elements[i]);
            ++i;
        }
    };
    // Return the element that would be returned if shift() was called now,
    // without modifying the queue.
    SimpleQueue.prototype.peek = function () { // must not be called on an empty queue
        var front = this._front;
        var cursor = this._cursor;
        return front._elements[cursor];
    };
    return SimpleQueue;
}());

function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === 'readable') {
        defaultReaderClosedPromiseInitialize(reader);
    }
    else if (stream._state === 'closed') {
        defaultReaderClosedPromiseInitializeAsResolved(reader);
    }
    else {
        defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
    }
}
// A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
// check.
function ReadableStreamReaderGenericCancel(reader, reason) {
    var stream = reader._ownerReadableStream;
    return ReadableStreamCancel(stream, reason);
}
function ReadableStreamReaderGenericRelease(reader) {
    if (reader._ownerReadableStream._state === 'readable') {
        defaultReaderClosedPromiseReject(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
    }
    else {
        defaultReaderClosedPromiseResetToRejected(reader, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness"));
    }
    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
}
// Helper functions for the readers.
function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
}
// Helper functions for the ReadableStreamDefaultReader.
function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = newPromise(function (resolve, reject) {
        reader._closedPromise_resolve = resolve;
        reader._closedPromise_reject = reject;
    });
}
function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseReject(reader, reason);
}
function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseResolve(reader);
}
function defaultReaderClosedPromiseReject(reader, reason) {
    if (reader._closedPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(reader._closedPromise);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
}
function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
}
function defaultReaderClosedPromiseResolve(reader) {
    if (reader._closedPromise_resolve === undefined) {
        return;
    }
    reader._closedPromise_resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
}

var AbortSteps = SymbolPolyfill('[[AbortSteps]]');
var ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
var CancelSteps = SymbolPolyfill('[[CancelSteps]]');
var PullSteps = SymbolPolyfill('[[PullSteps]]');

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
var NumberIsFinite = Number.isFinite || function (x) {
    return typeof x === 'number' && isFinite(x);
};

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
var MathTrunc = Math.trunc || function (v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
};

// https://heycam.github.io/webidl/#idl-dictionaries
function isDictionary(x) {
    return typeof x === 'object' || typeof x === 'function';
}
function assertDictionary(obj, context) {
    if (obj !== undefined && !isDictionary(obj)) {
        throw new TypeError(context + " is not an object.");
    }
}
// https://heycam.github.io/webidl/#idl-callback-functions
function assertFunction(x, context) {
    if (typeof x !== 'function') {
        throw new TypeError(context + " is not a function.");
    }
}
// https://heycam.github.io/webidl/#idl-object
function isObject(x) {
    return (typeof x === 'object' && x !== null) || typeof x === 'function';
}
function assertObject(x, context) {
    if (!isObject(x)) {
        throw new TypeError(context + " is not an object.");
    }
}
function assertRequiredArgument(x, position, context) {
    if (x === undefined) {
        throw new TypeError("Parameter " + position + " is required in '" + context + "'.");
    }
}
function assertRequiredField(x, field, context) {
    if (x === undefined) {
        throw new TypeError(field + " is required in '" + context + "'.");
    }
}
// https://heycam.github.io/webidl/#idl-unrestricted-double
function convertUnrestrictedDouble(value) {
    return Number(value);
}
function censorNegativeZero(x) {
    return x === 0 ? 0 : x;
}
function integerPart(x) {
    return censorNegativeZero(MathTrunc(x));
}
// https://heycam.github.io/webidl/#idl-unsigned-long-long
function convertUnsignedLongLongWithEnforceRange(value, context) {
    var lowerBound = 0;
    var upperBound = Number.MAX_SAFE_INTEGER;
    var x = Number(value);
    x = censorNegativeZero(x);
    if (!NumberIsFinite(x)) {
        throw new TypeError(context + " is not a finite number");
    }
    x = integerPart(x);
    if (x < lowerBound || x > upperBound) {
        throw new TypeError(context + " is outside the accepted range of " + lowerBound + " to " + upperBound + ", inclusive");
    }
    if (!NumberIsFinite(x) || x === 0) {
        return 0;
    }
    // TODO Use BigInt if supported?
    // let xBigInt = BigInt(integerPart(x));
    // xBigInt = BigInt.asUintN(64, xBigInt);
    // return Number(xBigInt);
    return x;
}

function assertReadableStream(x, context) {
    if (!IsReadableStream(x)) {
        throw new TypeError(context + " is not a ReadableStream.");
    }
}

// Abstract operations for the ReadableStream.
function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
}
// ReadableStream API exposed for controllers.
function ReadableStreamAddReadRequest(stream, readRequest) {
    stream._reader._readRequests.push(readRequest);
}
function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    var reader = stream._reader;
    var readRequest = reader._readRequests.shift();
    if (done) {
        readRequest._closeSteps();
    }
    else {
        readRequest._chunkSteps(chunk);
    }
}
function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
}
function ReadableStreamHasDefaultReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
        return false;
    }
    if (!IsReadableStreamDefaultReader(reader)) {
        return false;
    }
    return true;
}
/**
 * A default reader vended by a {@link ReadableStream}.
 *
 * @public
 */
var ReadableStreamDefaultReader = /** @class */ (function () {
    function ReadableStreamDefaultReader(stream) {
        assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
        assertReadableStream(stream, 'First parameter');
        if (IsReadableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive reading by another reader');
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readRequests = new SimpleQueue();
    }
    Object.defineProperty(ReadableStreamDefaultReader.prototype, "closed", {
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed,
         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
         */
        get: function () {
            if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
            }
            return this._closedPromise;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    ReadableStreamDefaultReader.prototype.cancel = function (reason) {
        if (reason === void 0) { reason = undefined; }
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
    };
    /**
     * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    ReadableStreamDefaultReader.prototype.read = function () {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('read from'));
        }
        var resolvePromise;
        var rejectPromise;
        var promise = newPromise(function (resolve, reject) {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        var readRequest = {
            _chunkSteps: function (chunk) { return resolvePromise({ value: chunk, done: false }); },
            _closeSteps: function () { return resolvePromise({ value: undefined, done: true }); },
            _errorSteps: function (e) { return rejectPromise(e); }
        };
        ReadableStreamDefaultReaderRead(this, readRequest);
        return promise;
    };
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    ReadableStreamDefaultReader.prototype.releaseLock = function () {
        if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
            return;
        }
        if (this._readRequests.length > 0) {
            throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
    };
    return ReadableStreamDefaultReader;
}());
Object.defineProperties(ReadableStreamDefaultReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamDefaultReader',
        configurable: true
    });
}
// Abstract operations for the readers.
function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
        return false;
    }
    return x instanceof ReadableStreamDefaultReader;
}
function ReadableStreamDefaultReaderRead(reader, readRequest) {
    var stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === 'closed') {
        readRequest._closeSteps();
    }
    else if (stream._state === 'errored') {
        readRequest._errorSteps(stream._storedError);
    }
    else {
        stream._readableStreamController[PullSteps](readRequest);
    }
}
// Helper functions for the ReadableStreamDefaultReader.
function defaultReaderBrandCheckException(name) {
    return new TypeError("ReadableStreamDefaultReader.prototype." + name + " can only be used on a ReadableStreamDefaultReader");
}

/// <reference lib="es2018.asynciterable" />
var _a;
var AsyncIteratorPrototype;
if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
    // We're running inside a ES2018+ environment, but we're compiling to an older syntax.
    // We cannot access %AsyncIteratorPrototype% without non-ES2018 syntax, but we can re-create it.
    AsyncIteratorPrototype = (_a = {},
        // 25.1.3.1 %AsyncIteratorPrototype% [ @@asyncIterator ] ( )
        // https://tc39.github.io/ecma262/#sec-asynciteratorprototype-asynciterator
        _a[SymbolPolyfill.asyncIterator] = function () {
            return this;
        },
        _a);
    Object.defineProperty(AsyncIteratorPrototype, SymbolPolyfill.asyncIterator, { enumerable: false });
}

/// <reference lib="es2018.asynciterable" />
var ReadableStreamAsyncIteratorImpl = /** @class */ (function () {
    function ReadableStreamAsyncIteratorImpl(reader, preventCancel) {
        this._ongoingPromise = undefined;
        this._isFinished = false;
        this._reader = reader;
        this._preventCancel = preventCancel;
    }
    ReadableStreamAsyncIteratorImpl.prototype.next = function () {
        var _this = this;
        var nextSteps = function () { return _this._nextSteps(); };
        this._ongoingPromise = this._ongoingPromise ?
            transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
            nextSteps();
        return this._ongoingPromise;
    };
    ReadableStreamAsyncIteratorImpl.prototype.return = function (value) {
        var _this = this;
        var returnSteps = function () { return _this._returnSteps(value); };
        return this._ongoingPromise ?
            transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
            returnSteps();
    };
    ReadableStreamAsyncIteratorImpl.prototype._nextSteps = function () {
        var _this = this;
        if (this._isFinished) {
            return Promise.resolve({ value: undefined, done: true });
        }
        var reader = this._reader;
        if (reader._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('iterate'));
        }
        var resolvePromise;
        var rejectPromise;
        var promise = newPromise(function (resolve, reject) {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        var readRequest = {
            _chunkSteps: function (chunk) {
                _this._ongoingPromise = undefined;
                // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                // FIXME Is this a bug in the specification, or in the test?
                queueMicrotask(function () { return resolvePromise({ value: chunk, done: false }); });
            },
            _closeSteps: function () {
                _this._ongoingPromise = undefined;
                _this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                resolvePromise({ value: undefined, done: true });
            },
            _errorSteps: function (reason) {
                _this._ongoingPromise = undefined;
                _this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                rejectPromise(reason);
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promise;
    };
    ReadableStreamAsyncIteratorImpl.prototype._returnSteps = function (value) {
        if (this._isFinished) {
            return Promise.resolve({ value: value, done: true });
        }
        this._isFinished = true;
        var reader = this._reader;
        if (reader._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('finish iterating'));
        }
        if (!this._preventCancel) {
            var result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, function () { return ({ value: value, done: true }); });
        }
        ReadableStreamReaderGenericRelease(reader);
        return promiseResolvedWith({ value: value, done: true });
    };
    return ReadableStreamAsyncIteratorImpl;
}());
var ReadableStreamAsyncIteratorPrototype = {
    next: function () {
        if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
        }
        return this._asyncIteratorImpl.next();
    },
    return: function (value) {
        if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
        }
        return this._asyncIteratorImpl.return(value);
    }
};
if (AsyncIteratorPrototype !== undefined) {
    Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
}
// Abstract operations for the ReadableStream.
function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
    var reader = AcquireReadableStreamDefaultReader(stream);
    var impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
    iterator._asyncIteratorImpl = impl;
    return iterator;
}
function IsReadableStreamAsyncIterator(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
        return false;
    }
    try {
        // noinspection SuspiciousTypeOfGuard
        return x._asyncIteratorImpl instanceof
            ReadableStreamAsyncIteratorImpl;
    }
    catch (_a) {
        return false;
    }
}
// Helper functions for the ReadableStream.
function streamAsyncIteratorBrandCheckException(name) {
    return new TypeError("ReadableStreamAsyncIterator." + name + " can only be used on a ReadableSteamAsyncIterator");
}

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
var NumberIsNaN = Number.isNaN || function (x) {
    // eslint-disable-next-line no-self-compare
    return x !== x;
};

function CreateArrayFromList(elements) {
    // We use arrays to represent lists, so this is basically a no-op.
    // Do a slice though just in case we happen to depend on the unique-ness.
    return elements.slice();
}
function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
}
// Not implemented correctly
function TransferArrayBuffer(O) {
    return O;
}
// Not implemented correctly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function IsDetachedBuffer(O) {
    return false;
}
function ArrayBufferSlice(buffer, begin, end) {
    // ArrayBuffer.prototype.slice is not available on IE10
    // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
    if (buffer.slice) {
        return buffer.slice(begin, end);
    }
    var length = end - begin;
    var slice = new ArrayBuffer(length);
    CopyDataBlockBytes(slice, 0, buffer, begin, length);
    return slice;
}

function IsNonNegativeNumber(v) {
    if (typeof v !== 'number') {
        return false;
    }
    if (NumberIsNaN(v)) {
        return false;
    }
    if (v < 0) {
        return false;
    }
    return true;
}
function CloneAsUint8Array(O) {
    var buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
    return new Uint8Array(buffer);
}

function DequeueValue(container) {
    var pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
        container._queueTotalSize = 0;
    }
    return pair.value;
}
function EnqueueValueWithSize(container, value, size) {
    if (!IsNonNegativeNumber(size) || size === Infinity) {
        throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }
    container._queue.push({ value: value, size: size });
    container._queueTotalSize += size;
}
function PeekQueueValue(container) {
    var pair = container._queue.peek();
    return pair.value;
}
function ResetQueue(container) {
    container._queue = new SimpleQueue();
    container._queueTotalSize = 0;
}

/**
 * A pull-into request in a {@link ReadableByteStreamController}.
 *
 * @public
 */
var ReadableStreamBYOBRequest = /** @class */ (function () {
    function ReadableStreamBYOBRequest() {
        throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(ReadableStreamBYOBRequest.prototype, "view", {
        /**
         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
         */
        get: function () {
            if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException('view');
            }
            return this._view;
        },
        enumerable: false,
        configurable: true
    });
    ReadableStreamBYOBRequest.prototype.respond = function (bytesWritten) {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('respond');
        }
        assertRequiredArgument(bytesWritten, 1, 'respond');
        bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
        if (this._associatedReadableByteStreamController === undefined) {
            throw new TypeError('This BYOB request has been invalidated');
        }
        if (IsDetachedBuffer(this._view.buffer)) ;
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
    };
    ReadableStreamBYOBRequest.prototype.respondWithNewView = function (view) {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('respondWithNewView');
        }
        assertRequiredArgument(view, 1, 'respondWithNewView');
        if (!ArrayBuffer.isView(view)) {
            throw new TypeError('You can only respond with array buffer views');
        }
        if (this._associatedReadableByteStreamController === undefined) {
            throw new TypeError('This BYOB request has been invalidated');
        }
        if (IsDetachedBuffer(view.buffer)) ;
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
    };
    return ReadableStreamBYOBRequest;
}());
Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
    respond: { enumerable: true },
    respondWithNewView: { enumerable: true },
    view: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamBYOBRequest',
        configurable: true
    });
}
/**
 * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
 *
 * @public
 */
var ReadableByteStreamController = /** @class */ (function () {
    function ReadableByteStreamController() {
        throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(ReadableByteStreamController.prototype, "byobRequest", {
        /**
         * Returns the current BYOB pull request, or `null` if there isn't one.
         */
        get: function () {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('byobRequest');
            }
            return ReadableByteStreamControllerGetBYOBRequest(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReadableByteStreamController.prototype, "desiredSize", {
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
         */
        get: function () {
            if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException('desiredSize');
            }
            return ReadableByteStreamControllerGetDesiredSize(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    ReadableByteStreamController.prototype.close = function () {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('close');
        }
        if (this._closeRequested) {
            throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableByteStream._state;
        if (state !== 'readable') {
            throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be closed");
        }
        ReadableByteStreamControllerClose(this);
    };
    ReadableByteStreamController.prototype.enqueue = function (chunk) {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('enqueue');
        }
        assertRequiredArgument(chunk, 1, 'enqueue');
        if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError('chunk must be an array buffer view');
        }
        if (chunk.byteLength === 0) {
            throw new TypeError('chunk must have non-zero byteLength');
        }
        if (chunk.buffer.byteLength === 0) {
            throw new TypeError("chunk's buffer must have non-zero byteLength");
        }
        if (this._closeRequested) {
            throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableByteStream._state;
        if (state !== 'readable') {
            throw new TypeError("The stream (in " + state + " state) is not in the readable state and cannot be enqueued to");
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
    };
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    ReadableByteStreamController.prototype.error = function (e) {
        if (e === void 0) { e = undefined; }
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('error');
        }
        ReadableByteStreamControllerError(this, e);
    };
    /** @internal */
    ReadableByteStreamController.prototype[CancelSteps] = function (reason) {
        ReadableByteStreamControllerClearPendingPullIntos(this);
        ResetQueue(this);
        var result = this._cancelAlgorithm(reason);
        ReadableByteStreamControllerClearAlgorithms(this);
        return result;
    };
    /** @internal */
    ReadableByteStreamController.prototype[PullSteps] = function (readRequest) {
        var stream = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) {
            var entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain(this);
            var view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
            readRequest._chunkSteps(view);
            return;
        }
        var autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== undefined) {
            var buffer = void 0;
            try {
                buffer = new ArrayBuffer(autoAllocateChunkSize);
            }
            catch (bufferE) {
                readRequest._errorSteps(bufferE);
                return;
            }
            var pullIntoDescriptor = {
                buffer: buffer,
                bufferByteLength: autoAllocateChunkSize,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: 'default'
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
        }
        ReadableStreamAddReadRequest(stream, readRequest);
        ReadableByteStreamControllerCallPullIfNeeded(this);
    };
    return ReadableByteStreamController;
}());
Object.defineProperties(ReadableByteStreamController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    byobRequest: { enumerable: true },
    desiredSize: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableByteStreamController',
        configurable: true
    });
}
// Abstract operations for the ReadableByteStreamController.
function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
        return false;
    }
    return x instanceof ReadableByteStreamController;
}
function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
        return false;
    }
    return x instanceof ReadableStreamBYOBRequest;
}
function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (!shouldPull) {
        return;
    }
    if (controller._pulling) {
        controller._pullAgain = true;
        return;
    }
    controller._pulling = true;
    // TODO: Test controller argument
    var pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, function () {
        controller._pulling = false;
        if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
    }, function (e) {
        ReadableByteStreamControllerError(controller, e);
    });
}
function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = new SimpleQueue();
}
function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    var done = false;
    if (stream._state === 'closed') {
        done = true;
    }
    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === 'default') {
        ReadableStreamFulfillReadRequest(stream, filledView, done);
    }
    else {
        ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
}
function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    var bytesFilled = pullIntoDescriptor.bytesFilled;
    var elementSize = pullIntoDescriptor.elementSize;
    return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
}
function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({ buffer: buffer, byteOffset: byteOffset, byteLength: byteLength });
    controller._queueTotalSize += byteLength;
}
function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    var elementSize = pullIntoDescriptor.elementSize;
    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    var totalBytesToCopyRemaining = maxBytesToCopy;
    var ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
        totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
        ready = true;
    }
    var queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
        var headOfQueue = queue.peek();
        var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
        var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
        if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
        }
        else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
        }
        controller._queueTotalSize -= bytesToCopy;
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
        totalBytesToCopyRemaining -= bytesToCopy;
    }
    return ready;
}
function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    pullIntoDescriptor.bytesFilled += size;
}
function ReadableByteStreamControllerHandleQueueDrain(controller) {
    if (controller._queueTotalSize === 0 && controller._closeRequested) {
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(controller._controlledReadableByteStream);
    }
    else {
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
}
function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === null) {
        return;
    }
    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = null;
    controller._byobRequest = null;
}
function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    while (controller._pendingPullIntos.length > 0) {
        if (controller._queueTotalSize === 0) {
            return;
        }
        var pullIntoDescriptor = controller._pendingPullIntos.peek();
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        }
    }
}
function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
    var stream = controller._controlledReadableByteStream;
    var elementSize = 1;
    if (view.constructor !== DataView) {
        elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    var ctor = view.constructor;
    // try {
    var buffer = TransferArrayBuffer(view.buffer);
    // } catch (e) {
    //   readIntoRequest._errorSteps(e);
    //   return;
    // }
    var pullIntoDescriptor = {
        buffer: buffer,
        bufferByteLength: buffer.byteLength,
        byteOffset: view.byteOffset,
        byteLength: view.byteLength,
        bytesFilled: 0,
        elementSize: elementSize,
        viewConstructor: ctor,
        readerType: 'byob'
    };
    if (controller._pendingPullIntos.length > 0) {
        controller._pendingPullIntos.push(pullIntoDescriptor);
        // No ReadableByteStreamControllerCallPullIfNeeded() call since:
        // - No change happens on desiredSize
        // - The source has already been notified of that there's at least 1 pending read(view)
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        return;
    }
    if (stream._state === 'closed') {
        var emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
        readIntoRequest._closeSteps(emptyView);
        return;
    }
    if (controller._queueTotalSize > 0) {
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
        }
        if (controller._closeRequested) {
            var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
            ReadableByteStreamControllerError(controller, e);
            readIntoRequest._errorSteps(e);
            return;
        }
    }
    controller._pendingPullIntos.push(pullIntoDescriptor);
    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    var stream = controller._controlledReadableByteStream;
    if (ReadableStreamHasBYOBReader(stream)) {
        while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
        }
    }
}
function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
        return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
        var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        var remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
}
function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos.peek();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    var state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        ReadableByteStreamControllerRespondInClosedState(controller);
    }
    else {
        ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    var descriptor = controller._pendingPullIntos.shift();
    return descriptor;
}
function ReadableByteStreamControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableByteStream;
    if (stream._state !== 'readable') {
        return false;
    }
    if (controller._closeRequested) {
        return false;
    }
    if (!controller._started) {
        return false;
    }
    if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
    }
    if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        return true;
    }
    var desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
        return true;
    }
    return false;
}
function ReadableByteStreamControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = undefined;
    controller._cancelAlgorithm = undefined;
}
// A client of ReadableByteStreamController may use these functions directly to bypass state check.
function ReadableByteStreamControllerClose(controller) {
    var stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== 'readable') {
        return;
    }
    if (controller._queueTotalSize > 0) {
        controller._closeRequested = true;
        return;
    }
    if (controller._pendingPullIntos.length > 0) {
        var firstPendingPullInto = controller._pendingPullIntos.peek();
        if (firstPendingPullInto.bytesFilled > 0) {
            var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
            ReadableByteStreamControllerError(controller, e);
            throw e;
        }
    }
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamClose(stream);
}
function ReadableByteStreamControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== 'readable') {
        return;
    }
    var buffer = chunk.buffer;
    var byteOffset = chunk.byteOffset;
    var byteLength = chunk.byteLength;
    var transferredBuffer = TransferArrayBuffer(buffer);
    if (controller._pendingPullIntos.length > 0) {
        var firstPendingPullInto = controller._pendingPullIntos.peek();
        if (IsDetachedBuffer(firstPendingPullInto.buffer)) ;
        firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
    }
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    if (ReadableStreamHasDefaultReader(stream)) {
        if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        else {
            if (controller._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
            }
            var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
        }
    }
    else if (ReadableStreamHasBYOBReader(stream)) {
        // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    else {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerError(controller, e) {
    var stream = controller._controlledReadableByteStream;
    if (stream._state !== 'readable') {
        return;
    }
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
}
function ReadableByteStreamControllerGetBYOBRequest(controller) {
    if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
        var firstDescriptor = controller._pendingPullIntos.peek();
        var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
        var byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
        SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
        controller._byobRequest = byobRequest;
    }
    return controller._byobRequest;
}
function ReadableByteStreamControllerGetDesiredSize(controller) {
    var state = controller._controlledReadableByteStream._state;
    if (state === 'errored') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos.peek();
    var state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        if (bytesWritten !== 0) {
            throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
        }
    }
    else {
        if (bytesWritten === 0) {
            throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
        }
        if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
            throw new RangeError('bytesWritten out of range');
        }
    }
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
}
function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    var firstDescriptor = controller._pendingPullIntos.peek();
    var state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        if (view.byteLength !== 0) {
            throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
        }
    }
    else {
        if (view.byteLength === 0) {
            throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
        }
    }
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
        throw new RangeError('The region specified by view does not match byobRequest');
    }
    if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
        throw new RangeError('The buffer of view has different capacity than byobRequest');
    }
    if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
        throw new RangeError('The region specified by view is larger than byobRequest');
    }
    var viewByteLength = view.byteLength;
    firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
    ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
}
function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
    controller._controlledReadableByteStream = stream;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._byobRequest = null;
    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    controller._queue = controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._closeRequested = false;
    controller._started = false;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    controller._autoAllocateChunkSize = autoAllocateChunkSize;
    controller._pendingPullIntos = new SimpleQueue();
    stream._readableStreamController = controller;
    var startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), function () {
        controller._started = true;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }, function (r) {
        ReadableByteStreamControllerError(controller, r);
    });
}
function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
    var controller = Object.create(ReadableByteStreamController.prototype);
    var startAlgorithm = function () { return undefined; };
    var pullAlgorithm = function () { return promiseResolvedWith(undefined); };
    var cancelAlgorithm = function () { return promiseResolvedWith(undefined); };
    if (underlyingByteSource.start !== undefined) {
        startAlgorithm = function () { return underlyingByteSource.start(controller); };
    }
    if (underlyingByteSource.pull !== undefined) {
        pullAlgorithm = function () { return underlyingByteSource.pull(controller); };
    }
    if (underlyingByteSource.cancel !== undefined) {
        cancelAlgorithm = function (reason) { return underlyingByteSource.cancel(reason); };
    }
    var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
    if (autoAllocateChunkSize === 0) {
        throw new TypeError('autoAllocateChunkSize must be greater than 0');
    }
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
}
function SetUpReadableStreamBYOBRequest(request, controller, view) {
    request._associatedReadableByteStreamController = controller;
    request._view = view;
}
// Helper functions for the ReadableStreamBYOBRequest.
function byobRequestBrandCheckException(name) {
    return new TypeError("ReadableStreamBYOBRequest.prototype." + name + " can only be used on a ReadableStreamBYOBRequest");
}
// Helper functions for the ReadableByteStreamController.
function byteStreamControllerBrandCheckException(name) {
    return new TypeError("ReadableByteStreamController.prototype." + name + " can only be used on a ReadableByteStreamController");
}

// Abstract operations for the ReadableStream.
function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
}
// ReadableStream API exposed for controllers.
function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
    stream._reader._readIntoRequests.push(readIntoRequest);
}
function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    var reader = stream._reader;
    var readIntoRequest = reader._readIntoRequests.shift();
    if (done) {
        readIntoRequest._closeSteps(chunk);
    }
    else {
        readIntoRequest._chunkSteps(chunk);
    }
}
function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
}
function ReadableStreamHasBYOBReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
        return false;
    }
    if (!IsReadableStreamBYOBReader(reader)) {
        return false;
    }
    return true;
}
/**
 * A BYOB reader vended by a {@link ReadableStream}.
 *
 * @public
 */
var ReadableStreamBYOBReader = /** @class */ (function () {
    function ReadableStreamBYOBReader(stream) {
        assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
        assertReadableStream(stream, 'First parameter');
        if (IsReadableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive reading by another reader');
        }
        if (!IsReadableByteStreamController(stream._readableStreamController)) {
            throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
                'source');
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readIntoRequests = new SimpleQueue();
    }
    Object.defineProperty(ReadableStreamBYOBReader.prototype, "closed", {
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the reader's lock is released before the stream finishes closing.
         */
        get: function () {
            if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException('closed'));
            }
            return this._closedPromise;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    ReadableStreamBYOBReader.prototype.cancel = function (reason) {
        if (reason === void 0) { reason = undefined; }
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
    };
    /**
     * Attempts to reads bytes into view, and returns a promise resolved with the result.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    ReadableStreamBYOBReader.prototype.read = function (view) {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('read'));
        }
        if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(new TypeError('view must be an array buffer view'));
        }
        if (view.byteLength === 0) {
            return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
        }
        if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(new TypeError("view's buffer must have non-zero byteLength"));
        }
        if (IsDetachedBuffer(view.buffer)) ;
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('read from'));
        }
        var resolvePromise;
        var rejectPromise;
        var promise = newPromise(function (resolve, reject) {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        var readIntoRequest = {
            _chunkSteps: function (chunk) { return resolvePromise({ value: chunk, done: false }); },
            _closeSteps: function (chunk) { return resolvePromise({ value: chunk, done: true }); },
            _errorSteps: function (e) { return rejectPromise(e); }
        };
        ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
        return promise;
    };
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    ReadableStreamBYOBReader.prototype.releaseLock = function () {
        if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
            return;
        }
        if (this._readIntoRequests.length > 0) {
            throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
    };
    return ReadableStreamBYOBReader;
}());
Object.defineProperties(ReadableStreamBYOBReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamBYOBReader',
        configurable: true
    });
}
// Abstract operations for the readers.
function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
        return false;
    }
    return x instanceof ReadableStreamBYOBReader;
}
function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
    var stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === 'errored') {
        readIntoRequest._errorSteps(stream._storedError);
    }
    else {
        ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
    }
}
// Helper functions for the ReadableStreamBYOBReader.
function byobReaderBrandCheckException(name) {
    return new TypeError("ReadableStreamBYOBReader.prototype." + name + " can only be used on a ReadableStreamBYOBReader");
}

function ExtractHighWaterMark(strategy, defaultHWM) {
    var highWaterMark = strategy.highWaterMark;
    if (highWaterMark === undefined) {
        return defaultHWM;
    }
    if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
        throw new RangeError('Invalid highWaterMark');
    }
    return highWaterMark;
}
function ExtractSizeAlgorithm(strategy) {
    var size = strategy.size;
    if (!size) {
        return function () { return 1; };
    }
    return size;
}

function convertQueuingStrategy(init, context) {
    assertDictionary(init, context);
    var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    var size = init === null || init === void 0 ? void 0 : init.size;
    return {
        highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
        size: size === undefined ? undefined : convertQueuingStrategySize(size, context + " has member 'size' that")
    };
}
function convertQueuingStrategySize(fn, context) {
    assertFunction(fn, context);
    return function (chunk) { return convertUnrestrictedDouble(fn(chunk)); };
}

function convertUnderlyingSink(original, context) {
    assertDictionary(original, context);
    var abort = original === null || original === void 0 ? void 0 : original.abort;
    var close = original === null || original === void 0 ? void 0 : original.close;
    var start = original === null || original === void 0 ? void 0 : original.start;
    var type = original === null || original === void 0 ? void 0 : original.type;
    var write = original === null || original === void 0 ? void 0 : original.write;
    return {
        abort: abort === undefined ?
            undefined :
            convertUnderlyingSinkAbortCallback(abort, original, context + " has member 'abort' that"),
        close: close === undefined ?
            undefined :
            convertUnderlyingSinkCloseCallback(close, original, context + " has member 'close' that"),
        start: start === undefined ?
            undefined :
            convertUnderlyingSinkStartCallback(start, original, context + " has member 'start' that"),
        write: write === undefined ?
            undefined :
            convertUnderlyingSinkWriteCallback(write, original, context + " has member 'write' that"),
        type: type
    };
}
function convertUnderlyingSinkAbortCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (reason) { return promiseCall(fn, original, [reason]); };
}
function convertUnderlyingSinkCloseCallback(fn, original, context) {
    assertFunction(fn, context);
    return function () { return promiseCall(fn, original, []); };
}
function convertUnderlyingSinkStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (controller) { return reflectCall(fn, original, [controller]); };
}
function convertUnderlyingSinkWriteCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (chunk, controller) { return promiseCall(fn, original, [chunk, controller]); };
}

function assertWritableStream(x, context) {
    if (!IsWritableStream(x)) {
        throw new TypeError(context + " is not a WritableStream.");
    }
}

function isAbortSignal(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    try {
        return typeof value.aborted === 'boolean';
    }
    catch (_a) {
        // AbortSignal.prototype.aborted throws if its brand check fails
        return false;
    }
}
var supportsAbortController = typeof AbortController === 'function';
/**
 * Construct a new AbortController, if supported by the platform.
 *
 * @internal
 */
function createAbortController() {
    if (supportsAbortController) {
        return new AbortController();
    }
    return undefined;
}

/**
 * A writable stream represents a destination for data, into which you can write.
 *
 * @public
 */
var WritableStream = /** @class */ (function () {
    function WritableStream(rawUnderlyingSink, rawStrategy) {
        if (rawUnderlyingSink === void 0) { rawUnderlyingSink = {}; }
        if (rawStrategy === void 0) { rawStrategy = {}; }
        if (rawUnderlyingSink === undefined) {
            rawUnderlyingSink = null;
        }
        else {
            assertObject(rawUnderlyingSink, 'First parameter');
        }
        var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
        var underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
        InitializeWritableStream(this);
        var type = underlyingSink.type;
        if (type !== undefined) {
            throw new RangeError('Invalid type is specified');
        }
        var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
        var highWaterMark = ExtractHighWaterMark(strategy, 1);
        SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
    }
    Object.defineProperty(WritableStream.prototype, "locked", {
        /**
         * Returns whether or not the writable stream is locked to a writer.
         */
        get: function () {
            if (!IsWritableStream(this)) {
                throw streamBrandCheckException$2('locked');
            }
            return IsWritableStreamLocked(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
     * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
     * mechanism of the underlying sink.
     *
     * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
     * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
     * the stream) if the stream is currently locked.
     */
    WritableStream.prototype.abort = function (reason) {
        if (reason === void 0) { reason = undefined; }
        if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2('abort'));
        }
        if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
        }
        return WritableStreamAbort(this, reason);
    };
    /**
     * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
     * close behavior. During this time any further attempts to write will fail (without erroring the stream).
     *
     * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
     * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
     * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
     */
    WritableStream.prototype.close = function () {
        if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2('close'));
        }
        if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
        }
        if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
        }
        return WritableStreamClose(this);
    };
    /**
     * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
     * is locked, no other writer can be acquired until this one is released.
     *
     * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
     * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
     * the same time, which would cause the resulting written data to be unpredictable and probably useless.
     */
    WritableStream.prototype.getWriter = function () {
        if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2('getWriter');
        }
        return AcquireWritableStreamDefaultWriter(this);
    };
    return WritableStream;
}());
Object.defineProperties(WritableStream.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    getWriter: { enumerable: true },
    locked: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStream',
        configurable: true
    });
}
// Abstract operations for the WritableStream.
function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
}
// Throws if and only if startAlgorithm throws.
function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    if (highWaterMark === void 0) { highWaterMark = 1; }
    if (sizeAlgorithm === void 0) { sizeAlgorithm = function () { return 1; }; }
    var stream = Object.create(WritableStream.prototype);
    InitializeWritableStream(stream);
    var controller = Object.create(WritableStreamDefaultController.prototype);
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
}
function InitializeWritableStream(stream) {
    stream._state = 'writable';
    // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
    // 'erroring' or 'errored'. May be set to an undefined value.
    stream._storedError = undefined;
    stream._writer = undefined;
    // Initialize to undefined first because the constructor of the controller checks this
    // variable to validate the caller.
    stream._writableStreamController = undefined;
    // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
    // producer without waiting for the queued writes to finish.
    stream._writeRequests = new SimpleQueue();
    // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
    // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
    stream._inFlightWriteRequest = undefined;
    // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
    // has been detached.
    stream._closeRequest = undefined;
    // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
    // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
    stream._inFlightCloseRequest = undefined;
    // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
    stream._pendingAbortRequest = undefined;
    // The backpressure signal set by the controller.
    stream._backpressure = false;
}
function IsWritableStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
        return false;
    }
    return x instanceof WritableStream;
}
function IsWritableStreamLocked(stream) {
    if (stream._writer === undefined) {
        return false;
    }
    return true;
}
function WritableStreamAbort(stream, reason) {
    var _a;
    if (stream._state === 'closed' || stream._state === 'errored') {
        return promiseResolvedWith(undefined);
    }
    stream._writableStreamController._abortReason = reason;
    (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
    // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
    // but it doesn't know that signaling abort runs author code that might have changed the state.
    // Widen the type again by casting to WritableStreamState.
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
        return promiseResolvedWith(undefined);
    }
    if (stream._pendingAbortRequest !== undefined) {
        return stream._pendingAbortRequest._promise;
    }
    var wasAlreadyErroring = false;
    if (state === 'erroring') {
        wasAlreadyErroring = true;
        // reason will not be used, so don't keep a reference to it.
        reason = undefined;
    }
    var promise = newPromise(function (resolve, reject) {
        stream._pendingAbortRequest = {
            _promise: undefined,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
        };
    });
    stream._pendingAbortRequest._promise = promise;
    if (!wasAlreadyErroring) {
        WritableStreamStartErroring(stream, reason);
    }
    return promise;
}
function WritableStreamClose(stream) {
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
        return promiseRejectedWith(new TypeError("The stream (in " + state + " state) is not in the writable state and cannot be closed"));
    }
    var promise = newPromise(function (resolve, reject) {
        var closeRequest = {
            _resolve: resolve,
            _reject: reject
        };
        stream._closeRequest = closeRequest;
    });
    var writer = stream._writer;
    if (writer !== undefined && stream._backpressure && state === 'writable') {
        defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
}
// WritableStream API exposed for controllers.
function WritableStreamAddWriteRequest(stream) {
    var promise = newPromise(function (resolve, reject) {
        var writeRequest = {
            _resolve: resolve,
            _reject: reject
        };
        stream._writeRequests.push(writeRequest);
    });
    return promise;
}
function WritableStreamDealWithRejection(stream, error) {
    var state = stream._state;
    if (state === 'writable') {
        WritableStreamStartErroring(stream, error);
        return;
    }
    WritableStreamFinishErroring(stream);
}
function WritableStreamStartErroring(stream, reason) {
    var controller = stream._writableStreamController;
    stream._state = 'erroring';
    stream._storedError = reason;
    var writer = stream._writer;
    if (writer !== undefined) {
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
        WritableStreamFinishErroring(stream);
    }
}
function WritableStreamFinishErroring(stream) {
    stream._state = 'errored';
    stream._writableStreamController[ErrorSteps]();
    var storedError = stream._storedError;
    stream._writeRequests.forEach(function (writeRequest) {
        writeRequest._reject(storedError);
    });
    stream._writeRequests = new SimpleQueue();
    if (stream._pendingAbortRequest === undefined) {
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
    }
    var abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;
    if (abortRequest._wasAlreadyErroring) {
        abortRequest._reject(storedError);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
    }
    var promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
    uponPromise(promise, function () {
        abortRequest._resolve();
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, function (reason) {
        abortRequest._reject(reason);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
}
function WritableStreamFinishInFlightWrite(stream) {
    stream._inFlightWriteRequest._resolve(undefined);
    stream._inFlightWriteRequest = undefined;
}
function WritableStreamFinishInFlightWriteWithError(stream, error) {
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = undefined;
    WritableStreamDealWithRejection(stream, error);
}
function WritableStreamFinishInFlightClose(stream) {
    stream._inFlightCloseRequest._resolve(undefined);
    stream._inFlightCloseRequest = undefined;
    var state = stream._state;
    if (state === 'erroring') {
        // The error was too late to do anything, so it is ignored.
        stream._storedError = undefined;
        if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = undefined;
        }
    }
    stream._state = 'closed';
    var writer = stream._writer;
    if (writer !== undefined) {
        defaultWriterClosedPromiseResolve(writer);
    }
}
function WritableStreamFinishInFlightCloseWithError(stream, error) {
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = undefined;
    // Never execute sink abort() after sink close().
    if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._reject(error);
        stream._pendingAbortRequest = undefined;
    }
    WritableStreamDealWithRejection(stream, error);
}
// TODO(ricea): Fix alphabetical order.
function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
        return false;
    }
    return true;
}
function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
        return false;
    }
    return true;
}
function WritableStreamMarkCloseRequestInFlight(stream) {
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
}
function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    stream._inFlightWriteRequest = stream._writeRequests.shift();
}
function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    if (stream._closeRequest !== undefined) {
        stream._closeRequest._reject(stream._storedError);
        stream._closeRequest = undefined;
    }
    var writer = stream._writer;
    if (writer !== undefined) {
        defaultWriterClosedPromiseReject(writer, stream._storedError);
    }
}
function WritableStreamUpdateBackpressure(stream, backpressure) {
    var writer = stream._writer;
    if (writer !== undefined && backpressure !== stream._backpressure) {
        if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
        }
        else {
            defaultWriterReadyPromiseResolve(writer);
        }
    }
    stream._backpressure = backpressure;
}
/**
 * A default writer vended by a {@link WritableStream}.
 *
 * @public
 */
var WritableStreamDefaultWriter = /** @class */ (function () {
    function WritableStreamDefaultWriter(stream) {
        assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
        assertWritableStream(stream, 'First parameter');
        if (IsWritableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive writing by another writer');
        }
        this._ownerWritableStream = stream;
        stream._writer = this;
        var state = stream._state;
        if (state === 'writable') {
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                defaultWriterReadyPromiseInitialize(this);
            }
            else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
        }
        else if (state === 'erroring') {
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
            defaultWriterClosedPromiseInitialize(this);
        }
        else if (state === 'closed') {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
        }
        else {
            var storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        }
    }
    Object.defineProperty(WritableStreamDefaultWriter.prototype, "closed", {
        /**
         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
         * the writer’s lock is released before the stream finishes closing.
         */
        get: function () {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
            }
            return this._closedPromise;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WritableStreamDefaultWriter.prototype, "desiredSize", {
        /**
         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
         * A producer can use this information to determine the right amount of data to write.
         *
         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
         * the writer’s lock is released.
         */
        get: function () {
            if (!IsWritableStreamDefaultWriter(this)) {
                throw defaultWriterBrandCheckException('desiredSize');
            }
            if (this._ownerWritableStream === undefined) {
                throw defaultWriterLockException('desiredSize');
            }
            return WritableStreamDefaultWriterGetDesiredSize(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WritableStreamDefaultWriter.prototype, "ready", {
        /**
         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
         *
         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
         * rejected.
         */
        get: function () {
            if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
            }
            return this._readyPromise;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
     */
    WritableStreamDefaultWriter.prototype.abort = function (reason) {
        if (reason === void 0) { reason = undefined; }
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
        }
        if (this._ownerWritableStream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('abort'));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
    };
    /**
     * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
     */
    WritableStreamDefaultWriter.prototype.close = function () {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('close'));
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('close'));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
        }
        return WritableStreamDefaultWriterClose(this);
    };
    /**
     * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
     * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
     * now on; otherwise, the writer will appear closed.
     *
     * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
     * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
     * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
     * other producers from writing in an interleaved manner.
     */
    WritableStreamDefaultWriter.prototype.releaseLock = function () {
        if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException('releaseLock');
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
            return;
        }
        WritableStreamDefaultWriterRelease(this);
    };
    WritableStreamDefaultWriter.prototype.write = function (chunk) {
        if (chunk === void 0) { chunk = undefined; }
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('write'));
        }
        if (this._ownerWritableStream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('write to'));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
    };
    return WritableStreamDefaultWriter;
}());
Object.defineProperties(WritableStreamDefaultWriter.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    releaseLock: { enumerable: true },
    write: { enumerable: true },
    closed: { enumerable: true },
    desiredSize: { enumerable: true },
    ready: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStreamDefaultWriter',
        configurable: true
    });
}
// Abstract operations for the WritableStreamDefaultWriter.
function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
        return false;
    }
    return x instanceof WritableStreamDefaultWriter;
}
// A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
function WritableStreamDefaultWriterAbort(writer, reason) {
    var stream = writer._ownerWritableStream;
    return WritableStreamAbort(stream, reason);
}
function WritableStreamDefaultWriterClose(writer) {
    var stream = writer._ownerWritableStream;
    return WritableStreamClose(stream);
}
function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
        return promiseResolvedWith(undefined);
    }
    if (state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    return WritableStreamDefaultWriterClose(writer);
}
function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
        defaultWriterClosedPromiseReject(writer, error);
    }
    else {
        defaultWriterClosedPromiseResetToRejected(writer, error);
    }
}
function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
        defaultWriterReadyPromiseReject(writer, error);
    }
    else {
        defaultWriterReadyPromiseResetToRejected(writer, error);
    }
}
function WritableStreamDefaultWriterGetDesiredSize(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;
    if (state === 'errored' || state === 'erroring') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
}
function WritableStreamDefaultWriterRelease(writer) {
    var stream = writer._ownerWritableStream;
    var releasedError = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
    // rejected until afterwards. This means that simply testing state will not work.
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
}
function WritableStreamDefaultWriterWrite(writer, chunk) {
    var stream = writer._ownerWritableStream;
    var controller = stream._writableStreamController;
    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
        return promiseRejectedWith(defaultWriterLockException('write to'));
    }
    var state = stream._state;
    if (state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
        return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
    }
    if (state === 'erroring') {
        return promiseRejectedWith(stream._storedError);
    }
    var promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
}
var closeSentinel = {};
/**
 * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
 *
 * @public
 */
var WritableStreamDefaultController = /** @class */ (function () {
    function WritableStreamDefaultController() {
        throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(WritableStreamDefaultController.prototype, "abortReason", {
        /**
         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
         *
         * @deprecated
         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
         */
        get: function () {
            if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2('abortReason');
            }
            return this._abortReason;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WritableStreamDefaultController.prototype, "signal", {
        /**
         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
         */
        get: function () {
            if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2('signal');
            }
            if (this._abortController === undefined) {
                // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
                // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
                // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
                throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
            }
            return this._abortController.signal;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
     *
     * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
     * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
     * normal lifecycle of interactions with the underlying sink.
     */
    WritableStreamDefaultController.prototype.error = function (e) {
        if (e === void 0) { e = undefined; }
        if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2('error');
        }
        var state = this._controlledWritableStream._state;
        if (state !== 'writable') {
            // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
            // just treat it as a no-op.
            return;
        }
        WritableStreamDefaultControllerError(this, e);
    };
    /** @internal */
    WritableStreamDefaultController.prototype[AbortSteps] = function (reason) {
        var result = this._abortAlgorithm(reason);
        WritableStreamDefaultControllerClearAlgorithms(this);
        return result;
    };
    /** @internal */
    WritableStreamDefaultController.prototype[ErrorSteps] = function () {
        ResetQueue(this);
    };
    return WritableStreamDefaultController;
}());
Object.defineProperties(WritableStreamDefaultController.prototype, {
    abortReason: { enumerable: true },
    signal: { enumerable: true },
    error: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'WritableStreamDefaultController',
        configurable: true
    });
}
// Abstract operations implementing interface required by the WritableStream.
function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
        return false;
    }
    return x instanceof WritableStreamDefaultController;
}
function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledWritableStream = stream;
    stream._writableStreamController = controller;
    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    controller._queue = undefined;
    controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._abortReason = undefined;
    controller._abortController = createAbortController();
    controller._started = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._writeAlgorithm = writeAlgorithm;
    controller._closeAlgorithm = closeAlgorithm;
    controller._abortAlgorithm = abortAlgorithm;
    var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
    var startResult = startAlgorithm();
    var startPromise = promiseResolvedWith(startResult);
    uponPromise(startPromise, function () {
        controller._started = true;
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, function (r) {
        controller._started = true;
        WritableStreamDealWithRejection(stream, r);
    });
}
function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
    var controller = Object.create(WritableStreamDefaultController.prototype);
    var startAlgorithm = function () { return undefined; };
    var writeAlgorithm = function () { return promiseResolvedWith(undefined); };
    var closeAlgorithm = function () { return promiseResolvedWith(undefined); };
    var abortAlgorithm = function () { return promiseResolvedWith(undefined); };
    if (underlyingSink.start !== undefined) {
        startAlgorithm = function () { return underlyingSink.start(controller); };
    }
    if (underlyingSink.write !== undefined) {
        writeAlgorithm = function (chunk) { return underlyingSink.write(chunk, controller); };
    }
    if (underlyingSink.close !== undefined) {
        closeAlgorithm = function () { return underlyingSink.close(); };
    }
    if (underlyingSink.abort !== undefined) {
        abortAlgorithm = function (reason) { return underlyingSink.abort(reason); };
    }
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
}
// ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
function WritableStreamDefaultControllerClearAlgorithms(controller) {
    controller._writeAlgorithm = undefined;
    controller._closeAlgorithm = undefined;
    controller._abortAlgorithm = undefined;
    controller._strategySizeAlgorithm = undefined;
}
function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, closeSentinel, 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    try {
        return controller._strategySizeAlgorithm(chunk);
    }
    catch (chunkSizeE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
        return 1;
    }
}
function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
}
function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
    }
    catch (enqueueE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        return;
    }
    var stream = controller._controlledWritableStream;
    if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
// Abstract operations for the WritableStreamDefaultController.
function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    var stream = controller._controlledWritableStream;
    if (!controller._started) {
        return;
    }
    if (stream._inFlightWriteRequest !== undefined) {
        return;
    }
    var state = stream._state;
    if (state === 'erroring') {
        WritableStreamFinishErroring(stream);
        return;
    }
    if (controller._queue.length === 0) {
        return;
    }
    var value = PeekQueueValue(controller);
    if (value === closeSentinel) {
        WritableStreamDefaultControllerProcessClose(controller);
    }
    else {
        WritableStreamDefaultControllerProcessWrite(controller, value);
    }
}
function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
        WritableStreamDefaultControllerError(controller, error);
    }
}
function WritableStreamDefaultControllerProcessClose(controller) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    var sinkClosePromise = controller._closeAlgorithm();
    WritableStreamDefaultControllerClearAlgorithms(controller);
    uponPromise(sinkClosePromise, function () {
        WritableStreamFinishInFlightClose(stream);
    }, function (reason) {
        WritableStreamFinishInFlightCloseWithError(stream, reason);
    });
}
function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    var sinkWritePromise = controller._writeAlgorithm(chunk);
    uponPromise(sinkWritePromise, function () {
        WritableStreamFinishInFlightWrite(stream);
        var state = stream._state;
        DequeueValue(controller);
        if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
            var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, function (reason) {
        if (stream._state === 'writable') {
            WritableStreamDefaultControllerClearAlgorithms(controller);
        }
        WritableStreamFinishInFlightWriteWithError(stream, reason);
    });
}
function WritableStreamDefaultControllerGetBackpressure(controller) {
    var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
}
// A client of WritableStreamDefaultController may use these functions directly to bypass state check.
function WritableStreamDefaultControllerError(controller, error) {
    var stream = controller._controlledWritableStream;
    WritableStreamDefaultControllerClearAlgorithms(controller);
    WritableStreamStartErroring(stream, error);
}
// Helper functions for the WritableStream.
function streamBrandCheckException$2(name) {
    return new TypeError("WritableStream.prototype." + name + " can only be used on a WritableStream");
}
// Helper functions for the WritableStreamDefaultController.
function defaultControllerBrandCheckException$2(name) {
    return new TypeError("WritableStreamDefaultController.prototype." + name + " can only be used on a WritableStreamDefaultController");
}
// Helper functions for the WritableStreamDefaultWriter.
function defaultWriterBrandCheckException(name) {
    return new TypeError("WritableStreamDefaultWriter.prototype." + name + " can only be used on a WritableStreamDefaultWriter");
}
function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
}
function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = newPromise(function (resolve, reject) {
        writer._closedPromise_resolve = resolve;
        writer._closedPromise_reject = reject;
        writer._closedPromiseState = 'pending';
    });
}
function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseReject(writer, reason);
}
function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseResolve(writer);
}
function defaultWriterClosedPromiseReject(writer, reason) {
    if (writer._closedPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(writer._closedPromise);
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
}
function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterClosedPromiseResolve(writer) {
    if (writer._closedPromise_resolve === undefined) {
        return;
    }
    writer._closedPromise_resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
}
function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = newPromise(function (resolve, reject) {
        writer._readyPromise_resolve = resolve;
        writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
}
function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseReject(writer, reason);
}
function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseResolve(writer);
}
function defaultWriterReadyPromiseReject(writer, reason) {
    if (writer._readyPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(writer._readyPromise);
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
}
function defaultWriterReadyPromiseReset(writer) {
    defaultWriterReadyPromiseInitialize(writer);
}
function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterReadyPromiseResolve(writer) {
    if (writer._readyPromise_resolve === undefined) {
        return;
    }
    writer._readyPromise_resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
}

/// <reference lib="dom" />
var NativeDOMException = typeof DOMException !== 'undefined' ? DOMException : undefined;

/// <reference types="node" />
function isDOMExceptionConstructor(ctor) {
    if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
        return false;
    }
    try {
        new ctor();
        return true;
    }
    catch (_a) {
        return false;
    }
}
function createDOMExceptionPolyfill() {
    // eslint-disable-next-line no-shadow
    var ctor = function DOMException(message, name) {
        this.message = message || '';
        this.name = name || 'Error';
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    };
    ctor.prototype = Object.create(Error.prototype);
    Object.defineProperty(ctor.prototype, 'constructor', { value: ctor, writable: true, configurable: true });
    return ctor;
}
// eslint-disable-next-line no-redeclare
var DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();

function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
    var reader = AcquireReadableStreamDefaultReader(source);
    var writer = AcquireWritableStreamDefaultWriter(dest);
    source._disturbed = true;
    var shuttingDown = false;
    // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
    var currentWrite = promiseResolvedWith(undefined);
    return newPromise(function (resolve, reject) {
        var abortAlgorithm;
        if (signal !== undefined) {
            abortAlgorithm = function () {
                var error = new DOMException$1('Aborted', 'AbortError');
                var actions = [];
                if (!preventAbort) {
                    actions.push(function () {
                        if (dest._state === 'writable') {
                            return WritableStreamAbort(dest, error);
                        }
                        return promiseResolvedWith(undefined);
                    });
                }
                if (!preventCancel) {
                    actions.push(function () {
                        if (source._state === 'readable') {
                            return ReadableStreamCancel(source, error);
                        }
                        return promiseResolvedWith(undefined);
                    });
                }
                shutdownWithAction(function () { return Promise.all(actions.map(function (action) { return action(); })); }, true, error);
            };
            if (signal.aborted) {
                abortAlgorithm();
                return;
            }
            signal.addEventListener('abort', abortAlgorithm);
        }
        // Using reader and writer, read all chunks from this and write them to dest
        // - Backpressure must be enforced
        // - Shutdown must stop all activity
        function pipeLoop() {
            return newPromise(function (resolveLoop, rejectLoop) {
                function next(done) {
                    if (done) {
                        resolveLoop();
                    }
                    else {
                        // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                        // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                        PerformPromiseThen(pipeStep(), next, rejectLoop);
                    }
                }
                next(false);
            });
        }
        function pipeStep() {
            if (shuttingDown) {
                return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, function () {
                return newPromise(function (resolveRead, rejectRead) {
                    ReadableStreamDefaultReaderRead(reader, {
                        _chunkSteps: function (chunk) {
                            currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                            resolveRead(false);
                        },
                        _closeSteps: function () { return resolveRead(true); },
                        _errorSteps: rejectRead
                    });
                });
            });
        }
        // Errors must be propagated forward
        isOrBecomesErrored(source, reader._closedPromise, function (storedError) {
            if (!preventAbort) {
                shutdownWithAction(function () { return WritableStreamAbort(dest, storedError); }, true, storedError);
            }
            else {
                shutdown(true, storedError);
            }
        });
        // Errors must be propagated backward
        isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
            if (!preventCancel) {
                shutdownWithAction(function () { return ReadableStreamCancel(source, storedError); }, true, storedError);
            }
            else {
                shutdown(true, storedError);
            }
        });
        // Closing must be propagated forward
        isOrBecomesClosed(source, reader._closedPromise, function () {
            if (!preventClose) {
                shutdownWithAction(function () { return WritableStreamDefaultWriterCloseWithErrorPropagation(writer); });
            }
            else {
                shutdown();
            }
        });
        // Closing must be propagated backward
        if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
            var destClosed_1 = new TypeError('the destination writable stream closed before all data could be piped to it');
            if (!preventCancel) {
                shutdownWithAction(function () { return ReadableStreamCancel(source, destClosed_1); }, true, destClosed_1);
            }
            else {
                shutdown(true, destClosed_1);
            }
        }
        setPromiseIsHandledToTrue(pipeLoop());
        function waitForWritesToFinish() {
            // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
            // for that too.
            var oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, function () { return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined; });
        }
        function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
                action(stream._storedError);
            }
            else {
                uponRejection(promise, action);
            }
        }
        function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
                action();
            }
            else {
                uponFulfillment(promise, action);
            }
        }
        function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
                return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), doTheRest);
            }
            else {
                doTheRest();
            }
            function doTheRest() {
                uponPromise(action(), function () { return finalize(originalIsError, originalError); }, function (newError) { return finalize(true, newError); });
            }
        }
        function shutdown(isError, error) {
            if (shuttingDown) {
                return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), function () { return finalize(isError, error); });
            }
            else {
                finalize(isError, error);
            }
        }
        function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== undefined) {
                signal.removeEventListener('abort', abortAlgorithm);
            }
            if (isError) {
                reject(error);
            }
            else {
                resolve(undefined);
            }
        }
    });
}

/**
 * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
 *
 * @public
 */
var ReadableStreamDefaultController = /** @class */ (function () {
    function ReadableStreamDefaultController() {
        throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(ReadableStreamDefaultController.prototype, "desiredSize", {
        /**
         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
         */
        get: function () {
            if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1('desiredSize');
            }
            return ReadableStreamDefaultControllerGetDesiredSize(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    ReadableStreamDefaultController.prototype.close = function () {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('close');
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError('The stream is not in a state that permits close');
        }
        ReadableStreamDefaultControllerClose(this);
    };
    ReadableStreamDefaultController.prototype.enqueue = function (chunk) {
        if (chunk === void 0) { chunk = undefined; }
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('enqueue');
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError('The stream is not in a state that permits enqueue');
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
    };
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    ReadableStreamDefaultController.prototype.error = function (e) {
        if (e === void 0) { e = undefined; }
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('error');
        }
        ReadableStreamDefaultControllerError(this, e);
    };
    /** @internal */
    ReadableStreamDefaultController.prototype[CancelSteps] = function (reason) {
        ResetQueue(this);
        var result = this._cancelAlgorithm(reason);
        ReadableStreamDefaultControllerClearAlgorithms(this);
        return result;
    };
    /** @internal */
    ReadableStreamDefaultController.prototype[PullSteps] = function (readRequest) {
        var stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
            var chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this);
                ReadableStreamClose(stream);
            }
            else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
        }
        else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
    };
    return ReadableStreamDefaultController;
}());
Object.defineProperties(ReadableStreamDefaultController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    desiredSize: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStreamDefaultController',
        configurable: true
    });
}
// Abstract operations for the ReadableStreamDefaultController.
function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
        return false;
    }
    return x instanceof ReadableStreamDefaultController;
}
function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (!shouldPull) {
        return;
    }
    if (controller._pulling) {
        controller._pullAgain = true;
        return;
    }
    controller._pulling = true;
    var pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, function () {
        controller._pulling = false;
        if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
    }, function (e) {
        ReadableStreamDefaultControllerError(controller, e);
    });
}
function ReadableStreamDefaultControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return false;
    }
    if (!controller._started) {
        return false;
    }
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
        return true;
    }
    return false;
}
function ReadableStreamDefaultControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = undefined;
    controller._cancelAlgorithm = undefined;
    controller._strategySizeAlgorithm = undefined;
}
// A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
function ReadableStreamDefaultControllerClose(controller) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
    }
    var stream = controller._controlledReadableStream;
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
    }
}
function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
    }
    var stream = controller._controlledReadableStream;
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        ReadableStreamFulfillReadRequest(stream, chunk, false);
    }
    else {
        var chunkSize = void 0;
        try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
        }
        catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
        }
        try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
        }
        catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
        }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
}
function ReadableStreamDefaultControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    if (stream._state !== 'readable') {
        return;
    }
    ResetQueue(controller);
    ReadableStreamDefaultControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
}
function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    var state = controller._controlledReadableStream._state;
    if (state === 'errored') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
}
// This is used in the implementation of TransformStream.
function ReadableStreamDefaultControllerHasBackpressure(controller) {
    if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
        return false;
    }
    return true;
}
function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
    var state = controller._controlledReadableStream._state;
    if (!controller._closeRequested && state === 'readable') {
        return true;
    }
    return false;
}
function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledReadableStream = stream;
    controller._queue = undefined;
    controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._started = false;
    controller._closeRequested = false;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    stream._readableStreamController = controller;
    var startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), function () {
        controller._started = true;
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }, function (r) {
        ReadableStreamDefaultControllerError(controller, r);
    });
}
function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
    var controller = Object.create(ReadableStreamDefaultController.prototype);
    var startAlgorithm = function () { return undefined; };
    var pullAlgorithm = function () { return promiseResolvedWith(undefined); };
    var cancelAlgorithm = function () { return promiseResolvedWith(undefined); };
    if (underlyingSource.start !== undefined) {
        startAlgorithm = function () { return underlyingSource.start(controller); };
    }
    if (underlyingSource.pull !== undefined) {
        pullAlgorithm = function () { return underlyingSource.pull(controller); };
    }
    if (underlyingSource.cancel !== undefined) {
        cancelAlgorithm = function (reason) { return underlyingSource.cancel(reason); };
    }
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
}
// Helper functions for the ReadableStreamDefaultController.
function defaultControllerBrandCheckException$1(name) {
    return new TypeError("ReadableStreamDefaultController.prototype." + name + " can only be used on a ReadableStreamDefaultController");
}

function ReadableStreamTee(stream, cloneForBranch2) {
    if (IsReadableByteStreamController(stream._readableStreamController)) {
        return ReadableByteStreamTee(stream);
    }
    return ReadableStreamDefaultTee(stream);
}
function ReadableStreamDefaultTee(stream, cloneForBranch2) {
    var reader = AcquireReadableStreamDefaultReader(stream);
    var reading = false;
    var readAgain = false;
    var canceled1 = false;
    var canceled2 = false;
    var reason1;
    var reason2;
    var branch1;
    var branch2;
    var resolveCancelPromise;
    var cancelPromise = newPromise(function (resolve) {
        resolveCancelPromise = resolve;
    });
    function pullAlgorithm() {
        if (reading) {
            readAgain = true;
            return promiseResolvedWith(undefined);
        }
        reading = true;
        var readRequest = {
            _chunkSteps: function (chunk) {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(function () {
                    readAgain = false;
                    var chunk1 = chunk;
                    var chunk2 = chunk;
                    // There is no way to access the cloning code right now in the reference implementation.
                    // If we add one then we'll need an implementation for serializable objects.
                    // if (!canceled2 && cloneForBranch2) {
                    //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
                    // }
                    if (!canceled1) {
                        ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                    }
                    if (!canceled2) {
                        ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                    }
                    reading = false;
                    if (readAgain) {
                        pullAlgorithm();
                    }
                });
            },
            _closeSteps: function () {
                reading = false;
                if (!canceled1) {
                    ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                    ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                }
                if (!canceled1 || !canceled2) {
                    resolveCancelPromise(undefined);
                }
            },
            _errorSteps: function () {
                reading = false;
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promiseResolvedWith(undefined);
    }
    function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
            var compositeReason = CreateArrayFromList([reason1, reason2]);
            var cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
            var compositeReason = CreateArrayFromList([reason1, reason2]);
            var cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function startAlgorithm() {
        // do nothing
    }
    branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
    branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
    uponRejection(reader._closedPromise, function (r) {
        ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
        ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
        if (!canceled1 || !canceled2) {
            resolveCancelPromise(undefined);
        }
    });
    return [branch1, branch2];
}
function ReadableByteStreamTee(stream) {
    var reader = AcquireReadableStreamDefaultReader(stream);
    var reading = false;
    var readAgainForBranch1 = false;
    var readAgainForBranch2 = false;
    var canceled1 = false;
    var canceled2 = false;
    var reason1;
    var reason2;
    var branch1;
    var branch2;
    var resolveCancelPromise;
    var cancelPromise = newPromise(function (resolve) {
        resolveCancelPromise = resolve;
    });
    function forwardReaderError(thisReader) {
        uponRejection(thisReader._closedPromise, function (r) {
            if (thisReader !== reader) {
                return;
            }
            ReadableByteStreamControllerError(branch1._readableStreamController, r);
            ReadableByteStreamControllerError(branch2._readableStreamController, r);
            if (!canceled1 || !canceled2) {
                resolveCancelPromise(undefined);
            }
        });
    }
    function pullWithDefaultReader() {
        if (IsReadableStreamBYOBReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamDefaultReader(stream);
            forwardReaderError(reader);
        }
        var readRequest = {
            _chunkSteps: function (chunk) {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(function () {
                    readAgainForBranch1 = false;
                    readAgainForBranch2 = false;
                    var chunk1 = chunk;
                    var chunk2 = chunk;
                    if (!canceled1 && !canceled2) {
                        try {
                            chunk2 = CloneAsUint8Array(chunk);
                        }
                        catch (cloneE) {
                            ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                            ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                            resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                            return;
                        }
                    }
                    if (!canceled1) {
                        ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                    }
                    if (!canceled2) {
                        ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                    }
                    reading = false;
                    if (readAgainForBranch1) {
                        pull1Algorithm();
                    }
                    else if (readAgainForBranch2) {
                        pull2Algorithm();
                    }
                });
            },
            _closeSteps: function () {
                reading = false;
                if (!canceled1) {
                    ReadableByteStreamControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                    ReadableByteStreamControllerClose(branch2._readableStreamController);
                }
                if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                }
                if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                }
                if (!canceled1 || !canceled2) {
                    resolveCancelPromise(undefined);
                }
            },
            _errorSteps: function () {
                reading = false;
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
    }
    function pullWithBYOBReader(view, forBranch2) {
        if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamBYOBReader(stream);
            forwardReaderError(reader);
        }
        var byobBranch = forBranch2 ? branch2 : branch1;
        var otherBranch = forBranch2 ? branch1 : branch2;
        var readIntoRequest = {
            _chunkSteps: function (chunk) {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(function () {
                    readAgainForBranch1 = false;
                    readAgainForBranch2 = false;
                    var byobCanceled = forBranch2 ? canceled2 : canceled1;
                    var otherCanceled = forBranch2 ? canceled1 : canceled2;
                    if (!otherCanceled) {
                        var clonedChunk = void 0;
                        try {
                            clonedChunk = CloneAsUint8Array(chunk);
                        }
                        catch (cloneE) {
                            ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                            ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                            resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                            return;
                        }
                        if (!byobCanceled) {
                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                        }
                        ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                    }
                    else if (!byobCanceled) {
                        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    reading = false;
                    if (readAgainForBranch1) {
                        pull1Algorithm();
                    }
                    else if (readAgainForBranch2) {
                        pull2Algorithm();
                    }
                });
            },
            _closeSteps: function (chunk) {
                reading = false;
                var byobCanceled = forBranch2 ? canceled2 : canceled1;
                var otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!byobCanceled) {
                    ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                }
                if (!otherCanceled) {
                    ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                }
                if (chunk !== undefined) {
                    if (!byobCanceled) {
                        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                        ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                    }
                }
                if (!byobCanceled || !otherCanceled) {
                    resolveCancelPromise(undefined);
                }
            },
            _errorSteps: function () {
                reading = false;
            }
        };
        ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
    }
    function pull1Algorithm() {
        if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith(undefined);
        }
        reading = true;
        var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
        if (byobRequest === null) {
            pullWithDefaultReader();
        }
        else {
            pullWithBYOBReader(byobRequest._view, false);
        }
        return promiseResolvedWith(undefined);
    }
    function pull2Algorithm() {
        if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith(undefined);
        }
        reading = true;
        var byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
        if (byobRequest === null) {
            pullWithDefaultReader();
        }
        else {
            pullWithBYOBReader(byobRequest._view, true);
        }
        return promiseResolvedWith(undefined);
    }
    function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
            var compositeReason = CreateArrayFromList([reason1, reason2]);
            var cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
            var compositeReason = CreateArrayFromList([reason1, reason2]);
            var cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function startAlgorithm() {
        return;
    }
    branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
    branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
    forwardReaderError(reader);
    return [branch1, branch2];
}

function convertUnderlyingDefaultOrByteSource(source, context) {
    assertDictionary(source, context);
    var original = source;
    var autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
    var cancel = original === null || original === void 0 ? void 0 : original.cancel;
    var pull = original === null || original === void 0 ? void 0 : original.pull;
    var start = original === null || original === void 0 ? void 0 : original.start;
    var type = original === null || original === void 0 ? void 0 : original.type;
    return {
        autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
            undefined :
            convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, context + " has member 'autoAllocateChunkSize' that"),
        cancel: cancel === undefined ?
            undefined :
            convertUnderlyingSourceCancelCallback(cancel, original, context + " has member 'cancel' that"),
        pull: pull === undefined ?
            undefined :
            convertUnderlyingSourcePullCallback(pull, original, context + " has member 'pull' that"),
        start: start === undefined ?
            undefined :
            convertUnderlyingSourceStartCallback(start, original, context + " has member 'start' that"),
        type: type === undefined ? undefined : convertReadableStreamType(type, context + " has member 'type' that")
    };
}
function convertUnderlyingSourceCancelCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (reason) { return promiseCall(fn, original, [reason]); };
}
function convertUnderlyingSourcePullCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (controller) { return promiseCall(fn, original, [controller]); };
}
function convertUnderlyingSourceStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (controller) { return reflectCall(fn, original, [controller]); };
}
function convertReadableStreamType(type, context) {
    type = "" + type;
    if (type !== 'bytes') {
        throw new TypeError(context + " '" + type + "' is not a valid enumeration value for ReadableStreamType");
    }
    return type;
}

function convertReaderOptions(options, context) {
    assertDictionary(options, context);
    var mode = options === null || options === void 0 ? void 0 : options.mode;
    return {
        mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, context + " has member 'mode' that")
    };
}
function convertReadableStreamReaderMode(mode, context) {
    mode = "" + mode;
    if (mode !== 'byob') {
        throw new TypeError(context + " '" + mode + "' is not a valid enumeration value for ReadableStreamReaderMode");
    }
    return mode;
}

function convertIteratorOptions(options, context) {
    assertDictionary(options, context);
    var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    return { preventCancel: Boolean(preventCancel) };
}

function convertPipeOptions(options, context) {
    assertDictionary(options, context);
    var preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
    var preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    var preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
    var signal = options === null || options === void 0 ? void 0 : options.signal;
    if (signal !== undefined) {
        assertAbortSignal(signal, context + " has member 'signal' that");
    }
    return {
        preventAbort: Boolean(preventAbort),
        preventCancel: Boolean(preventCancel),
        preventClose: Boolean(preventClose),
        signal: signal
    };
}
function assertAbortSignal(signal, context) {
    if (!isAbortSignal(signal)) {
        throw new TypeError(context + " is not an AbortSignal.");
    }
}

function convertReadableWritablePair(pair, context) {
    assertDictionary(pair, context);
    var readable = pair === null || pair === void 0 ? void 0 : pair.readable;
    assertRequiredField(readable, 'readable', 'ReadableWritablePair');
    assertReadableStream(readable, context + " has member 'readable' that");
    var writable = pair === null || pair === void 0 ? void 0 : pair.writable;
    assertRequiredField(writable, 'writable', 'ReadableWritablePair');
    assertWritableStream(writable, context + " has member 'writable' that");
    return { readable: readable, writable: writable };
}

/**
 * A readable stream represents a source of data, from which you can read.
 *
 * @public
 */
var ReadableStream = /** @class */ (function () {
    function ReadableStream(rawUnderlyingSource, rawStrategy) {
        if (rawUnderlyingSource === void 0) { rawUnderlyingSource = {}; }
        if (rawStrategy === void 0) { rawStrategy = {}; }
        if (rawUnderlyingSource === undefined) {
            rawUnderlyingSource = null;
        }
        else {
            assertObject(rawUnderlyingSource, 'First parameter');
        }
        var strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
        var underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
        InitializeReadableStream(this);
        if (underlyingSource.type === 'bytes') {
            if (strategy.size !== undefined) {
                throw new RangeError('The strategy for a byte stream cannot have a size function');
            }
            var highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
        }
        else {
            var sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            var highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
        }
    }
    Object.defineProperty(ReadableStream.prototype, "locked", {
        /**
         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
         */
        get: function () {
            if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1('locked');
            }
            return IsReadableStreamLocked(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Cancels the stream, signaling a loss of interest in the stream by a consumer.
     *
     * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
     * method, which might or might not use it.
     */
    ReadableStream.prototype.cancel = function (reason) {
        if (reason === void 0) { reason = undefined; }
        if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1('cancel'));
        }
        if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
        }
        return ReadableStreamCancel(this, reason);
    };
    ReadableStream.prototype.getReader = function (rawOptions) {
        if (rawOptions === void 0) { rawOptions = undefined; }
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('getReader');
        }
        var options = convertReaderOptions(rawOptions, 'First parameter');
        if (options.mode === undefined) {
            return AcquireReadableStreamDefaultReader(this);
        }
        return AcquireReadableStreamBYOBReader(this);
    };
    ReadableStream.prototype.pipeThrough = function (rawTransform, rawOptions) {
        if (rawOptions === void 0) { rawOptions = {}; }
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('pipeThrough');
        }
        assertRequiredArgument(rawTransform, 1, 'pipeThrough');
        var transform = convertReadableWritablePair(rawTransform, 'First parameter');
        var options = convertPipeOptions(rawOptions, 'Second parameter');
        if (IsReadableStreamLocked(this)) {
            throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
        }
        if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
        }
        var promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        setPromiseIsHandledToTrue(promise);
        return transform.readable;
    };
    ReadableStream.prototype.pipeTo = function (destination, rawOptions) {
        if (rawOptions === void 0) { rawOptions = {}; }
        if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
        }
        if (destination === undefined) {
            return promiseRejectedWith("Parameter 1 is required in 'pipeTo'.");
        }
        if (!IsWritableStream(destination)) {
            return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
        }
        var options;
        try {
            options = convertPipeOptions(rawOptions, 'Second parameter');
        }
        catch (e) {
            return promiseRejectedWith(e);
        }
        if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }
        if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }
        return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    };
    /**
     * Tees this readable stream, returning a two-element array containing the two resulting branches as
     * new {@link ReadableStream} instances.
     *
     * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
     * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
     * propagated to the stream's underlying source.
     *
     * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
     * this could allow interference between the two branches.
     */
    ReadableStream.prototype.tee = function () {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('tee');
        }
        var branches = ReadableStreamTee(this);
        return CreateArrayFromList(branches);
    };
    ReadableStream.prototype.values = function (rawOptions) {
        if (rawOptions === void 0) { rawOptions = undefined; }
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('values');
        }
        var options = convertIteratorOptions(rawOptions, 'First parameter');
        return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
    };
    return ReadableStream;
}());
Object.defineProperties(ReadableStream.prototype, {
    cancel: { enumerable: true },
    getReader: { enumerable: true },
    pipeThrough: { enumerable: true },
    pipeTo: { enumerable: true },
    tee: { enumerable: true },
    values: { enumerable: true },
    locked: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'ReadableStream',
        configurable: true
    });
}
if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
    Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
        value: ReadableStream.prototype.values,
        writable: true,
        configurable: true
    });
}
// Abstract operations for the ReadableStream.
// Throws if and only if startAlgorithm throws.
function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    if (highWaterMark === void 0) { highWaterMark = 1; }
    if (sizeAlgorithm === void 0) { sizeAlgorithm = function () { return 1; }; }
    var stream = Object.create(ReadableStream.prototype);
    InitializeReadableStream(stream);
    var controller = Object.create(ReadableStreamDefaultController.prototype);
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
}
// Throws if and only if startAlgorithm throws.
function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
    var stream = Object.create(ReadableStream.prototype);
    InitializeReadableStream(stream);
    var controller = Object.create(ReadableByteStreamController.prototype);
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
    return stream;
}
function InitializeReadableStream(stream) {
    stream._state = 'readable';
    stream._reader = undefined;
    stream._storedError = undefined;
    stream._disturbed = false;
}
function IsReadableStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
        return false;
    }
    return x instanceof ReadableStream;
}
function IsReadableStreamLocked(stream) {
    if (stream._reader === undefined) {
        return false;
    }
    return true;
}
// ReadableStream API exposed for controllers.
function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === 'closed') {
        return promiseResolvedWith(undefined);
    }
    if (stream._state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    ReadableStreamClose(stream);
    var reader = stream._reader;
    if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
        reader._readIntoRequests.forEach(function (readIntoRequest) {
            readIntoRequest._closeSteps(undefined);
        });
        reader._readIntoRequests = new SimpleQueue();
    }
    var sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
    return transformPromiseWith(sourceCancelPromise, noop);
}
function ReadableStreamClose(stream) {
    stream._state = 'closed';
    var reader = stream._reader;
    if (reader === undefined) {
        return;
    }
    defaultReaderClosedPromiseResolve(reader);
    if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach(function (readRequest) {
            readRequest._closeSteps();
        });
        reader._readRequests = new SimpleQueue();
    }
}
function ReadableStreamError(stream, e) {
    stream._state = 'errored';
    stream._storedError = e;
    var reader = stream._reader;
    if (reader === undefined) {
        return;
    }
    defaultReaderClosedPromiseReject(reader, e);
    if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach(function (readRequest) {
            readRequest._errorSteps(e);
        });
        reader._readRequests = new SimpleQueue();
    }
    else {
        reader._readIntoRequests.forEach(function (readIntoRequest) {
            readIntoRequest._errorSteps(e);
        });
        reader._readIntoRequests = new SimpleQueue();
    }
}
// Helper functions for the ReadableStream.
function streamBrandCheckException$1(name) {
    return new TypeError("ReadableStream.prototype." + name + " can only be used on a ReadableStream");
}

function convertQueuingStrategyInit(init, context) {
    assertDictionary(init, context);
    var highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
    return {
        highWaterMark: convertUnrestrictedDouble(highWaterMark)
    };
}

// The size function must not have a prototype property nor be a constructor
var byteLengthSizeFunction = function (chunk) {
    return chunk.byteLength;
};
try {
    Object.defineProperty(byteLengthSizeFunction, 'name', {
        value: 'size',
        configurable: true
    });
}
catch (_a) {
    // This property is non-configurable in older browsers, so ignore if this throws.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
}
/**
 * A queuing strategy that counts the number of bytes in each chunk.
 *
 * @public
 */
var ByteLengthQueuingStrategy = /** @class */ (function () {
    function ByteLengthQueuingStrategy(options) {
        assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
        options = convertQueuingStrategyInit(options, 'First parameter');
        this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    Object.defineProperty(ByteLengthQueuingStrategy.prototype, "highWaterMark", {
        /**
         * Returns the high water mark provided to the constructor.
         */
        get: function () {
            if (!IsByteLengthQueuingStrategy(this)) {
                throw byteLengthBrandCheckException('highWaterMark');
            }
            return this._byteLengthQueuingStrategyHighWaterMark;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ByteLengthQueuingStrategy.prototype, "size", {
        /**
         * Measures the size of `chunk` by returning the value of its `byteLength` property.
         */
        get: function () {
            if (!IsByteLengthQueuingStrategy(this)) {
                throw byteLengthBrandCheckException('size');
            }
            return byteLengthSizeFunction;
        },
        enumerable: false,
        configurable: true
    });
    return ByteLengthQueuingStrategy;
}());
Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: 'ByteLengthQueuingStrategy',
        configurable: true
    });
}
// Helper functions for the ByteLengthQueuingStrategy.
function byteLengthBrandCheckException(name) {
    return new TypeError("ByteLengthQueuingStrategy.prototype." + name + " can only be used on a ByteLengthQueuingStrategy");
}
function IsByteLengthQueuingStrategy(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
        return false;
    }
    return x instanceof ByteLengthQueuingStrategy;
}

// The size function must not have a prototype property nor be a constructor
var countSizeFunction = function () {
    return 1;
};
try {
    Object.defineProperty(countSizeFunction, 'name', {
        value: 'size',
        configurable: true
    });
}
catch (_a) {
    // This property is non-configurable in older browsers, so ignore if this throws.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
}
/**
 * A queuing strategy that counts the number of chunks.
 *
 * @public
 */
var CountQueuingStrategy = /** @class */ (function () {
    function CountQueuingStrategy(options) {
        assertRequiredArgument(options, 1, 'CountQueuingStrategy');
        options = convertQueuingStrategyInit(options, 'First parameter');
        this._countQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    Object.defineProperty(CountQueuingStrategy.prototype, "highWaterMark", {
        /**
         * Returns the high water mark provided to the constructor.
         */
        get: function () {
            if (!IsCountQueuingStrategy(this)) {
                throw countBrandCheckException('highWaterMark');
            }
            return this._countQueuingStrategyHighWaterMark;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CountQueuingStrategy.prototype, "size", {
        /**
         * Measures the size of `chunk` by always returning 1.
         * This ensures that the total queue size is a count of the number of chunks in the queue.
         */
        get: function () {
            if (!IsCountQueuingStrategy(this)) {
                throw countBrandCheckException('size');
            }
            return countSizeFunction;
        },
        enumerable: false,
        configurable: true
    });
    return CountQueuingStrategy;
}());
Object.defineProperties(CountQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
        value: 'CountQueuingStrategy',
        configurable: true
    });
}
// Helper functions for the CountQueuingStrategy.
function countBrandCheckException(name) {
    return new TypeError("CountQueuingStrategy.prototype." + name + " can only be used on a CountQueuingStrategy");
}
function IsCountQueuingStrategy(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
        return false;
    }
    return x instanceof CountQueuingStrategy;
}

function convertTransformer(original, context) {
    assertDictionary(original, context);
    var flush = original === null || original === void 0 ? void 0 : original.flush;
    var readableType = original === null || original === void 0 ? void 0 : original.readableType;
    var start = original === null || original === void 0 ? void 0 : original.start;
    var transform = original === null || original === void 0 ? void 0 : original.transform;
    var writableType = original === null || original === void 0 ? void 0 : original.writableType;
    return {
        flush: flush === undefined ?
            undefined :
            convertTransformerFlushCallback(flush, original, context + " has member 'flush' that"),
        readableType: readableType,
        start: start === undefined ?
            undefined :
            convertTransformerStartCallback(start, original, context + " has member 'start' that"),
        transform: transform === undefined ?
            undefined :
            convertTransformerTransformCallback(transform, original, context + " has member 'transform' that"),
        writableType: writableType
    };
}
function convertTransformerFlushCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (controller) { return promiseCall(fn, original, [controller]); };
}
function convertTransformerStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (controller) { return reflectCall(fn, original, [controller]); };
}
function convertTransformerTransformCallback(fn, original, context) {
    assertFunction(fn, context);
    return function (chunk, controller) { return promiseCall(fn, original, [chunk, controller]); };
}

// Class TransformStream
/**
 * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
 * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
 * In a manner specific to the transform stream in question, writes to the writable side result in new data being
 * made available for reading from the readable side.
 *
 * @public
 */
var TransformStream = /** @class */ (function () {
    function TransformStream(rawTransformer, rawWritableStrategy, rawReadableStrategy) {
        if (rawTransformer === void 0) { rawTransformer = {}; }
        if (rawWritableStrategy === void 0) { rawWritableStrategy = {}; }
        if (rawReadableStrategy === void 0) { rawReadableStrategy = {}; }
        if (rawTransformer === undefined) {
            rawTransformer = null;
        }
        var writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
        var readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
        var transformer = convertTransformer(rawTransformer, 'First parameter');
        if (transformer.readableType !== undefined) {
            throw new RangeError('Invalid readableType specified');
        }
        if (transformer.writableType !== undefined) {
            throw new RangeError('Invalid writableType specified');
        }
        var readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
        var readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
        var writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
        var writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
        var startPromise_resolve;
        var startPromise = newPromise(function (resolve) {
            startPromise_resolve = resolve;
        });
        InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
        if (transformer.start !== undefined) {
            startPromise_resolve(transformer.start(this._transformStreamController));
        }
        else {
            startPromise_resolve(undefined);
        }
    }
    Object.defineProperty(TransformStream.prototype, "readable", {
        /**
         * The readable side of the transform stream.
         */
        get: function () {
            if (!IsTransformStream(this)) {
                throw streamBrandCheckException('readable');
            }
            return this._readable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TransformStream.prototype, "writable", {
        /**
         * The writable side of the transform stream.
         */
        get: function () {
            if (!IsTransformStream(this)) {
                throw streamBrandCheckException('writable');
            }
            return this._writable;
        },
        enumerable: false,
        configurable: true
    });
    return TransformStream;
}());
Object.defineProperties(TransformStream.prototype, {
    readable: { enumerable: true },
    writable: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
        value: 'TransformStream',
        configurable: true
    });
}
function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
    function startAlgorithm() {
        return startPromise;
    }
    function writeAlgorithm(chunk) {
        return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
    }
    function abortAlgorithm(reason) {
        return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
    }
    function closeAlgorithm() {
        return TransformStreamDefaultSinkCloseAlgorithm(stream);
    }
    stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
    function pullAlgorithm() {
        return TransformStreamDefaultSourcePullAlgorithm(stream);
    }
    function cancelAlgorithm(reason) {
        TransformStreamErrorWritableAndUnblockWrite(stream, reason);
        return promiseResolvedWith(undefined);
    }
    stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
    stream._backpressure = undefined;
    stream._backpressureChangePromise = undefined;
    stream._backpressureChangePromise_resolve = undefined;
    TransformStreamSetBackpressure(stream, true);
    stream._transformStreamController = undefined;
}
function IsTransformStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
        return false;
    }
    return x instanceof TransformStream;
}
// This is a no-op if both sides are already errored.
function TransformStreamError(stream, e) {
    ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
    TransformStreamErrorWritableAndUnblockWrite(stream, e);
}
function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
    TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
    WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
    if (stream._backpressure) {
        // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
        // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
        // _backpressure is set.
        TransformStreamSetBackpressure(stream, false);
    }
}
function TransformStreamSetBackpressure(stream, backpressure) {
    // Passes also when called during construction.
    if (stream._backpressureChangePromise !== undefined) {
        stream._backpressureChangePromise_resolve();
    }
    stream._backpressureChangePromise = newPromise(function (resolve) {
        stream._backpressureChangePromise_resolve = resolve;
    });
    stream._backpressure = backpressure;
}
// Class TransformStreamDefaultController
/**
 * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
 *
 * @public
 */
var TransformStreamDefaultController = /** @class */ (function () {
    function TransformStreamDefaultController() {
        throw new TypeError('Illegal constructor');
    }
    Object.defineProperty(TransformStreamDefaultController.prototype, "desiredSize", {
        /**
         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
         */
        get: function () {
            if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException('desiredSize');
            }
            var readableController = this._controlledTransformStream._readable._readableStreamController;
            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
        },
        enumerable: false,
        configurable: true
    });
    TransformStreamDefaultController.prototype.enqueue = function (chunk) {
        if (chunk === void 0) { chunk = undefined; }
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('enqueue');
        }
        TransformStreamDefaultControllerEnqueue(this, chunk);
    };
    /**
     * Errors both the readable side and the writable side of the controlled transform stream, making all future
     * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
     */
    TransformStreamDefaultController.prototype.error = function (reason) {
        if (reason === void 0) { reason = undefined; }
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('error');
        }
        TransformStreamDefaultControllerError(this, reason);
    };
    /**
     * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
     * transformer only needs to consume a portion of the chunks written to the writable side.
     */
    TransformStreamDefaultController.prototype.terminate = function () {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('terminate');
        }
        TransformStreamDefaultControllerTerminate(this);
    };
    return TransformStreamDefaultController;
}());
Object.defineProperties(TransformStreamDefaultController.prototype, {
    enqueue: { enumerable: true },
    error: { enumerable: true },
    terminate: { enumerable: true },
    desiredSize: { enumerable: true }
});
if (typeof SymbolPolyfill.toStringTag === 'symbol') {
    Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
        value: 'TransformStreamDefaultController',
        configurable: true
    });
}
// Transform Stream Default Controller Abstract Operations
function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
        return false;
    }
    return x instanceof TransformStreamDefaultController;
}
function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
    controller._controlledTransformStream = stream;
    stream._transformStreamController = controller;
    controller._transformAlgorithm = transformAlgorithm;
    controller._flushAlgorithm = flushAlgorithm;
}
function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
    var controller = Object.create(TransformStreamDefaultController.prototype);
    var transformAlgorithm = function (chunk) {
        try {
            TransformStreamDefaultControllerEnqueue(controller, chunk);
            return promiseResolvedWith(undefined);
        }
        catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
        }
    };
    var flushAlgorithm = function () { return promiseResolvedWith(undefined); };
    if (transformer.transform !== undefined) {
        transformAlgorithm = function (chunk) { return transformer.transform(chunk, controller); };
    }
    if (transformer.flush !== undefined) {
        flushAlgorithm = function () { return transformer.flush(controller); };
    }
    SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
}
function TransformStreamDefaultControllerClearAlgorithms(controller) {
    controller._transformAlgorithm = undefined;
    controller._flushAlgorithm = undefined;
}
function TransformStreamDefaultControllerEnqueue(controller, chunk) {
    var stream = controller._controlledTransformStream;
    var readableController = stream._readable._readableStreamController;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
        throw new TypeError('Readable side is not in a state that permits enqueue');
    }
    // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
    // accept TransformStreamDefaultControllerEnqueue() calls.
    try {
        ReadableStreamDefaultControllerEnqueue(readableController, chunk);
    }
    catch (e) {
        // This happens when readableStrategy.size() throws.
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
        throw stream._readable._storedError;
    }
    var backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
    if (backpressure !== stream._backpressure) {
        TransformStreamSetBackpressure(stream, true);
    }
}
function TransformStreamDefaultControllerError(controller, e) {
    TransformStreamError(controller._controlledTransformStream, e);
}
function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
    var transformPromise = controller._transformAlgorithm(chunk);
    return transformPromiseWith(transformPromise, undefined, function (r) {
        TransformStreamError(controller._controlledTransformStream, r);
        throw r;
    });
}
function TransformStreamDefaultControllerTerminate(controller) {
    var stream = controller._controlledTransformStream;
    var readableController = stream._readable._readableStreamController;
    ReadableStreamDefaultControllerClose(readableController);
    var error = new TypeError('TransformStream terminated');
    TransformStreamErrorWritableAndUnblockWrite(stream, error);
}
// TransformStreamDefaultSink Algorithms
function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
    var controller = stream._transformStreamController;
    if (stream._backpressure) {
        var backpressureChangePromise = stream._backpressureChangePromise;
        return transformPromiseWith(backpressureChangePromise, function () {
            var writable = stream._writable;
            var state = writable._state;
            if (state === 'erroring') {
                throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        });
    }
    return TransformStreamDefaultControllerPerformTransform(controller, chunk);
}
function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
    // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
    // errored.
    TransformStreamError(stream, reason);
    return promiseResolvedWith(undefined);
}
function TransformStreamDefaultSinkCloseAlgorithm(stream) {
    // stream._readable cannot change after construction, so caching it across a call to user code is safe.
    var readable = stream._readable;
    var controller = stream._transformStreamController;
    var flushPromise = controller._flushAlgorithm();
    TransformStreamDefaultControllerClearAlgorithms(controller);
    // Return a promise that is fulfilled with undefined on success.
    return transformPromiseWith(flushPromise, function () {
        if (readable._state === 'errored') {
            throw readable._storedError;
        }
        ReadableStreamDefaultControllerClose(readable._readableStreamController);
    }, function (r) {
        TransformStreamError(stream, r);
        throw readable._storedError;
    });
}
// TransformStreamDefaultSource Algorithms
function TransformStreamDefaultSourcePullAlgorithm(stream) {
    // Invariant. Enforced by the promises returned by start() and pull().
    TransformStreamSetBackpressure(stream, false);
    // Prevent the next pull() call until there is backpressure.
    return stream._backpressureChangePromise;
}
// Helper functions for the TransformStreamDefaultController.
function defaultControllerBrandCheckException(name) {
    return new TypeError("TransformStreamDefaultController.prototype." + name + " can only be used on a TransformStreamDefaultController");
}
// Helper functions for the TransformStream.
function streamBrandCheckException(name) {
    return new TypeError("TransformStream.prototype." + name + " can only be used on a TransformStream");
}


//# sourceMappingURL=ponyfill.mjs.map


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = () => (Promise.resolve());
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ routes)
});

// EXTERNAL MODULE: external "node:stream"
var external_node_stream_ = __webpack_require__(4492);
// EXTERNAL MODULE: ../../node_modules/react-server-dom-webpack/server.node.js
var server_node = __webpack_require__(6204);
// EXTERNAL MODULE: ../../node_modules/@remix-run/node/dist/index.js
var dist = __webpack_require__(6493);
;// CONCATENATED MODULE: ../../packages/remix-webpack/lib/adapter.js



function wrapAction(action) {
  return async (...args) => {
    const result = await action(...args);
    if (result instanceof Response)
      return result;
    const readable = RSDS.renderToPipeableStream(result, {
      onError: console.error
    });
    const stream = createReadableStreamFromReadable(
      readable.pipe(new PassThrough())
    );
    return new Response(stream, {
      headers: {
        "Content-Type": "text/x-component",
        "Transfer-Encoding": "chunked"
      }
    });
  };
}
function wrapLoader(loader) {
  return async (...args) => {
    const result = await loader(...args);
    if (result instanceof Response)
      return result;
    const readable = server_node.renderToPipeableStream(result, {
      onError: console.error
    });
    const stream = (0,dist/* createReadableStreamFromReadable */.A$)(
      readable.pipe(new external_node_stream_.PassThrough())
    );
    return new Response(stream, {
      headers: {
        "Content-Type": "text/x-component",
        "Transfer-Encoding": "chunked"
      }
    });
  };
}

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5455);
;// CONCATENATED MODULE: ./app/root.tsx


function Root() {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx("title", { children: "My App" }) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", children: "About" }) })
      ] }) }),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}

;// CONCATENATED MODULE: ./app/components/counter.tsx
"use client";

function Counter() {
  const [count, setCount] = [0, (c) => {
  }];
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { children: [
      "Count: ",
      count
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { type: "button", onClick: () => setCount(count + 1), children: "Increment" })
  ] });
}

;// CONCATENATED MODULE: ./app/routes/_index/route.tsx



function loader() {
  return {
    // header: "Hello, World!",
    // message: "This is the index route!",
    header: /* @__PURE__ */ (0,jsx_runtime.jsx)("h1", { children: "Hello, World!" }),
    message: /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { children: "This is the index route rendering RSC Content." }),
    counter: /* @__PURE__ */ (0,jsx_runtime.jsx)(Counter, {}),
    test: Promise.resolve("test")
  };
}
function IndexRoute() {
  const data = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ jsxs("main", { children: [
    data.header,
    data.message,
    data.counter
  ] });
}

;// CONCATENATED MODULE: ./app/routes/about/route.tsx

function About() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("p", { children: "This is the about route." })
  ] });
}

;// CONCATENATED MODULE: ./.cache/server-entry-module.mjs

  
  


  const routes = {
    "root": {
      action: undefined,
      loader: undefined,
    },
  "routes/_index": {
      action: undefined,
      loader: wrapLoader(loader),
    },
  "routes/about": {
      action: undefined,
      loader: undefined,
    }
  };

})();

var __webpack_exports__routes = __webpack_exports__._;
export { __webpack_exports__routes as routes };

//# sourceMappingURL=server-module.mjs.map