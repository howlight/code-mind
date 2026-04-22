import { Outlet } from 'react-router-dom';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export const AppLayout = () => (
  <>
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </>
);
