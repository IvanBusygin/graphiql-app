import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { ReactComponent as Refresh } from '../../assets/Buttons/Refresh.svg';

function Layout() {
  const [, loading] = useAuthState(auth);

  return (
    <div className="grid h-screen w-screen grid-cols-[1fr] grid-rows-[_50px_1fr_50px] bg-blue-300">
      <Header />

      <>
        {loading ? (
          <div className="flex h-full w-full items-center justify-center">
            <Refresh className="h-10 w-10 animate-spin stroke-white" />
          </div>
        ) : (
          <Outlet />
        )}
      </>

      <Footer />
    </div>
  );
}

export default Layout;
