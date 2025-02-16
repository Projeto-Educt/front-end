'use client';

import { useForm } from 'react-hook-form';
import InputPassword from './fields/input-password';

interface IResetPasswordForm {
  changeOnSubmit?: () => void;
}

interface IFormData {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordForm({ changeOnSubmit }: IResetPasswordForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    mode: 'onChange',
  });

  const onSubmit = ({ password, confirmPassword }: IFormData) => {
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: 'As senhas não coincidem.' });
      return;
    }

    changeOnSubmit?.();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-md">
      <h1 className="primary-title">Redefinir sua senha</h1>
      <p className="paragraph-description">Insira uma nova senha para acessar sua conta.</p>
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
      <InputPassword
        label="Repetir senha"
        register={register('confirmPassword', {
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
        messageError={errors.confirmPassword?.message}
      />
      <button className="primary-button" type="submit">
        Confirmar
      </button>
    </form>
  );
}
