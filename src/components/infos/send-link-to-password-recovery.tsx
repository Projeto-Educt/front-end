import emailSent from '@public/images/send-email-password-recovery.svg';
import Image from 'next/image';

export default function SendLinkToPasswordRecovery() {
  return (
    <div className="max-w-md">
      <Image className="mx-auto" src={emailSent} alt="Cartão de acesso com uma chave na frente" />
      <h1 className="primary-title">Link para redefinir senha enviado</h1>
      <p className="paragraph-description">
        <span className="font-bold">Confira seu e-mail</span> e use o link que enviamos para
        confirmar sua nova senha.
      </p>
    </div>
  );
}
