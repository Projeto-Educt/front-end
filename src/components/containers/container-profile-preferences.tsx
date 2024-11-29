'use client';
import ProfilePreferences from '@/components/forms/profile-preferences';
import ProfileType from '@/components/forms/profile-type';
import Stages from '@/components/infos/stages';
import '@/styles/components/containers/container-profile-preferences.scss';
import { useState } from 'react';

export default function ContainerProfilePreferences() {
  const [, setProfileType] = useState<'mentor' | 'aluno' | null>(null);
  const [stage, setStage] = useState(0);

  const handleProfileType = (value: string | null) => {
    setProfileType(value as 'mentor' | 'aluno');
    value ? setStage(1) : setStage(0);
  };

  return (
    <div className={`mt-4 ${stage === 0 ? 'pt-1' : ''}`}>
      <Stages totalStages={2} currentStage={stage} />
      {stage === 0 && <ProfileType onChange={handleProfileType} />}
      {stage === 1 && <ProfilePreferences onChange={() => setStage(v => v - 1)} />}
    </div>
  );
}
