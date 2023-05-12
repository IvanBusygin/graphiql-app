import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import { sendPasswordReset } from '../../firebase';
import { ModalMsg } from '../../UI/ModalMsg';

type FormInputs = {
  email: string;
  password: string;
};

export interface InputProps {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
}

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [isError, setIsError] = useState('');
  const [isMsg, setIsMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    try {
      setIsLoading(true);
      await sendPasswordReset(data.email);
      setIsMsg('Password reset link sent!');
    } catch (err) {
      console.error('error :>> ', err);
      setIsError(err as string);
    }
    setIsLoading(false);
  };
  return (
    <div className="relative flex w-full max-w-xs flex-col items-center rounded-md bg-gray-50 p-6 drop-shadow">
      {!isMsg && !isError && <CloseBtn />}
      <ModalMsg
        title="Ошибка"
        isOpen={isError !== ''}
        text={isError}
        setIsModal={setIsError}
      />
      <ModalMsg
        isOpen={isMsg !== ''}
        text={isMsg}
        setIsModal={setIsMsg}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-2 flex w-full flex-col"
      >
        <label
          htmlFor="email"
          className="h-6 "
        >
          Email
        </label>
        <EmailInput
          register={register}
          errors={errors}
        />
        <ActionBtn
          btnText="Send password reset email"
          isLoading={isLoading}
        />
      </form>
      <p className="text-gray-400">Already have an account?</p>
      <Link
        to="/login"
        className="text-blue-500 hover:text-blue-700"
      >
        Login
      </Link>
    </div>
  );
};
