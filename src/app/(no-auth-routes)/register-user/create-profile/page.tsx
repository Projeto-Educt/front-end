import ContainerProfilePreferences from '@/components/containers/container-profile-preferences';
import ImageMemo from '@/components/memos/image-memo';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';

export default function CreateProfile() {
  return (
    <div className="layout-grid-two">
      <LogoContentAndSpan>
        <ContainerProfilePreferences />
      </LogoContentAndSpan>

      <ImageMemo
        src={womanWorking}
        alt="Mulher trabalhando no notebook"
        className="min-h-[800px]"
      />
    </div>
  );
}
