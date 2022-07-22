import React from 'react';
import styled from 'styled-components';

interface DistrictScrollProps {
  districts: [string, string[]][];
}

const DistrictScroll = ({ districts }: DistrictScrollProps) => {
  return <div>DistrictScroll</div>;
};

export default DistrictScroll;

const DistrictScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid red;
`;

const DistirictScrollItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
`;

const DistirictTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;
