import PrimaryLinkButton from '@/components/button/primary-link-button';
import PrimaryTitle from '@/components/titles/primary-title';
import success from '@public/images/sucesso.svg';
import Image from 'next/image';

export default function PasswordReset() {
  return (
    <div className="flex flex-col max-w-md gap-3">
      <Image src={success} alt="Senha alterada com sucesso" />
      <PrimaryTitle title="Sua senha foi alterada com sucesso!" />
      <p className="py-2">Agora você já pode usar sua nova senha para fazer login na plataforma.</p>
      <PrimaryLinkButton href="/login">Fazer Login</PrimaryLinkButton>
    </div>
  );
}
