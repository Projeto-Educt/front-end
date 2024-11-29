'use client';

import ResetPasswordForm from '@/components/forms/reset-password';
import PasswordReset from '@/components/infos/password-reset';
import { useState } from 'react';

export default function ContainerFormResetPassword() {
  const [passwordReset, setPasswordReset] = useState<boolean>(false);
  return (
    <>
      {!passwordReset && <ResetPasswordForm changeOnSubmit={() => setPasswordReset(true)} />}
      {passwordReset && <PasswordReset />}
    </>
  );
}
