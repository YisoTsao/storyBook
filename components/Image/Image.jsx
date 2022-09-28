import PropTypes from 'prop-types';
import React from 'react';

const DEFAULT_IMAGE = `/assets/images/img_common_placeholder_pic_n.png`;
const imgOnErrorHandler = (e) => {
  e.currentTarget.src = DEFAULT_IMAGE;
  e.currentTarget.className += ' bg-imagePlaceholder';
};

const Image = React.memo(({ className, fileExtension, filename, url }) => {
  const imageSource = url || `/assets/images/${filename}.${fileExtension}`;
  return <img alt="" className={className} src={imageSource} onError={imgOnErrorHandler} />;
});

Image.propTypes = {
  className: PropTypes.string,
  fileExtension: PropTypes.string,
  filename: PropTypes.string,
  url: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  filename: '',
  fileExtension: 'png',
  url: '',
};

export default Image;
