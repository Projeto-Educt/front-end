import InputPassword from '@/components/forms/fields/input-password';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('Input', () => {
  it('should render correctly', () => {
    render(<InputPassword label="label" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('label');
    const icon = screen.getByRole('img', { name: 'Olho Aberto' });

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
    let iconOpenEye = screen.getByRole('img', { name: 'Olho Aberto' });
    let iconClosedEye = screen.queryByRole('img', { name: 'Olho Fechado' });

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(iconOpenEye).toBeInTheDocument();
    expect(iconClosedEye).not.toBeInTheDocument();

    await act(async () => {
      fireEvent.change(input, { target: { value: 'value' } });
    });

    expect(input).toHaveValue('value');
    expect(input).toHaveAttribute('type', 'password');

    fireEvent.click(iconOpenEye);
    expect(input).toHaveAttribute('type', 'text');

    iconClosedEye = screen.getByRole('img', { name: 'Olho Fechado' });
    expect(iconClosedEye).toBeInTheDocument();
    expect(iconOpenEye).not.toBeInTheDocument();

    fireEvent.click(iconClosedEye);
    iconOpenEye = screen.getByRole('img', { name: 'Olho Aberto' });

    expect(input).toHaveAttribute('type', 'password');
    expect(iconClosedEye).not.toBeInTheDocument();
    expect(iconOpenEye).toBeInTheDocument();
  });
});
