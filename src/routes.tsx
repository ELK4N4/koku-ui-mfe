import { Bullseye, Spinner } from '@patternfly/react-core';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';

import { Navigation } from './components/navigation';

const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ 'routes/components/page/notFound'));
const OptimizationsBadgeStaging = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/staging/optimizations/optimizationsBadgeStaging')
);
const OptimizationsBreakdownStaging = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/staging/optimizations/optimizationsBreakdownStaging')
);
const OptimizationsDetailsStaging = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/staging/optimizations/optimizationsDetailsStaging')
);
const OptimizationsLinkStaging = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/staging/optimizations/optimizationsLinkStaging')
);
const OptimizationsSummaryStaging = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/staging/optimizations/optimizationsSummaryStaging')
);
const OptimizationsTableStaging = lazy(
  () => import(/* webpackChunkName: "recommendations" */ 'routes/staging/optimizations/optimizationsTableStaging')
);
const Welcome = lazy(() => import(/* webpackChunkName: "ocpDetails" */ 'routes/components/page/welcome/welcome'));

const routes = {
  ocmOverview: {
    element: Welcome,
    path: '/ocm/overview',
  },
  optimizationsBadge: {
    element: OptimizationsBadgeStaging,
    path: '/ros/optimizations/badge',
  },
  optimizationsBreakdown: {
    element: OptimizationsBreakdownStaging,
    path: '/ros/optimizations/breakdown',
  },
  optimizationsDetails: {
    element: OptimizationsDetailsStaging,
    path: '/ros/optimizations/details',
  },
  optimizationsLink: {
    element: OptimizationsLinkStaging,
    path: '/ros/optimizations/link',
  },
  optimizationsSummary: {
    element: OptimizationsSummaryStaging,
    path: '/ros/optimizations/summary',
  },
  optimizationsTable: {
    element: OptimizationsTableStaging,
    path: '/ros/optimizations/table',
  },
  welcome: {
    element: Welcome,
    path: '/',
  },
};

const Routes = () => (
  <Router>
    <Navigation>
      <Suspense
        fallback={
          <Bullseye>
            <Spinner size="lg" />
          </Bullseye>
        }
      >
        <RouterRoutes>
          {Object.keys(routes).map(key => {
            const route = routes[key];
            return <Route key={route.path} path={route.path} element={<route.element />} />;
          })}
          {/* Finally, catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
    </Navigation>
  </Router>
);

export { routes, Routes };
