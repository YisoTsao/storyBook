"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@iconify/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BaseTemplate = function BaseTemplate(_ref) {
  var file = _ref.file;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    tempImage = _useState2[0],
    setTempImage = _useState2[1];
  (0, _react.useEffect)(function () {
    var fileReader;
    var isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = function (e) {
        var result = e.target.result;
        if (result && !isCancel) {
          setTempImage(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return function () {
      setTempImage(null);
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-6 w-72 h-56"
  }, tempImage ? /*#__PURE__*/_react["default"].createElement("img", {
    className: "w-full h-full object-cover",
    src: tempImage,
    alt: ""
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    id: "image-preview",
    className: "max-w-sm p-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    icon: "material-symbols:upload",
    width: "2.5rem",
    height: "2.5rem"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-normal text-sm text-gray-400 py-4"
  }, "\u5716\u7247\u50C5\u652F\u63F4 png\u3001jpg\u3001jpeg"), /*#__PURE__*/_react["default"].createElement("h5", {
    className: "mb-2 text-xl font-bold tracking-tight text-gray-700"
  }, "\u4E0A\u50B3\u5716\u7247")))));
};
var _default = exports["default"] = BaseTemplate;