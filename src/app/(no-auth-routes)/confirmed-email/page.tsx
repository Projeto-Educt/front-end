import ConfirmedEmailComponent from '@/components/infos/confirmed-email';
import GridTwoLayout from '@/layout/grid-two';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';
import Image from 'next/image';

export default function ConfirmedEmail() {
  return (
    <GridTwoLayout
      columnOne={{
        className: 'sm:!w-[70%]',
        children: (
          <LogoContentAndSpan>
            <ConfirmedEmailComponent />
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
