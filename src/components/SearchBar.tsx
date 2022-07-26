import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { GenderType } from 'request';
import { QueryInterface } from 'search';

import MESSAGES from '@/constants/error';
import { Search } from '@/assets/icons';
import { AdminColumnsKeyType, ButtonTypeEnum } from '@/@types/enum';
import { SetStateType, FormEventType, ChangeEventType } from '@/@types/react';

import SelectBox from '@/components/SelectBox';
import RoundButton from '@/components/RoundButton';
import useToggleButton from '@/hooks/useToggleButton';

interface SearchBarProps {
  setQuery: SetStateType<QueryInterface>;
}
const SearchBar = ({ setQuery }: SearchBarProps) => {
  const { selectedList, onToggleButton } = useToggleButton<GenderType>(
    ButtonTypeEnum.SINGLE
  );
  const [selectedFilter, setSelectedFilter] = useState<AdminColumnsKeyType>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEventType) => {
    event.preventDefault();
    if (!selectedFilter) {
      alert(MESSAGES.SEARCH_FILTER.EMPTY);
      return;
    }

    if (selectedFilter !== 'gender') {
      const inputValue = inputRef.current?.value;
      const keyword = inputValue === undefined ? '' : inputValue;

      setQuery({
        category: selectedFilter,
        keyword: keyword,
      });
      return;
    }
    if (selectedList[0])
      setQuery({
        category: selectedFilter,
        keyword: selectedList[0],
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
        {selectedFilter !== 'gender' ? (
          <>
            <input type="search" placeholder="입력" ref={inputRef} />
            <SubmitButton type="submit">
              <Search />
            </SubmitButton>
          </>
        ) : (
          <>
            <RoundButton
              margin="1px"
              showText="여"
              isClicked={selectedList.includes('F')}
              onClick={() => onToggleButton('F')}
            />
            <RoundButton
              margin="1px"
              showText="남"
              isClicked={selectedList.includes('M')}
              onClick={() => onToggleButton('M')}
            />
          </>
        )}
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
  margin-left: 5px;
  padding-right: 7px;
  input {
    border-left: 1px solid ${({ theme }) => theme.color.border.darkblue};
    background: transparent;

    padding-left: 10px;
    height: 60%;
    width: 200px;
  }
`;
const SubmitButton = styled.button`
  background: transparent;
`;
