import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import PropTypes from 'prop-types';

const CkEditor = ({ content, setContent }) => (
  <CKEditor
    editor={Editor}
    data={content}
    onChange={(event, editor) => {
      const data = editor.getData();
      console.log({ event, editor, data });
      setContent(data);
    }}
  />
);

CkEditor.propTypes = {
  content: PropTypes.string,
  setContent: PropTypes.func,
};

CkEditor.defaultProps = {
  content: '',
  setContent: () => {},
};

export default CkEditor;
