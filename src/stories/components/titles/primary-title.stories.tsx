import type { IPrimaryTitle } from '@/components/titles/primary-title';
import PrimaryTitle from '@/components/titles/primary-title';

export default {
  title: 'titles/primary-title',
  component: PrimaryTitle,
  args: {
    title: 'Stories Title',
  },
  argTypes: {
    title: { type: 'string' },
  },
};

export const Template = (args: IPrimaryTitle) => {
  return (
    <div>
      <PrimaryTitle {...args} />
    </div>
  );
};
