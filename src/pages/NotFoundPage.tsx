import { Link } from 'react-router-dom';
import { ActionBtn } from '../UI/ActionBtn';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="relative h-screen w-screen bg-grayLight">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center text-center text-greenLight">
        <h1 className="text-9xl font-black">404</h1>
        <p className="mb-11 text-4xl">{t('notFound.message')}</p>
        <Link to="/">
          <ActionBtn btnText={t('notFound.button')} />
        </Link>
      </div>
    </div>
  );
}
