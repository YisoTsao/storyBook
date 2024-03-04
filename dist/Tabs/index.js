"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var Tabs = function Tabs(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'leading-[18px] text-lg' : _ref$className,
      items = _ref.items,
      activeTab = _ref.activeTab,
      handleTabClick = _ref.handleTabClick;
  return __jsx("div", {
    className: "flex flex-col items-start"
  }, __jsx("div", {
    className: "flex justify-between gap-6 lg:gap-12 pb-[6px] z-10"
  }, items.length && items.map(function (item) {
    return __jsx("button", {
      key: item === null || item === void 0 ? void 0 : item.name,
      type: "button",
      className: ['font-medium leading-9 flex-1 whitespace-nowrap', activeTab === item.tabIndex ? 'text-[#79747E] underline decoration-[6px] underline-offset-8' : '', className].join(' '),
      onClick: function onClick() {
        return handleTabClick(item.tabIndex);
      }
    }, item === null || item === void 0 ? void 0 : item.name);
  })), __jsx("div", {
    className: "bg-[#D9D9D9] min-h-[3px] w-full mt-0 mb-2"
  }));
};

var _default = Tabs;
exports["default"] = _default;