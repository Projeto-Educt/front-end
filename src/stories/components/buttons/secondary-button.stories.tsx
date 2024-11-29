import type { ISecondaryButton } from '@/components/button/secondary-button';
import SecondaryButton from '@/components/button/secondary-button';

export default {
  title: 'buttons/secondary-button',
  component: SecondaryButton,
  args: {
    children: 'Stories Button',
    type: 'button',
  },
  argTypes: {
    children: { type: 'string' },
    type: { type: 'string' },
  },
};

export const Template = (args: ISecondaryButton) => {
  return (
    <div className="w-2/4">
      <SecondaryButton {...args} />
    </div>
  );
};
