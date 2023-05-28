import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { PAGE_URL } from '@src/constants';
import Home from '@renderer/containers/Home';

const routesMap = [
  {
    path: PAGE_URL.home,
    component: Home,
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
