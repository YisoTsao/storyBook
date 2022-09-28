import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const ImageMask = React.memo(
  ({
    imgUrl,
    imgRadius,
    imgFileExtension,
    imgFileName,
    iconClassName,
    iconFileName,
    title,
    titleSize,
    titleColor,
    subTitle,
    subTitleSize,
    subTitleColor,
    maskShow,
  }) => {
    const maskStyle = `${imgRadius} bg-imageMask w-full h-full p-1 absolute top-0 left-0 flex flex-wrap flex-col justify-center items-center overflow-hidden`;
    return (
      <div className="w-full h-full relative">
        <Image
          className={`object-cover w-full h-full ${imgRadius}`}
          filename={imgFileName}
          fileExtension={imgFileExtension}
          url={imgUrl}
        />
        {maskShow && (
          <div className={maskStyle}>
            {iconFileName && <Image className={iconClassName} filename={iconFileName} />}
            {title && <span className={` ${titleSize} ${titleColor}`}>{title}</span>}
            {subTitle && (
              <span className={`mt-2.5 ${subTitleSize} ${subTitleColor}`}>{subTitle}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);

ImageMask.propTypes = {
  imgUrl: PropTypes.string,
  imgRadius: PropTypes.string,
  imgFileName: PropTypes.string,
  imgFileExtension: PropTypes.string,
  iconClassName: PropTypes.string,
  iconFileName: PropTypes.string,
  title: PropTypes.string,
  titleSize: PropTypes.string,
  titleColor: PropTypes.string,
  subTitle: PropTypes.string,
  subTitleSize: PropTypes.string,
  subTitleColor: PropTypes.string,
  maskShow: PropTypes.bool,
};

ImageMask.defaultProps = {
  imgUrl: '',
  imgRadius: '',
  imgFileName: '',
  imgFileExtension: 'png',
  iconClassName: '',
  iconFileName: '',
  title: '',
  titleSize: 'text-l',
  titleColor: 'text-fixedWhite',
  subTitle: '',
  subTitleSize: 'text-m',
  subTitleColor: 'text-fixedWhite',
  maskShow: true,
};

export default ImageMask;
