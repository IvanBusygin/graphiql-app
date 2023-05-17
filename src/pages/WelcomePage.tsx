import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';

export function WelcomePage() {
  const [user, loading] = useAuthState(auth);
  const { t } = useTranslation();

  return (
    <div className="radial-blue flex h-screen w-full flex-col items-center justify-center">
      <h1 className="m-2 text-center text-3xl font-bold text-green-500 underline">{t('test')}</h1>
      {loading ? (
        <>
          <p>loading...</p>
        </>
      ) : !user ? (
        <>
          <p className="m-2">To use GraphiQL you need to log in.</p>
          <p className="m-2">
            Go to the{' '}
            <Link
              to="/login"
              className="text-blue-700"
            >
              login page
            </Link>
          </p>
        </>
      ) : (
        <>
          <p>Now you can go to the</p>
          <Link
            to="/main"
            className="text-blue-700"
          >
            GraphiQL page
          </Link>
        </>
      )}
    </div>
  );
}
