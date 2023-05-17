import { Outlet } from 'react-router-dom';

import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

function LayoutMain() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex-grow bg-blue-300">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default LayoutMain;
