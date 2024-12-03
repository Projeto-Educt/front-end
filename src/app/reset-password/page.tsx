import ContainerFormResetPassword from '@/components/containers/container-form-reset-password';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/teen-asian-woman-working-her-laptop.svg';
import Image from 'next/image';

export default function ResetPassword() {
  return (
    <GridTwoLayout
      columnOne={{
        className: 'sm:!w-[70%]',
        children: (
          <LogoContentAndSpan>
            <ContainerFormResetPassword />
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
