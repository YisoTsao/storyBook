import React, { useState } from 'react';
import { CustomUpload } from '../components';

export default {
  title: 'basic/uploadImage',
  component: CustomUpload,
};

const Template = (args) => {
  const [file, setFile] = useState(null);
  return <CustomUpload {...args} file={file} setFile={setFile} />;
};

const CustomerTemplate = (args) => {
  const [file, setFile] = useState(null);
  return (
    <CustomUpload {...args} file={file} setFile={setFile}>
      <div className="border border-solid border-gray-400 p-4">
        <div>圖片僅支援 png、jpg、jpeg</div>
        <div>點擊上傳</div>
      </div>
    </CustomUpload>
  );
};

const defaultArgs = {
  file: null,
  setFile: () => {},
};

export const Base = Template.bind({});
Base.args = {
  ...defaultArgs,
};

export const Customer = CustomerTemplate.bind({});
Customer.args = {
  ...defaultArgs,
};
