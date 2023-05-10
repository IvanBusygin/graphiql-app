import { useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitch() {
  const storedLanguage = localStorage.getItem('i18nextLng');
  const [language, setLanguage] = useState(storedLanguage || 'en');

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'ქართული', code: 'ge' },
    { name: 'Русский', code: 'ru' },
  ];

  const { i18n } = useTranslation();

  useEffect(() => {
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [storedLanguage, i18n]);

  const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select
      onChange={handleChangeLocale}
      value={language}
    >
      {languages.map(({ name, code }) => (
        <option
          key={code}
          value={code}
        >
          {name}
        </option>
      ))}
    </select>
  );
}
