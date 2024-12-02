import logo from '@public/images/LogotipoPrincipal.svg';
import Image from 'next/image';

export interface ILogoContent {
  children: React.ReactNode;
}

export default function LogoContent({ children }: ILogoContent) {
  return (
    <article className="px-8 pt-32 pb-3 relative flex flex-col justify-center min-h-screen">
      <Image className="absolute top-8" src={logo} alt="Logotipo de Educt" />
      {children}
    </article>
  );
}
