"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spin = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@iconify/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Spin = exports.Spin = function Spin(props) {
  var icon = props.icon,
    show = props.show,
    overlayBackground = props.overlayBackground;
  return show ? /*#__PURE__*/_react["default"].createElement("div", {
    className: ['fixed flex justify-center items-center w-full h-full left-0 top-0 z-[9999] overflow-hidden', overlayBackground].join(' ')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "top-2/4 left-2/4"
  }, icon ? /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    className: "animate-spin w-10 h-10",
    icon: icon
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-10 h-10 rounded-full border-4 border-solid border-[#ffffff33] border-t-[#dbdbdb] animate-spin"
  }))) : null;
};
Spin.propTypes = {
  icon: _propTypes["default"].string,
  show: _propTypes["default"].bool,
  overlayBackground: _propTypes["default"].string
};
Spin.defaultProps = {
  icon: '',
  show: false,
  overlayBackground: 'bg-[#00000055]'
};