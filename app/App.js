import React from 'react';

import { store } from '../app/modules/redux/index';
import { Provider } from 'react-redux';
import CalcModule from '../app/view/calculate/calc'

const App = () => {
  return (
    <Provider store={store}>
      <CalcModule />
    </Provider>
  );
};

export default App;
