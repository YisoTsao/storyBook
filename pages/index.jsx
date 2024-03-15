import React, { useState } from 'react';
import { Step, BaseProgress } from '../components';
import CustomUpload from '../components/UploadImage/CustomUpload';
import DropImage from '../components/DropImage';

const Home = () => {
  const [file, setFile] = useState(null);
  const [, setFiles] = useState(null);

  const iconProps = { file, setFile };

  const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];

  return (
    <div className="p-20">
      <DropImage setFiles={setFiles} />
      <CustomUpload {...iconProps} />
      <Step className="p-8" stepList={fakeStep} />
      <BaseProgress type="step" value="28" max="100" size="large" />
    </div>
  );
};

export default Home;
