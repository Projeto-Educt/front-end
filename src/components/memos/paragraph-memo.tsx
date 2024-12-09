import React from 'react';

export interface IParagraphMemo {
  children: React.ReactNode;
  className?: string;
}

function ParagraphMemo({ children, className }: IParagraphMemo) {
  return <p className={`paragraph-description ${className}`}>{children}</p>;
}

export default React.memo(ParagraphMemo);
