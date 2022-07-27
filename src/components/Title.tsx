import React from 'react';
import styled from 'styled-components';
import { LeftDirection, Close } from '@/assets/icons';
import { TitleIconEnum, TitleType } from '@/@types/enum';

interface TitleProps {
  title: string;
  icon: TitleType;
  onClick?: () => void;
}

const Title = ({ title, icon, onClick }: TitleProps) => {
  return (
    <Wrapper iconType={icon}>
      <div onClick={onClick}>
        {icon === TitleIconEnum.CLOSE ? <Close /> : <LeftDirection />}
      </div>
      <h2>{title}</h2>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div<{ iconType: string }>`
  width: 100%;
  padding: 5px 5px 15px 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border.lightgray};
  ${({ theme }) => theme.mixins.flexBox('center', 'center')};
  div {
    flex: ${({ iconType }) => (iconType === TitleIconEnum.CLOSE ? 1 : 0)};
    padding-right: ${({ iconType }) =>
      iconType === TitleIconEnum.CLOSE ? 0 : '20px'};
    text-align: left;
    box-sizing: border-box;
  }
  h2 {
    flex: 2;
    font-size: 1.3rem;
  }
`;
