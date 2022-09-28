"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;
var DEFAULT_IMAGE = "/assets/images/img_common_placeholder_pic_n.png";

var imgOnErrorHandler = function imgOnErrorHandler(e) {
  e.currentTarget.src = DEFAULT_IMAGE;
  e.currentTarget.className += ' bg-imagePlaceholder';
};

var Image = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var className = _ref.className,
      fileExtension = _ref.fileExtension,
      filename = _ref.filename,
      url = _ref.url;
  var imageSource = url || "/assets/images/".concat(filename, ".").concat(fileExtension);
  return __jsx("img", {
    alt: "",
    className: className,
    src: imageSource,
    onError: imgOnErrorHandler
  });
});

Image.defaultProps = {
  className: '',
  filename: '',
  fileExtension: 'png',
  url: ''
};
var _default = Image;
exports["default"] = _default;