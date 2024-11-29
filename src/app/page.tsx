import PrimaryLinkButton from '@/components/button/primary-link-button';

export default function Home() {
  const paths = [
    {
      path: '/login',
      title: 'Login',
    },
    {
      path: '/register-user',
      title: 'Cadastro de usuários',
    },
    {
      path: '/register-user/create-profile',
      title: 'Cadastro de perfil',
    },
    {
      path: '/confirmed-email',
      title: 'E-mail confirmado',
    },
    {
      path: '/password-recovery',
      title: 'Recuperar senha',
    },
    {
      path: '/reset-password',
      title: 'Alterar senha',
    },
  ];
  return (
    <div className="flex flex-col gap-3 max-w-md mt-10">
      {paths.map(({ path, title }) => (
        <PrimaryLinkButton key={path} href={path}>
          {title}
        </PrimaryLinkButton>
      ))}
    </div>
  );
}
