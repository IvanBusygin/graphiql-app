import { useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import { sendPasswordReset } from '../../firebase';
import { ModalMsg } from '../../UI/ModalMsg';
import { FormInputs } from './interfaces';

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
    <div className="border-1 relative flex w-full max-w-xs flex-col items-center rounded-xl border-gray-100 bg-gray-50 p-8 drop-shadow-lg">
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
        className="flex w-full flex-col"
      >
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
        tabIndex={5}
      >
        Login
      </Link>
    </div>
  );
};
