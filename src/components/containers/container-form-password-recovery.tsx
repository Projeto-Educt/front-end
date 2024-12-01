'use client';

import PasswordRecoveryForm from '@/components/forms/password-recovery';
import SendLinkToPasswordRecovery from '@/components/infos/send-link-to-password-recovery';
import Link from 'next/link';
import { useState } from 'react';

export default function ContainerFormPasswordRecovery() {
  const [sendEmail, setSendEmail] = useState<boolean>(false);

  return (
    <>
      {!sendEmail && (
        <div className="flex flex-col gap-7 max-w-md">
          <PasswordRecoveryForm changeOnSubmit={() => setSendEmail(true)} />
          <div className="w-full flex items-center gap-1">
            <span className="inline-block w-full h-px bg-gray-400"></span>
            <span className="text-gray-400">Ou</span>
            <span className="inline-block w-full h-px bg-gray-400"></span>
          </div>
          <p>
            Ja tem uma conta?
            <Link className="text-primary-600 ms-1" href="/login">
              Acessar
            </Link>
          </p>
        </div>
      )}
      {sendEmail && <SendLinkToPasswordRecovery />}
    </>
  );
}
