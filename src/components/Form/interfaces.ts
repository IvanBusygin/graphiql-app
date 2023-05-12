import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type FormInputs = {
  email: string;
  password: string;
};
export interface EmailInputProps {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
}

export interface PasswordInputProps extends EmailInputProps {
  recoverLink?: boolean;
}
