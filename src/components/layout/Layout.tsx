import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';
import { Footer } from './Footer.tsx';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { ReactComponent as Refresh } from '../../assets/Buttons/Refresh.svg';
import { useEffect } from 'react';

function Layout() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');
    const currentTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    console.group('Time: ', currentTime);
    console.log('User: ', user?.email);
    console.groupEnd();
  }, [user]);

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
