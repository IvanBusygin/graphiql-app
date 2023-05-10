import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { RegisterForm } from '../components/Form/RegisterForm';

export function RegisterPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <RegisterForm />
    </div>
  );
}
