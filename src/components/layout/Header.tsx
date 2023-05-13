import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SignoutBtn } from '../../UI/SignoutBtn';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../LanguageSwitch';
import { useTranslation } from 'react-i18next';

export function Header() {
  const [user] = useAuthState(auth);
  const { t } = useTranslation();

  return (
    <header className="z-10 grid h-[] w-full  grid-cols-2 bg-emerald-300">
      <div className="ml-4 flex items-center justify-start gap-4">
        <LanguageSwitch />
        <Link
          to="/"
          className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
        >
          {t('test on header')}{' '}
        </Link>
      </div>
      <div className="flex items-center justify-end gap-4">
        {user ? (
          <>
            <div className="leading-3 text-gray-600">{user.email}</div>
            <SignoutBtn />
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
            >
              {t('register')}
            </Link>
            <Link
              to="/login"
              className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
            >
              {t('login')}
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
