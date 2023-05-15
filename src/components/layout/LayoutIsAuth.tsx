import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase';

function LayoutIsAuth() {
  const [user] = useAuthState(auth);

  return user ? (
    <div>
      <div className="flex-grow bg-blue-300">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate
      to="/"
      replace
    />
  );
}

export default LayoutIsAuth;
