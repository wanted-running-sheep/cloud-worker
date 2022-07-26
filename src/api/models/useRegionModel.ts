import { ApiUrlEnum } from '@/@types/enum';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { RegionDataInterface } from 'request';
import { apiRequest } from '../instance';

const useRegionModel = () => {
  const [regions, setRegions] = useState<RegionDataInterface>({});

  const getRegionData = async () => {
    try {
      const regionResponse: AxiosResponse<RegionDataInterface> =
        await apiRequest.get<RegionDataInterface>(ApiUrlEnum.REGION);

      if (regionResponse) {
        setRegions(regionResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    regions,
    getRegionData,
  };
};

export default useRegionModel;
