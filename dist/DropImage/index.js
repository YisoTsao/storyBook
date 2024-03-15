"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropImage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDropzone = require("react-dropzone");
var _uuid = require("uuid");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DropImage = exports.DropImage = function DropImage(_ref) {
  var _ref$preview = _ref.preview,
    preview = _ref$preview === void 0 ? true : _ref$preview,
    setFiles = _ref.setFiles;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    previewFiles = _useState2[0],
    setPreviewFiles = _useState2[1];
  var _useDropzone = (0, _reactDropzone.useDropzone)({
      accept: 'image/*',
      maxFiles: 15,
      maxSize: 5000000,
      onDrop: function onDrop(dropFiles) {
        var newFiles = [];
        setFiles(dropFiles);
        dropFiles.forEach(function (dropFile) {
          Object.assign(dropFile, {
            preview: URL.createObjectURL(dropFile),
            uuid: (0, _uuid.v4)()
          });
          newFiles.push(dropFile);
          setPreviewFiles(newFiles);
        });
      }
    }),
    getRootProps = _useDropzone.getRootProps,
    getInputProps = _useDropzone.getInputProps,
    isDragActive = _useDropzone.isDragActive,
    isDragAccept = _useDropzone.isDragAccept,
    isDragReject = _useDropzone.isDragReject;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", getRootProps({
    className: 'dropzone'
  }), /*#__PURE__*/_react["default"].createElement("input", getInputProps()), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full bg-gray-light rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " border-2 border-dashed border-gray-c_979 rounded-lg"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center flex-col p-32"
  }, "\u4E0A\u50B3\u5716\u7247", /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-gray-c_ccc m-4 text-xl"
  }, isDragAccept && /*#__PURE__*/_react["default"].createElement("p", null, "All files will be accepted"), isDragReject && /*#__PURE__*/_react["default"].createElement("p", null, "Some files will be rejected"), !isDragActive && /*#__PURE__*/_react["default"].createElement("p", null, "Drop files here to upload")), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button"
  }, "\u700F\u89BD\u6A94\u6848")))))), preview && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2"
  }, previewFiles && previewFiles.length > 0 && previewFiles.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-24 h-24 object-cover",
      key: item.uuid
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: item === null || item === void 0 ? void 0 : item.preview,
      alt: ""
    }));
  })));
};