import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import ProfilePage from './pages/ProfilePage';

import InsuranceModule from './pages/InsuranceModule';
import ClaimModule from './pages/ClaimModule';
import LoginPage from './pages/LoginPage';
import InsuranceList from './pages/InsuranceList';
import ClaimList from './pages/ClaimList';
import Page404 from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to = '/login' />
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/home',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="Insurance" />, index: true },
        { path: '/home/Insurance', element: <InsuranceModule /> },
        { path: '/home/Claim', element: <ClaimModule /> },
        { path: '/home/profile', element: <ProfilePage /> },
        { path: '/home/InsuranceList', element: <InsuranceList /> },
        { path: '/home/ClaimList', element: <ClaimList /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
    { path: '404', element: <Page404 /> }
  ]);
  

  return routes;
}
