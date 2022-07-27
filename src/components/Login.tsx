import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MESSAGES from '@/constants/error';
import { FormEventType } from '@/@types/react';

const Login = () => {
  const navigate = useNavigate();
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const adminInfo = {
    id: 'test1234',
    password: '1234',
  };

  const checkAdminInfoByInputData = (
    type: 'id' | 'password',
    compareValue: string
  ) => {
    return compareValue !== adminInfo[type];
  };

  const onSubmit = (event: FormEventType) => {
    event.preventDefault();
    const inputedId = idRef.current?.value;
    const inputedPassword = pwRef.current?.value;

    if (checkAdminInfoByInputData('id', inputedId!)) {
      alert(MESSAGES.LOGIN.ID_NOT_VALID);
      return;
    }
    if (checkAdminInfoByInputData('password', inputedPassword!)) {
      alert(MESSAGES.LOGIN.PW_NOT_VALID);
      return;
    }

    navigate('/admin');
  };
  return (
    <Wrapper onSubmit={onSubmit}>
      <input type="text" ref={idRef} placeholder="test1234" />
      <input type="password" ref={pwRef} placeholder="1234" />
      <button type="submit">로그인</button>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.form`
  margin-top: 50px;
  input {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  }

  button {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.font.white};
    background: ${({ theme }) => theme.color.background.blue};
  }
`;
