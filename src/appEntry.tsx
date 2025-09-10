// Todo: Uncomment for use with non-shared PatternFly packages
// import '@patternfly/patternfly/patternfly.css';
import '@patternfly/patternfly/patternfly-addons.css';
import './styles/global.css';

import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import React from 'react';
import { Provider } from 'react-redux';

import App from './app';
import { mfeStore } from './store';

const AppEntry = () => {
  return (
    <Provider store={mfeStore as any}>
      <NotificationsPortal />
      <App />
    </Provider>
  );
};

export default AppEntry;
