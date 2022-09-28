"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var convertHeight = function convertHeight(height) {
  var heightType = '';
  if (height === 'small') heightType = '10px';
  if (height === 'middle') heightType = '20px';
  if (height === 'large') heightType = '25px';
  return heightType;
};

var Progress = _styledComponents["default"].progress.withConfig({
  displayName: "StyleBaseProgress__Progress",
  componentId: "sc-o64274-0"
})(["width:100%;height:", ";::-webkit-progress-bar{background:", ";border-radius:5px;}::-webkit-progress-value{background:", ";border-radius:", ";}::-moz-progress-bar{background:", ";border-radius:5px;}::-moz-progress-value{background:", ";border-radius:", ";}"], function (props) {
  return convertHeight(props.height);
}, function (props) {
  return props.bgColor;
}, function (props) {
  return props.valueColor;
}, function (props) {
  return props.height !== 'small' && props.value < props.max ? '5px 0px 0px 5px' : '5px';
}, function (props) {
  return props.bgColor;
}, function (props) {
  return props.valueColor;
}, function (props) {
  return props.height !== 'small' && props.value < props.max ? '5px 0px 0px 5px' : '5px';
});

var _default = Progress;
exports["default"] = _default;