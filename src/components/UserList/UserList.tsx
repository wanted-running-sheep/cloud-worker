import React from 'react';
import usePagination from '@/hooks/usePagination';
import { UserInterface } from 'request';
import Pagination from './Pangination';
import Table from './Table';
import styled from 'styled-components';

const UserList = ({ users }: { users: UserInterface[] }) => {
  const { pageNums, setCurrentPage, prevPageFlag, nextPageFlag, sliceUsers } =
    usePagination(users);

  return (
    <Article>
      <Table users={sliceUsers} />
      <Pagination
        pageNums={pageNums}
        setCurrentPage={setCurrentPage}
        prevPageFlag={prevPageFlag}
        nextPageFlag={nextPageFlag}
      />
    </Article>
  );
};
export default UserList;

const Article = styled.article`
  width: 100%;
  table,
  thead,
  tr {
    width: 100%;
  }
  th {
    font-weight: 700;
    line-height: 1.5rem;
  }
  td {
    font-size: 0.7rem;
    line-height: 1.2rem;
    text-align: center;
  }
`;
