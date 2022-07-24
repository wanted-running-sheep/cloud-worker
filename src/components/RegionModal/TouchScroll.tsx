import React, { useEffect, useState } from 'react';
import useRegionModel from '@/api/models/useRegion';
import { DEFAULT_SELECTED_CITY } from '@/constants';
import styled from 'styled-components';
import CityScroll from './CityScroll';
import DistrictScroll from './DistrictScroll';
import Loading from '../Loading';

const TouchScroll = () => {
  const { regions, getRegionData } = useRegionModel();

  const [city, setCity] = useState(DEFAULT_SELECTED_CITY);
  const [region, setRegion] = useState<{ city: string; district: string }>({
    city: DEFAULT_SELECTED_CITY,
    district: '',
  });

  useEffect(() => {
    getRegionData();
  }, []);

  if (!Object.keys(regions).length) return <Loading />;

  return (
    <Wrapper>
      <CityScroll
        cities={Object.keys(regions)}
        setCity={setCity}
        region={region}
        setRegion={setRegion}
      />
      <DistrictScroll
        districts={regions[city]}
        region={region}
        setRegion={setRegion}
      />
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

const Spinner = styled.img`
  width: 50px;
  height: 50px;
`;
