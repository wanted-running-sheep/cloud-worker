import React, { useState } from 'react';

import { formatString } from '@/utils/formatString';

import styled from 'styled-components';

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
const DEFAULT_WIDTH = '145px';

const Input = ({
  reg = new RegExp(''),
  regWhiteList = false,
  validationBorder = false,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  ...otherProps
}: InputProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  const checkValidation = (value: string) => {
    const regex = new RegExp(reg);
    const isValid = regex.test(value);
    return regWhiteList ? isValid : !isValid;
  };

  const handleValidationCheck = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.currentTarget.value;
    if (!checkValidation(inputValue)) {
      if (!validationBorder) {
        return (event.currentTarget.value = inputValue.replace(reg, ''));
      } else {
        return setIsValid(false);
      }
    }
    setIsValid(true);
  };

  const makeAutoFormat = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    let inputValue = event.currentTarget.value;
    event.currentTarget.value = formatString(inputValue, type);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (reg === undefined) return;
    handleValidationCheck(event);
    const type = otherProps.name as string;
    makeAutoFormat(event, type);
  };

  return (
    <div>
      <StyledInput
        {...otherProps}
        height={height}
        width={width}
        onChange={handleChangeValue}
        validationBorder={isValid}
      />
    </div>
  );
};

const StyledInput = styled.input<{
  height: string;
  width: string;
  validationBorder: boolean;
}>`
  border: 1px solid
    ${({ theme, validationBorder }) =>
      validationBorder ? theme.color.border.lightgray : theme.color.border.red};
  height: ${({ height }) => `${height}`};
  width: ${({ width }) => `${width}`};
  ::placeholder {
    color: ${({ theme }) => theme.color.font.gray};
  }
`;

export default Input;
