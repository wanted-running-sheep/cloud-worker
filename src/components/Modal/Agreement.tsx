import React from 'react';
import { Content, Title } from '@/components';
import { ContentType } from '@/@types/enum';
import Modal from '@/components/Modal';

interface AgreementProps {
  close: () => void;
  contentType: ContentType;
}
const Agreement = ({ close, contentType }: AgreementProps) => {
  return (
    <Modal close={close}>
      <Title title="서비스 이용약관" icon="arrow" onClick={close} />
      <Content type={contentType} />
    </Modal>
  );
};

export default Agreement;
