import React from 'react';

export const guestRoutes = [
  {
    path: '/home',
    name: 'Home',
    exact: true,
    component: React.lazy(() => import('../../views/user/Home/Home')),
  },
  {
    redirectRoute: true,
    name: 'Home',
    path: '/home',
    // rootRedirect: true,
  },
];

export const userRoutes = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   exact: true,
  //   component: React.lazy(() => import('../../views/user/Home/Home')),
  // },
  // {
  //   redirectRoute: true,
  //   name: 'Home',
  //   path: '/home',
  //   // rootRedirect: true,
  // },
];
