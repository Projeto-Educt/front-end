import PasswordReset from '@/components/infos/password-reset';

export default {
  title: 'infos/password-reset',
  component: PasswordReset,
  args: {
    children: 'nao sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = () => {
  return (
    <div>
      <PasswordReset />
    </div>
  );
};
