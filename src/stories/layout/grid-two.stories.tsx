/* eslint-disable @next/next/no-img-element */
import type { IGridTwoLayout } from '@/layout/grid-two';
import GridTwo from '@/layout/grid-two';

export default {
  title: 'layouts/grid-two',
  component: GridTwo,
  argTypes: {
    columnOne: {
      className: { type: 'string' },
      children: { type: 'React.ReactNodes' },
    },
    columnTwo: {
      className: { type: 'string' },
      children: { type: 'React.ReactNodes' },
    },
  },
};

export const Template = (args: IGridTwoLayout) => {
  return (
    <div>
      <GridTwo {...args} />
    </div>
  );
};

const ColumnOne = () => {
  return (
    <div>
      <h1>Column One</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere veniam sequi blanditiis,
        nihil temporibus repellendus quas deserunt. In possimus tempora cupiditate laboriosam harum
        ad quos consequuntur obcaecati. Pariatur, facilis modi.
      </p>
    </div>
  );
};

const ColumnTwo = () => {
  return (
    <div>
      <h1>Column Two</h1>
      <img src="https://via.placeholder.com/1500" alt="alt" />
    </div>
  );
};

Template.args = {
  columnOne: {
    children: <ColumnOne />,
  },
  columnTwo: {
    children: <ColumnTwo />,
  },
};
