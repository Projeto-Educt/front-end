'use client';

import { MessageError } from '@/components/infos/message-error';
import '@/styles/components/forms/fields/input.scss';
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
      {messageError && <MessageError messageError={messageError} />}
    </div>
  );
}
