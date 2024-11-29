import PrimaryButton from '@/components/button/primary-button';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'buttons/primary-button',
  component: PrimaryButton,
  args: {
    children: 'Stories Button',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div className="w-2/4">
      <PrimaryButton {...args} />
    </div>
  );
};
