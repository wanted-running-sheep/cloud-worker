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
  padding-left: 15px;
  height: 45px;
  line-height: 45px;
`;

const Main = styled.main`
  ${({ theme }) => theme.mixins.flexBox('start', 'left')};
  height: calc(100% - 45px);
`;

const Aside = styled.aside`
  background-color: ${({ theme }) => theme.color.background.gray};
  min-width: 160px;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 50px 30px 7px 30px;
`;
