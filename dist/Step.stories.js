"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overflowStep = exports["default"] = exports.LineStep = exports.CompleteLineStep = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("../../components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var fakeStep = [{
  status: true
}, {
  status: true
}, {
  status: false
}, {
  status: false
}];
var fakeCompleteLineStep = [{
  status: true
}, {
  status: true
}, {
  status: true
}, {
  status: true
}];
var _default = {
  title: 'basic/Step',
  component: _components.Step
};
/* eslint-disable react/jsx-props-no-spreading */
exports["default"] = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_components.Step, args);
};
var OverFlowTemplate = function OverFlowTemplate(args) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-screen-xs rounded border border-solid\tborder-gray-300"
  }, /*#__PURE__*/_react["default"].createElement(_components.Step, args));
};
var LineStep = Template.bind({});
exports.LineStep = LineStep;
LineStep.args = {
  className: 'p-8',
  stepList: fakeStep
};
var CompleteLineStep = Template.bind({});
exports.CompleteLineStep = CompleteLineStep;
CompleteLineStep.args = {
  className: 'p-8',
  stepList: fakeCompleteLineStep
};
var overflowStep = OverFlowTemplate.bind({});
exports.overflowStep = overflowStep;
overflowStep.args = {
  className: 'p-12',
  stepList: [].concat(fakeCompleteLineStep, fakeStep)
};