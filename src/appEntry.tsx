import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
import './styles/global.css';

import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import { mfeStore } from './store';

const AppEntry = () => {
  return (
    <Provider store={mfeStore as any}>
      <App />
    </Provider>
  );
};

export default AppEntry;
