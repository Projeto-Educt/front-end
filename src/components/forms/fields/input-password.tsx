'use client';

import closedEye from '@public/icons/closed-eye.svg';
import openEye from '@public/icons/open-eye.svg';
import Image from 'next/image';
import { useState } from 'react';
import Input from './input';

export interface IInputPassword {
  type?: 'text' | 'password';
  label: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPassword(props: IInputPassword) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <Input type={showPassword ? 'text' : 'password'} {...props} />
      <i className="inline-block p-2 cursor-pointer absolute top-[1px] right-1 bg-white z-10">
        {showPassword && (
          <Image src={openEye} alt="Olho Aberto" onClick={() => setShowPassword(false)} />
        )}
        {!showPassword && (
          <Image src={closedEye} alt="Olho Fechado" onClick={() => setShowPassword(true)} />
        )}
      </i>
    </div>
  );
}
