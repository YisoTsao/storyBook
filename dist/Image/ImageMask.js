"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

var __jsx = _react["default"].createElement;

var ImageMask = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var imgUrl = _ref.imgUrl,
      imgRadius = _ref.imgRadius,
      imgFileExtension = _ref.imgFileExtension,
      imgFileName = _ref.imgFileName,
      iconClassName = _ref.iconClassName,
      iconFileName = _ref.iconFileName,
      title = _ref.title,
      titleSize = _ref.titleSize,
      titleColor = _ref.titleColor,
      subTitle = _ref.subTitle,
      subTitleSize = _ref.subTitleSize,
      subTitleColor = _ref.subTitleColor,
      maskShow = _ref.maskShow;
  var maskStyle = "".concat(imgRadius, " bg-imageMask w-full h-full p-1 absolute top-0 left-0 flex flex-wrap flex-col justify-center items-center overflow-hidden");
  return __jsx("div", {
    className: "w-full h-full relative"
  }, __jsx(_Image["default"], {
    className: "object-cover w-full h-full ".concat(imgRadius),
    filename: imgFileName,
    fileExtension: imgFileExtension,
    url: imgUrl
  }), maskShow && __jsx("div", {
    className: maskStyle
  }, iconFileName && __jsx(_Image["default"], {
    className: iconClassName,
    filename: iconFileName
  }), title && __jsx("span", {
    className: " ".concat(titleSize, " ").concat(titleColor)
  }, title), subTitle && __jsx("span", {
    className: "mt-2.5 ".concat(subTitleSize, " ").concat(subTitleColor)
  }, subTitle)));
});

ImageMask.defaultProps = {
  imgUrl: '',
  imgRadius: '',
  imgFileName: '',
  imgFileExtension: 'png',
  iconClassName: '',
  iconFileName: '',
  title: '',
  titleSize: 'text-l',
  titleColor: 'text-fixedWhite',
  subTitle: '',
  subTitleSize: 'text-m',
  subTitleColor: 'text-fixedWhite',
  maskShow: true
};
var _default = ImageMask;
exports["default"] = _default;