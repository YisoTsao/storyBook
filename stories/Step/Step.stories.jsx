import React from 'react';
import { Step } from '../../components';

const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];
const fakeCompleteLineStep = [
  { status: true },
  { status: true },
  { status: true },
  { status: true },
];

export default {
  title: 'basic/Step',
  component: Step,
};

/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <Step {...args} />;

const OverFlowTemplate = (args) => (
  <div className="max-w-screen-xs rounded border border-solid	border-gray-300">
    <Step {...args} />
  </div>
);

export const LineStep = Template.bind({});
LineStep.args = {
  className: 'p-8',
  stepList: fakeStep,
};

export const Complete = Template.bind({});
Complete.args = {
  className: 'p-8',
  stepList: fakeCompleteLineStep,
};

export const overflow = OverFlowTemplate.bind({});
overflow.args = {
  className: 'p-12',
  stepList: [...fakeCompleteLineStep, ...fakeStep],
};
