"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@iconify/react");
var _router = require("next/router");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SubMenu = function SubMenu(_ref) {
  var _item$subNav;
  var item = _ref.item;
  var router = (0, _router.useRouter)();
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    subnav = _useState2[0],
    setSubnav = _useState2[1];
  var showSubnav = function showSubnav() {
    if (item !== null && item !== void 0 && item.subNav) {
      setSubnav(!subnav);
      return;
    }
    router.push(item === null || item === void 0 ? void 0 : item.path);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "w-full flex justify-between items-center p-4 h-14 text-xl hover:bg-[#D9D9D9] cursor-pointer ".concat(item === null || item === void 0 ? void 0 : item.className),
    onClick: showSubnav
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center text-[#171A1F]"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: item === null || item === void 0 ? void 0 : item.icon,
    width: "24",
    height: "24",
    color: "#000"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-4"
  }, item.title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "leading-5"
  }, item !== null && item !== void 0 && item.subNav && subnav ? item === null || item === void 0 ? void 0 : item.iconOpened : item !== null && item !== void 0 && item.subNav ? item === null || item === void 0 ? void 0 : item.iconClosed : null)), subnav && (item === null || item === void 0 ? void 0 : (_item$subNav = item.subNav) === null || _item$subNav === void 0 ? void 0 : _item$subNav.map(function (subItem) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: ['w-full text-lg h-16 pl-12 flex items-center hover:bg-[#D9D9D9]', (router === null || router === void 0 ? void 0 : router.pathname) === (subItem === null || subItem === void 0 ? void 0 : subItem.path) ? 'bg-[#0C7489] text-white' : 'bg-[#f5f5f5] text-[#737373]'].join(' '),
      key: subItem.path,
      onClick: function onClick() {
        return router.push(subItem === null || subItem === void 0 ? void 0 : subItem.path);
      }
    }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
      icon: subItem === null || subItem === void 0 ? void 0 : subItem.icon,
      width: "24",
      height: "24",
      color: (router === null || router === void 0 ? void 0 : router.pathname) === (subItem === null || subItem === void 0 ? void 0 : subItem.path) ? '#fff' : '#737373'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "ml-4"
    }, subItem.title));
  })));
};
SubMenu.propTypes = {
  item: _propTypes["default"].shape()
};
var _default = SubMenu;
exports["default"] = _default;