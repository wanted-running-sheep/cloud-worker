import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { Content, Title } from '@/components';
import { ContentType } from '@/@types/enum';

const AgreementPage = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const contentType = type as ContentType;

  return (
    <Wrapper>
      <Title
        title="서비스 이용약관"
        icon="arrow"
        onClick={() => navigate(-1)}
      />
      <Content type={contentType} />
    </Wrapper>
  );
};

export default AgreementPage;

const Wrapper = styled.div`
  height: calc(100vh - 30px);
`;
