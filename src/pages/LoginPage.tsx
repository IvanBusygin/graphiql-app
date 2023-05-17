import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LoginForm } from '../components/Form/LoginForm';

export function LoginPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoginForm />
    </div>
  );
}
