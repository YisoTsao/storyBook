"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ckeditor = _interopRequireDefault(require("ckeditor5-custom-build/build/ckeditor"));
var _ckeditor5React = require("@ckeditor/ckeditor5-react");
var __jsx = _react["default"].createElement;
var CkEditor = function CkEditor(_ref) {
  var content = _ref.content,
    setContent = _ref.setContent;
  return __jsx(_ckeditor5React.CKEditor, {
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
CkEditor.defaultProps = {
  content: '',
  setContent: function setContent() {}
};
var _default = CkEditor;
exports["default"] = _default;