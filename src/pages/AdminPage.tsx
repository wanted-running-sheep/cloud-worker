import useApplyUserModel from '@/api/models/useApplyUserModel';
import React, { useEffect } from 'react';

import SectionHeader from '@/components/SectionHeader';
import Pagination from '@/components/UserList/Pangination';
import Loading from '@/components/Loading';
import Table from '@/components/UserList/Table';
import UserList from '@/components/UserList/UserList';

const AdminPage = () => {
  const { users, getUserData } = useApplyUserModel();

  useEffect(() => {
    getUserData();
  }, []);

  if (!users.length) return <Loading />;

  return <UserList users={users} />;
};

export default AdminPage;
