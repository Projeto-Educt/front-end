import LoginForm from '@/components/forms/login';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content-and-span';
import womanWorking from '@public/images/teen-woman-working-her-laptop.svg';
import Image from 'next/image';

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
          </LogoContentAndSpan>
        ),
      }}
      columnTwo={{
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
