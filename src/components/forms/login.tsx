import Input from '@/components/forms/fields/input';
import InputPassword from '@/components/forms/fields/input-password';

export default function LoginForm() {
  return (
    <form className="max-w-md flex flex-col items-center sm:items-start gap-3">
      <h1 className="primary-title">Faça o seu Login</h1>
      <div className="text-center sm:text-start">
        <p className="py-2 paragraph-description">
          Faça login para acessar sua conta e continuar sua jornada conosco
        </p>
      </div>
      <Input label="Insira seu e-mail" type="email" />
      <InputPassword label="Senha" />
      <button className="primary-button" type="submit">
        Confirmar
      </button>
    </form>
  );
}
