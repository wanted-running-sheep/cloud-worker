import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { RightDirection } from '@/assets/icons';

interface CheckboxProps {
  labelText?: string;
  link?: string;
  defaultChecked?: boolean;
  onClick?: () => void;
}

const Checkbox = ({
  labelText,
  link = '',
  defaultChecked = false,
  ...otherProps
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
  const handleChangedCheck = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <Wrapper>
      <div>
        <CheckMarkWrapper>
          <CheckInput
            type="checkbox"
            onChange={handleChangedCheck}
            isChecked={isChecked}
            defaultChecked={defaultChecked}
          />
          <CheckMarkRound isChecked={isChecked} />
        </CheckMarkWrapper>
        <Label onClick={handleChangedCheck}>{labelText}</Label>
      </div>
      <div onClick={otherProps.onClick}>
        <RightDirection />
      </div>
    </Wrapper>
  );
};

const checkShapeCss = css<{ isChecked: boolean }>`
  &:after {
    border: 2px solid
      ${({ theme, isChecked }) =>
        isChecked ? theme.color.font.black : theme.color.font.lightgray};
    border-top: none;
    border-right: none;
    content: '';
    height: 5px;
    left: 2px;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 13px;
  }
`;

const Wrapper = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'space-between')}
  width: 100%;
  padding: 10px 0;
  padding-right: 10px;

  svg {
    height: 18px;
    width: 40px;
  }
`;

const CheckInput = styled.input<{ isChecked: boolean }>`
  visibility: hidden;
`;

const CheckMarkWrapper = styled.label`
  position: relative;
  cursor: pointer;
`;

const CheckMarkRound = styled.div<{ isChecked: boolean }>`
  background-color: ${({ theme }) => theme.color.background.white};
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 0;

  ${checkShapeCss}
`;

const Label = styled.span`
  margin-left: 14px;
  cursor: pointer;
`;

export default Checkbox;
