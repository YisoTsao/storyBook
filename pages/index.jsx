import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { Step, BaseProgress } from '../components';
import CustomUpload from '../components/UploadImage/CustomUpload';

const CkEditor = dynamic(() => import('../components/Ckeditor'), {
  ssr: false,
});

const Home = () => {
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  const iconProps = { file, setFile };

  const fakeStep = [{ status: true }, { status: true }, { status: false }, { status: false }];

  return (
    <div className="p-20">
      <CustomUpload {...iconProps} />
      <Step className="p-8" stepList={fakeStep} />
      <BaseProgress type="step" value="28" max="100" size="large" />
      <CkEditor content={content} setContent={setContent} />
    </div>
  );
};

export default Home;
