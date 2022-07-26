import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserInterface } from 'request';

const usePagination = (users: UserInterface[]) => {
  const { search } = useLocation();
  const urlRef = useRef<URLSearchParams>();
  if (!urlRef.current) urlRef.current = new URLSearchParams(search);

  const LIST_PER_PAGE = 20;
  const TOTAL_PAGE = Math.ceil(users.length / LIST_PER_PAGE);
  const MIN_PAGE_NUM = 1;
  const MAX_PAGE_LIST_CNT = 10;
  const PAGE = 'page';
  const initialCurrentPage = urlRef.current.get(PAGE)
    ? urlRef.current.get(PAGE)
    : MIN_PAGE_NUM;

  const [currentPage, setCurrentPage] = useState(Number(initialCurrentPage));
  const prevPageFlag = currentPage > MAX_PAGE_LIST_CNT;

  const convertRangeToArray = (start: number, end: number) => {
    const arr = [];

    for (let i = start; i <= end; i++) {
      if (i > TOTAL_PAGE) return arr;
      arr.push(i);
    }

    return arr;
  };

  const createPagination = () => {
    /* 
      현재 선택된 페이지가 10보다 작고 
      총 페이지 수가 10보다 클경우 
      1~10까지의 배열 리턴
    */
    if (currentPage < MAX_PAGE_LIST_CNT && TOTAL_PAGE >= MAX_PAGE_LIST_CNT) {
      return convertRangeToArray(MIN_PAGE_NUM, MAX_PAGE_LIST_CNT);
    }

    /* 
      현재 선택된 페이지가 10보다 작고 
      총 페이지 수도 10보다 작을경우 
      1~총페이지 수 까지의 배열 리턴
    */
    if (currentPage < MAX_PAGE_LIST_CNT && TOTAL_PAGE < MAX_PAGE_LIST_CNT) {
      return convertRangeToArray(MIN_PAGE_NUM, TOTAL_PAGE);
    }

    /* 
      현재 선택된 페이지가 10단위 페이지(ex. 10, 20, 30)일 경우 
      첫 페이지를 현재 페이지의 이전 10단위 +1로 설정 (ex. 40 이면 31) 
      이전 10단위 +1 ~ 현재페이지 까지의 배열을 리턴
    */
    if (currentPage % MAX_PAGE_LIST_CNT === 0) {
      const firstPageNum =
        (currentPage / MAX_PAGE_LIST_CNT - MIN_PAGE_NUM) * MAX_PAGE_LIST_CNT +
        MIN_PAGE_NUM;
      return convertRangeToArray(firstPageNum, currentPage);
    }

    /* 
      현재 선택된 페이지가 10보다 큰경우 
      첫페이지를 현재 페이지의 10단위 + 1로 설정 (ex. 32이면 첫페이지는 31)
      마지막 페이지는 첫페이지의 그다음 10단위 (ex. 32이면 마지막 페이지는 40)
      첫 페이지 부터 마지막 페이지까지의 배열을 리턴 하되 마지막 페이지가 
      총 페이지 수보다 크면 총페이지를 마지막 페이지로 설정
    */
    if (currentPage > MAX_PAGE_LIST_CNT) {
      const firstPageNum =
        Math.floor(currentPage / MAX_PAGE_LIST_CNT) * MAX_PAGE_LIST_CNT +
        MIN_PAGE_NUM;
      const lastPageNum = firstPageNum + MAX_PAGE_LIST_CNT - MIN_PAGE_NUM;

      return convertRangeToArray(firstPageNum, lastPageNum);
    }

    return [];
  };

  return {
    pageNums: createPagination(),
    currentPage,
    setCurrentPage,
    prevPageFlag,
    nextPageFlag: createPagination().length >= MAX_PAGE_LIST_CNT,
    LIST_PER_PAGE,
    sliceUsers: users.slice(
      (currentPage - MIN_PAGE_NUM) * LIST_PER_PAGE,
      currentPage * LIST_PER_PAGE
    ),
  };
};

export default usePagination;
