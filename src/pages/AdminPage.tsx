import useApplyUserModel from '@/api/models/useApplyUserModel';
import React, { useEffect } from 'react';

const AdminPage = () => {
  const { users, getUserData } = useApplyUserModel();

  useEffect(() => {
    getUserData();
  }, []);

  console.log(users);
  return <div>AdminPage</div>;
};

export default AdminPage;
