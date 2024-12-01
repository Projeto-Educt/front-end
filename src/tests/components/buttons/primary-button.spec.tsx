import PrimaryButton from '@/components/button/primary-button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PrimaryButton', () => {
  it('should render correctly', () => {
    render(<PrimaryButton>Jest</PrimaryButton>);

    const button = screen.getByRole('button', { name: 'Jest' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render correctly props', () => {
    render(<PrimaryButton type="submit">Jest</PrimaryButton>);

    const button = screen.getByRole('button', { name: 'Jest' });

    expect(button).toHaveAttribute('type', 'submit');
  });

  it('Should execute onClick', () => {
    const onClick = jest.fn();
    render(<PrimaryButton onClick={onClick}>Jest</PrimaryButton>);

    const button = screen.getByRole('button', { name: 'Jest' });

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should match snapshot', () => {
    const { container } = render(<PrimaryButton>Jest</PrimaryButton>);

    expect(container).toMatchSnapshot();
  });
});
