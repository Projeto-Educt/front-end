'use client';

import '@/styles/components/forms/fields/input.scss';
import AlertIcon from '@public/icons/Alert.svg';
import Image from 'next/image';
import type { UseFormRegisterReturn } from 'react-hook-form';

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'time';
  label: string;
  id?: string;
  name?: string;
  register?: UseFormRegisterReturn<string>;
  onChange?: () => void;
  messageError?: string;
}

export default function Input({
  type,
  label,
  id,
  messageError,
  register,
  onChange,
  ...props
}: IInput) {
  return (
    <div className="container-input-label min-h-[52px]">
      <input
        className={`input ${messageError && 'input-error'}`}
        required
        type={type || 'text'}
        id={id || label}
        name={id || label}
        role="textbox"
        placeholder="none"
        onChange={() => onChange?.()}
        {...props}
        {...register}
      />
      <label className="label" htmlFor={id || label}>
        {label}
        <span className="span-line"></span>
      </label>
      {messageError && (
        <div className="flex space-x-1 items-center absolute">
          <span>
            <Image src={AlertIcon} alt="Ícone de Alerta" className="w-3" />
          </span>
          <p className="text-[10px] text-red-300">{messageError}</p>
        </div>
      )}
    </div>
  );
}
