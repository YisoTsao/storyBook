import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const BaseTemplate = ({ file }) => {
  const [tempImage, setTempImage] = useState(null);

  useEffect(() => {
    let fileReader;
    let isCancel = false;

    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setTempImage(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      setTempImage(null);
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
      <div className="px-4 py-6 w-72 h-56">
        {tempImage ? (
          <img className="w-full h-full object-cover" src={tempImage} alt="" />
        ) : (
          <div
            id="image-preview"
            className="max-w-sm p-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer"
          >
            <div className="cursor-pointer">
              <div className="flex justify-center">
                <Icon icon="material-symbols:upload" width="2.5rem" height="2.5rem" />
              </div>

              <p className="font-normal text-sm text-gray-400 py-4">圖片僅支援 png、jpg、jpeg</p>

              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">上傳圖片</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaseTemplate;
