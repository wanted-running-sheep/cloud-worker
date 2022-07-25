import React from 'react';
import styled from 'styled-components';
import { LeftDirection, Close } from '@/assets/icons';
import { TITLE_TYPE } from '@/constants/index';
//TODO pr question: enum.ts 사용법? type과 constants가 같이 있는 interface.

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
  padding: 15px 5px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.lightgray};
  ${({ theme }) => theme.mixins.flexBox('center', 'center')};
  div {
    flex: ${({ iconType }) => (iconType === 'close' ? 0 : 1)};
    padding-right: ${({ iconType }) => (iconType === 'close' ? '20px' : 0)};
    text-align: left;
    box-sizing: border-box;
  }
  h2 {
    flex: 2;
    font-size: 1.3rem;
  }
`;
