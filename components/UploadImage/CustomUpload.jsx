import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ErrorContent from '../Modal/ErrorContent';
import Modal from '../Modal';
import BaseTemplate from './BaseTemplate';

const CustomUpload = ({ className, children, file, setFile, tempImage, setTempImage }) => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES = 5120000; // 5000 KB

  const [modal, setModal] = useState(null);

  const hiddenFileInput = useRef(null);

  const handleImageClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImageChange = (event) => {
    const currentFile = event.target.files[0];

    if (!currentFile) {
      setFile(null);
      setTempImage(null);
      return;
    }

    if (currentFile && !currentFile.type?.match(imageMimeType)) {
      setModal(<ErrorContent setModal={setModal} errmsg="圖片僅支援 png、jpg、jpeg!" />);
      return;
    }

    if (currentFile && currentFile.size > DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES) {
      setModal(
        <ErrorContent
          setModal={setModal}
          errmsg={
            <span>
              選擇的檔案大小：
              {String((currentFile.size / 1024 / 1024).toFixed(3))}
              {' MB'}
              <br />
              <hr />
              上限：
              {String((DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES / 1024 / 1024).toFixed(3))}
              {' MB'}
            </span>
          }
        />
      );
      return;
    }

    setFile(currentFile);
    setTempImage(currentFile);
  };

  useEffect(() => {
    let fileReader;
    let isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setTempImage(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      <button className={[className].join(' ')} type="button" onClick={handleImageClick}>
        {children || <BaseTemplate tempImage={tempImage} />}
        <input
          type="file"
          ref={hiddenFileInput}
          accept=".png, .jpg, .jpeg"
          onChange={handleImageChange}
          className="hidden"
          id="uploadImage"
        />
      </button>
      {modal && <Modal modal={modal} unsetModal={setModal} />}
    </>
  );
};

CustomUpload.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default CustomUpload;
