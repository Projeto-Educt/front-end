import PrimaryButton from '@/components/button/primary-button';
import Input from '@/components/forms/fields/input';

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
      <h1 className="text-3xl font-bold text-primary-600">Recuperação de senha</h1>
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
