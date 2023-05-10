import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { ResetPasswordForm } from '../components/Form/ResetPasswordForm';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate('/dashboard');
  }, [user, navigate]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <ResetPasswordForm />
    </div>
  );
}
