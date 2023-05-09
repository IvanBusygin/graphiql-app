import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../firebase';

export function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/dashboard');
  }, [user, loading, navigate]);
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center rounded-md bg-gray-50 px-8 pb-8 pt-6 drop-shadow ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute -right-4 -top-4 h-8 w-8 fill-blue-500 hover:fill-red-500"
          onClick={() => navigate('/')}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clipRule="evenodd"
          />
        </svg>
        <div className="mb-4 flex w-full flex-col">
          <label
            htmlFor="email"
            className="h-8"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="mb-2h-10 w-full rounded-md p-2 outline outline-1 outline-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail"
          />
        </div>
        <button
          className="group relative mb-4 flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <p className="text-gray-400">Don&#39;t have an account? </p>
        <Link
          to="/register"
          className="text-blue-700"
        >
          Register now.
        </Link>
      </div>
    </div>
  );
}
