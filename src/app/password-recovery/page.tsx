import ContainerFormPasswordRecovery from '@/components/containers/container-form-password-recovery';
import ImageMemo from '@/components/memos/image-memo';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/teen-asian-woman-working-her-laptop.svg';

export default function PasswordRecovery() {
  return (
    <div className="layout-grid-two">
      <LogoContentAndSpan>
        <ContainerFormPasswordRecovery />
      </LogoContentAndSpan>

      <ImageMemo src={womanWorking} alt="Mulher trabalhando no notebook" />
    </div>
  );
}
