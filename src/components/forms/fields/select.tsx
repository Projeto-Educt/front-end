'use client';

import '@/styles/components/forms/fields/select.scss';
import arrow from '@public/icons/down-arrow-svgrepo-com.svg';
import Image from 'next/image';
import { useState } from 'react';

interface ISelect {
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
    <div className={`select ${openOptions ? 'select-open' : ''} ${value ? 'has-value' : ''}`}>
      <div className="w-full h-full" onClick={() => setOpenOptions(!openOptions)}>
        <label className=" label text-nowrap">
          <span className="span-line"></span>
          {label}
        </label>
        {value && <p className="paragraph-value">{value}</p>}
        <Image
          className="w-3 h-3 absolute top-3 right-2 cursor-pointer"
          src={arrow}
          alt="Seta para baixo"
        />
      </div>
      {openOptions && (
        <div className="options">
          {options.map(option => (
            <p className="option" key={option} onClick={() => handleValue(option)}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
