import React, { useState } from 'react';
import { Tabs } from '../../components';

export default {
  title: 'basic/Tabs',
  component: Tabs,
};

export const TabsStory = () => {
  // 定義狀態
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = [
    {
      tabIndex: 0,
      name: '即將發生',
    },
    {
      tabIndex: 1,
      name: '等待付款',
    },
    { tabIndex: 2, name: '歷史預約' },
  ];

  // 點擊標籤時更新狀態
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return <Tabs items={tabItems} activeTab={activeTab} handleTabClick={handleTabClick} />;
};
