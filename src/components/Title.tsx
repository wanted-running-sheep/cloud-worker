import React from 'react';
import styled from 'styled-components';
import { LeftDirection, Close } from '@/assets/icons';

interface TitleProps {
  title: string;
  icon: 'close' | 'arrow';
}

const Title = ({ title, icon }: TitleProps) => {
  return (
    <Wrapper iconType={icon}>
      <div>{icon === 'close' ? <Close /> : <LeftDirection />}</div>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div<{ iconType: string }>`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.lightgray};
  position: relative;
  ${({ theme, iconType }) =>
    iconType === 'close'
      ? theme.mixins.flexBox('center', 'center')
      : theme.mixins.flexBox('center', 'flex-start')};
  div {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  h2 {
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0 50px;
  }
`;
