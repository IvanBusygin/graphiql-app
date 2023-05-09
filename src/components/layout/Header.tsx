import { useEffect } from 'react';
import { auth, logout } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const LogInBtn = () => {
    return (
      <button
        onClick={() => navigate('/login')}
        className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
      >
        Log in
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
          />
        </svg>
      </button>
    );
  };

  const LogOutBtn = () => {
    return (
      <button
        onClick={logout}
        className="hover: flex cursor-pointer p-2 hover:bg-red-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
          onClick={logout}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>
      </button>
    );
  };

  useEffect(() => {
    // if (loading) return;
    if (!user) return navigate('/');
  }, [user, loading, navigate]);

  return (
    <div className="flex h-10 w-full items-center justify-end bg-emerald-300">
      {user ? (
        <>
          <div className="leading-3 text-gray-600">{user?.email}</div>
          <LogOutBtn />
        </>
      ) : (
        <LogInBtn />
      )}
    </div>
  );
}
