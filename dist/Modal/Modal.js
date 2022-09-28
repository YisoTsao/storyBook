"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("../Image"));

var __jsx = _react["default"].createElement;

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      hiddenCloseIcon = _ref.hiddenCloseIcon,
      className = _ref.className,
      topContent = _ref.topContent,
      content = _ref.content,
      bottomContent = _ref.bottomContent,
      backgroundColor = _ref.backgroundColor;
  return isOpen && __jsx("div", {
    className: ['fixed inset-y-0 z-50 duration-300 transition-opacity w-full max-w-screen-xs', "".concat(backgroundColor)].join(' ')
  }, !hiddenCloseIcon && __jsx("button", {
    type: "button",
    className: "absolute relate top-[19px] left-[19px] z-[1000]",
    onClick: onClose
  }, __jsx(_Image["default"], {
    className: "w-[17px] h-[17px]",
    filename: "btn_nav_close_darkbg_n"
  })), __jsx("div", {
    className: "w-full h-full flex justify-center items-center"
  }, __jsx("div", {
    className: className
  }, topContent && topContent, content, bottomContent && bottomContent)));
};

var _default = Modal;
exports["default"] = _default;
Modal.defaultProps = {
  isOpen: false,
  onClose: function onClose() {},
  hiddenCloseIcon: false,
  className: '',
  bottomContent: null,
  topContent: null,
  backgroundColor: 'bg-[#000000b3]'
};