import React from 'react';
import styled from 'styled-components';
import { Login } from '@/components';

const AdminLoginPage = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Admin Login</h1>
        <Login />
      </Content>
    </Wrapper>
  );
};

export default AdminLoginPage;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  height: 100%;
`;
const Content = styled.div`
  width: 400px;
  height: 400px;

  padding: 50px;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
  }
`;
