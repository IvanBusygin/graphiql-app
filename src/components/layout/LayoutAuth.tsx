import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase';

function LayoutAuth() {
  const [user] = useAuthState(auth);

  if (!user)
    return (
      <Navigate
        to="/"
        replace
      />
    );

  return (
    <div className="flex-grow bg-blue-300">
      <Outlet />
    </div>
  );
}

export default LayoutAuth;
