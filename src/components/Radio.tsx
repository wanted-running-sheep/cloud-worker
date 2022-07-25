import React, { useState } from 'react';
import styled from 'styled-components';

interface RadioProps {
  name: string; //버튼 그룹. ex)성별 gender
  label: string; //표면적 이름 ex)남자 or 여자
  value: string; //데이터값 ex) male or female
  checked?: string; //
}

//TODO RadioSection으로 Radio들을 감싸서 한 번에 name과 input 들을 쓸 수 있도록
//TODO 체크 이미지 삽입
//TODO 데이터 넘기기

const Radio = ({ name, label, value, checked }: RadioProps) => {
  const [selected, setSelected] = useState<String>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        // checked={checked === value}
        onChange={radioHandler}
      />
      <label htmlFor={value}>{label}</label>
    </>
  );
};

export default Radio;

const RadioLabel = styled.label``;

const RadioBtn = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  margin-right: 10px;
  &:hover {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: #ffffff;
    }
  }
  &:checked {
    background: #000000;
    border: 1px solid #000000;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;
