import React from 'react';
import styled from 'styled-components';
import { SelectButton, Label } from '@/components';
import { InputNameEnum, InputNameType } from '@/@types/enum';
import { ChangeEventType } from '@/@types/react';
interface ApplyGenderRadioProps {
  name?: InputNameType;
  label?: ['남자', '여자'];
  values?: ['M', 'F'];
  title: string;
  onChange: (event: ChangeEventType<HTMLInputElement>) => void;
}

const ApplyGenderRadio = ({
  name = InputNameEnum.GENDER,
  label = ['남자', '여자'],
  values = ['M', 'F'],
  title,
  onChange,
}: ApplyGenderRadioProps) => {
  return (
    <>
      <Label title={title} />
      <GenderRadio
        name={name}
        labels={label}
        values={values}
        onChange={onChange}
      />
    </>
  );
};

export default ApplyGenderRadio;

const GenderRadio = styled(SelectButton)`
  padding-left: 0px;
  margin-bottom: 20px;
`;
