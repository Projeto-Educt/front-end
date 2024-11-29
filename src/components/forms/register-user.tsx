import PrimaryButton from '@/components/button/primary-button';
import Input from '@/components/forms/fields/input';
import InputPassword from '@/components/forms/fields/input-password';
import PrimaryTitle from '@/components/titles/primary-title';
import Link from 'next/link';

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
      <PrimaryTitle title="Faça seu Registro" />
      <p className="py-2">
        Crie sua conta de forma <strong>100% gratuita</strong> e faça parte de uma comunidade de
        aprendizado mútuo.
      </p>
      <p className="py-2">Preencha os campos abaixo:</p>
      <div className="mt-3 flex flex-col gap-3 w-full">
        <Input label="Nome Completo" />
        <Input label="E-mail" type="email" />
        <InputPassword label="Senha + 6 caracteres" />
        <InputPassword label="Repetir senha" />
        <PrimaryButton type="submit">Confirmar</PrimaryButton>

        <span className="w-full text-center sm:text-start">
          Ja tem uma conta?{' '}
          <Link className="text-primary-600 underline" href="/login">
            Acessar
          </Link>
        </span>
      </div>
    </form>
  );
}
