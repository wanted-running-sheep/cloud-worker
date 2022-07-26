import React from 'react';
import styled from 'styled-components';

import { UserInterface } from 'request';
import useSearchUser from '@/hooks/useSearchUser';
import usePagination from '@/hooks/usePagination';
import { downloadCSV } from '@/utils/excelDownload';
import { RoundButton, SearchBar, Table, Pagination, Tab } from '@/components';

const AdminPage = () => {
  const { tab, setQuery, setTab, filteredUsers } = useSearchUser();
  const {
    pageNums,
    currentPage,
    setCurrentPage,
    prevPageFlag,
    nextPageFlag,
    sliceUsers,
  } = usePagination(filteredUsers);

  const handleClickedDownloadButton = () => {
    downloadCSV<UserInterface>(filteredUsers);
  };

  return (
    <Wrapper>
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
      <Article>
        <Tab
          selectedTab={tab}
          setTab={setTab}
          setCurrentPage={setCurrentPage}
        />
        <Table users={sliceUsers} />
        <Pagination
          pageNums={pageNums}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          prevPageFlag={prevPageFlag}
          nextPageFlag={nextPageFlag}
        />
      </Article>
    </Wrapper>
  );
};

export default AdminPage;

const Wrapper = styled.div`
  height: 100%;
`;
const Header = styled.div`
  h1 {
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 30px;
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Menu = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
`;
const DownloadButton = styled(RoundButton)`
  background-color: ${({ theme }) => theme.color.button.gray};
  color: ${({ theme }) => theme.color.font.black};
  font-size: 0.8rem;
`;

const Article = styled.article`
  height: calc(100% - 120px);
  width: 100%;
  table,
  thead,
  tr {
    width: 100%;
  }
  th {
    font-weight: 700;
    line-height: 1.5rem;
    height: 30px;
  }
  td {
    height: 25px;
    font-size: 1rem;
    text-align: center;
  }
`;
