import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface CityScrollProps {
  cities: string[];
}

const CityScroll = ({ cities }: CityScrollProps) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const handleScroll = () => {
    console.log('scroll');
  };

  useEffect(() => {
    scrollRef.current?.addEventListener('scroll', handleScroll);
    return () => {
      scrollRef.current?.addEventListener('scroll', handleScroll);
    };
  }, [scrollRef.current]);

  return (
    <CityScrollContainer ref={scrollRef}>
      {cities.map((city) => (
        <CityScrollItem key={city}>
          <CityTitle>{city}</CityTitle>
        </CityScrollItem>
      ))}
    </CityScrollContainer>
  );
};

export default CityScroll;

const CityScrollContainer = styled.ul`
  height: 100%;
  flex-grow: 1;
  overflow-y: scroll;
  ${({ theme }) => theme.mixins.noScrollBar}
`;

const CityScrollItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100% / 3);
`;

const CityTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;
