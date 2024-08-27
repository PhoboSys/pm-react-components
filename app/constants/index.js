"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _avatarsColors = require("./avatarsColors");
Object.keys(_avatarsColors).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _avatarsColors[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _avatarsColors[key];
    }
  });
});
var _network = require("./network");
Object.keys(_network).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _network[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _network[key];
    }
  });
});
//# sourceMappingURL=index.js.map