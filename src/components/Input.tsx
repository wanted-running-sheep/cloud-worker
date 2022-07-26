import React, { useState } from 'react';

import { formatString } from '@/utils/formatString';
import { InputNameType, InputNameEnum } from '@/@types/enum';

import styled from 'styled-components';
import { ChangeEventType, ClickEventType } from '@/@types/react';

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
  onClick?: (event: ClickEventType<HTMLInputElement>) => void;
  onChangeInput: (event: ChangeEventType<HTMLInputElement>) => void;
}

const DEFAULT_HEIGHT = '30px';
const DEFAULT_WIDTH = '145px';

const Input = ({
  reg = new RegExp(''),
  regWhiteList = false,
  validationBorder = false,
  height = DEFAULT_HEIGHT,
  width = DEFAULT_WIDTH,
  onChangeInput,
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
    type: InputNameType
  ) => {
    let inputValue = event.currentTarget.value;
    event.currentTarget.value = formatString(inputValue, type);
  };

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (reg === undefined) return;
    handleValidationCheck(event);

    const type = otherProps.name;
    if (type === InputNameEnum.BIRTH || type === InputNameEnum.PHONE) {
      makeAutoFormat(event, type);
    }
  };

  return (
    <div>
      <StyledInput
        {...otherProps}
        height={height}
        width={width}
        /* onChange={handleChangeValue} */
        onChange={onChangeInput}
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
  margin-bottom: 30px;
  border-radius: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.color.font.gray};
  }
`;

export default Input;
