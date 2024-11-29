import Input from '@/components/forms/fields/input';
import InputPassword from '@/components/forms/fields/input-password';
import PrimaryButton from '../button/primary-button';

export default function LoginForm() {
  return (
    <form className="p-4 max-w-md flex flex-col items-center sm:items-start gap-3">
      <h1 className="text-3xl font-bold text-primary-600">Entre na sua conta</h1>
      <div className="text-center sm:text-start">
        <p className="py-2">Faça login para acessar sua conta e continuar sua jornada conosco</p>
        <span className="py-2">Preencha os campos abaixo:</span>
      </div>
      <Input label="Insira seu e-mail" />
      <InputPassword label="Senha" />
      <PrimaryButton type="submit">Confirmar</PrimaryButton>
    </form>
  );
}
