import Link from 'next/link';

interface IPrimaryLinkButton {
  children: React.ReactNode;
  className?: string;
  href: string;
  onClick?: () => void;
}

export default function PrimaryLinkButton({
  children,
  className,
  onClick,
  href,
}: IPrimaryLinkButton) {
  return (
    <div
      className={`text-white bg-primary-600 rounded-md h-10 text-center w-full font-bold flex items-center justify-center ${className}`}
    >
      <Link className="w-full" onClick={onClick} href={href}>
        {children}
      </Link>
    </div>
  );
}
