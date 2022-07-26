import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { QueryInterface } from 'search';

import SearchBar from '@/components/SearchBar';
import useSearchUser from '@/hooks/useSearchUser';

const AdminPage = () => {
  const { setQuery, filteredUsers } = useSearchUser();
  console.log(filteredUsers);

  return (
    <>
      <Header>
        <h1>AI 학습용 교통 데이터 수집을 위한 크라우드 워커 지원 현황</h1>
        <Menu>
          <SearchBar setQuery={setQuery} />
          <span>엑셀다운로드 버튼 영역</span> {/* 추후 컴포넌트로 변경 할 것 */}
        </Menu>
      </Header>
      {/* <table filteredUsers={filteredUsers}> </table> */}
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
