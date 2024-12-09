import Link from 'next/link';
import React from 'react';

export interface ILinkMemo {
  children: React.ReactNode;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
}

function LinkMemo({ children, href, className, target = '_self' }: ILinkMemo) {
  return (
    <Link href={href} target={target} className={`primary-link ${className}`}>
      {children}
    </Link>
  );
}

export default React.memo(LinkMemo);
