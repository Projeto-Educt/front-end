'use client';

import Input from '@/components/forms/fields/input';
import InputPassword from '@/components/forms/fields/input-password';
import { useForm } from 'react-hook-form';

export interface IFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    mode: 'onChange',
  });

  const onSubmit = () => {};

  return (
    <form
      className="max-w-md flex flex-col items-center sm:items-start gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="primary-title">Faça o seu Login</h1>
      <div className="text-center sm:text-start">
        <p className="py-2 paragraph-description">
          Faça login para acessar sua conta e continuar sua jornada conosco
        </p>
      </div>
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
      <InputPassword
        label="Senha"
        register={register('password', {
          required: 'Por favor, insira uma senha.',
          validate: value => {
            const valueTrim = value.trim();

            if (!/[A-ZÀ-Ý]/.test(valueTrim)) return 'A senha deve ter no mínimo 1 letra maiúscula.';
            if (!/[a-zà-ý]/.test(valueTrim)) return 'A senha deve ter no mínimo 1 letra minúscula.';
            if (!/\d/.test(valueTrim)) return 'A senha deve ter no mínimo 1 número.';
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(valueTrim))
              return 'A senha deve ter no mínimo 1 caractere especial.';
            if (valueTrim.length < 6) return 'A senha deve ter no mínimo 6 caracteres.';
            return true;
          },
        })}
        messageError={errors.password?.message}
      />
      <button className="primary-button" type="submit">
        Confirmar
      </button>
    </form>
  );
}
