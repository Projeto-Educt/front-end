'use client';

import '@/styles/components/forms/fields/input.scss';
import React, { useRef } from 'react';

export interface IInput {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'time';
  label: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ type, label, id, name, value, onChange }: IInput) {
  const inputValue = useRef<string | undefined>(value);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.current = event.target.value;
    onChange?.(event);
  };

  return (
    <div className="container-input-label">
      <input
        className={`input ${inputValue.current && 'input-has-value'}`}
        required
        type={type || 'text'}
        id={id || label}
        name={name || label}
        value={inputValue.current}
        onChange={event => onChangeInput(event)}
        role="textbox"
        placeholder="none"
      />
      <label className="label" htmlFor={id || label}>
        {label}
        <span className="span-line"></span>
      </label>
    </div>
  );
}
