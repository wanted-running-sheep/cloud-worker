import { ApiUrlEnum } from '@/@types/enum';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { RegionDataInterface } from 'request';
import { apiRequest } from '../instance';

const useRegionModel = () => {
  const [region, setRegion] = useState<RegionDataInterface>({});

  const getRegionData = async () => {
    try {
      const regionResponse: AxiosResponse<RegionDataInterface> =
        await apiRequest.get<RegionDataInterface>(ApiUrlEnum.REGION);

      if (regionResponse) {
        setRegion(regionResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    region,
    getRegionData,
  };
};

export default useRegionModel;
