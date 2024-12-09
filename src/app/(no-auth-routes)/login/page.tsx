import LoginForm from '@/components/forms/login';
import ImageMemo from '@/components/memos/image-memo';
import LinkMemo from '@/components/memos/link-memo';
import ParagraphMemo from '@/components/memos/paragraph-memo';
import LogoContentAndSpan from '@/layout/logo-content';
import womanWorking from '@public/images/teen-woman-working-her-laptop.svg';

export default function Login() {
  return (
    <div className="layout-grid-two">
      <LogoContentAndSpan>
        <LoginForm />
        <LinkMemo href="./password-recovery" className="py-4">
          Esqueci minha senha
        </LinkMemo>
        <ParagraphMemo className="text-center mt-20">
          Não tem uma conta?
          <LinkMemo className="inline font-bold" href="./register-user">
            Crie sua conta grátis
          </LinkMemo>
        </ParagraphMemo>
      </LogoContentAndSpan>

      <ImageMemo src={womanWorking} alt="Mulher trabalhando no notebook" />
    </div>
  );
}
