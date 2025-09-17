import './app.scss';

import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useFeatureToggle } from './components/featureToggle';
import { Routes } from './routes';
import { invalidateSession } from './utils/sessionStorage';

const App = () => {
  useEffect(() => {
    // You can use directly the name of your app
  }, []);

  // Initialize Unleash feature toggles
  useFeatureToggle();

  // Clear local storage value if current session is not valid
  invalidateSession();

  useLayoutEffect(() => {
    const el = document.querySelector<HTMLDivElement>('.chr-scope__default-layout');
    if (el) {
      el.style.overflow = 'auto';
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
