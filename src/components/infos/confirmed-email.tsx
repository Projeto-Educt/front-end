import emailConfirmed from '@public/images/confirmed-email.svg';
import Image from 'next/image';
import PrimaryButton from '../button/primary-button';
export default function ConfirmedEmailComponent() {
  return (
    <div className="max-w-md w-full max-h-96 h-full">
      <Image className="mx-auto sm:m-0" src={emailConfirmed} alt="Carta aberta" />
      <h1 className="text-3xl font-bold mt-10 mb-4 text-center sm:text-start">
        E-mail Confirmado!
      </h1>
      <p className="mb-4 text-center sm:text-start">
        Seu e-mail foi confirmado com sucesso. Clique em <strong>continuar</strong> para finalizar
        seu cadastro.
      </p>
      <PrimaryButton>Continuar</PrimaryButton>
    </div>
  );
}
