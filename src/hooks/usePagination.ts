import { useState } from 'react';
import { UserInterface } from 'request';

const usePagination = (users: UserInterface[]) => {
  //한페이지에 보여줄 목록 수
  const LIST_PER_PAGE = 20;
  //총 페이지 수
  const TOTAL_PAGE = Math.ceil(users.length / LIST_PER_PAGE);
  //페이지네이션 최소 값
  const MIN_PAGE_NUM = 1;
  //보여줄 페이지네이션 개수
  const MAX_PAGE_LIST_CNT = 10;
  //현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  //이전 열개목록 보여주는 아이콘 표시 여부
  const prevPageFlag = currentPage > 10;
  //다음 열개목록 보여주는 아이콘 표시 여부
  const nextPageFlag = TOTAL_PAGE - currentPage > 10;

  //start ~ end 까지의 배열 생성
  const pageRange = (start: number, end: number) => {
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
      return pageRange(MIN_PAGE_NUM, MAX_PAGE_LIST_CNT);
    }

    /* 
      현재 선택된 페이지가 10보다 작고 
      총 페이지 수도 10보다 작을경우 
      1~총페이지 수 까지의 배열 리턴
    */
    if (currentPage < MAX_PAGE_LIST_CNT && TOTAL_PAGE < MAX_PAGE_LIST_CNT) {
      return pageRange(MIN_PAGE_NUM, TOTAL_PAGE);
    }

    /* 
      현재 선택된 페이지가 10단위 페이지(ex. 10, 20, 30)일 경우 
      첫 페이지를 현재 페이지의 이전 10단위 +1로 설정 (ex. 40 이면 31) 
      이전 10단위 +1 ~ 현재페이지 까지의 배열을 리턴
    */
    if (currentPage % MAX_PAGE_LIST_CNT === 0) {
      const firstPageNum = (currentPage / MAX_PAGE_LIST_CNT - 1) * 10 + 1;
      return pageRange(firstPageNum, currentPage);
    }

    /* 
      현재 선택된 페이지가 10보다 큰경우 
      첫페이지를 현재 페이지의 10단위 + 1로 설정 (ex. 32이면 첫페이지는 31)
      마지막 페이지는 첫페이지의 그다음 10단위 (ex. 32이면 마지막 페이지는 40)
      첫 페이지 부터 마지막 페이지까지의 배열을 리턴 하되 마지막 페이지가 
      총 페이지 수보다 크면 총페이지를 마지막 페이지로 설정
    */
    if (currentPage > MAX_PAGE_LIST_CNT) {
      const firstPageNum = Math.floor(currentPage / MAX_PAGE_LIST_CNT) * 10 + 1;
      const lastPageNum = firstPageNum + MAX_PAGE_LIST_CNT - 1;

      return pageRange(firstPageNum, lastPageNum);
    }

    return [];
  };

  return {
    pageNums: createPagination(),
    currentPage,
    setCurrentPage,
    prevPageFlag,
    nextPageFlag,
  };
};

export default usePagination;
