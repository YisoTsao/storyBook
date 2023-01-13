"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));
var _Step = _interopRequireDefault(require("./Step"));
var _Ckeditor = _interopRequireDefault(require("./Ckeditor"));
var _default = {
  BaseProgress: _ProgressBar["default"],
  Step: _Step["default"],
  CkEditor: _Ckeditor["default"]
};
exports["default"] = _default;