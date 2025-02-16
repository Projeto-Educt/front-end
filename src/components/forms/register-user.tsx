import Input from '@/components/forms/fields/input';
import { useForm } from 'react-hook-form';
import InputPassword from './fields/input-password';

interface IRegisterUserForm {
  changeOnSubmit?: () => void;
}

interface IFormData {
  completeName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterUserForm({ changeOnSubmit }: IRegisterUserForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    mode: 'onChange',
  });

  const onSubmit = ({ password, confirmPassword }: IFormData) => {
    if (password !== confirmPassword) {
      setError('confirmPassword', { message: 'As senhas não coincidem.' });
      return;
    }

    changeOnSubmit?.();
  };

  return (
    <form
      className="p-4 max-w-lg flex flex-col items-center sm:items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="primary-title">Faça seu Registro</h1>
      <p className="paragraph-description">
        Crie sua conta de forma <strong>100% gratuita</strong> e faça parte de uma comunidade de
        aprendizado mútuo.
      </p>
      <div className="mt-3 flex flex-col gap-3 w-full">
        <Input
          label="Nome Completo"
          register={register('completeName', {
            required: 'Por favor, insira seu nome completo.',
            minLength: { value: 7, message: 'Por favor, insira seu nome completo.' },
            maxLength: { value: 100, message: 'O nome deve ter no máximo 100 caracteres.' },
            pattern: {
              value: /^[a-zA-ZÀ-ÿ\s~-]+$/,
              message: 'O nome deve conter apenas letras, espaços e hifens.',
            },
            validate: value => {
              const valueSplit = value.trim().split(' ');
              if (valueSplit.some(word => !/^[a-zA-ZÀ-ÿ\s-]+$/.test(word)))
                return 'O nome deve conter apenas letras, espaços e hifens.';
              if (valueSplit.some(word => word.length < 3) && valueSplit.length > 1)
                return 'Não use abreviações (Ex: João S. Pedro).';
              if (valueSplit.length < 2) return 'Por favor, insira seu nome completo.';
              return true;
            },
          })}
          messageError={errors.completeName?.message}
        />
        <Input
          label="E-mail"
          type="text"
          register={register('email', {
            required: 'Por favor, insira um e-mail válido (ex: usuario@dominio.com).',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Por favor, insira um e-mail válido (ex: usuario@dominio.com).',
            },
          })}
          messageError={errors.email?.message}
        />
        <InputPassword
          label="Senha + 6 caracteres"
          register={register('password', {
            required: 'Por favor, insira uma senha.',
            validate: value => {
              const valueTrim = value.trim();

              if (!/[A-ZÀ-Ý]/.test(valueTrim))
                return 'A senha deve ter no mínimo 1 letra maiúscula.';
              if (!/[a-zà-ý]/.test(valueTrim))
                return 'A senha deve ter no mínimo 1 letra minúscula.';
              if (!/\d/.test(valueTrim)) return 'A senha deve ter no mínimo 1 número.';
              if (!/[!@#$%^&*(),.?":{}|<>]/.test(valueTrim))
                return 'A senha deve ter no mínimo 1 caractere especial.';
              if (valueTrim.length < 6) return 'A senha deve ter no mínimo 6 caracteres.';
              return true;
            },
          })}
          messageError={errors.password?.message}
        />
        <InputPassword
          label="Repetir senha"
          register={register('confirmPassword', {
            required: 'Por favor, insira uma senha.',
            validate: value => {
              const valueTrim = value.trim();

              if (!/[A-ZÀ-Ý]/.test(valueTrim))
                return 'A senha deve ter no mínimo 1 letra maiúscula.';
              if (!/[a-zà-ý]/.test(valueTrim))
                return 'A senha deve ter no mínimo 1 letra minúscula.';
              if (!/\d/.test(valueTrim)) return 'A senha deve ter no mínimo 1 número.';
              if (!/[!@#$%^&*(),.?":{}|<>]/.test(valueTrim))
                return 'A senha deve ter no mínimo 1 caractere especial.';
              if (valueTrim.length < 6) return 'A senha deve ter no mínimo 6 caracteres.';
              return true;
            },
          })}
          messageError={errors.confirmPassword?.message}
        />
        <button className="primary-button" type="submit">
          Confirmar
        </button>
      </div>
    </form>
  );
}
