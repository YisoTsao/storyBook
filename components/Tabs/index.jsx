import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ className = 'leading-[18px] text-lg', items, activeTab, handleTabClick }) => (
  <div className="flex flex-col items-start">
    <div className="flex justify-between gap-6 lg:gap-12 pb-[6px] z-10">
      {items.length &&
        items.map((item) => (
          <button
            key={item?.name}
            type="button"
            className={[
              'font-medium leading-9 flex-1 whitespace-nowrap',
              activeTab === item.tabIndex
                ? 'text-[#79747E] underline decoration-[6px] underline-offset-8'
                : '',
              className,
            ].join(' ')}
            onClick={() => handleTabClick(item.tabIndex)}
          >
            {item?.name}
          </button>
        ))}
    </div>
    <div className="bg-[#D9D9D9] min-h-[3px] w-full mt-0 mb-2" />
  </div>
);

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  activeTab: PropTypes.number,
  handleTabClick: PropTypes.func,
  className: PropTypes.string,
};

export default Tabs;
