import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Checked } from '@/assets/icons';
import { ChangeEventType } from '@/@types/react';

interface RadioProps {
  name: string; //버튼 그룹. ex)성별 gender
  labels: string[]; //표면적 이름 ex)남자 or 여자
  values: string[]; //데이터값 ex) male or female
}

const Radio = ({ name, labels, values }: RadioProps) => {
  const [selected, setSelected] = useState<string>();

  const radioHandler = (event: ChangeEventType<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <Wrapper>
      {labels.map((label, index) => (
        <RadioGroup key={index}>
          <input
            type="radio"
            name={name}
            id={values[index]}
            value={values[index]}
            onChange={radioHandler}
          />
          <label htmlFor={values[index]}>
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
  display: flex;
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
    ${({ theme }) => theme.mixins.flexBox('center', 'flex-start')};
    color: ${({ theme }) => theme.color.font.gray};
  }
  svg {
    width: 1.3rem;
    margin-right: 10px;
    fill: ${({ theme }) => theme.color.font.gray};
  }
`;
