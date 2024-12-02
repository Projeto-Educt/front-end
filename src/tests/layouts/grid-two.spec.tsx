import GridTwoLayout from '@/layout/grid-two';
import { render } from '@testing-library/react';

describe('GridTwoLayout', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <GridTwoLayout
        columnOne={{ children: <h1>Test Column One</h1> }}
        columnTwo={{ children: <h1>Test Column Two</h1> }}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
