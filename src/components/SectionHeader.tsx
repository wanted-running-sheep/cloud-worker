import React from 'react';
import { UserInterface } from 'request';
import { downloadCSV } from '@/utils/excelDownload';

import RoundButton from './RoundButton';
import styled from 'styled-components';

interface SectionHeaderProps {
  data?: UserInterface[];
}

const SectionHeader = ({ data = [] }: SectionHeaderProps) => {
  const handleClickedDownloadButton = () => {
    downloadCSV<UserInterface>(data);
  };

  return (
    <Wrapper>
      <h1>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</h1>
      <Bottom>
        <span>검색창 영역</span> {/* 추후 컴포넌트로 변경 할 것 */}
        <DownloadButton
          showText="엑셀 다운로드"
          borderRadius="8px"
          padding="10px 30px"
          onClick={handleClickedDownloadButton}
        />
      </Bottom>
    </Wrapper>
  );
};

export default SectionHeader;

const Wrapper = styled.div`
  h1 {
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 40px;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Bottom = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;

const DownloadButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.color.button.gray};
  color: ${({ theme }) => theme.color.font.black};
  font-size: 0.8rem;
`;
