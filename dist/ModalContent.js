"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ModalContent = function ModalContent(_ref) {
  var title = _ref.title,
    setModal = _ref.setModal,
    children = _ref.children,
    _onClick = _ref.onClick,
    _ref$notice = _ref.notice,
    notice = _ref$notice === void 0 ? false : _ref$notice;
  return /*#__PURE__*/_react["default"].createElement("form", null, title && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-2xl text-gray-700 font-medium border-solid border-b border-gray-300 mb-4 p-4"
  }, title), children && /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-4 px-8"
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center text-base p-4 px-8 justify-around"
  }, notice ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-24 h-10 px-2 text-white bg-gray-600  rounded",
    onClick: function onClick() {
      return setModal();
    }
  }, "\u78BA\u5B9A") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-24 h-10 px-2 text-white bg-gray-600  rounded",
    onClick: function onClick() {
      return setModal();
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-24 h-10 mx-3 text-white bg-gray-500 rounded",
    onClick: function onClick() {
      return _onClick();
    }
  }, "\u9001\u51FA"))));
};
var _default = exports["default"] = ModalContent;
ModalContent.propTypes = {
  children: _propTypes["default"].element.isRequired,
  title: _propTypes["default"].element,
  setModal: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  notice: _propTypes["default"].bool
};