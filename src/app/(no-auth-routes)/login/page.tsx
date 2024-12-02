import LoginForm from '@/components/forms/login';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/teen-woman-working-her-laptop.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <GridTwoLayout
      columnOne={{
        className: '!w-[70%]',
        children: (
          <LogoContentAndSpan>
            <div className="max-w-md">
              <LoginForm />
              <Link className="primary-link py-4" href="./password-recovery">
                Esqueci minha senha
              </Link>
              <p className="paragraph-description text-center mt-20">
                Não tem uma conta?{' '}
                <Link className="primary-link inline font-bold" href="./register-user">
                  Crie sua conta grátis
                </Link>
              </p>
            </div>
          </LogoContentAndSpan>
        ),
      }}
      columnTwo={{
        className: 'primary-banner',
        children: (
          <Image className="img-banner" src={womanWorking} alt="Mulher trabalhando no notebook" />
        ),
      }}
    />
  );
}
