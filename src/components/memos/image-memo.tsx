import Image from 'next/image';
import React from 'react';

export interface IImageMemo {
  src: string;
  alt: string;
  className?: string;
}

function ImageMemo({ src, alt, className }: IImageMemo) {
  return (
    <div className="primary-banner">
      <Image className={`img-banner ${className}`} src={src} alt={alt} priority={false} />
    </div>
  );
}

export default React.memo(ImageMemo);
