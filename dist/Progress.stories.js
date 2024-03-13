"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Lock = exports.Inprogress = exports.Finished = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("../../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  title: 'basic/Progress',
  component: _components.BaseProgress
};
/* eslint-disable react/jsx-props-no-spreading */
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 p-4 max-w-xs"
  }, /*#__PURE__*/_react["default"].createElement(_components.BaseProgress, args));
};
var Lock = Template.bind({});
exports.Lock = Lock;
Lock.args = {
  type: 'lock',
  value: 0,
  max: 100,
  size: 'small'
};
var Inprogress = Template.bind({});
exports.Inprogress = Inprogress;
Inprogress.args = {
  type: 'step',
  value: 28,
  max: 100,
  size: 'small'
};
var Finished = Template.bind({});
exports.Finished = Finished;
Finished.args = {
  type: 'ratio',
  value: '100',
  max: '100',
  size: 'small'
};