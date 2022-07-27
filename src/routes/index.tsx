import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MobileLayout from '@/components/MobileLayout';
import AdminLayout from '@/components/AdminLayout';

import { AdminPage, ApplyPage, AdminLoginPage } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route element={<MobileLayout />}>
        <Route path="/apply" element={<ApplyPage />}></Route>
      </Route>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Route>
      <Route path="/login" element={<AdminLoginPage />}></Route>
      <Route path="*" element={<Navigate replace to="/apply" />} />
    </Routes>
  );
};

export default Router;
