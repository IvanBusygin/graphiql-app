import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../firebase';
import { ActionBtn } from '../UI/ActionBtn';
import { CloseBtn } from '../UI/CloseBtn';

export function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [user] = useAuthState(auth);
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    await registerWithEmailAndPassword(email, password);
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="relative flex w-full max-w-xs flex-col items-center rounded-md bg-gray-50 px-8 pb-8 pt-6 drop-shadow">
        <CloseBtn />
        <div className="mb-2 flex w-full flex-col">
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
        <div className="mb-2 flex w-full flex-col">
          <div className="flex place-content-between">
            <label
              htmlFor="password"
              className="h-8"
            >
              Password
            </label>
          </div>
          <input
            id="password"
            type="password"
            className="mb-4 h-10 w-full rounded-md p-2 outline outline-1 outline-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <ActionBtn
          title="Create account"
          isLoading={isLoading}
          func={handleClick}
        />
        <p className="text-gray-400">Already have an account?</p>
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-700"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
