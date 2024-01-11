import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthGuard = () => {
  const { pathname } = useLocation();

  if (pathname === '/111') {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
};
