import { EmailInputProps } from './interfaces';

const EmailInput = ({ register, errors }: EmailInputProps) => {
  const validateEmail = (value: string) => {
    if (value.length === 0) {
      return `Please enter your email`;
    }
    if (value.length < 10) {
      return `Email is too short`;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]{2,}\.[A-Z]{2,}$/i.test(value)) {
      return 'Invalid email';
    }
    return true;
  };
  return (
    <div className="relative mb-6 flex w-full flex-col">
      <label
        htmlFor="email"
        className="mb-1"
      >
        Email
      </label>
      <input
        title="Любой валидный email, можно не существующий"
        id="email"
        type="text"
        tabIndex={1}
        placeholder="enter your e-mail"
        className={`w-full rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
          errors.email
            ? 'outline outline-1 outline-red-400 focus:ring-red-400'
            : 'outline outline-1 outline-gray-300 focus:ring-blue-200'
        } hover:before:content-[attr(title)]`}
        {...register('email', {
          validate: validateEmail,
        })}
      />
      <div
        className={`absolute -bottom-6 text-center transition-all duration-300 ${
          errors.email ? 'opacity-1 -translate-y-0' : '-translate-y-1/4 opacity-0 delay-1000'
        }`}
      >
        <p className="text-red-500">{errors.email ? errors.email.message : ''}</p>
      </div>
    </div>
  );
};

export default EmailInput;
