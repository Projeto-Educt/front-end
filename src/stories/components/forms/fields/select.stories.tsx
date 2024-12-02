import type { ISelect } from '@/components/forms/fields/select';
import Select from '@/components/forms/fields/select';

export default {
  title: 'forms/fields/select',
  component: Select,
  args: {
    label: 'Stories',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: ISelect) => {
  return (
    <div className="w-2/4 mt-4">
      <Select {...args} />
    </div>
  );
};
