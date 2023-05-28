import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FadeLoader } from 'react-spinners';

import { auth } from '../../firebase';

function LayoutAuth() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <FadeLoader
        color="#36d7b7"
        loading
        cssOverride={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    );
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
