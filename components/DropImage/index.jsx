import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

export const DropImage = ({ preview = true, setFiles }) => {
  const [previewFiles, setPreviewFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: 'image/*',
    maxFiles: 15,
    maxSize: 5000000,
    onDrop: (dropFiles) => {
      const newFiles = [];

      setFiles(dropFiles);

      dropFiles.forEach((dropFile) => {
        Object.assign(dropFile, {
          preview: URL.createObjectURL(dropFile),
          uuid: uuidv4(),
        });
        newFiles.push(dropFile);

        setPreviewFiles(newFiles);
      });
    },
  });

  return (
    <section className="w-full">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className="flex justify-between">
          <div className="w-full bg-gray-light rounded-lg">
            <div className=" border-2 border-dashed border-gray-c_979 rounded-lg">
              <div className="flex items-center flex-col p-32">
                {/* <Image
                      src="/images/ic-cloud-upload.svg"
                      alt="上傳圖片"
                      width={144}
                      height={144}
                    ></Image> */}
                上傳圖片
                <div className="text-gray-c_ccc m-4 text-xl">
                  {isDragAccept && <p>All files will be accepted</p>}
                  {isDragReject && <p>Some files will be rejected</p>}
                  {!isDragActive && <p>Drop files here to upload</p>}
                </div>
                <button type="button">瀏覽檔案</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {preview && (
        <div className="flex gap-2">
          {previewFiles &&
            previewFiles.length > 0 &&
            previewFiles.map((item) => (
              <div className="w-24 h-24 object-cover" key={item.uuid}>
                <img src={item?.preview} alt="" />
              </div>
            ))}
        </div>
      )}
    </section>
  );
};
