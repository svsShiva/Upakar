import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Root from './components/root.component';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
