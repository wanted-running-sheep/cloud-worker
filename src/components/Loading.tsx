import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <Spinner></Spinner>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mixins.flexBox()};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid #7e80e1;
  border-right: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: spinner 1s linear infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
