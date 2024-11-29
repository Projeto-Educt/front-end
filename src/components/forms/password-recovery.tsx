import PrimaryButton from '@/components/button/primary-button';
import Input from '@/components/forms/fields/input';
import PrimaryTitle from '@/components/titles/primary-title';

interface IPasswordRecoveryForm {
  changeOnSubmit?: () => void;
}

export default function PasswordRecoveryForm({ changeOnSubmit }: IPasswordRecoveryForm) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeOnSubmit?.();
  };

  return (
    <form className="flex flex-col items-center sm:items-start gap-3" onSubmit={handleSubmit}>
      <PrimaryTitle title="Recuperação de senha" />
      <p className="py-2">
        Digite o e-mail associado à sua conta enviaremos um link para que você possa redefinir sua
        senha.
      </p>
      <span className="py-2">Preencha os campos abaixo:</span>
      <Input label="Insira seu e-mail" type="email" />
      <PrimaryButton type="submit">Confirmar</PrimaryButton>
    </form>
  );
}
