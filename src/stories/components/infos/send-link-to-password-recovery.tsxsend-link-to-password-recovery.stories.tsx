import SendLinkToPasswordRecovery from '@/components/infos/send-link-to-password-recovery';

export default {
  title: 'infos/send-link-to-password-recovery',
  component: SendLinkToPasswordRecovery,
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
      <SendLinkToPasswordRecovery />
    </div>
  );
};
