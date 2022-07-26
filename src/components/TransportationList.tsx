import React from 'react';
import styled from 'styled-components';
import RoundButton from '@/components/RoundButton';
import useToggleButton from '@/hooks/useToggleButton';
import {
  Transportations,
  TransportationType,
  ButtonTypeEnum,
} from '@/@types/enum';

interface TransportationListProps {
  className?: string;
}

const TransportationList = ({ className }: TransportationListProps) => {
  const { selectedList, onToggleButton } = useToggleButton<TransportationType>(
    ButtonTypeEnum.MULTIPLE
  );

  return (
    <Wrapper className={className}>
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
