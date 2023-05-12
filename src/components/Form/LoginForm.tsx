import { useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { logInWithEmailAndPassword } from '../../firebase';
import { ModalMsg } from '../../UI/ModalMsg';
import { FormInputs } from './interfaces';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [isModal, setIsModal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    try {
      setIsLoading(true);
      await logInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      console.error('error :>> ', err);
      setIsModal(err as string);
    }
    setIsLoading(false);
  };
  return (
    <div className="border-1 relative flex w-full max-w-xs flex-col items-center rounded-xl border-gray-100 bg-gray-50 p-8 drop-shadow-lg">
      {!isModal && <CloseBtn />}
      <ModalMsg
        isOpen={isModal !== ''}
        title="Ошибка авторизации:"
        text={isModal}
        setIsModal={setIsModal}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col"
      >
        <EmailInput
          register={register}
          errors={errors}
        />
        <div className="flex w-full flex-col">
          <PasswordInput
            register={register}
            errors={errors}
            recoverLink
          />
        </div>
        <ActionBtn
          btnText="Log in"
          isLoading={isLoading}
        />
      </form>
      <p className="text-gray-400">Don&apos;t have account?</p>
      <Link
        tabIndex={5}
        to="/register"
        className="text-blue-500 hover:text-blue-700"
      >
        Register now.
      </Link>
    </div>
  );
};
