import styled from 'styled-components';

const StyledTooltip = styled.div`
  .tooltip {
    position: relative;
    display: flex;
  }

  .tooltip .tooltip-text {
    visibility: hidden;
    background-color: #f5f5f5;
    color: #000;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

  .tooltip-top .tooltip-text {
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip-right .tooltip-text {
    top: -10%;
    left: 125%;
    margin-top: -10px;
  }

  .tooltip-bottom .tooltip-text {
    top: 125%;
    left: 50%;
    margin-left: -60px;
  }

  .tooltip-left .tooltip-text {
    top: -10%;
    right: 125%;
    margin-top: -10px;
  }
`;

export default StyledTooltip;
