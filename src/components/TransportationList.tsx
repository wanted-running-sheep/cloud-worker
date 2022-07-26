import React, { useState } from 'react';
import styled from 'styled-components';
import RoundButton from '@/components/RoundButton';
import { Transportations, TransportationType } from '@/@types/enum';

interface TransportationListProps {
  className?: string;
}

const TransportationList = ({ className }: TransportationListProps) => {
  const [isClicked, setIsClicked] = useState<TransportationType[]>([]);

  const toggleButton = (transportation: TransportationType) => {
    const selectedIndex = isClicked.indexOf(transportation);
    if (selectedIndex >= 0) {
      setIsClicked((prev) => {
        return prev.filter((_, index) => selectedIndex !== index);
      });

      return;
    }

    setIsClicked((prev) => [...prev, transportation]);
  };

  return (
    <Wrapper className={className}>
      {Transportations.map((transportation, index) => (
        <RoundButton
          key={index}
          showText={transportation}
          isClicked={isClicked.includes(transportation)}
          onClick={() => toggleButton(transportation)}
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
