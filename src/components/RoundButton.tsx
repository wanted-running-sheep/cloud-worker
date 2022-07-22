import React, { useState } from 'react';
import styled from 'styled-components';
import { RoundButtonEnum, RoundButtonType } from '@/@types/enum';

interface RoundButton {
  key?: number;
  showText: string;
  disabled?: boolean;
  type?: RoundButtonType;
}
const RoundButton = ({ showText, type, disabled = false }: RoundButton) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleButton = () => {
    setIsClicked((preview) => !preview);
  };

  if (type === RoundButtonEnum.TRANSPORTATION)
    return (
      <TransportationButton isClicked={isClicked} onClick={toggleButton}>
        {showText}
      </TransportationButton>
    );
  return (
    <DefaultButton
      disabled={disabled}
      isClicked={isClicked}
      onClick={toggleButton}
    >
      {showText}
    </DefaultButton>
  );
};

export default RoundButton;

const DefaultButton = styled.button<{ isClicked?: boolean }>`
  width: 100%;
  padding: 18px 0px;
  font-size: 1rem;
  outline: none;
  border-radius: 30px;
  background: ${({ theme, isClicked }) =>
    isClicked ? theme.color.background.white : theme.color.background.black};
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.font.gray : theme.color.font.white};

  &:disabled {
    cursor: default;
    opacity: 0.7;
    background: ${({ theme }) => theme.color.background.lightgray};
    color: ${({ theme }) => theme.color.font.gray};
  }
`;
const TransportationButton = styled(DefaultButton)`
  width: auto;
  padding: 5px 15px;
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  margin: 0 5px 7px 0;
`;
