import ConfirmEmail from '@/components/infos/confirm-email';

export default {
  title: 'infos/confirm-email',
  component: ConfirmEmail,
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
      <ConfirmEmail />
    </div>
  );
};
