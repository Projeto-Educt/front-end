'use client';

import InputPassword from './fields/input-password';

interface IResetPasswordForm {
  changeOnSubmit?: () => void;
}

export default function ResetPasswordForm({ changeOnSubmit }: IResetPasswordForm) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeOnSubmit?.();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <h1 className="primary-title">Redefinir sua senha</h1>
      <p className="paragraph-description">Insira uma nova senha para acessar sua conta.</p>
      <InputPassword label="senha" />
      <InputPassword label="Repetir senha" />
      <button className="primary-button" type="submit">
        Confirmar
      </button>
    </form>
  );
}
