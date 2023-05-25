import { useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { logInWithEmailAndPassword } from '../../firebase';
import { FormInputs } from './interfaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    try {
      setIsLoading(true);
      await logInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      toast.error(t(`error.${err as string}`));
      console.error('error :>> ', err);
    }
    setIsLoading(false);
  };
  return (
    <section className="flex w-full items-center justify-center p-8">
      <div className="border-1 relative flex w-full max-w-xs flex-col items-center rounded-xl border-gray-100 bg-gray-50 p-8 drop-shadow-lg">
        <CloseBtn />
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
    </section>
  );
};
