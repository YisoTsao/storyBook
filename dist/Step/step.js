"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var Step = function Step(_ref) {
  var className = _ref.className,
      stepList = _ref.stepList,
      completeColor = _ref.completeColor,
      notCompleteColor = _ref.notCompleteColor,
      notCompleteCircleColor = _ref.notCompleteCircleColor,
      lineWidth = _ref.lineWidth;
  return __jsx("div", {
    className: "".concat(className, " flex w-full overflow-scroll")
  }, stepList.map(function (v, i) {
    var _stepList;

    return __jsx("div", {
      className: "flex items-center",
      key: Math.random().toString(36).substring(2)
    }, __jsx("div", {
      className: ["w-4 h-4 rounded-1/2", v.status ? completeColor : "bg-[#fff] border-2 border-solid ".concat(notCompleteCircleColor)].join(' ')
    }), stepList.length - 1 !== i && __jsx("div", {
      className: ['h-1', lineWidth, v.status && ((_stepList = stepList[i + 1]) === null || _stepList === void 0 ? void 0 : _stepList.status) === true ? completeColor : notCompleteColor].join(' ')
    }));
  }));
};

var _default = Step;
exports["default"] = _default;
Step.defaultProps = {
  className: '',
  stepList: [],
  completeColor: 'bg-blue-300',
  notCompleteColor: 'bg-gray-300',
  notCompleteCircleColor: 'border-gray-300',
  lineWidth: 'w-24'
};