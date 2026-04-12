import { RouterProvider } from 'react-router-dom';

import { AppToaster } from '~/components/app-toaster';

import { router } from './router/router';

export const App = () => (
  <>
    <RouterProvider router={router} />
    <AppToaster />
  </>
);
