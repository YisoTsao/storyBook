import PropTypes from 'prop-types';
import React from 'react';
import Progress from './StyleBaseProgress';

const BaseProgress = ({ type, value, max, size, valueColor, bgColor }) => {
  const valueInt = Number(value);
  const maxInt = Number(max);
  const isLock = type === 'lock';

  const missionState = () => {
    let stateText = '';
    if (valueInt < maxInt && valueInt !== 0) stateText = '進行中';
    if (valueInt === maxInt) stateText = '已完成';
    if (isLock) stateText = '尚未解鎖';
    return stateText;
  };

  const progressText =
    type === 'ratio' ? `${isLock ? 0 : valueInt}%` : `${isLock ? 0 : valueInt}/${max}`;
  return (
    <>
      {size === 'small' && (
        <div className="flex justify-between text-gray-700 text-m mb-3">
          <div>{missionState()}</div>
          <div>{progressText}</div>
        </div>
      )}
      <div className="w-full relative flex justify-center items-center">
        {size !== 'small' && (
          <span
            className={[
              size === 'middle' && 'text-3',
              size === 'large' && 'text-4',
              'absolute text-center text-gray-500',
            ].join(' ')}
          >
            {isLock ? '未解鎖' : progressText}
          </span>
        )}
        <Progress
          valueColor={isLock ? '#797979' : valueColor}
          bgColor={isLock ? '#797979' : bgColor}
          type={type}
          value={valueInt}
          max={maxInt}
          height={size}
        />
      </div>
    </>
  );
};

export default BaseProgress;

BaseProgress.propTypes = {
  valueColor: PropTypes.string,
  bgColor: PropTypes.string,
  type: PropTypes.oneOf(['step', 'ratio', 'lock']).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
};

BaseProgress.defaultProps = {
  valueColor: '#0088BB',
  bgColor: '#dbdbdb',
  size: 'large',
};
