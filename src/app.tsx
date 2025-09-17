import './app.scss';

import React, { useEffect, useLayoutEffect } from 'react';
import { IntlProvider } from 'react-intl';

import intl from './components/i18n/intl';
import { Routes } from './routes';
import { invalidateSession } from './utils/sessionStorage';

const App = () => {
  useEffect(() => {
    // You can use directly the name of your app
  }, []);

  // Clear local storage value if current session is not valid
  invalidateSession();

  useLayoutEffect(() => {
    const el = document.querySelector<HTMLDivElement>('.chr-scope__default-layout');
    if (el) {
      el.style.overflow = 'auto';
    }
  }, []);

  return (
    <IntlProvider locale={intl.locale} defaultLocale={intl.defaultLocale} messages={intl.messages}>
      <div>
        <Routes />
      </div>
    </IntlProvider>
  );
};

export default App;
