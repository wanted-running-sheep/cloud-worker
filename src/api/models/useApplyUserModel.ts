import { ApiUrlEnum } from '@/@types/enum';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { UserInterface } from 'request';
import { apiRequest } from '../instance';

const useApplyUserModel = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const getUserData = async () => {
    try {
      const userResponse: AxiosResponse<UserInterface[]> = await apiRequest.get<
        UserInterface[]
      >(ApiUrlEnum.APPLYUSER);

      if (userResponse) {
        setUsers(userResponse.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const patchUser = async <T>(id: number, data: T) => {
    return await apiRequest.patch<T>(ApiUrlEnum.APPLYUSER, id, data);
  };

  return {
    users,
    getUserData,
    patchUser,
  };
};

export default useApplyUserModel;
