import React, { useState } from 'react';
import DropImage from '../components/DropImage';

export default {
  title: 'basic/dropImage',
  component: DropImage,
  argTypes: {
    preview: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [, setFiles] = useState(null);
  return <DropImage {...args} setFiles={setFiles} />;
};

export const Base = Template.bind({});
Base.args = {
  setFile: () => {},
  preview: true,
};
