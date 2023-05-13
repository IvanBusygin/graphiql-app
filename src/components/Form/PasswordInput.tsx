import { Link } from 'react-router-dom';
import { PasswordInputProps } from './interfaces';

const PasswordInput = ({ register, errors, recoverLink = false }: PasswordInputProps) => {
  const validatePassword = (value: string) => {
    if (value.length === 0) {
      return `Please enter your password`;
    }
    if (value.length < 8) {
      return `Password is too short`;
    }
    if (!recoverLink) {
      if (!/[a-zA-Z]/.test(value)) {
        return 'Add at least one letter';
      }
      if (!/\d/.test(value)) {
        return 'Add at least one digit';
      }
      if (!/[!@#$%^&*()]/.test(value)) {
        return 'Add at least one special character';
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
          Password
        </label>
        {recoverLink && (
          <Link
            to="/reset"
            className="justify-self-center text-blue-500 hover:text-blue-700"
            tabIndex={4}
          >
            Forgot?
          </Link>
        )}
      </div>
      <input
        id="password"
        type="password"
        tabIndex={2}
        placeholder="enter your password"
        className={`w-full rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
          errors.password
            ? 'outline outline-1 outline-red-400 focus:ring-red-400'
            : 'outline outline-1 outline-gray-300 focus:ring-blue-200'
        } hover:before:content-[attr(title)] focus:outline-none focus:ring-2`}
        {...register('password', {
          validate: validatePassword,
        })}
      />
      <div
        className={`absolute -bottom-6 text-center transition-all duration-300 ${
          errors.password ? 'opacity-1 -translate-y-0' : '-translate-y-1/4 opacity-0 delay-1000'
        }`}
      >
        <p className="text-red-500">{errors.password ? errors.password.message : ''}</p>
      </div>
    </div>
  );
};

export default PasswordInput;
