import React from 'react';
import styled from 'styled-components';

import { UserInterface } from 'request';
import useSearchUser from '@/hooks/useSearchUser';
import { downloadCSV } from '@/utils/excelDownload';
import { RoundButton, Loading, UserList, SearchBar } from '@/components';

const AdminPage = () => {
  const { setQuery, filteredUsers } = useSearchUser();

  if (!filteredUsers.length) return <Loading />;
  const handleClickedDownloadButton = () => {
    downloadCSV<UserInterface>(filteredUsers);
  };

  return (
    <>
      <Header>
        <h1>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</h1>
        <Menu>
          <SearchBar setQuery={setQuery} />
          <DownloadButton
            showText="엑셀 다운로드"
            borderRadius="8px"
            padding="10px 30px"
            onClick={handleClickedDownloadButton}
          />
        </Menu>
      </Header>
      <UserList users={filteredUsers} />
    </>
  );
};

export default AdminPage;

const Header = styled.div`
  h1 {
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 40px;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Menu = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;
const DownloadButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.color.button.gray};
  color: ${({ theme }) => theme.color.font.black};
  font-size: 0.8rem;
`;
