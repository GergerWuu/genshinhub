import React from 'react';

import { useMainStore } from '@renderer/context/MainStoreContext';

const Home = () => {
  const { cookie } = useMainStore();
  return <section>{cookie}</section>;
};

export default Home;
