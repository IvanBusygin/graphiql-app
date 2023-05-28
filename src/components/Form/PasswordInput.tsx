import { Link } from 'react-router-dom';
import { PasswordInputProps } from './interfaces';
import { useTranslation } from 'react-i18next';

const PasswordInput = ({ register, errors, recoverLink = false }: PasswordInputProps) => {
  const { t } = useTranslation();
  const validatePassword = (value: string) => {
    if (value.length === 0) {
      return t(`password.empty`);
    }
    if (value.length < 8) {
      return t(`password.short`);
    }
    if (!recoverLink) {
      if (!/[a-zA-Z]/.test(value)) {
        return t(`password.letter`);
      }
      if (!/\d/.test(value)) {
        return t(`password.digit`);
      }
      if (!/[!@#$%^&*()]/.test(value)) {
        return t(`password.special`);
      }
    } else return true;
  };

  return (
    <div className="relative mb-6 flex w-full flex-col">
      <div className="flex place-content-between">
        <label
          htmlFor="password"
          className="mb-1"
        >
          {t(`password.label`)}
        </label>
        {recoverLink && (
          <Link
            to="/reset"
            className="justify-self-center text-greenLight hover:text-greenDark"
            tabIndex={4}
          >
            {t(`password.forgot`)}
          </Link>
        )}
      </div>
      <input
        id="password"
        type="password"
        tabIndex={2}
        placeholder={t(`password.placeholder`) || ''}
        className={`w-full rounded-md bg-grayLight p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
          errors.password
            ? 'outline outline-1 outline-red-400 focus:ring-red-400'
            : 'outline outline-1 outline-grayLight focus:ring-greenDark'
        } hover:before:content-[attr(title)] focus:outline-none focus:ring-2`}
        {...register('password', {
          validate: validatePassword,
        })}
      />
      <div
        className={`absolute -bottom-5 text-center transition-all duration-300 ${
          errors.password ? 'opacity-1 -translate-y-0' : '-translate-y-1/4 opacity-0 delay-1000'
        }`}
      >
        <p className="text-sm text-red-500">{errors.password ? errors.password.message : ''}</p>
      </div>
    </div>
  );
};

export default PasswordInput;
