import React from 'react';
import { BaseProgress } from '../../components';

export default {
  title: 'basic/Progress',
  component: BaseProgress,
};

/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => (
  <div className="mt-4 p-4 max-w-xs">
    <BaseProgress {...args} />
  </div>
);

export const Lock = Template.bind({});
Lock.args = {
  type: 'lock',
  value: 0,
  max: 100,
  size: 'small',
};

export const Inprogress = Template.bind({});
Inprogress.args = {
  type: 'step',
  value: 28,
  max: 100,
  size: 'small',
};

export const Finished = Template.bind({});
Finished.args = {
  type: 'ratio',
  value: '100',
  max: '100',
  size: 'small',
};
