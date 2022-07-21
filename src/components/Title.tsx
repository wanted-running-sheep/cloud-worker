import React from 'react';
import styled from 'styled-components';
import { LeftDirection, Close } from '@/assets/icons';

const Title = () => {
  return (
    <div>
      title wrapper
      <Close />
      <div>Title</div>
    </div>
  );
};

export default Title;

const TitleWrapper = styled.div``;
