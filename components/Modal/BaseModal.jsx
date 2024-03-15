import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const BaseModal = ({
  isOpen = false,
  content,
  height,
  className,
  onClose,
  showCloseIcon = false,
  fixCloseBtn = false,
}) =>
  isOpen && (
    <div className="fixed top-0 left-0 h-full z-[1000] p-4 duration-300 transition-opacity bg-[#000000b3] w-full">
      <div className="w-full h-full flex justify-center items-center relative">
        {showCloseIcon && (
          <div className="text-right p-2 absolute right-0 top-0">
            <Icon
              className="ml-auto cursor-pointer text-white"
              icon="ion:close"
              width="24"
              height="24"
              onClick={onClose}
            />
          </div>
        )}
        <div
          className={[
            'bg-white rounded-xl overflow-y-auto m-auto',
            fixCloseBtn ? '' : 'max-w-[932px] max-h-[90vh]',
            height,
            className,
          ].join(' ')}
        >
          {content}
        </div>
      </div>
    </div>
  );

BaseModal.propTypes = {
  isOpen: PropTypes.bool,
  content: PropTypes.element,
  height: PropTypes.string,
  className: PropTypes.string,
  onClose: PropTypes.func,
  showCloseIcon: PropTypes.bool,
  fixCloseBtn: PropTypes.bool,
};

export default BaseModal;
