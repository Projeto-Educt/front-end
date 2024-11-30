import type { ICardChooseProfile } from '@/components/forms/fields/card-choose-profile';
import CardChooseProfile from '@/components/forms/fields/card-choose-profile';
import img from '@public/icons/simple-icon_codestudent.png';

export default {
  title: 'forms/fields/card-choose-profile',
  component: CardChooseProfile,
  args: {
    title: 'Stories Card Choose Profile',
    description: 'Stories Card Choose Profile description',
    image: img,
    inputRadio: { value: 'stories', name: 'stories' },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: ICardChooseProfile) => {
  return (
    <div className="w-2/4 mt-4">
      <CardChooseProfile {...args} />
    </div>
  );
};
