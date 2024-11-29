'use client';

import RegisterUserForm from '@/components/forms/register-user';
import ConfirmEmail from '@/components/infos/confirm-email';
import { useState } from 'react';

export default function ContainerFormRegister() {
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);

  const handleRegisterUser = () => {
    setRegisteredUser(true);
  };
  return (
    <>
      {!registeredUser && <RegisterUserForm changeOnSubmit={handleRegisterUser} />}
      {registeredUser && <ConfirmEmail />}
    </>
  );
}
