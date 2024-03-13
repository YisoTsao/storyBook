import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';

export const Sidebar = ({ items }) => {
  const [isClient] = useState(true);

  return (
    isClient && (
      <aside className="bg-[#F5F5F5] w-64	h-screen justify-center hidden lg:flex">
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
