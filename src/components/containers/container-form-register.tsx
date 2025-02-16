'use client';

import RegisterUserForm from '@/components/forms/register-user';
import ConfirmEmail from '@/components/infos/confirm-email';
import ParagraphMemo from '@/components/memos/paragraph-memo';
import { useState } from 'react';
import LinkMemo from '../memos/link-memo';

export default function ContainerFormRegister() {
  const [registeredUser, setRegisteredUser] = useState<boolean>(false);

  const handleRegisterUser = () => {
    setRegisteredUser(true);
  };
  return (
    <>
      {!registeredUser && (
        <>
          <RegisterUserForm changeOnSubmit={handleRegisterUser} />
          <ParagraphMemo className="sm:text-center mb-7">
            Ja tem uma conta?
            <LinkMemo className="primary-link inline ms-1" href="/login">
              Faça o Login
            </LinkMemo>
          </ParagraphMemo>
        </>
      )}
      {registeredUser && (
        <div className="max-w-md">
          <ConfirmEmail />
          <LinkMemo className="primary-link text-center mt-14 mb-9" href="/">
            Voltar ao início
          </LinkMemo>
        </div>
      )}
    </>
  );
}
