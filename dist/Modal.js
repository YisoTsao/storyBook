"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Modal = function Modal(_ref) {
  var modal = _ref.modal,
    unsetModal = _ref.unsetModal;
  var handleKeyUp = function handleKeyUp(e) {
    var _document$activeEleme;
    return e.keyCode === 27 && !['INPUT', 'SELECT'].includes((_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.tagName) && unsetModal();
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('keyup', handleKeyUp);
    return function () {
      return document.removeEventListener('keyup', handleKeyUp);
    };
  }, [modal, unsetModal]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 left-0 h-screen z-[2000] transition-opacity duration-300 transition-opacity bg-[#000000b3] w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-full flex justify-center items-center p-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white rounded overflow-y-auto w-full m-auto max-w-[455px] rounded-xl"
  }, modal)));
};
var _default = exports["default"] = Modal;
Modal.propTypes = {
  modal: _propTypes["default"].element.isRequired,
  unsetModal: _propTypes["default"].func
};
Modal.defaultProps = {
  unsetModal: function unsetModal() {}
};