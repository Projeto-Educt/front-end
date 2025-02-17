'use client';

import Select from '@/components/forms/fields/select';
import { useRef, useState } from 'react';

interface IProfilePreferences {
  onChange?: () => void;
}

export default function ProfilePreferencesForm({ onChange }: IProfilePreferences) {
  const educationLevel = useRef<string | null>(null);
  const courseInterest = useRef<string | null>(null);
  const universityInterest = useRef<string | null>(null);
  const [optionsErros, setOptionsErros] = useState<
    ('educationLevel' | 'courseInterest' | 'universityInterest')[]
  >([]);

  const handleReference = (id: string, value: string) => {
    switch (id) {
      case 'educationLevel':
        educationLevel.current = value;
        break;
      case 'courseInterest':
        courseInterest.current = value;
        break;
      case 'universityInterest':
        universityInterest.current = value;
        break;
    }
  };

  const backPage = () => {
    onChange?.();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOptionsErros([]);

    if (!educationLevel.current || !courseInterest.current || !universityInterest.current) {
      if (!educationLevel.current) setOptionsErros(current => [...current, 'educationLevel']);
      if (!courseInterest.current) setOptionsErros(current => [...current, 'courseInterest']);
      if (!universityInterest.current)
        setOptionsErros(current => [...current, 'universityInterest']);
      return;
    }
    onChange?.();
  };

  return (
    <form className="flex flex-col gap-3 mt-2" onSubmit={onSubmit}>
      <Select
        label="Nível de escolaridade"
        options={['item1', 'item2', 'item3']}
        id="educationLevel"
        onChange={value => handleReference('educationLevel', value)}
        messageError={optionsErros?.includes('educationLevel')}
      />
      <Select
        label="Curso de interesse"
        options={['item1', 'item2', 'item3']}
        id="courseInterest"
        onChange={value => handleReference('courseInterest', value)}
        messageError={optionsErros?.includes('courseInterest')}
      />
      <Select
        label="Faculdade de interesse"
        options={['item1', 'item2', 'item3']}
        id="universityInterest"
        onChange={value => handleReference('universityInterest', value)}
        messageError={optionsErros?.includes('universityInterest')}
      />
      <div className="flex justify-between gap-8">
        <button className="secondary-button" onClick={backPage}>
          Voltar
        </button>
        <button className="primary-button" type="submit">
          Finalizar
        </button>
      </div>
    </form>
  );
}
