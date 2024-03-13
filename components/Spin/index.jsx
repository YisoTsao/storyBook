import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

export const Spin = (props) => {
  const { icon, show, overlayBackground } = props;
  return show ? (
    <div
      className={[
        'fixed flex justify-center items-center w-full h-full left-0 top-0 z-[9999] overflow-hidden',
        overlayBackground,
      ].join(' ')}
    >
      <div className="top-2/4 left-2/4">
        {icon ? (
          <Icon className="animate-spin w-10 h-10" icon={icon} />
        ) : (
          <div className="w-10 h-10 rounded-full border-4 border-solid border-[#ffffff33] border-t-[#dbdbdb] animate-spin" />
        )}
      </div>
    </div>
  ) : null;
};

Spin.propTypes = {
  icon: PropTypes.string,
  show: PropTypes.bool,
  overlayBackground: PropTypes.string,
};

Spin.defaultProps = {
  icon: '',
  show: false,
  overlayBackground: 'bg-[#00000055]',
};
