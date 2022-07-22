import React from 'react';
import styled from 'styled-components';
import { LeftDirection, Close } from '@/assets/icons';

interface TitleProps {
  title: string;
  icon: 'close' | 'arrow';
}

const Title = ({ title, icon }: TitleProps) => {
  icon === 'close' ? 'Close' : 'LeftDirection';
  return (
    <TitleWrapper>
      <div>{icon === 'close' ? <Close /> : <LeftDirection />}</div>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};

export default Title;

const TitleWrapper = styled.div`
  width: 100%;
  padding: 0.8rem 0.5rem;
  position: relative;
  ${({ theme }) => theme.mixins.flexBox('center', 'center')};
  div {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
