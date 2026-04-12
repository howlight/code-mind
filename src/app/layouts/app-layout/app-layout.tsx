import { Outlet } from 'react-router-dom';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export const AppLayout = () => (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
