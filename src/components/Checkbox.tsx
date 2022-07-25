import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface CheckboxProps {
  labelText?: string;
  link?: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({
  labelText,
  link = '',
  defaultChecked = false,
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {},
  ...otherProps
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
  const navigate = useNavigate();

  const handleChangedCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setIsChecked((prevState) => !prevState);
  };

  const handleClickedLink = () => {
    navigate(link);
  };

  return (
    <Wrapper>
      <LeftSide>
        <CheckMarkWrapper>
          <CheckInput
            type="checkbox"
            onChange={handleChangedCheck}
            isChecked={isChecked}
            defaultChecked={defaultChecked}
            {...otherProps}
          />
          <CheckMarkRound isChecked={isChecked} />
        </CheckMarkWrapper>
        <Label onClick={handleClickedLink}>{labelText}</Label>
      </LeftSide>
      <RightSide>
        <RightArrow onClick={handleClickedLink} />
      </RightSide>
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
  ${({ theme }) => theme.mixins.flexBox('center', 'between-space')}
  width: 100%;
  padding: 10px 0;
  padding-right: 10px;
`;

const LeftSide = styled.div`
  width: 90%;
`;
const RightSide = styled.div`
  ${({ theme }) => theme.mixins.flexBox('center', 'right')}
  width: 10%;
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

const RightArrow = styled.div`
  width: 5px;
  height: 5px;
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.color.font.black};
    border-right: 0;
    border-top: 0;
    transform: rotate(225deg);
  }
`;
export default Checkbox;
