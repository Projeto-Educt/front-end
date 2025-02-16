'use client';

import closedEye from '@public/icons/closed-eye.svg';
import openEye from '@public/icons/open-eye.svg';
import Image from 'next/image';
import { useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import Input from './input';

export interface IInputPassword {
  type?: 'text' | 'password';
  label: string;
  id?: string;
  register?: UseFormRegisterReturn<string>;
  messageError?: string;
}

export default function InputPassword({ register, ...props }: IInputPassword) {
  const [typeInput, setTypeInput] = useState<'text' | 'password'>('password');
  return (
    <div className="relative w-full">
      <Input type={typeInput} register={register} {...props} />
      <i className="inline-block p-2 cursor-pointer absolute top-[1px] right-1 bg-white z-10">
        {typeInput === 'password' && (
          <Image src={openEye} alt="Olho Aberto" onClick={() => setTypeInput('text')} />
        )}
        {typeInput === 'text' && (
          <Image src={closedEye} alt="Olho Fechado" onClick={() => setTypeInput('password')} />
        )}
      </i>
    </div>
  );
}
