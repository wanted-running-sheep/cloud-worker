import { ApiUrlEnum } from '@/@types/enum';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { UserInterface } from 'request';
import { apiRequest } from '../instance';

const useApplyUserModel = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const getUserData = async () => {
    try {
      const regionResponse: AxiosResponse<UserInterface[]> =
        await apiRequest.get<UserInterface[]>(ApiUrlEnum.APPLYUSER);

      if (regionResponse) {
        setUsers(regionResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    users,
    getUserData,
  };
};

export default useApplyUserModel;
