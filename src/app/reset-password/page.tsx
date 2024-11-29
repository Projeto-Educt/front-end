import ContainerFormResetPassword from '@/components/containers/container-form-reset-password';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content-and-span';
import womanWorking from '@public/images/teen-asian-woman-working-her-laptop.svg';
import Image from 'next/image';

export default function ResetPassword() {
  return (
    <GridTwoLayout
      columnOne={{
        children: (
          <LogoContentAndSpan textSpan="Para recuperar sua senha, você concorda com nossos Termos de Serviço e Política de Privacidade.">
            <ContainerFormResetPassword />
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
