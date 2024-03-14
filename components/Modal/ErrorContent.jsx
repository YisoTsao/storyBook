import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import ModalContent from './ModalContent';

const ErrorContent = ({ setModal, errmsg }) => (
  <ModalContent setModal={setModal} onClick={() => setModal()} notice>
    <div className="w-full max-w-xl">
      <div className="flex justify-center items-center mb-6">
        <Icon icon="fluent-mdl2:status-error-full" color="red" height="60" />
      </div>
      <div className="text-center text-lg text-gray-500">{errmsg}</div>
    </div>
  </ModalContent>
);

ErrorContent.propTypes = {
  setModal: PropTypes.bool.isRequired,
  errmsg: PropTypes.node.isRequired,
};

export default ErrorContent;
