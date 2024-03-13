"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseProgress = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _StyleBaseProgress = _interopRequireDefault(require("./StyleBaseProgress"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, size === 'small' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between text-gray-700 text-m mb-3"
  }, /*#__PURE__*/_react["default"].createElement("div", null, missionState()), /*#__PURE__*/_react["default"].createElement("div", null, progressText)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full relative flex justify-center items-center"
  }, size !== 'small' && /*#__PURE__*/_react["default"].createElement("span", {
    className: [size === 'middle' && 'text-3', size === 'large' && 'text-4', 'absolute text-center text-gray-500'].join(' ')
  }, isLock ? '未解鎖' : progressText), /*#__PURE__*/_react["default"].createElement(_StyleBaseProgress["default"], {
    valueColor: isLock ? '#797979' : valueColor,
    bgColor: isLock ? '#797979' : bgColor,
    type: type,
    value: valueInt,
    max: maxInt,
    height: size
  })));
};
exports.BaseProgress = BaseProgress;
BaseProgress.propTypes = {
  valueColor: _propTypes["default"].string,
  bgColor: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(['step', 'ratio', 'lock']).isRequired,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  max: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,
  size: _propTypes["default"].oneOf(['small', 'middle', 'large'])
};
BaseProgress.defaultProps = {
  valueColor: '#0088BB',
  bgColor: '#dbdbdb',
  size: 'large'
};