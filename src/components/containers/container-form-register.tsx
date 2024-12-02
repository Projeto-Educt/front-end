'use client';

import RegisterUserForm from '@/components/forms/register-user';
import ConfirmEmail from '@/components/infos/confirm-email';
import Link from 'next/link';
import { useState } from 'react';

export default function ContainerFormRegister() {
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);

  const handleRegisterUser = () => {
    setRegisteredUser(true);
  };
  return (
    <>
      {!registeredUser && <RegisterUserForm changeOnSubmit={handleRegisterUser} />}
      {registeredUser && (
        <div className="max-w-md">
          <ConfirmEmail />
          <Link className="primary-link text-center mt-20" href="/">
            Voltar ao início
          </Link>
        </div>
      )}
    </>
  );
}
