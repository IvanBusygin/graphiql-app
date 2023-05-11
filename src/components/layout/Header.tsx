import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignoutBtn } from '../../UI/SignoutBtn';
import { Link } from 'react-router-dom';

export function Header() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex h-10 w-full items-center justify-end bg-emerald-300">
      {user ? (
        <>
          <div className="leading-3 text-gray-600">{user.email}</div>
          <SignoutBtn />
        </>
      ) : (
        <>
          <Link
            to="/register"
            className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
          >
            Log In
          </Link>
        </>
      )}
    </div>
  );
}
