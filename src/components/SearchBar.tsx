import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { QueryInterface } from 'search';

import MESSAGES from '@/constants/error';
import { Search } from '@/assets/icons';
import { AdminColumnsKeyType } from '@/@types/enum';
import { SetStateType, FormEventType, ChangeEventType } from '@/@types/react';

import SelectBox from './SelectBox';

interface SearchBarProps {
  setQuery: SetStateType<QueryInterface>;
}
const SearchBar = ({ setQuery }: SearchBarProps) => {
  const [selectedFilter, setSelectedFilter] = useState<AdminColumnsKeyType>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEventType) => {
    event.preventDefault();
    if (selectedFilter === undefined) {
      alert(MESSAGES.SEARCH_FILTER.EMPTY);
      return;
    }
    const inputValue = inputRef.current?.value;
    const keyword = inputValue === undefined ? '' : inputValue;

    setQuery({
      category: selectedFilter,
      keyword: keyword,
    });
  };
  const handleSelectedFilter = (event: ChangeEventType<HTMLSelectElement>) => {
    const filter = event.target?.value as AdminColumnsKeyType;
    setSelectedFilter(filter);
  };

  return (
    <Wrapper>
      <SelectBox handleSelectedFilter={handleSelectedFilter} />
      <SearchWrapper onSubmit={onSubmit}>
        <input type="search" placeholder="입력" ref={inputRef} />
        <button type="submit">
          <Search />
        </button>
      </SearchWrapper>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox()}
  border: 1px solid ${({ theme }) => theme.color.border.darkblue};
  border-radius: 12px;
  height: 40px;
  line-height: 40px;

  select {
    background: transparent;
    padding: 5px 7px;
    height: 70%;
  }
`;

const SearchWrapper = styled.form`
  ${({ theme }) => theme.mixins.flexBox()}
  height: 100%;
  input {
    border-left: 1px solid ${({ theme }) => theme.color.border.darkblue};
    background: transparent;
    margin-left: 5px;
    padding-left: 10px;
    height: 60%;
    width: 200px;
  }
  button {
    margin-right: 7px;
    background: transparent;
  }
`;
