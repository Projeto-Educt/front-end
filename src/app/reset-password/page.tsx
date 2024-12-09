import ContainerFormResetPassword from '@/components/containers/container-form-reset-password';
import ImageMemo from '@/components/memos/image-memo';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/teen-asian-woman-working-her-laptop.svg';

export default function ResetPassword() {
  return (
    <div className="layout-grid-two">
      <LogoContentAndSpan>
        <ContainerFormResetPassword />
      </LogoContentAndSpan>

      <ImageMemo src={womanWorking} alt="Mulher trabalhando no notebook" />
    </div>
  );
}
