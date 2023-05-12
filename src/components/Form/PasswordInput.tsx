import { InputProps } from './LoginForm';

const PasswordInput = ({ register, errors }: InputProps) => {
  const validatePassword = (value: string) => {
    if (value.length === 0) {
      return `Password field must not be empty`;
    }
    if (value.length < 8) {
      return `Password must be at least 8 characters long`;
    }
    if (!/[a-zA-Z]/.test(value)) {
      return 'Password must contain at least one letter';
    }
    if (!/\d/.test(value)) {
      return 'Password must contain at least one digit';
    }
    if (!/[!@#$%^&*()]/.test(value)) {
      return 'Password must contain at least one special character';
    }
    return true;
  };

  return (
    <div className="relative mb-2 flex w-full flex-col">
      <input
        id="password"
        type="password"
        tabIndex={2}
        placeholder="Enter your password"
        className=" mb-2 w-full rounded-md p-2 outline outline-1 outline-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
        {...register('password', {
          validate: validatePassword,
        })}
      />
      {errors.password && (
        <>
          <p className="text-center text-red-500 first-line:text-red-500">
            {errors.password.message}
          </p>
        </>
      )}{' '}
    </div>
  );
};

export default PasswordInput;
