import { ResetPasswordForm } from '../components/Form/ResetPasswordForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from '../firebase';

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      navigate('/graphiql');
    }
  }, [user, navigate]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ResetPasswordForm />
    </div>
  );
}
