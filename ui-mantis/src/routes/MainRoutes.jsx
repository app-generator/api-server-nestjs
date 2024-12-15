import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import EditProfile from 'pages/users/EditProfile';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const UserManagement = Loadable(lazy(() => import('pages/users/UserManagement')));

const dummyUsers = [
  { 
    id: 1, 
    firstName: 'John', 
    lastName: 'Doe', 
    bio: 'A passionate software developer.', 
    country: 'USA', 
    address: '123 Main St, Springfield', 
    job: 'Frontend Developer', 
    email: 'alice@example.com' 
  },
  { 
    id: 2, 
    firstName: 'Bob', 
    lastName: 'Smith', 
    bio: 'DevOps specialist with a knack for automation.', 
    country: 'Canada', 
    address: '456 Maple Ave, Toronto', 
    job: 'DevOps Engineer', 
    email: 'bob@example.com' 
  },
  { 
    id: 3, 
    firstName: 'Charlie', 
    lastName: 'Brown', 
    bio: 'Creative designer focused on UX/UI.', 
    country: 'UK', 
    address: '789 High St, London', 
    job: 'UI/UX Designer', 
    email: 'charlie@example.com' 
  },
  { 
    id: 4, 
    firstName: 'Dana', 
    lastName: 'White', 
    bio: 'Experienced backend engineer specializing in Node.js.', 
    country: 'Australia', 
    address: '321 Ocean Dr, Sydney', 
    job: 'Backend Engineer', 
    email: 'dana@example.com' 
  },
  { 
    id: 5, 
    firstName: 'Eve', 
    lastName: 'Adams', 
    bio: 'Product manager with over 10 years of experience.', 
    country: 'Germany', 
    address: '654 Gartenstr, Berlin', 
    job: 'Product Manager', 
    email: 'eve@example.com' 
  }]

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'usermanagement',
      element: <UserManagement />
    },
    {
      path: 'user/edit-profile/:id',
      element: <EditProfile users={dummyUsers} />
    }
  ]
};

export default MainRoutes;
