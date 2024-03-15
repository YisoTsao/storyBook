import React from 'react';
import { Sidebar } from '../components';

export default {
  title: 'basic/sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

const backendSidebarItems = [
  {
    title: '場域管理',
    path: '#',
    icon: '',
    subNav: [
      {
        title: '會員資料',
        path: '/#',
        icon: 'mingcute:profile-line',
      },
      {
        title: '我的票券',
        path: '/#',
        icon: 'f7:tickets',
      },
    ],
  },
  {
    title: '預約項目管理',
    path: '/#',
    icon: '',
  },
];

export const Base = Template.bind({});
Base.args = {
  items: backendSidebarItems,
};
