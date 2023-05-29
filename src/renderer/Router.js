import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PAGE_URL } from '@constants';
import Home from '@renderer/containers/Home';
import Login from '@renderer/containers/Login';
import Roles from '@renderer/containers/Roles';

const routesMap = [
  {
    path: PAGE_URL.home,
    component: Home,
  },
  {
    path: PAGE_URL.login,
    component: Login,
  },
  {
    path: PAGE_URL.roles,
    component: Roles,
  },
];

const Router = () => {
  return (
    <Routes>
      {routesMap.map(({ path, component: Component }) => {
        return <Route path={path} element={<Component />} key={path} />;
      })}
    </Routes>
  );
};

export default Router;
