'use client';

import Input from '@/components/forms/fields/input';
import { useForm } from 'react-hook-form';

interface IPasswordRecoveryForm {
  changeOnSubmit?: () => void;
}

export interface IFormData {
  email: string;
}

export default function PasswordRecoveryForm({ changeOnSubmit }: IPasswordRecoveryForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    mode: 'onChange',
  });

  const onSubmit = () => {
    changeOnSubmit?.();
  };

  return (
    <form
      className="flex flex-col items-center sm:items-start gap-3 max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="primary-title">Recuperação de senha</h1>
      <p className="py-2 paragraph-description">
        Digite o e-mail associado à sua conta enviaremos um link para que você possa redefinir sua
        senha.
      </p>
      <Input
        label="Insira seu e-mail"
        register={register('email', {
          required: 'Por favor, insira um e-mail válido (ex: usuario@dominio.com).',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Por favor, insira um e-mail válido (ex: usuario@dominio.com).',
          },
        })}
        messageError={errors.email?.message}
      />
      <button className="primary-button" type="submit">
        Confirmar
      </button>
    </form>
  );
}
