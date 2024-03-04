import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

const StyledTooltip = dynamic(() => import('./Styled'), {
  ssr: false,
});

const Tooltip = ({ direction, content, children }) => {
  const getTooltipClassName = () => {
    switch (direction) {
      case 'top':
        return 'tooltip-top';
      case 'right':
        return 'tooltip-right';
      case 'bottom':
        return 'tooltip-bottom';
      case 'left':
        return 'tooltip-left';
      default:
        return 'tooltip-top'; // 默認方向
    }
  };

  return (
    <StyledTooltip>
      <div className={`tooltip ${getTooltipClassName()}`}>
        {children}
        <span className="tooltip-text text-xs w-36 sm:w-48 bg-[#d7d9ce] shadow-inner">
          {content}
        </span>
      </div>
    </StyledTooltip>
  );
};

Tooltip.propTypes = {
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
