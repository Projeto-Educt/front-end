import SecondaryButton from '@/components/button/secondary-button';
import { fireEvent, render, screen } from '@testing-library/react';

describe('PrimaryButton', () => {
  it('should render correctly', () => {
    render(<SecondaryButton>Jest</SecondaryButton>);

    const button = screen.getByRole('button', { name: 'Jest' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should render correctly props', () => {
    render(<SecondaryButton type="submit">Jest</SecondaryButton>);

    const button = screen.getByRole('button', { name: 'Jest' });

    expect(button).toHaveAttribute('type', 'submit');
  });

  it('Should execute onClick', () => {
    const onClick = jest.fn();
    render(<SecondaryButton onClick={onClick}>Jest</SecondaryButton>);

    const button = screen.getByRole('button', { name: 'Jest' });

    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should match snapshot', () => {
    const { container } = render(<SecondaryButton>Jest</SecondaryButton>);

    expect(container).toMatchSnapshot();
  });
});
