import React from 'react';
import { Tooltip } from '../../components';

export default {
  title: 'basic/Tooltip',
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Base = Template.bind({});

Base.args = {
  direction: 'top',
  content: 'toolTip content',
  children: <div>hover me!</div>,
};
