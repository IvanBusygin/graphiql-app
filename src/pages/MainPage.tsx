import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { auth } from '../firebase';
import GraphiqlEditor from '../components/Editor/GraphqlEditor';

export const MainPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <GraphiqlEditor />
    </>
  );
};
