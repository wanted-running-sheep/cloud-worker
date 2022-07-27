import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Content>
        <h1>Landing Page</h1>
        <ButtonWrapper>
          <button onClick={() => navigate('/apply')}>
            🔍 지원하기 페이지로 이동하기
          </button>
          <button onClick={() => navigate('/login')}>
            🐶 어드민 로그인 페이지로 이동하기
          </button>
        </ButtonWrapper>
      </Content>
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  height: 100%;
`;
const Content = styled.div`
  width: 430px;

  padding-bottom: 30px;
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: -2px;
    margin-bottom: 20px;
  }
`;
const ButtonWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')};
  height: 30px;

  button {
    height: 100%;
  }
`;
