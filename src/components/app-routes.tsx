import React, { Suspense } from 'react';
import { createHashRouter } from 'react-router-dom';
import App from '../App';

const About = React.lazy(() => import('./about/about'));
const Works = React.lazy(() => import('./works/works'));

export const routes = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={'loading...'}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/works',
        element: (
          <Suspense fallback={'loading...'}>
            <Works />
          </Suspense>
        )
      }
    ]
  }
]);
