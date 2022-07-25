import { LeftDirection } from '@/assets/icons';
import usePagination from '@/hooks/usePagination';
import React from 'react';
import { UserInterface } from 'request';
import styled from 'styled-components';

interface PaginationProps {
  users: UserInterface[];
}

const Pagination = ({ users }: PaginationProps) => {
  const { pageNums, setCurrentPage, prevPageFlag, nextPageFlag } =
    usePagination(users);

  const onClickPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  const onClickPrevOrNext = (direction: number) => {
    setCurrentPage(pageNums[0] + direction);
  };

  return (
    <Wrapper>
      {prevPageFlag && (
        <PageList onClick={() => onClickPrevOrNext(-10)}>
          <LeftDirection />
        </PageList>
      )}
      {pageNums.map((pageNum) => (
        <PageList key={pageNum} onClick={() => onClickPage(pageNum)}>
          {pageNum}
        </PageList>
      ))}
      {nextPageFlag && (
        <PageList onClick={() => onClickPrevOrNext(10)}>
          <LeftDirection />
        </PageList>
      )}
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.ul`
  display: flex;
  gap: 5px;
`;
const PageList = styled.li`
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  ${({ theme }) => theme.mixins.flexBox()}
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
`;
