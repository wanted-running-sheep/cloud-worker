import React from 'react';
import {
  defaultScrollItemTitle,
  defaultScrollItemWrapper,
  defaultScrollWrapper,
} from '@/styles/styleConstants';
import styled from 'styled-components';
import { SetStateType } from '@/@types/react';

interface DistrictScrollProps {
  districts: string[];
  region: { city: string; district: string };
  setRegion: SetStateType<{ city: string; district: string }>;
}

const DistrictScroll = ({
  districts,
  region,
  setRegion,
}: DistrictScrollProps) => {
  const onClickDistrict = (district: string) => {
    if (region.district === district) return;
    setRegion((prevRegin) => ({ ...prevRegin, district }));
  };

  return (
    <DistirictScrollWrapper>
      {districts.map((disrict) => (
        <DistirictScrollItem
          key={disrict}
          onClick={() => onClickDistrict(disrict)}
          isActive={region.district === disrict}
        >
          <DistirictTitle>{disrict}</DistirictTitle>
        </DistirictScrollItem>
      ))}
    </DistirictScrollWrapper>
  );
};

export default DistrictScroll;

const DistirictScrollWrapper = styled.ul`
  ${defaultScrollWrapper}
`;

const DistirictScrollItem = styled.li<{ isActive: boolean }>`
  ${defaultScrollItemWrapper}
  background-color: ${({ isActive, theme }) =>
    isActive && theme.color.background.lightgray}
`;

const DistirictTitle = styled.span`
  ${defaultScrollItemTitle}
`;
