import React from 'react';
import styled from 'styled-components';
import RegionContentBox from './RegionContentBox';

const RegionModal = () => {
  return (
    <ModalWrapper>
      <RegionContentBox />
    </ModalWrapper>
  );
};

export default RegionModal;

const ModalWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  margin:0 auto;
  position: absolute;
  width: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;
