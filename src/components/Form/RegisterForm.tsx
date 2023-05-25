import { useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import { registerWithEmailAndPassword } from '../../firebase';
import { FormInputs } from './interfaces';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

export const RegisterForm = () => {
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
      await registerWithEmailAndPassword(data.email, data.password);
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
          <PasswordInput
            register={register}
            errors={errors}
          />
          <ActionBtn
            btnText={t('registerPage.register')}
            isLoading={isLoading}
          />
        </form>
        <p className="text-gray-400">{t('registerPage.haveAccount')}</p>
        <Link
          to="/login"
          className="text-blue-500 hover:text-blue-700"
          tabIndex={5}
        >
          {t('registerPage.login')}
        </Link>
      </div>
    </section>
  );
};
