import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ApiUrlEnum } from '@/@types/enum';
import { SetStateType } from '@/@types/react';

interface TabProps {
  selectedTab: number;
  setTab: SetStateType<number>;
  setCurrentPage: SetStateType<number>;
}
const Tab = ({ selectedTab, setTab, setCurrentPage }: TabProps) => {
  const navigate = useNavigate();

  const changeTab = (tabNumber: number) => {
    setTab(tabNumber);
    navigate(`${ApiUrlEnum.ADMIN}?page=1`);
    setCurrentPage(1);
  };

  return (
    <Wrapper>
      <StyleTab selectedTab={selectedTab} onClick={() => changeTab(1)}>
        1차 모집
      </StyleTab>
      <StyleTab selectedTab={selectedTab} onClick={() => changeTab(2)}>
        2차 모집
      </StyleTab>
    </Wrapper>
  );
};

export default Tab;

const Wrapper = styled.ul`
  display: flex;
`;
const StyleTab = styled.li<{ selectedTab: number }>`
  ${({ theme }) => theme.mixins.flexBox()};
  background: ${({ theme }) => theme.color.background.lightwhite};
  color: ${({ theme }) => theme.color.font.lightgray};
  width: 50%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 15px 15px 0px 0px;
  font-weight: 600;

  &:nth-child(${({ selectedTab }) => selectedTab}) {
    background: ${({ theme }) => theme.color.background.lightgray};
    color: ${({ theme }) => theme.color.font.lightblack};
  }
`;
