import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../firebase';
import { ActionBtn } from '../UI/ActionBtn';
import { CloseBtn } from '../UI/CloseBtn';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [user] = useAuthState(auth);

  const handleClick = async () => {
    setIsLoading(true);
    await sendPasswordReset(email);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="flex w-full max-w-xs flex-col items-center rounded-md bg-gray-50 px-8 pb-8 pt-6 drop-shadow ">
        <CloseBtn />
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
        <ActionBtn
          title="Send password reset email"
          isLoading={isLoading}
          func={handleClick}
        />
        <p className="text-gray-400">Don&#39;t have an account? </p>
        <Link
          to="/register"
          className="text-blue-500 hover:text-blue-700"
        >
          Register now.
        </Link>
      </div>
    </div>
  );
}
