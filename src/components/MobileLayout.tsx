import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import RegionModal from './RegionModal';

const MobileLayout = () => {
  return (
    <Wrapper>
      <Section>
        <Outlet />
      </Section>
    </Wrapper>
  );
};

export default MobileLayout;

const Wrapper = styled.main`
  background: ${({ theme }) => theme.color.background.lightyellow};
`;
const Section = styled.section`
  background: ${({ theme }) => theme.color.background.white};
  height: 100%;
  margin: 0 auto;
  max-width: 550px;
  padding: 15px 15px;
  position: relative;
`;
