import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import RegionModal from './RegionModal';

const MobileLayout = () => {
  return (
    <Wrapper>
      <Section>
        <h1>크라우드 워커에 지원하기 위해 필요한 정보를 입력해 주세요</h1>
        <Outlet />
        {/* <RegionModal /> */}
      </Section>
    </Wrapper>
  );
};

export default MobileLayout;

const Wrapper = styled.main`
  background: ${({ theme }) => theme.color.background.lightyellow};
  height: 100%;
`;
const Section = styled.section`
  background: ${({ theme }) => theme.color.background.white};
  height: 100%;
  margin: 0 auto;
  max-width: 550px;
  padding: 15px 10px;
  position: relative;
  h1 {
    width: 270px;
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 35px;
  }
`;
