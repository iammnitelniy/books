import styled from 'styled-components';

export const StyledLinearLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #f3f3f3;
  z-index: 9999;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background-color: #8B4513;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% {
      left: 0;
      width: 0;
    }
    50% {
      left: 0;
      width: 100%;
    }
    100% {
      left: 100%;
      width: 0;
    }
  }
`;

export const LinearLoader = () => {
    return <StyledLinearLoader />
};
