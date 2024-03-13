"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireDefault(require("react"));
var _dynamic = _interopRequireDefault(require("next/dynamic"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var StyledTooltip = (0, _dynamic["default"])(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Styled'));
  });
}, {
  ssr: false
});
var Tooltip = function Tooltip(_ref) {
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
exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  direction: _propTypes["default"].oneOf(['top', 'right', 'bottom', 'left']),
  content: _propTypes["default"].node.isRequired,
  children: _propTypes["default"].node.isRequired
};