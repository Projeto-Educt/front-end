import ContainerFormRegister from '@/components/containers/container-form-register';
import ImageMemo from '@/components/memos/image-memo';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/woman-working-her-laptop-ultrawide.svg';

export default function Register() {
  return (
    <div className="layout-grid-two">
      <LogoContentAndSpan>
        <ContainerFormRegister />
        <p className="paragraph-description text-xs absolute bottom-0 w-[90%]">
          Ao criar sua conta, você concorda com nossos
          <span className="underline mx-1">Termos de Serviço</span>e
          <span className="underline ms-1">Política de Privacidade.</span>
        </p>
      </LogoContentAndSpan>

      <ImageMemo src={womanWorking} alt="Mulher trabalhando no notebook" />
    </div>
  );
}
