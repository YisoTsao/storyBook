import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ modal, unsetModal }) => {
  const handleKeyUp = (e) =>
    e.keyCode === 27 &&
    !['INPUT', 'SELECT'].includes(document.activeElement?.tagName) &&
    unsetModal();

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [modal, unsetModal]);

  return (
    <div className="fixed top-0 left-0 h-screen z-[2000] transition-opacity duration-300 transition-opacity bg-[#000000b3] w-full">
      <div className="w-full h-full flex justify-center items-center p-6">
        <div className="bg-white rounded overflow-y-auto w-full m-auto max-w-[455px] rounded-xl">
          {modal}
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  modal: PropTypes.element.isRequired,
  unsetModal: PropTypes.func,
};

Modal.defaultProps = {
  unsetModal: () => {},
};
