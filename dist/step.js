"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Step = function Step(_ref) {
  var className = _ref.className,
    stepList = _ref.stepList,
    completeColor = _ref.completeColor,
    notCompleteColor = _ref.notCompleteColor,
    notCompleteCircleColor = _ref.notCompleteCircleColor,
    lineWidth = _ref.lineWidth;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(className, " flex w-full overflow-scroll")
  }, stepList.map(function (v, i) {
    var _stepList;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center",
      key: Math.random().toString(36).substring(2)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: ["w-4 h-4 rounded-1/2", v.status ? completeColor : "bg-[#fff] border-2 border-solid ".concat(notCompleteCircleColor)].join(' ')
    }), stepList.length - 1 !== i && /*#__PURE__*/_react["default"].createElement("div", {
      className: ['h-1', lineWidth, v.status && ((_stepList = stepList[i + 1]) === null || _stepList === void 0 ? void 0 : _stepList.status) === true ? completeColor : notCompleteColor].join(' ')
    }));
  }));
};
exports.Step = Step;
Step.propTypes = {
  className: _propTypes["default"].string,
  stepList: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    status: _propTypes["default"].bool
  })),
  completeColor: _propTypes["default"].string,
  notCompleteColor: _propTypes["default"].string,
  notCompleteCircleColor: _propTypes["default"].string,
  lineWidth: _propTypes["default"].string
};
Step.defaultProps = {
  className: '',
  stepList: [],
  completeColor: 'bg-blue-300',
  notCompleteColor: 'bg-gray-300',
  notCompleteCircleColor: 'border-gray-300',
  lineWidth: 'w-24'
};