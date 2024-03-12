"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _BaseProgress = require("./BaseProgress");
Object.keys(_BaseProgress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _BaseProgress[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _BaseProgress[key];
    }
  });
});
