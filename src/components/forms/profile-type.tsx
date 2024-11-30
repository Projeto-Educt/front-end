'use client';

import PrimaryButton from '@/components/button/primary-button';
import CardChooseProfile from '@/components/forms/fields/card-choose-profile';
import studentIcon from '@public/icons/simple-icon_codestudent.png';
import mentorIcon from '@public/icons/simple-icons_codementor.svg';
import { useState } from 'react';

interface IProfileType {
  onChange?: (value: string) => void;
}

export default function ProfileTypeForm({ onChange }: IProfileType) {
  const [profileType, setProfileType] = useState<'mentor' | 'aluno' | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!profileType) return;
    onChange?.(profileType as string);
  };

  return (
    <div className="max-w-md max-h-[544px] h-full flex flex-col justify-between items-center sm:items-start mt-4">
      <h1 className="text-3xl font-bold py-3">Qual é o seu perfil?</h1>
      <p className="text-center sm:text-start mb-4">
        Cadastre-se como mentor(a) ou aluno(a) e faça parte da nossa comunidade. Transforme sua
        jornada de aprendizado ou compartilhe seu conhecimento.
      </p>
      <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit}>
        <CardChooseProfile
          image={mentorIcon}
          title="Mentor (a) - Compartilhe sua experiência"
          description="Ajude estudantes a se descobrirem! Compartilhe suas experiências e oriente-os com dicas práticas para o futuro."
          inputRadio={{ value: 'mentor', name: 'profile' }}
          onChange={() => setProfileType('mentor')}
        />
        <CardChooseProfile
          image={studentIcon}
          title="Aluno (a) - Aprenda com especialistas"
          description={`Aprenda com especialistas e receba orientações valiosas de quem já passou 
            pelo que você está vivendo. Descubra novas oportunidades e direcione sua carreira`}
          inputRadio={{ value: 'aluno', name: 'profile' }}
          onChange={() => setProfileType('aluno')}
        />
        <PrimaryButton className="mt-3" type="submit">
          Continuar
        </PrimaryButton>
      </form>
    </div>
  );
}
