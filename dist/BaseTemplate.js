"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@iconify/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BaseTemplate = function BaseTemplate(_ref) {
  var tempImage = _ref.tempImage;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-6 w-72 h-56"
  }, tempImage ? /*#__PURE__*/_react["default"].createElement("img", {
    className: "w-full h-full object-cover",
    src: tempImage,
    alt: ""
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    id: "image-preview",
    className: "max-w-sm p-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: "material-symbols:upload",
    width: "2.5rem",
    height: "2.5rem"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-normal text-sm text-gray-400 py-4"
  }, "\u5716\u7247\u50C5\u652F\u63F4 png\u3001jpg\u3001jpeg"), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "mb-2 text-xl font-bold tracking-tight text-gray-700"
  }, "\u4E0A\u50B3\u5716\u7247")))));
};
var _default = exports["default"] = BaseTemplate;