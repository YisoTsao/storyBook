import React from 'react';
import Tooltip from '../../components/Tooltip';

export default {
  title: 'basic/Tooltip',
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const TopTooltip = Template.bind({});
export const RightTooltip = Template.bind({});

TopTooltip.args = {
  direction: 'top',
  content: 'toolTip top content',
  children: <div>hover me!</div>,
};

RightTooltip.args = {
  direction: 'right',
  content: 'toolTip right content',
  children: <div>hover me!</div>,
};
