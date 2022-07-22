import React, { useState } from 'react';
import styled from 'styled-components';

interface RoundButtonWithCssProps {
  isClicked?: boolean;
  width?: string;
  margin?: string;
  padding?: string;
  border?: boolean;
  borderRadius?: string;
}
interface RoundButtonProps extends RoundButtonWithCssProps {
  key?: number;
  showText: string;
  disabled?: boolean;
}

const RoundButton = ({
  disabled = false,
  width = 'auto',
  margin = '3px',
  padding = '5px 13px',
  border = true,
  borderRadius = '30px',
  ...otherProps
}: RoundButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleButton = () => {
    setIsClicked((preview) => !preview);
  };

  return (
    <DefaultButton
      isClicked={isClicked}
      disabled={disabled}
      width={width}
      margin={margin}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      onClick={toggleButton}
    >
      {otherProps.showText}
    </DefaultButton>
  );
};

export default RoundButton;

const DefaultButton = styled.button<RoundButtonWithCssProps>`
  font-size: 1rem;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ theme, border }) =>
    border ? `1px solid ${theme.color.border.lightgray}` : 'none'};
  border-radius: ${({ borderRadius }) => borderRadius};

  background: ${({ theme, isClicked }) =>
    isClicked ? theme.color.background.black : theme.color.background.white};
  color: ${({ theme, isClicked }) =>
    isClicked ? theme.color.font.white : theme.color.font.gray};

  &:disabled {
    cursor: default;
    opacity: 0.7;
    background: ${({ theme }) => theme.color.background.lightgray};
    color: ${({ theme }) => theme.color.font.gray};
  }
`;
