import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const About = React.lazy(() => import('./about/about'));
const Works = React.lazy(() => import('./works/works'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/about'
        element={
          <Suspense fallback={'loading...'}>
            <About />
          </Suspense>
        }
      />
      <Route
        path='/works'
        element={
          <Suspense fallback={'loading...'}>
            <Works />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
