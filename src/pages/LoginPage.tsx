import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function LoginPage() {
  const navigate = useNavigate();

  const auth = false;

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [navigate, auth]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-300">LoginPage</div>
  );
}
