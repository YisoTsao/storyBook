"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ErrorContent = _interopRequireDefault(require("../Modal/ErrorContent"));
var _UIProvider = require("../UIProvider");
var _BaseTemplate = _interopRequireDefault(require("./BaseTemplate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// eslint-disable-next-line import/named

var CustomUpload = function CustomUpload(_ref) {
  var className = _ref.className,
    children = _ref.children,
    file = _ref.file,
    setFile = _ref.setFile,
    tempImage = _ref.tempImage,
    setTempImage = _ref.setTempImage;
  var imageMimeType = /image\/(png|jpg|jpeg)/i;
  var DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES = 5120000; // 5000 KB

  var hiddenFileInput = (0, _react.useRef)(null);
  var handleImageClick = function handleImageClick() {
    hiddenFileInput.current.click();
  };
  var handleImageChange = function handleImageChange(event) {
    var _currentFile$type;
    var currentFile = event.target.files[0];
    if (!currentFile) return;
    if (currentFile && !((_currentFile$type = currentFile.type) !== null && _currentFile$type !== void 0 && _currentFile$type.match(imageMimeType))) {
      (0, _UIProvider.setModal)( /*#__PURE__*/_react["default"].createElement(_ErrorContent["default"], {
        setModal: _UIProvider.setModal,
        errmsg: "\u5716\u7247\u50C5\u652F\u63F4 png\u3001jpg\u3001jpeg!"
      }));
      return;
    }
    if (currentFile && currentFile.size > DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES) {
      (0, _UIProvider.setModal)( /*#__PURE__*/_react["default"].createElement(_ErrorContent["default"], {
        setModal: _UIProvider.setModal,
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
  return /*#__PURE__*/_react["default"].createElement("button", {
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
    className: "hidden"
  }));
};
CustomUpload.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node
};
var _default = exports["default"] = CustomUpload;