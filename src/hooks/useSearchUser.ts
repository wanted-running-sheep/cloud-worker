import React, { useEffect, useState } from 'react';
import { UserInterface } from 'request';
import { QueryInterface } from 'search';
import MESSAGES from '@/constants/error';
import useApplyUserModel from '@/api/models/useApplyUserModel';

const useSearchUser = () => {
  const [query, setQuery] = useState<QueryInterface>({
    category: 'name',
    keyword: '초기값',
  });
  const { users, getUserData } = useApplyUserModel(); // 전체 데이터
  const [filteredUsers, setFilteredUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [JSON.stringify(users)]);

  useEffect(() => {
    const searchedData = searchByQuery();
    if (searchedData) setFilteredUsers(searchedData);
    else alert(MESSAGES.SEARCH.EMPTY);
  }, [query]);

  const searchByQuery = () => {
    const { category, keyword } = query;
    if (keyword === '') return users;

    return users.filter((user) =>
      JSON.stringify(user[category]).includes(keyword)
    );
  };

  return {
    query,
    setQuery,
    filteredUsers,
  };
};

export default useSearchUser;
