import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase';

function LayoutNotAuth() {
  const [user] = useAuthState(auth);

  if (user)
    return (
      <Navigate
        to="/main"
        replace
      />
    );
  return (
    <div className="flex-grow bg-blue-300">
      <Outlet />
    </div>
  );
}

export default LayoutNotAuth;
