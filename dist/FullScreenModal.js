"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FullScreenModal = function FullScreenModal(_ref) {
  var overHidden = _ref.overHidden,
    isOpen = _ref.isOpen,
    children = _ref.children;
  (0, _react.useEffect)(function () {
    if (overHidden) return;
    // 在 Modal 打開時，禁止滾動
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // 在 Modal 關閉時，啟用滾動
      document.body.style.overflow = 'visible';
    }

    // 在組件卸載時清除樣式
    // eslint-disable-next-line consistent-return
    return function () {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center z-[9999] bg-black bg-opacity-10 ".concat(isOpen ? 'block' : 'hidden')
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content bg-white p-[30px] rounded-lg relative"
  }, children));
};
FullScreenModal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  children: _propTypes["default"].node.isRequired,
  overHidden: _propTypes["default"].bool
};
var _default = exports["default"] = FullScreenModal;