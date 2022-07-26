import React, { useEffect, useState } from 'react';
import { UserInterface } from 'request';
import { QueryInterface } from 'search';
import useApplyUserModel from '@/api/models/useApplyUserModel';

const useSearchUser = () => {
  const [query, setQuery] = useState<QueryInterface>({
    category: 'name',
    keyword: '',
  });
  const { users, getUserData } = useApplyUserModel();
  const [tab, setTab] = useState<number>(1);
  const [filteredUsers, setFilteredUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    const searchedData = searchByQuery();
    if (searchedData[0]) setFilteredUsers(searchedData);
    else setFilteredUsers([]);
  }, [JSON.stringify(users), query, tab]);

  const searchByQuery = () => {
    const { category, keyword } = query;
    const tabYear = tab === 1 ? '2021' : '2022';

    return users.filter((user) => {
      if (keyword !== '') {
        return (
          user.applyDate.includes(tabYear) &&
          JSON.stringify(user[category]).includes(keyword)
        );
      } else {
        return user.applyDate.includes(tabYear);
      }
    });
  };

  return {
    query,
    setQuery,
    tab,
    setTab,
    filteredUsers,
  };
};

export default useSearchUser;
