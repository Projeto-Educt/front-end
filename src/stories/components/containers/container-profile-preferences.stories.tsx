import ContainerProfilePreferences from '@/components/containers/container-profile-preferences';

export default {
  title: 'containers/container-profile-preferences',
  component: ContainerProfilePreferences,
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
      <ContainerProfilePreferences />
    </div>
  );
};
