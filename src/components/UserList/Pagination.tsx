import React from 'react';
import { LeftDirection, RightDirection } from '@/assets/icons';
import styled from 'styled-components';
import { SetStateType } from '@/@types/react';
import { useNavigate } from 'react-router-dom';
import { ApiUrlEnum } from '@/@types/enum';

interface PaginationProps {
  pageNums: number[];
  currentPage: number;
  setCurrentPage: SetStateType<number>;
  prevPageFlag: boolean;
  nextPageFlag: boolean;
}

const Pagination = ({
  pageNums,
  currentPage,
  setCurrentPage,
  prevPageFlag,
  nextPageFlag,
}: PaginationProps) => {
  const navigate = useNavigate();

  const onClickPage = (currentPage: number) => {
    setCurrentPage(currentPage);
    handleNavigation(currentPage);
  };

  const onClickPrevOrNext = (direction: number) => {
    setCurrentPage(pageNums[0] + direction);
    handleNavigation(pageNums[0] + direction);
  };

  const handleNavigation = (pageNum: number) => {
    const pathname = ApiUrlEnum.ADMIN;
    const search = `?page=${pageNum}`;

    navigate({
      pathname,
      search,
    });
  };

  const getCurrentPageNumber = (urlPageNumber: number) => {
    const MAX_PAGE_LIST_CNT = 10;
    const currentElementOrder = urlPageNumber % MAX_PAGE_LIST_CNT;

    if (currentElementOrder === 0)
      return urlPageNumber === MAX_PAGE_LIST_CNT
        ? MAX_PAGE_LIST_CNT
        : MAX_PAGE_LIST_CNT + 1;
    return urlPageNumber > MAX_PAGE_LIST_CNT
      ? currentElementOrder + 1
      : currentElementOrder;
  };

  return (
    <Wrapper>
      {prevPageFlag && (
        <PageList onClick={() => onClickPrevOrNext(-10)}>
          <LeftDirection />
        </PageList>
      )}
      {pageNums.map((pageNum) => (
        <PageList
          key={pageNum}
          clickedPage={getCurrentPageNumber(currentPage)}
          onClick={() => onClickPage(pageNum)}
        >
          {pageNum}
        </PageList>
      ))}
      {nextPageFlag && (
        <PageList onClick={() => onClickPrevOrNext(10)}>
          <RightDirection />
        </PageList>
      )}
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.ul`
  ${({ theme }) => theme.mixins.flexBox()}
  gap: 5px;
  margin-top: 20px;
`;
const PageList = styled.li<{ clickedPage?: number }>`
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  ${({ theme }) => theme.mixins.flexBox()}
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;

  &:nth-child(${({ clickedPage }) => clickedPage}) {
    background: ${({ theme }) => theme.color.background.black};
    color: ${({ theme }) => theme.color.font.white};
  }

  &:hover {
    background: ${({ theme }) => theme.color.background.gray};
    color: ${({ theme }) => theme.color.font.black};
  }
`;
