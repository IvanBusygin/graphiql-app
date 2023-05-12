import { useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { registerWithEmailAndPassword } from '../../firebase';
import { ModalMsg } from '../../UI/ModalMsg';
import { FormInputs } from './interfaces';

export const RegisterForm = () => {
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
      await registerWithEmailAndPassword(data.email, data.password);
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
        title="Ошибка регистрации:"
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
        <PasswordInput
          register={register}
          errors={errors}
        />
        <ActionBtn
          btnText="Create account"
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
