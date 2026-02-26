import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { AppLayout } from './components/layout/AppLayout';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminMembersPage } from './pages/admin/AdminMembersPage';
import { AdminOrgPage } from './pages/admin/AdminOrgPage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { UserDashboard } from './pages/user/UserDashboard';
import { AddressBookPage } from './pages/user/AddressBookPage';
import { UserProfilePage } from './pages/user/UserProfilePage';

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
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'members',
        element: <AdminMembersPage />,
      },
      {
        path: 'organization',
        element: <AdminOrgPage />,
      },
      {
        path: 'settings',
        element: <AdminSettingsPage />,
      },
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: <UserDashboard />,
      },
      {
        path: 'address-book',
        element: <AddressBookPage />,
      },
      {
        path: 'profile',
        element: <UserProfilePage />,
      },
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          404
        </div>
        <div className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</div>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/login"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          Go Home
        </a>
      </div>
    ),
  },
]);
