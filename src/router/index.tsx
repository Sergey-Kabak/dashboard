import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/layouts/main-layout';
import { CustomersPage, LoginPage, NoPage } from '@/pages/';

import { AuthGuard } from './middleware';
const MainPage = lazy(() => import(/* webpackChunkName: "MainPage" */ '@/pages/main-page'));

export const router = createBrowserRouter([
  {
    element: <AuthGuard />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <MainPage />,
          },
          {
            path: '/customers',
            element: <CustomersPage />,
          },
          {
            path: '*',
            element: <NoPage />,
          },
        ],
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);
