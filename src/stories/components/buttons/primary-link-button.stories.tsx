import type { IPrimaryLinkButton } from '@/components/button/primary-link-button';
import PrimaryLinkButton from '@/components/button/primary-link-button';

export default {
  title: 'buttons/primary-link-button',
  component: PrimaryLinkButton,
  args: {
    children: 'Stories Link',
    href: 'https://www.example.com',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: IPrimaryLinkButton) => {
  return (
    <div className="w-2/4">
      <PrimaryLinkButton {...args} />
    </div>
  );
};
