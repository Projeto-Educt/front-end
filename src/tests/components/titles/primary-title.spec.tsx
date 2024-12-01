import PrimaryTitle from '@/components/titles/primary-title';
import { render, screen } from '@testing-library/react';

describe('PrimaryTitle', () => {
  it('should render correctly', () => {
    render(<PrimaryTitle title="Faça seu Registro" />);

    const heading = screen.getByRole('heading', { name: 'Faça seu Registro' });

    expect(heading).toBeInTheDocument();
  });
  it('should match snapshot', () => {
    const { container } = render(<PrimaryTitle title="Faça seu Registro" />);

    expect(container).toMatchSnapshot();
  });
});
