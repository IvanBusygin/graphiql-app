import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase';

function LayoutAuth() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
}

export default LayoutAuth;
