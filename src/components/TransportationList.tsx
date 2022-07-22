import React from 'react';
import styled from 'styled-components';
import { RoundButtonEnum } from '@/@types/enum';
import RoundButton from '@/components/RoundButton';

const TransportationList = () => {
  const transportations = [
    '버스',
    '지하철',
    '택시',
    'KTX/기차',
    '도보',
    '자전거',
    '전동킥보드',
    '자가용',
  ];

  return (
    <Wrapper>
      {transportations.map((transportation, index) => (
        <RoundButton
          key={index}
          showText={transportation}
          type={RoundButtonEnum.TRANSPORTATION}
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
