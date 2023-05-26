import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Beaker } from '../assets/Buttons/Beaker.svg';
import { ReactComponent as Key } from '../assets/Buttons/Key.svg';

export function WelcomePage() {
  const [user, loading] = useAuthState(auth);
  const { t } = useTranslation();

  const btnStyles =
    'm-2 flex h-20 w-44 items-center justify-center rounded-lg bg-[#2A9E76] hover:bg-[#2BAB7C]';

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-grayLight">
      <h1 className="m-2 text-center text-3xl font-bold text-[#2A9E76] underline">
        {t('welcome')}
      </h1>
      {loading ? (
        <>
          <p>loading...</p>
        </>
      ) : !user ? (
        <p className="flex flex-col items-center justify-center text-white">
          <p className="m-2">To use GraphiQL you need to log in.</p>
          <Link
            className={btnStyles}
            to="/login"
            title="Go to the login page"
          >
            <Key />
            <p className="ml-2 ">Enter login</p>
          </Link>
        </p>
      ) : (
        <p className="flex flex-col items-center justify-center text-white">
          <p className="m-2">Now you can go to the Editor</p>
          <Link
            className={btnStyles}
            to="/main"
            title="To GraphiQL API Editor"
          >
            <Beaker />
            <p className="ml-2 ">GraphiQL Editor</p>
          </Link>
        </p>
      )}
    </div>
  );
}
