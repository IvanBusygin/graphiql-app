import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

function Layout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="h-full bg-blue-300">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
