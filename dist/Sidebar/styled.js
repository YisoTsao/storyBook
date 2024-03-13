"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavIcon = exports.Nav = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Nav = _styledComponents["default"].div.withConfig({
  displayName: "styled__Nav",
  componentId: "sc-18d2uux-0"
})(["background:#15171c;height:80px;display:flex;justify-content:flex-start;align-items:center;"]);
exports.Nav = Nav;
var NavIcon = _styledComponents["default"].div.withConfig({
  displayName: "styled__NavIcon",
  componentId: "sc-18d2uux-1"
})(["margin-left:2rem;font-size:2rem;height:80px;display:flex;justify-content:flex-start;align-items:center;"]);

// export const SidebarNav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//   transition: 350ms;
//   z-index: 10;
// `;
exports.NavIcon = NavIcon;