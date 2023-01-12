// import {
//   API_HOST,
//   IMAGE_HOST,
//   DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES,
//   API_STATUS_CODE_SUCCESS,
// } from '../../../constants';

// const SG_API = "https://dev-api-crm.sunggang.com.tw";
// const IMAGE_HOST = "https://onegobolineassert.s3.ap-northeast-1.amazonaws.com";
// const token =
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJVZDA0ODQzZDcyNTlhMTAzOTVjNGNjODgwZTViNjlmYWYiLCJuYW1lIjoiXHU2YmM1XHU3ZDIyIiwiZXhwIjoxNjczNTMyNDc0fQ.GOuYhgbylvV3WYPAOtwcBLXnObcxLCdZtwPmI-koqvU";

console.log(process.env.SG_API);
console.log(process.env.IMAGE_HOST);

class MyUploadAdapter {
  constructor(loader) {
    // The file loader instance to use during the upload.
    this.loader = loader;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._initRequest(reject, file);
          this._initListeners(resolve, reject, file);
          this._sendRequest(file);
        })
    );
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  _initRequest(reject, file) {
    const xhr = (this.xhr = new XMLHttpRequest());
    xhr.withCredentials = true;
    // Note that your request may look different. It is up to you and your editor
    // integration to choose the right communication channel. This example uses
    // a POST request with JSON as a data structure but your configuration
    // could be different.

    // if (file.size > DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES) {
    //   Modal.error({
    //     title: '選擇的檔案大小超過限制',
    //     content: (
    //       <span>
    //         <hr />
    //         選擇的檔案大小：
    //         {String((file.size / 1024 / 1024).toFixed(3))}
    //         {' MB'}
    //         <br />
    //         {'≈ '}
    //         {String((file.size / 1024).toFixed(3))}
    //         {' KB'}
    //         <br />
    //         {'≈ '}
    //         {String(file.size)}
    //         {' Bytes'}
    //         <br />
    //         <hr />
    //         上限：
    //         {String((DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES / 1024 / 1024).toFixed(3))}
    //         {' MB'}
    //         <br />
    //         {'≈ '}
    //         {String((DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES / 1024).toFixed(3))}
    //         {' KB'}
    //         <br />
    //         {'≈ '}
    //         {String(DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES)}
    //         {' Bytes'}
    //         <hr />
    //       </span>
    //     ),
    //   });
    //   reject();
    //   return;
    // }

    xhr.open(
      'POST',
      `${
        process.env.NODE_ENV === 'development' ? 'http://localhost:8010/proxy' : process.env.SG_API
      }/events/poster`
    );
    // xhr.responseType = "json";
  }
  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const { xhr } = this;
    const { loader } = this;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener('error', () => reject(genericErrorText));
    xhr.addEventListener('abort', () => reject());
    xhr.addEventListener('load', () => {
      const { response } = xhr;

      // This example assumes the XHR server's "response" object will come with
      // an "error" which has its own "message" that can be passed to reject()
      // in the upload promise.
      //
      // Your integration may handle upload errors in a different way so make sure
      // it is done properly. The reject() function must be called when the upload fails.

      if (!response.status) {
        return reject(response && response.errmsg ? response.errmsg : genericErrorText);
      }

      // If the upload is successful, resolve the upload promise with an object containing
      // at least the "default" URL, pointing to the image on the server.
      // This URL will be used to display the image in the content. Learn more in the
      // UploadAdapter#upload documentation.

      resolve({
        default: `${process.env.IMAGE_HOST}/events/${response.data}`,
      });
    });

    // Upload progress when it is supported. The file loader has the #uploadTotal and #uploaded
    // properties which are used e.g. to display the upload progress bar in the editor
    // user interface.
    if (xhr.upload) {
      xhr.upload.addEventListener('progress', (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    // Prepare the form data.
    const data = new FormData();

    data.append('poster', file, file.name);
    // Important note: This is the right place to implement security mechanisms
    // like authentication and CSRF protection. For instance, you can use
    // XMLHttpRequest.setRequestHeader() to set the request headers containing
    // the CSRF token generated earlier by your application.

    const storage = JSON.parse(localStorage.getItem('sg-auth-storage'));

    this.xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    this.xhr.setRequestHeader('Authorization', storage?.state?.access_token);
    // Send the request.
    console.log(data);
    this.xhr.send(data);
  }
}

export default function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    // Configure the URL to the upload script in your back-end here!
    return new MyUploadAdapter(loader);
  };
}
