"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireDefault(require("react"));
var _dynamic = _interopRequireDefault(require("next/dynamic"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var StyledTooltip = (0, _dynamic["default"])(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Styled'));
  });
}, {
  ssr: false
});
var Tooltip = exports.Tooltip = function Tooltip(_ref) {
  var direction = _ref.direction,
    content = _ref.content,
    children = _ref.children;
  var getTooltipClassName = function getTooltipClassName() {
    switch (direction) {
      case 'top':
        return 'tooltip-top';
      case 'right':
        return 'tooltip-right';
      case 'bottom':
        return 'tooltip-bottom';
      case 'left':
        return 'tooltip-left';
      default:
        return 'tooltip-top';
      // 默認方向
    }
  };
  return /*#__PURE__*/_react["default"].createElement(StyledTooltip, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tooltip ".concat(getTooltipClassName())
  }, children, /*#__PURE__*/_react["default"].createElement("span", {
    className: "tooltip-text text-xs w-36 sm:w-48 bg-[#d7d9ce] shadow-inner"
  }, content)));
};
Tooltip.propTypes = {
  direction: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left']),
  content: _propTypes["default"].node.isRequired,
  children: _propTypes["default"].node.isRequired
};