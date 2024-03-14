"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ckeditor = _interopRequireDefault(require("ckeditor5-custom-build/build/ckeditor"));
var _ckeditor5React = require("@ckeditor/ckeditor5-react");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CkEditor = function CkEditor(_ref) {
  var content = _ref.content,
    setContent = _ref.setContent;
  return /*#__PURE__*/_react["default"].createElement(_ckeditor5React.CKEditor, {
    editor: _ckeditor["default"],
    data: content,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      console.log({
        event: event,
        editor: editor,
        data: data
      });
      setContent(data);
    }
  });
};
CkEditor.propTypes = {
  content: _propTypes["default"].string,
  setContent: _propTypes["default"].func
};
CkEditor.defaultProps = {
  content: '',
  setContent: function setContent() {}
};
var _default = exports["default"] = CkEditor;