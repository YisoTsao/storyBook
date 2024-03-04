"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _dynamic = _interopRequireDefault(require("next/dynamic"));

var __jsx = _react["default"].createElement;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || (0, _typeof2["default"])(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledTooltip = (0, _dynamic["default"])(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./Styled'));
  });
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [require.resolveWeak('./Styled')];
    }
  }
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

  return __jsx(StyledTooltip, null, __jsx("div", {
    className: "tooltip ".concat(getTooltipClassName())
  }, children, __jsx("span", {
    className: "tooltip-text text-xs w-36 sm:w-48 bg-[#d7d9ce] shadow-inner"
  }, content)));
};

var _default = Tooltip;
exports["default"] = _default;