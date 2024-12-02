import InputPassword from '@/components/forms/fields/input-password';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Input', () => {
  it('should render correctly', () => {
    render(<InputPassword label="label" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('label');
    const icon = screen.getByRole('img', { name: 'Olho Fechado' });

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should render correctly with value', () => {
    render(<InputPassword label="label" value="value" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('label');

    expect(input).toHaveValue('value');
    expect(label).toBeInTheDocument();
  });

  it('Should change value', () => {
    render(<InputPassword label="label" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    let label = screen.getByText('label');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'value' } });
    expect(input).toHaveValue('value');

    label = screen.getByText('label');
    expect(label).toBeInTheDocument();
  });

  it('Should change type', async () => {
    render(<InputPassword label="label" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const label = screen.getByText('label');
    let iconClosedEye = screen.getByRole('img', { name: 'Olho Fechado' });
    let iconOpenEye = screen.queryByRole('img', { name: 'Olho Aberto' });

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(iconClosedEye).toBeInTheDocument();
    expect(iconOpenEye).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'value' } });

    expect(input).toHaveValue('value');
    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(iconClosedEye);
    expect(input).toHaveAttribute('type', 'text');

    iconOpenEye = screen.getByRole('img', { name: 'Olho Aberto' });
    expect(iconOpenEye).toBeInTheDocument();
    expect(iconClosedEye).not.toBeInTheDocument();

    fireEvent.click(iconOpenEye);
    iconClosedEye = screen.getByRole('img', { name: 'Olho Fechado' });

    expect(input).toHaveAttribute('type', 'password');
    expect(iconOpenEye).not.toBeInTheDocument();
    expect(iconClosedEye).toBeInTheDocument();
  });
});
