import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Checked } from '@/assets/icons';

interface RadioProps {
  name: string; //버튼 그룹. ex)성별 gender
  label: string[]; //표면적 이름 ex)남자 or 여자
  value: string[]; //데이터값 ex) male or female
}

const Radio = ({ name, label, value }: RadioProps) => {
  const [selected, setSelected] = useState<String>();

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <Wrapper>
      {label.map((label, index) => (
        <RadioGroup key={index}>
          <input
            type="radio"
            name={name}
            id={value[index]}
            value={value[index]}
            onChange={radioHandler}
          />
          <label htmlFor={value[index]}>
            <Checked />
            {label}
          </label>
        </RadioGroup>
      ))}
    </Wrapper>
  );
};

export default Radio;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};
  width: 100%;
  margin-top: 8px;
  padding: 10px;
`;
const RadioGroup = styled.div`
  flex: 1;
  input {
    display: none;
    &:checked + label {
      color: ${({ theme }) => theme.color.font.black};
    }
    &:checked + label svg {
      fill: ${({ theme }) => theme.color.font.black};
    }
  }
  label {
    cursor: pointer;
    ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};
    /* width: 80px; */
    color: ${({ theme }) => theme.color.font.gray};
  }
  svg {
    width: 1.3rem;
    margin-right: 10px;
    fill: ${({ theme }) => theme.color.font.gray};
  }
`;
