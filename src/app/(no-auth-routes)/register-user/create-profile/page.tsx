import ContainerProfilePreferences from '@/components/containers/container-profile-preferences';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';
import Image from 'next/image';

export default function CreateProfile() {
  return (
    <GridTwoLayout
      columnOne={{
        className: '!w-[70%]',
        children: (
          <LogoContentAndSpan>
            <ContainerProfilePreferences />
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
