import Input from '@/components/forms/fields/input';
import InputPassword from '@/components/forms/fields/input-password';

interface IRegisterUserForm {
  changeOnSubmit?: () => void;
}

export default function RegisterUserForm({ changeOnSubmit }: IRegisterUserForm) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeOnSubmit?.();
  };

  return (
    <form
      className="p-4 max-w-lg flex flex-col items-center sm:items-start"
      onSubmit={handleSubmit}
    >
      <h1 className="primary-title">Faça seu Registro</h1>
      <p className="paragraph-description">
        Crie sua conta de forma <strong>100% gratuita</strong> e faça parte de uma comunidade de
        aprendizado mútuo.
      </p>
      <div className="mt-3 flex flex-col gap-3 w-full">
        <Input label="Nome Completo" />
        <Input label="E-mail" type="email" />
        <InputPassword label="Senha + 6 caracteres" />
        <InputPassword label="Repetir senha" />
        <button className="primary-button" type="submit">
          Confirmar
        </button>
      </div>
    </form>
  );
}
