import React from 'react';
import { store } from '../app/modules/redux/index';
import { Provider } from 'react-redux';
import { Navigator } from './modules/navigation/navigaton';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
