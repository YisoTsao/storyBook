import React from 'react';
import { Spin } from '../../components';

export default {
  title: 'basic/Spin',
  component: Spin,
};

const Template = (args) => <Spin {...args} />;

export const BaseSpin = Template.bind({});
BaseSpin.args = {
  icon: '',
  show: false,
  overlayBackground: 'bg-[#00000055]',
};
