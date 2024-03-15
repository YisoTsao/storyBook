/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const SubMenu = ({ item }) => {
  const router = useRouter();
  const [subnav, setSubnav] = useState(true);

  const showSubnav = () => {
    if (item?.subNav) {
      setSubnav(!subnav);
      return;
    }

    router.push(item?.path);
  };

  return (
    <>
      <button
        type="button"
        className={`w-full flex justify-between items-center p-4 h-14 text-xl hover:bg-[#D9D9D9] cursor-pointer ${item?.className}`}
        onClick={showSubnav}
      >
        <div className="flex items-center text-[#171A1F]">
          <Icon icon={item?.icon} width="24" height="24" color="#000" />
          <div className="ml-4">{item.title}</div>
        </div>
        <div className="leading-5">
          {item?.subNav && subnav ? item?.iconOpened : item?.subNav ? item?.iconClosed : null}
        </div>
      </button>
      {subnav &&
        item?.subNav?.map((subItem) => (
          <button
            type="button"
            className={[
              'w-full text-lg h-16 pl-12 flex items-center hover:bg-[#D9D9D9]',
              router?.pathname === subItem?.path
                ? 'bg-[#0C7489] text-white'
                : 'bg-[#f5f5f5] text-[#737373]',
            ].join(' ')}
            key={subItem.path}
            onClick={() => router.push(subItem?.path)}
          >
            <Icon
              icon={subItem?.icon}
              width="24"
              height="24"
              color={router?.pathname === subItem?.path ? '#fff' : '#737373'}
            />
            <div className="ml-4">{subItem.title}</div>
          </button>
        ))}
    </>
  );
};

SubMenu.propTypes = {
  item: PropTypes.shape(),
};

export default SubMenu;
