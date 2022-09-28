"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyleBaseProgress = _interopRequireDefault(require("./StyleBaseProgress"));

var __jsx = _react["default"].createElement;

var BaseProgress = function BaseProgress(_ref) {
  var type = _ref.type,
      value = _ref.value,
      max = _ref.max,
      size = _ref.size,
      valueColor = _ref.valueColor,
      bgColor = _ref.bgColor;
  var valueInt = Number(value);
  var maxInt = Number(max);
  var isLock = type === 'lock';

  var missionState = function missionState() {
    var stateText = '';
    if (valueInt < maxInt && valueInt !== 0) stateText = '進行中';
    if (valueInt === maxInt) stateText = '已完成';
    if (isLock) stateText = '尚未解鎖';
    return stateText;
  };

  var progressText = type === 'ratio' ? "".concat(isLock ? 0 : valueInt, "%") : "".concat(isLock ? 0 : valueInt, "/").concat(max);
  return __jsx(_react["default"].Fragment, null, size === 'small' && __jsx("div", {
    className: "flex justify-between text-gray-700 text-m mb-3"
  }, __jsx("div", null, missionState()), __jsx("div", null, progressText)), __jsx("div", {
    className: "w-full relative flex justify-center items-center"
  }, size !== 'small' && __jsx("span", {
    className: [size === 'middle' && 'text-3', size === 'large' && 'text-4', 'absolute text-center text-gray-500'].join(' ')
  }, isLock ? '未解鎖' : progressText), __jsx(_StyleBaseProgress["default"], {
    valueColor: isLock ? '#797979' : valueColor,
    bgColor: isLock ? '#797979' : bgColor,
    type: type,
    value: valueInt,
    max: maxInt,
    height: size
  })));
};

var _default = BaseProgress;
exports["default"] = _default;
BaseProgress.defaultProps = {
  valueColor: '#0088BB',
  bgColor: '#dbdbdb',
  size: 'large'
};