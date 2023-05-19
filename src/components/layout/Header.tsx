import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import cls from 'clsx';
import { auth } from '../../firebase';
import { SignoutBtn } from '../../UI/SignoutBtn';
import LanguageSwitch from '../LanguageSwitch';

export function Header() {
  const [user] = useAuthState(auth);
  const [isSticky, setIsSticky] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        'max-h-17 flex w-full justify-between max550:flex-col max550:items-center',
        { 'sticky top-0 bg-darkRed p-1 text-white ': isSticky },
        { 'bg-transparent p-3': !isSticky },
        'transition-all duration-700',
      )}
    >
      <div className="ml-4 flex items-center justify-start gap-4">
        <h1 className="text-xl font-bold text-blue-900">GraphiQL-APP</h1>
        <LanguageSwitch />
      </div>
      <div className="flex items-center justify-end gap-4">
        {user ? (
          <div className="flex items-center justify-end gap-4 text-center">
            <div className="leading-3">{user.email}</div>
            <SignoutBtn />
          </div>
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
