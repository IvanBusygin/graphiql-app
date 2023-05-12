import { InputProps } from './LoginForm';

const EmailInput = ({ register, errors }: InputProps) => {
  const validateEmail = (value: string) => {
    if (value.length === 0) {
      return `Email field must not be empty`;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i.test(value)) {
      return 'Invalid email';
    }
    if (value.length < 6) {
      return `Email can not be so short`;
    }
    return true;
  };
  return (
    <div className="relative mb-2 flex w-full flex-col">
      <input
        title="любой валидный email, можно не существующий"
        id="email"
        type="text"
        tabIndex={1}
        placeholder="Enter your e-mail"
        className="mb-2 w-full rounded-md p-2 outline outline-1 outline-gray-200 hover:before:content-[attr(title)] focus:outline-none focus:ring-2 focus:ring-blue-200"
        {...register('email', {
          validate: validateEmail,
        })}
      />
      {errors.email && <p className="w-full text-center text-red-500">{errors.email.message}</p>}
    </div>
  );
};

export default EmailInput;
