'use client';

import { MessageError } from '@/components/infos/message-error';
import '@/styles/components/forms/fields/select.scss';
import arrow from '@public/icons/down-arrow-svgrepo-com.svg';
import Image from 'next/image';
import { useState } from 'react';

export interface ISelect {
  label: string;
  options: string[];
  id: string;
  messageError?: string | boolean;
  onChange?: (value: string) => void;
}

export default function Select({ options, label, id, onChange, messageError = false }: ISelect) {
  const uniqueOptions = [...new Set(options)];
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleValue = (data: string) => {
    setValue(data);
    setOpenOptions(false);
    onChange?.(data);
  };
  return (
    <div className="relative min-h-[52px]">
      <div
        className={`
          select ${openOptions ? 'select-open' : ''} 
          ${value ? 'has-value' : ''} 
          ${messageError ? 'has-error' : ''}`}
        role="combobox"
        aria-expanded={openOptions}
        aria-controls="options-list"
        id={id}
      >
        <div
          className="w-full h-full"
          onClick={() => setOpenOptions(!openOptions)}
          data-testid="select"
        >
          <label className=" label text-nowrap">
            <span className="span-line"></span>
            {label}
          </label>
          {value && <p className="paragraph-value">{value}</p>}
          <Image
            className="w-3 h-3 absolute top-[14px] right-2 cursor-pointer"
            src={arrow}
            alt="Seta para baixo"
          />
        </div>
        {openOptions && (
          <div className="options" id="options-list" role="listbox">
            {uniqueOptions.map(option => (
              <p
                className="option"
                key={option}
                onClick={() => handleValue(option)}
                role="option"
                aria-selected={option === value}
              >
                {option}
              </p>
            ))}
          </div>
        )}
      </div>
      {messageError && !value && (
        <MessageError
          messageError={
            typeof messageError === 'string' ? messageError : 'Por favor, selecione uma opção.'
          }
        />
      )}
    </div>
  );
}
