'use client';

import padlock from '@public/images/padlock.svg';
import Image from 'next/image';
import PrimaryButton from '../button/primary-button';
import PrimaryTitle from '../titles/primary-title';
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
      <Image src={padlock} alt="Cadeado" />
      <PrimaryTitle title="Redefinir senha" />
      <p className="py-2">
        Insira uma nova senha para acessar sua conta. Lembre-se de escolher uma senha segura e fácil
        de lembrar.
      </p>
      <span className="py-2">Preencha os campos abaixo:</span>
      <InputPassword label="senha" />
      <InputPassword label="Repetir senha" />
      <PrimaryButton type="submit">Confirmar</PrimaryButton>
    </form>
  );
}
