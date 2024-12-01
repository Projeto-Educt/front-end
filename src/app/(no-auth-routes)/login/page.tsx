import LoginForm from '@/components/forms/login';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content-and-span';
import womanWorking from '@public/images/teen-woman-working-her-laptop.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <GridTwoLayout
      columnOne={{
        children: (
          <LogoContentAndSpan
            textSpan="Ao fazer login em sua conta, você concorda com nossos termos de Serviço 
e política de privacidade."
          >
            <LoginForm />
            <Link className="text-primary-600" href="./password-recovery">
              Esqueci minha senha
            </Link>
          </LogoContentAndSpan>
        ),
      }}
      columnTwo={{
        className: 'hidden sm:block',
        children: (
          <Image
            className="w-full h-screen object-cover p-2 rounded-3xl"
            src={womanWorking}
            alt="Mulher trabalhando no notebook"
          />
        ),
      }}
    />
  );
}
