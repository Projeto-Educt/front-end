import ContainerFormRegister from '@/components/containers/container-form-register';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';
import Image from 'next/image';

export default function Register() {
  return (
    <GridTwoLayout
      columnOne={{
        className: '!w-[70%]',
        children: (
          <LogoContentAndSpan>
            <ContainerFormRegister />
            <p className="paragraph-description text-xs absolute bottom-0">
              Ao criar sua conta, você concorda com nossos
              <span className="underline mx-1">Termos de Serviço</span>e
              <span className="underline ms-1">Política de Privacidade.</span>
            </p>
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
