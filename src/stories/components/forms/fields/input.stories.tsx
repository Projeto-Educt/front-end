import type { IInput } from '@/components/forms/fields/input';
import Input from '@/components/forms/fields/input';

export default {
  title: 'forms/fields/input',
  component: Input,
  args: {
    label: 'Stories Input',
    type: 'text',
    value: '',
  },
  argTypes: {
    label: { type: 'string' },
    type: { type: 'string' },
    name: { type: 'string' },
    value: { type: 'string' },
    id: { type: 'string' },
  },
};

export const TemplateWithoutValue = (args: IInput) => {
  return (
    <div className="w-2/4 mt-4">
      <Input {...args} />
    </div>
  );
};

export const TemplateWithValue = (args: IInput) => {
  return (
    <div className="w-2/4 mt-4">
      <Input {...args} />
    </div>
  );
};

TemplateWithValue.args = {
  value: 'value',
};
