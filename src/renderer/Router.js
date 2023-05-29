import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { PAGE_URL } from '@constants';
import Home from '@renderer/containers/Home';
import Login from '@renderer/containers/Login';

const routesMap = [
  {
    path: PAGE_URL.home,
    component: Home,
  },
  {
    path: PAGE_URL.login,
    component: Login,
  },
];

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        {routesMap.map(({ path, component: Component }) => {
          return <Route path={path} element={<Component />} key={path} />;
        })}
      </Routes>
    </HashRouter>
  );
};

export default Router;
