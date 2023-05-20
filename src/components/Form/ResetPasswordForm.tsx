import { useForm } from 'react-hook-form';
import { ActionBtn } from '../../UI/ActionBtn';
import { useState } from 'react';
import { CloseBtn } from '../../UI/CloseBtn';
import { Link } from 'react-router-dom';
import EmailInput from './EmailInput';
import { sendPasswordReset } from '../../firebase';
import { FormInputs } from './interfaces';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    try {
      setIsLoading(true);
      await sendPasswordReset(data.email);
      toast.success('Password reset link sent!');
    } catch (err) {
      console.error('error :>> ', err);
      toast.error(err as string);
    }
    setIsLoading(false);
  };
  return (
    <section className="flex w-full items-center justify-center">
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          <ActionBtn
            btnText="Send reset link"
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
    </section>
  );
};
