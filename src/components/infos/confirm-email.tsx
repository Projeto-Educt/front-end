import confirmEmail from '@public/images/confirmar-e-mail.svg';
import Image from 'next/image';
export default function ConfirmEmail() {
  return (
    <div className="flex flex-col items-center sm:items-start max-h-96 max-w-md">
      <Image className="max-w-48 max-h-48" src={confirmEmail} alt="Caixa de Cartas" />
      <h1 className="my-4 text-3xl font-bold">Confirme seu e-mail</h1>
      <span className="text-center sm:text-start">
        Quase pronto! Acesse seu e-mail e clique no link que enviamos para continuar. Se não
        encontrar nosso e-mail, verifique sua caixa de spam.
      </span>
    </div>
  );
}
