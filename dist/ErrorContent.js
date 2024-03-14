"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@iconify/react");
var _ModalContent = _interopRequireDefault(require("./ModalContent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ErrorContent = function ErrorContent(_ref) {
  var setModal = _ref.setModal,
    errmsg = _ref.errmsg;
  return /*#__PURE__*/_react["default"].createElement(_ModalContent["default"], {
    setModal: setModal,
    onClick: function onClick() {
      return setModal();
    },
    notice: true
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full max-w-xl"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center mb-6"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: "fluent-mdl2:status-error-full",
    color: "red",
    height: "60"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center text-lg text-gray-500"
  }, errmsg)));
};
ErrorContent.propTypes = {
  setModal: _propTypes["default"].bool.isRequired,
  errmsg: _propTypes["default"].node.isRequired
};
var _default = exports["default"] = ErrorContent;