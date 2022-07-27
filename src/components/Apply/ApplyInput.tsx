import React from 'react';
import { Label, Input } from '@/components';
import styled from 'styled-components';
import { REGEX_FOR_VALIDATION } from '@/constants/validation';

interface ApplyInputProps {
  title: string;
  name: string;
  placeholder: string;
  reg?: RegExp;
  regWhiteList?: boolean;
  validationBorder?: boolean;
  maxLength?: number;
}
const ApplyInput = ({
  title,
  reg = new RegExp(''),
  regWhiteList = false,
  validationBorder = false,
  ...otherProps
}: ApplyInputProps) => {
  return (
    <>
      <Label title={title} />
      <InputField
        reg={reg}
        regWhiteList={regWhiteList}
        validationBorder={validationBorder}
        {...otherProps}
      />
    </>
  );
};

export default ApplyInput;

const InputField = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  margin-top: 10px;
`;
