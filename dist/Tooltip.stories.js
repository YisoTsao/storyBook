"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Base = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("../../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  title: 'basic/Tooltip',
  component: _components.Tooltip
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_components.Tooltip, args);
};
var Base = exports.Base = Template.bind({});
Base.args = {
  direction: 'top',
  content: 'toolTip content',
  children: /*#__PURE__*/_react["default"].createElement("div", null, "hover me!")
};