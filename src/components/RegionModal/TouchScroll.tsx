import React, { useEffect, useState } from 'react';
import useRegionModel from '@/api/models/useRegion';
import { DEFAULT_SELECTED_CITY } from '@/constants';
import styled from 'styled-components';
import Loading from '../Loading';

const TouchScroll = () => {
  const { regions, getRegionData } = useRegionModel();

  const [city, setCity] = useState(DEFAULT_SELECTED_CITY);
  const [region, setRegion] = useState<{ city: string; district: string }>({
    city: DEFAULT_SELECTED_CITY,
    district: '',
  });

  const onClickCity = (city: string) => {
    if (region.city === city) return;

    setCity(city);
    setRegion({ city, district: '' });
  };

  const onClickDistrict = (district: string) => {
    if (region.district === district) return;
    setRegion((prevRegin) => ({ ...prevRegin, district }));
  };

  useEffect(() => {
    getRegionData();
  }, []);

  if (!Object.keys(regions).length) return <Loading />;

  return (
    <Wrapper>
      <ScrollWrapper>
        {Object.keys(regions).map((city) => (
          <ScrollItem
            key={city}
            onClick={() => onClickCity(city)}
            isActive={city === region.city}
          >
            <ScrollItemTitle>{city}</ScrollItemTitle>
          </ScrollItem>
        ))}
      </ScrollWrapper>
      <ScrollWrapper>
        {regions[city].map((district) => (
          <ScrollItem
            key={district}
            onClick={() => onClickDistrict(district)}
            isActive={region.district === district}
          >
            <ScrollItemTitle>{district}</ScrollItemTitle>
          </ScrollItem>
        ))}
      </ScrollWrapper>
    </Wrapper>
  );
};

export default TouchScroll;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  padding: 10px;
  gap: 10px;
`;

const ScrollWrapper = styled.ul`
  width: 50%;
  height: 100%;
  overflow-y: scroll;
  ${({ theme }) => theme.mixins.noScrollBar}
`;

const ScrollItem = styled.li<{ isActive: boolean }>`
  ${({ theme }) => theme.mixins.flexBox()}
  width: 100%;
  height: calc(100% / 3);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.background.lightgray};
  }
  background-color: ${({ isActive, theme }) =>
    isActive && theme.color.background.lightgray};
`;

const ScrollItemTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;
