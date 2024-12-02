import ContainerFormPasswordRecovery from '@/components/containers/container-form-password-recovery';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/teen-asian-woman-working-her-laptop.svg';
import Image from 'next/image';

export default function PasswordRecovery() {
  return (
    <GridTwoLayout
      columnOne={{
        className: '!w-[70%]',
        children: (
          <LogoContentAndSpan>
            <ContainerFormPasswordRecovery />
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
