import PrimaryLinkButton from '@/components/button/primary-link-button';
import { render, screen } from '@testing-library/react';

describe('PrimaryLinkButton', () => {
  it('should render correctly', () => {
    render(<PrimaryLinkButton href="#">Jest</PrimaryLinkButton>);

    const link = screen.getByRole('link', { name: 'Jest' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });
  it('Should match snapshot', () => {
    const { container } = render(<PrimaryLinkButton href="#">Jest</PrimaryLinkButton>);

    expect(container).toMatchSnapshot();
  });
});
