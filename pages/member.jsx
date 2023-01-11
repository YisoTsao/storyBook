import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const CkEditor = dynamic(() => import('../components/Ckeditor'), {
  ssr: false,
});

const Member = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <CkEditor content={content} setContent={setContent} />
      {JSON.stringify(content)}
    </div>
  );
};

export default Member;
