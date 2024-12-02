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
    <form
      className="flex flex-col items-center sm:items-start gap-3 max-w-md"
      onSubmit={handleSubmit}
    >
      <h1 className="primary-title">Recuperação de senha</h1>
      <p className="py-2 paragraph-description">
        Digite o e-mail associado à sua conta enviaremos um link para que você possa redefinir sua
        senha.
      </p>
      <Input label="Insira seu e-mail" type="email" />
      <button className="primary-button" type="submit">
        Confirmar
      </button>
    </form>
  );
}
