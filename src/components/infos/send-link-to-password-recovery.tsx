import PrimaryTitle from '@/components/titles/primary-title';
import emailSent from '@public/images/send-email-password-recovery.svg';
import Image from 'next/image';

export default function SendLinkToPasswordRecovery() {
  return (
    <div className="max-w-md">
      <Image src={emailSent} alt="Email Enviado" />
      <PrimaryTitle title="Email enviado com sucesso" />
      <p>Confira seu e-mail e use o link que enviamos para confirmar sua nova senha.</p>
    </div>
  );
}
