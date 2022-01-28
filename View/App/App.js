import React from 'react';

import { store } from '../Redux';
import { Provider } from 'react-redux';
import CalcModule from '../components/calc'

const App = () => {
  return (
    <Provider store={store}>
      <CalcModule />
    </Provider>
  );
};

export default App;
