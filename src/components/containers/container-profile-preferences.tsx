'use client';
import ProfilePreferencesForm from '@/components/forms/profile-preferences';
import ProfileTypeForm from '@/components/forms/profile-type';
import Stages from '@/components/infos/stages';
import '@/styles/components/containers/container-profile-preferences.scss';
import { useState } from 'react';

export default function ContainerProfilePreferences() {
  const [, setProfileType] = useState<'mentor' | 'aluno' | null>(null);
  const [stage, setStage] = useState(0);

  const handleProfileType = (value: string | null) => {
    setProfileType(value as 'mentor' | 'aluno');
    value && setStage(1);
  };

  return (
    <>
      <Stages totalStages={2} currentStage={stage} className={`${stage === 1 && 'mt-[-100px]'}`} />
      {stage === 0 && <ProfileTypeForm onChange={handleProfileType} />}
      {stage === 1 && (
        <div className="max-w-md max-h-[544px] h-full flex flex-col justify-between mt-4 gap-3">
          <h1 className="primary-title">Nos diga mais sobre você</h1>
          <p className="paragraph-description">
            Diga mais sobre o seu momento atual, dizendo se tem algum curso ou faculdade em mente
            para que possamos encontrar os melhores mentores para você.
          </p>
          <ProfilePreferencesForm onChange={() => setStage(v => v - 1)} />
        </div>
      )}
    </>
  );
}
