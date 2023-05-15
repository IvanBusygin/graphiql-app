import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase';

function LayoutNotAuth() {
  const [user] = useAuthState(auth);

  return !user ? (
    <div>
      <div className="flex-grow bg-blue-300">
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate
      to="/main"
      replace
    />
  );
}

export default LayoutNotAuth;
