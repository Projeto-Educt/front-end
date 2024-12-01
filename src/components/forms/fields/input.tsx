'use client';

import '@/styles/components/forms/fields/input.scss';
import { useState } from 'react';

export interface IInput {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'time';
  label: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, label, id, name, value, onChange }: IInput) {
  const [inputValue, setInputValue] = useState<string>(value || '');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  return (
    <div className="container-input-label">
      <input
        className={`input ${inputValue && 'input-has-value'}`}
        type={type || 'text'}
        id={id || label}
        name={name || label}
        value={inputValue}
        onChange={onChangeInput}
        role="textbox"
      />
      <label className="label" htmlFor={id || label}>
        {label}
        <span className="span-line"></span>
      </label>
    </div>
  );
}
