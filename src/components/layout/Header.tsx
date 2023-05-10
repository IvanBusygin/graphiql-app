import LanguageSwitch from '../LanguageSwitch';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();
  return (
    <div className="bg-emerald-300">
      <p>{t('test on header')}</p>
      <LanguageSwitch />
    </div>
  );
}
