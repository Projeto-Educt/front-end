import logo from '@public/images/LogotipoPrincipal.svg';
import Image from 'next/image';

export interface ILogoContentAndSpan {
  children: React.ReactNode;
  textSpan: string;
}

export default function LogoContentAndSpan({ children, textSpan }: ILogoContentAndSpan) {
  return (
    <article className="px-8 pt-8 pb-3 flex flex-col justify-between items-center sm:items-start min-h-screen">
      <Image className="w-40 h-16 logotipo-principal" src={logo} alt="Logotipo de Educt" />
      {children}
      <span className="text-[12px] text-gray-500 text-center sm:text-start">{textSpan}</span>
    </article>
  );
}
