import ConfirmedEmail from '@/components/infos/confirmed-email';

export default {
  title: 'infos/confirmed-email',
  component: ConfirmedEmail,
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
      <ConfirmedEmail />
    </div>
  );
};
