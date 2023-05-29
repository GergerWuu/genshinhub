import React, { createContext, useContext, useMemo } from 'react';
import { observer } from 'mobx-react-lite';

export const createModuleContext = (createStore) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const store = useMemo(createStore, []);
    return <Context.Provider value={store}>{children}</Context.Provider>;
  };

  return {
    Provider,
    withProvider: (Component) => {
      const ObserverComponent = observer(Component);
      return (props) => {
        return (
          <Provider>
            <ObserverComponent {...props} />
          </Provider>
        );
      };
    },
    useStores: () => {
      return useContext(Context);
    },
  };
};

export const createStoreContext = (Store) => {
  const createStore = () => {
    return new Store();
  };
  return createModuleContext(createStore);
};
