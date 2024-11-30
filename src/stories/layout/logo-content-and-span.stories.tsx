/* eslint-disable @next/next/no-img-element */
import type { ILogoContentAndSpan } from '@/layout/logo-content-and-span';
import LogoContentAndSpan from '@/layout/logo-content-and-span';

export default {
  title: 'layouts/logo-content-and-span',
  component: LogoContentAndSpan,
  argTypes: {
    children: { type: 'React.ReactNodes' },
    textSpan: { type: 'string' },
  },
};

export const Template = (args: ILogoContentAndSpan) => {
  return (
    <div>
      <LogoContentAndSpan {...args} />
    </div>
  );
};

const Element = () => {
  return (
    <article className="max-w-md space-y-7">
      <img
        className="w-40 h-40 logotipo-principal"
        src="https://via.placeholder.com/150"
        alt="Logotipo de Educt"
      />
      <p className="text-center sm:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum, facere, vel
        officiis nam, eius nihil ipsum consectetur explicabo porro eum iste quo? Eligendi
        exercitationem veniam provident illum magni quaerat.{' '}
      </p>
    </article>
  );
};

Template.args = {
  children: <Element />,
  textSpan: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia! ̄\_(ツ)_/ ̄',
};
