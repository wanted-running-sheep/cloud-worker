import React, { useState } from 'react';
import styled from 'styled-components';
import RoundButton from '@/components/RoundButton';
import useToggleButton from '@/hooks/useToggleButton';
import {
  Transportations,
  TransportationType,
  ButtonTypeEnum,
} from '@/@types/enum';

const TransportationList = () => {
  const { selectedList, onToggleButton } = useToggleButton<TransportationType>(
    ButtonTypeEnum.MULTIPLE
  );

  return (
    <Wrapper>
      {Transportations.map((transportation, index) => (
        <RoundButton
          key={index}
          showText={transportation}
          isClicked={selectedList.includes(transportation)}
          onClick={() => onToggleButton(transportation)}
        />
      ))}
    </Wrapper>
  );
};

export default React.memo(TransportationList);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
