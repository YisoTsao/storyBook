"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Base = void 0;
var _react = _interopRequireDefault(require("react"));
var _Sidebar = require("../components/Sidebar");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  title: 'basic/sidebar',
  component: _Sidebar.Sidebar
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Sidebar.Sidebar, args);
};
var backendSidebarItems = [{
  title: '場域管理',
  path: '#',
  icon: '',
  subNav: [{
    title: '會員資料',
    path: '/#',
    icon: 'mingcute:profile-line'
  }, {
    title: '我的票券',
    path: '/#',
    icon: 'f7:tickets'
  }]
}, {
  title: '預約項目管理',
  path: '/#',
  icon: ''
}];
var Base = exports.Base = Template.bind({});
Base.args = {
  items: backendSidebarItems
};