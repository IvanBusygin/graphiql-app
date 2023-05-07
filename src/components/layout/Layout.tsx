import { Navigate, Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';

function Layout() {
  // const { auth } = useAuth();
  // const isAuth = !!auth?.access_token;
  const isAuth = true;

  return isAuth ? (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex-grow bg-blue-300">
        <Outlet />
      </div>

      <Footer />
    </div>
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
}

export default Layout;
