"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ErrorContent = _interopRequireDefault(require("../Modal/ErrorContent"));
var _Modal = _interopRequireDefault(require("../Modal"));
var _BaseTemplate = _interopRequireDefault(require("./BaseTemplate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomUpload = function CustomUpload(_ref) {
  var className = _ref.className,
    children = _ref.children,
    file = _ref.file,
    setFile = _ref.setFile,
    tempImage = _ref.tempImage,
    setTempImage = _ref.setTempImage;
  var imageMimeType = /image\/(png|jpg|jpeg)/i;
  var DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES = 5120000; // 5000 KB

  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    modal = _useState2[0],
    setModal = _useState2[1];
  var hiddenFileInput = (0, _react.useRef)(null);
  var handleImageClick = function handleImageClick() {
    hiddenFileInput.current.click();
  };
  var handleImageChange = function handleImageChange(event) {
    var _currentFile$type;
    var currentFile = event.target.files[0];
    if (!currentFile) {
      setFile(null);
      setTempImage(null);
      return;
    }
    if (currentFile && !((_currentFile$type = currentFile.type) !== null && _currentFile$type !== void 0 && _currentFile$type.match(imageMimeType))) {
      setModal( /*#__PURE__*/_react["default"].createElement(_ErrorContent["default"], {
        setModal: setModal,
        errmsg: "\u5716\u7247\u50C5\u652F\u63F4 png\u3001jpg\u3001jpeg!"
      }));
      return;
    }
    if (currentFile && currentFile.size > DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES) {
      setModal( /*#__PURE__*/_react["default"].createElement(_ErrorContent["default"], {
        setModal: setModal,
        errmsg: /*#__PURE__*/_react["default"].createElement("span", null, "\u9078\u64C7\u7684\u6A94\u6848\u5927\u5C0F\uFF1A", String((currentFile.size / 1024 / 1024).toFixed(3)), ' MB', /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("hr", null), "\u4E0A\u9650\uFF1A", String((DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES / 1024 / 1024).toFixed(3)), ' MB')
      }));
      return;
    }
    setFile(currentFile);
    setTempImage(currentFile);
  };
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
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    className: [className].join(' '),
    type: "button",
    onClick: handleImageClick
  }, children || /*#__PURE__*/_react["default"].createElement(_BaseTemplate["default"], {
    tempImage: tempImage
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "file",
    ref: hiddenFileInput,
    accept: ".png, .jpg, .jpeg",
    onChange: handleImageChange,
    className: "hidden",
    id: "uploadImage"
  })), modal && /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    modal: modal,
    unsetModal: setModal
  }));
};
CustomUpload.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
var _default = exports["default"] = CustomUpload;