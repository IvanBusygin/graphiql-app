import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import cls from 'clsx';
import { auth } from '../../firebase';
import { SignoutBtn } from '../../UI/SignoutBtn';
import LanguageSwitch from '../LanguageSwitch';

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [user, loading] = useAuthState(auth);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cls(
        'z-40 flex h-14 w-full justify-between max550:h-[100px] max550:flex-col max550:items-center',
        { 'sticky top-0 bg-darkRed p-0 text-white ': isSticky },
        { 'bg-white p-3': !isSticky },
        'transition-all duration-700',
      )}
    >
      <div className="ml-4 flex items-center justify-start gap-4">
        <h1
          className={cls(
            'select-none text-xl font-bold text-blue-900 transition-all duration-700',
            {
              'text-blue-100 ': isSticky,
            },
          )}
        >
          <Link to="/">GraphiQL-APP</Link>{' '}
        </h1>
        <LanguageSwitch />
      </div>
      <div className="flex items-center justify-end gap-4 ">
        {loading ? (
          ''
        ) : user ? (
          <>
            <div
              className={cls(
                'flex items-center justify-end gap-4 leading-3',
                { 'text-white ': isSticky },
                { 'text-black': !isSticky },
              )}
            >
              {user.email}
            </div>
            <SignoutBtn />
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
            >
              {t('header.register')}
            </Link>
            <Link
              to="/login"
              className="hover: flex cursor-pointer p-2 hover:bg-blue-100"
            >
              {t('header.login')}
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
