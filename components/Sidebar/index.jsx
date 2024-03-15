import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';

export const Sidebar = ({ items, className = 'bg-[#F5F5F5] w-64 h-full' }) => {
  const [isClient] = useState(true);

  return (
    isClient && (
      <aside className={['justify-center hidden lg:flex', className].join(' ')}>
        <div className="w-full">
          {items?.map((item) => (
            <SubMenu item={item} key={item?.path} />
          ))}
        </div>
      </aside>
    )
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
};
