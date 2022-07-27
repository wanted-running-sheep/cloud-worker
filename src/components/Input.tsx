import React, { useState } from 'react';

import { formatString } from '@/utils/formatString';
import { InputNameType, InputNameEnum } from '@/@types/enum';

import { useRecoilState, useSetRecoilState } from 'recoil';
import { applicantInfoState, applicantValidationState } from '@/recoil/atoms';

import styled from 'styled-components';
import { ChangeEventType } from '@/@types/react';

interface InputProps {
  name?: string;
  type?: string;
  reg?: RegExp;
  regWhiteList?: boolean;
  placeholder?: string;
  value?: string;
  height?: string;
  width?: string;
  validationBorder?: boolean;
  maxLength?: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const DEFAULT_HEIGHT = '30px';
const DEFAULT_WIDTH = '100%';

const Input = ({
  reg = new RegExp(''),
  regWhiteList = false,
  validationBorder = false,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  ...otherProps
}: InputProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [applicantInfo, setApplicantInfo] = useRecoilState(applicantInfoState);
  const setApplicantValidation = useSetRecoilState(applicantValidationState);
  const checkValidation = (value: string) => {
    const regex = new RegExp(reg);
    const isValid = regex.test(value);
    return regWhiteList ? isValid : !isValid;
  };

  const handleValidationCheck = (event: ChangeEventType<HTMLInputElement>) => {
    const { name, value: inputValue } = event.target;
    if (!checkValidation(inputValue)) {
      if (!validationBorder) {
        event.currentTarget.value = inputValue.replace(reg, '');
      } else {
        setIsValid(false);
      }
      return false;
    }
    setIsValid(true);

    return true;
  };

  const makeAutoFormat = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: InputNameType
  ) => {
    let inputValue = event.currentTarget.value;
    event.currentTarget.value = formatString(inputValue, type);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (reg === undefined) return;
    if (!handleValidationCheck(event)) {
      if (name === InputNameEnum.EMAIL) {
        setApplicantValidation((prev) => ({
          ...prev,
          [name]: false,
        }));
        return;
      }
    }

    if (name === InputNameEnum.BIRTH || name === InputNameEnum.PHONE) {
      makeAutoFormat(event, name);
    }

    setApplicantInfo({ ...applicantInfo, [name]: value });
    const resultValidation = value ? true : false;
    setApplicantValidation((prev) => ({ ...prev, [name]: resultValidation }));
  };

  return (
    <div>
      <StyledInput
        {...otherProps}
        height={height}
        width={width}
        onChange={handleChangeValue}
        validationBorder={isValid}
        /* value={value ? value : applicantInfo[name]} */
      />
    </div>
  );
};

const StyledInput = styled.input<{
  height: string;
  width: string;
  validationBorder: boolean;
}>`
  border-bottom: 1px solid
    ${({ theme, validationBorder }) =>
      validationBorder ? theme.color.border.lightgray : theme.color.border.red};
  height: ${({ height }) => `${height}`};
  width: ${({ width }) => `${width}`};
  margin-bottom: 30px;

  ::placeholder {
    color: ${({ theme }) => theme.color.font.gray};
  }
`;

export default Input;
