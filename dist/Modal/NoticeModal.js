"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react2 = require("@iconify/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NoticeModal = function NoticeModal(_ref) {
  var title = _ref.title,
    buttonName = _ref.buttonName,
    content = _ref.content,
    setModal = _ref.setModal,
    onClick = _ref.onClick,
    onlyCheck = _ref.onlyCheck,
    action = _ref.action,
    _ref$cancelButtonName = _ref.cancelButtonName,
    cancelButtonName = _ref$cancelButtonName === void 0 ? '取消' : _ref$cancelButtonName,
    cancelFunc = _ref.cancelFunc;
  var statusCode = action === null || action === void 0 ? void 0 : action.statusCode;
  var actionFunc = function actionFunc() {
    if (statusCode === 'book_dates') return action === null || action === void 0 ? void 0 : action.resetCalendar();
    if (statusCode === 'book_expired') return action === null || action === void 0 ? void 0 : action.redirectBook();
    if (statusCode === 'not_registered_2times') return action === null || action === void 0 ? void 0 : action.redirectToPay();
    return null;
  };
  var actionName = statusCode === 'book_dates' ? action === null || action === void 0 ? void 0 : action.resetCalendarName : action === null || action === void 0 ? void 0 : action.redirectCalendarName;
  var onlyCheckList = ['points', 'tickets', 'promo_tickets', 'member_group'];
  var onlyCheckAction = onlyCheck || onlyCheckList.includes(statusCode);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-8 py-9"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "w-full flex justify-end",
    type: "button",
    onClick: function onClick() {
      return setModal();
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Icon, {
    className: "text-[#000000]",
    icon: "ic:baseline-close",
    width: "24",
    height: "24"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-[28px] text-gray-700 font-medium min-w-[16rem] pb-2"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-[20px] text-[#5A5A5A] pb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", null, content)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center text-lg text-base justify-center gap-8"
  }, onlyCheckAction ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: ['px-8 py-3 px-2 text-white bg-[#0C7489] rounded-[10px]'].join(' '),
    onClick: function onClick() {
      setModal();
    }
  }, "\u78BA\u8A8D") : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: ['px-6 lg:px-8 py-3 rounded-[10px]', 'border border-solid border-[#656565] text-[#5A5A5A] bg-[#F5F5F5]'].join(' '),
    onClick: function onClick() {
      return cancelFunc ? cancelFunc() : setModal();
    }
  }, cancelButtonName), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "px-6 lg:px-8 py-3 text-white bg-[#0C7489] rounded-[10px]",
    onClick: statusCode ? actionFunc : onClick
  }, actionName || buttonName))));
};
NoticeModal.propTypes = {
  setModal: _propTypes["default"].func,
  title: _propTypes["default"].string,
  buttonName: _propTypes["default"].string,
  content: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  onlyCheck: _propTypes["default"].bool,
  action: _propTypes["default"].shape(),
  cancelButtonName: _propTypes["default"].string,
  cancelFunc: _propTypes["default"].func
};
var _default = exports["default"] = NoticeModal;