import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ModalProps {
  close: () => void;
  children: ReactNode;
}
const Modal = ({ close, children }: ModalProps) => {
  return (
    <ModalWrapper onClick={close}>
      <ModalBody onClick={(e) => e.stopPropagation()}>{children}</ModalBody>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalBody = styled.div`
  position: relative;
  width: 500px;
  padding: 15px 20px;
  margin: 0 auto;
  background: white;
  border-radius: 30px;
`;
