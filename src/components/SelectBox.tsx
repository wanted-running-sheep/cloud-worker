import React from 'react';
import { AdminColumns } from '@/@types/enum';
import { ChangeEventType } from '@/@types/react';

interface SelectBoxProps {
  handleSelectedFilter: (event: ChangeEventType<HTMLSelectElement>) => void;
}
const SelectBox = ({ handleSelectedFilter }: SelectBoxProps) => {
  return (
    <select defaultValue={'default'} onChange={handleSelectedFilter}>
      <option value="default" disabled>
        검색할 컬럼 선택
      </option>
      {Object.entries(AdminColumns).map(([key, value], index) => (
        <option key={index} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
