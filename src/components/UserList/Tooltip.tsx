import React from 'react';
import styled from 'styled-components';
import { TransportationType } from '@/@types/enum';

interface TooltipProps {
  transportation: TransportationType[];
}
const Tooltip = ({ transportation }: TooltipProps) => {
  return (
    <Wrapper>
      {transportation.map((transport, index) => (
        <p key={index}>{transport}</p>
      ))}
    </Wrapper>
  );
};

export default Tooltip;

const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background.white};
  border: 1px solid ${({ theme }) => theme.color.border.lightgray};
  position: absolute;
  z-index: 999;
  right: 10%;
  bottom: 0px;

  font-size: 0.9rem;
  padding: 5px;
  width: 80px;
  &:first-child {
    bottom: -20px;
  }
`;
