import PrimaryLinkButton from '@/components/button/primary-link-button';
import success from '@public/images/sucesso.svg';
import Image from 'next/image';

export default function PasswordReset() {
  return (
    <div className="flex flex-col max-w-md gap-3">
      <Image className="mx-auto" src={success} alt="Senha alterada com sucesso" />
      <h1 className="primary-title">Sua senha foi alterada com sucesso!</h1>
      <p className="paragraph-description">
        Faça o login usando a sua senha nova para poder acessar a plataforma
      </p>
      <PrimaryLinkButton href="/login">Fazer Login</PrimaryLinkButton>
    </div>
  );
}
