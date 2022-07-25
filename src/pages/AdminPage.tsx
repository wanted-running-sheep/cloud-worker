import useApplyUserModel from '@/api/models/useApplyUserModel';
import React, { useEffect } from 'react';

import SectionHeader from '@/components/SectionHeader';

const AdminPage = () => {
  const { users, getUserData } = useApplyUserModel();

  useEffect(() => {
    getUserData();
  }, []);

  console.log(users);
  return <div>AdminPage</div>;
};

export default AdminPage;
