import Link from 'next/link';

export interface IPrimaryLinkButton {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  onClick?: () => void;
}

export default function PrimaryLinkButton({
  children,
  className,
  onClick,
  href,
  target = '_self',
}: IPrimaryLinkButton) {
  return (
    <div
      className={`text-white bg-primary-600 rounded-md h-10 text-center w-full font-bold flex items-center justify-center ${className}`}
    >
      <Link className="w-full" onClick={onClick} href={href} target={target}>
        {children}
      </Link>
    </div>
  );
}
