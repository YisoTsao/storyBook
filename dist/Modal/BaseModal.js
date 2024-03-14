"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@iconify/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var BaseModal = function BaseModal(_ref) {
  var _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
    content = _ref.content,
    height = _ref.height,
    className = _ref.className,
    onClose = _ref.onClose,
    _ref$showCloseIcon = _ref.showCloseIcon,
    showCloseIcon = _ref$showCloseIcon === void 0 ? false : _ref$showCloseIcon,
    _ref$fixCloseBtn = _ref.fixCloseBtn,
    fixCloseBtn = _ref$fixCloseBtn === void 0 ? false : _ref$fixCloseBtn;
  return isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 left-0 h-full z-[1000] p-4 duration-300 transition-opacity bg-[#000000b3] w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-full flex justify-center items-center relative"
  }, showCloseIcon && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-right p-2 absolute right-0 top-0"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    className: "ml-auto cursor-pointer text-white",
    icon: "ion:close",
    width: "24",
    height: "24",
    onClick: onClose
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: ['bg-white rounded-xl overflow-y-auto m-auto', fixCloseBtn ? '' : 'max-w-[932px] max-h-[90vh]', height, className].join(' ')
  }, content)));
};
BaseModal.propTypes = {
  isOpen: _propTypes["default"].bool,
  content: _propTypes["default"].element,
  height: _propTypes["default"].string,
  className: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  showCloseIcon: _propTypes["default"].bool,
  fixCloseBtn: _propTypes["default"].bool
};
var _default = exports["default"] = BaseModal;