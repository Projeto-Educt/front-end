'use client';

import '@/styles/components/forms/fields/select.scss';
import arrow from '@public/icons/down-arrow-svgrepo-com.svg';
import Image from 'next/image';
import { useState } from 'react';

export interface ISelect {
  label: string;
  options: string[];
}

export default function Select({ options, label }: ISelect) {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleValue = (data: string) => {
    setValue(data);
    setOpenOptions(false);
  };
  return (
    <div
      className={`select ${openOptions ? 'select-open' : ''} ${value ? 'has-value' : ''}`}
      role="combobox"
      aria-expanded={openOptions}
      aria-controls="options-list"
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
          {options.map(option => (
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
  );
}
