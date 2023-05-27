import { useState, ChangeEvent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

enum LanguageCode {
  EN = 'en',
  GE = 'ge',
  RU = 'ru',
}

interface Language {
  name: string;
  code: LanguageCode;
}

export default function LanguageSwitch() {
  const storedLanguage = localStorage.getItem('i18nextLng') as LanguageCode;
  const [language, setLanguage] = useState(storedLanguage || LanguageCode.EN);

  const languages: Language[] = [
    { name: 'English', code: LanguageCode.EN },
    { name: 'ქართული', code: LanguageCode.GE },
    { name: 'Русский', code: LanguageCode.RU },
  ];

  const { i18n } = useTranslation();

  useEffect(() => {
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [storedLanguage, i18n]);

  const handleChangeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as LanguageCode;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <select
      className="cursor-pointer bg-transparent py-2 text-center outline-none hover:bg-blue-100"
      onChange={handleChangeLocale}
      value={language}
    >
      {languages.map(({ name, code }) => (
        <option
          key={code}
          value={code}
          className="bg-transparent bg-white text-black"
        >
          {name}
        </option>
      ))}
    </select>
  );
}
