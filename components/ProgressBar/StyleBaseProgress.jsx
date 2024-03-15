import styled from 'styled-components';

const convertHeight = (height) => {
  let heightType = '';
  if (height === 'small') heightType = '10px';
  if (height === 'middle') heightType = '20px';
  if (height === 'large') heightType = '25px';
  return heightType;
};

const Progress = styled.progress`
  width: 100%;
  height: ${(props) => convertHeight(props.height)};
  ::-webkit-progress-bar {
    background: ${(props) => props.bgColor};
    border-radius: 5px;
  }
  ::-webkit-progress-value {
    background: ${(props) => props.valueColor};
    border-radius: ${(props) =>
      props.height !== 'small' && props.value < props.max ? '5px 0px 0px 5px' : '5px'};
  }
  ::-moz-progress-bar {
    background: ${(props) => props.bgColor};
    border-radius: 5px;
  }
  ::-moz-progress-value {
    background: ${(props) => props.valueColor};
    border-radius: ${(props) =>
      props.height !== 'small' && props.value < props.max ? '5px 0px 0px 5px' : '5px'};
  }
`;

export default Progress;
