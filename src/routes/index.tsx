import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { AdminPage, ApplyPage } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/apply" element={<ApplyPage />}></Route>
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="*" element={<Navigate replace to="/apply" />} />
    </Routes>
  );
};

export default Router;
