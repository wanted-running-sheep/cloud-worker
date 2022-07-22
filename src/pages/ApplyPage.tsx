import React, { useEffect } from 'react';
import useRegionModel from '@/api/models/useRegion';

const ApplyPage = () => {
  const { region, getRegionData } = useRegionModel();

  useEffect(() => {
    getRegionData();
  }, []);

  console.log(region);

  return <div>ApplyPage</div>;
};

export default ApplyPage;
