import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AdminLayout = () => {
  return (
    <>
      <Header>메인</Header>
      <Main>
        <Aside></Aside>
        <Section>
          <Outlet />
        </Section>
      </Main>
    </>
  );
};

export default AdminLayout;

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.background.black};
  color: ${({ theme }) => theme.color.font.white};
  padding: 10px 14px;
`;

const Main = styled.main`
  ${({ theme }) => theme.mixins.flexBox('start', 'left')};
`;

const Aside = styled.header`
  background-color: ${({ theme }) => theme.color.background.gray};
  min-width: 160px;
  height: 100vh;
`;

const Section = styled.section`
  width: 100%;
  height: 100vh;
  padding: 60px 30px 30px 30px;
`;
