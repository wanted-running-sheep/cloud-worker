import useApplyUserModel from '@/api/models/useApplyUserModel';
import React, { useEffect } from 'react';

import SectionHeader from '@/components/SectionHeader';
import Pagination from '@/components/Pagination';
import Loading from '@/components/Loading';

const AdminPage = () => {
  const { users, getUserData } = useApplyUserModel();

  useEffect(() => {
    getUserData();
  }, []);

  if (!users.length) return <Loading />;

  return <Pagination users={users} />;
};

export default AdminPage;
