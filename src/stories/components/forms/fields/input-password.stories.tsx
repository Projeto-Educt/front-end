import type { IInputPassword } from '@/components/forms/fields/input-password';
import InputPassword from '@/components/forms/fields/input-password';

export default {
  title: 'forms/fields/input-password',
  component: InputPassword,
  args: {
    label: 'Stories Input Password',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const TemplateWithoutValue = (args: IInputPassword) => {
  return (
    <div className="w-2/4 mt-4">
      <InputPassword {...args} />
    </div>
  );
};

export const TemplateWithValue = (args: IInputPassword) => {
  return (
    <div className="w-2/4 mt-4">
      <InputPassword {...args} />
    </div>
  );
};

TemplateWithValue.args = {
  value: 'value',
};
