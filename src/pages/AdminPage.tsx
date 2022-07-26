import useApplyUserModel from '@/api/models/useApplyUserModel';
import React, { useEffect } from 'react';

import SectionHeader from '@/components/SectionHeader';
import Table from '@/components/Table';
import { LeftDirection } from '@/assets/icons';

const AdminPage = () => {
  const { users, getUserData } = useApplyUserModel();

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <SectionHeader data={users} />
      <header>header</header>
      <Table users={users} />
    </>
  );
};

export default AdminPage;
