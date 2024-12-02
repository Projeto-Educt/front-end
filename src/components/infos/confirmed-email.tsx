import PrimaryLinkButton from '@/components/button/primary-link-button';
import emailConfirmed from '@public/images/confirmed-email.svg';
import Image from 'next/image';
export default function ConfirmedEmailComponent() {
  return (
    <div className="max-w-md w-full max-h-96 h-full">
      <Image className="mx-auto" src={emailConfirmed} alt="Carta aberta" />
      <h1 className="primary-title mt-10 mb-4">E-mail Confirmado!</h1>
      <p className="mb-4 paragraph-description">
        Seu e-mail foi confirmado com sucesso. Clique em <strong>continuar</strong> para finalizar
        seu cadastro.
      </p>
      <PrimaryLinkButton href="register-user/create-profile">Continuar</PrimaryLinkButton>
    </div>
  );
}
