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
    <div className="bg-indigo-300 min-h-screen flex justify-center items-center">LoginPage</div>
  );
}
