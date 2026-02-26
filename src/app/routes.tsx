import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/LoginPage';
import { AdminOrgPage } from './pages/admin/AdminOrgPage';
import { AdminMembersPage } from './pages/admin/AdminMembersPage';
import { AddressBookPage } from './pages/user/AddressBookPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <AppLayout />,
    children: [
      {
        path: 'org',
        element: <AdminOrgPage />,
      },
      {
        path: 'members',
        element: <AdminMembersPage />,
      },
      {
        index: true,
        element: <Navigate to="members" replace />,
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: 'address-book',
        element: <AddressBookPage />,
      },
      {
        path: 'profile',
        element: <div className="p-8 text-center text-gray-500">Profile Settings (Coming Soon)</div>,
      },
      {
        index: true,
        element: <Navigate to="address-book" replace />,
      },
    ],
  },
  {
    path: '*',
    element: <div className="h-screen flex items-center justify-center text-gray-400">404 Not Found</div>,
  }
]);
