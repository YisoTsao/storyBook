import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const Modal = ({
  isOpen,
  onClose,
  hiddenCloseIcon,
  className,
  topContent,
  content,
  bottomContent,
  backgroundColor,
}) =>
  isOpen && (
    <div
      className={[
        'fixed inset-y-0 z-50 duration-300 transition-opacity w-full max-w-screen-xs',
        `${backgroundColor}`,
      ].join(' ')}
    >
      {!hiddenCloseIcon && (
        <button
          type="button"
          className="absolute relate top-[19px] left-[19px] z-[1000]"
          onClick={onClose}
        >
          <Image className="w-[17px] h-[17px]" filename="btn_nav_close_darkbg_n" />
        </button>
      )}

      <div className="w-full h-full flex justify-center items-center">
        <div className={className}>
          {topContent && topContent}
          {content}
          {bottomContent && bottomContent}
        </div>
      </div>
    </div>
  );

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  hiddenCloseIcon: PropTypes.bool,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  content: PropTypes.element.isRequired,
  bottomContent: PropTypes.element,
  topContent: PropTypes.element,
};

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  hiddenCloseIcon: false,
  className: '',
  bottomContent: null,
  topContent: null,
  backgroundColor: 'bg-[#000000b3]',
};
