import React from 'react';
import {
  defaultScrollItemTitle,
  defaultScrollItemWrapper,
  defaultScrollWrapper,
} from '@/styles/styleConstants';
import styled from 'styled-components';
import { SetStateType } from '@/@types/react';

interface CityScrollProps {
  cities: string[];
  setCity: (city: string) => void;
  region: { city: string; district: string };
  setRegion: SetStateType<{ city: string; district: string }>;
}

const CityScroll = ({
  cities,
  setCity,
  region,
  setRegion,
}: CityScrollProps) => {
  const onClick = (city: string) => {
    if (region.city === city) return;

    setCity(city);
    setRegion({ city, district: '' });
  };

  return (
    <CityScrollWrapper>
      {cities.map((city) => (
        <CityScrollItem
          key={city}
          onClick={() => onClick(city)}
          isActive={city === region.city}
        >
          <CityTitle>{city}</CityTitle>
        </CityScrollItem>
      ))}
    </CityScrollWrapper>
  );
};

export default CityScroll;

const CityScrollWrapper = styled.ul`
  ${defaultScrollWrapper}
`;

const CityScrollItem = styled.li<{ isActive: boolean }>`
  ${defaultScrollItemWrapper}
  background-color: ${({ isActive, theme }) =>
    isActive && theme.color.background.lightgray}
`;

const CityTitle = styled.span`
  ${defaultScrollItemTitle}
`;
