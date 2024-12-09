import ConfirmedEmailComponent from '@/components/infos/confirmed-email';
import ImageMemo from '@/components/memos/image-memo';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';

export default function ConfirmedEmail() {
  return (
    <div className="layout-grid-two">
      <LogoContentAndSpan>
        <ConfirmedEmailComponent />
      </LogoContentAndSpan>

      <ImageMemo src={womanWorking} alt="Mulher trabalhando no notebook" />
    </div>
  );
}
