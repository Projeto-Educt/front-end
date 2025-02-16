import Input from '@/components/forms/fields/input';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Input', () => {
  it('should render correctly', () => {
    render(<Input label="label" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('label');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it('should render correctly with value', () => {
    render(<Input label="label" value="value" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('label');

    expect(input).toHaveValue('value');
    expect(label).toBeInTheDocument();
  });

  it('Should change value', () => {
    render(<Input label="label" />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    let label = screen.getByText('label');

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveValue('');

    label = screen.getByText('label');
    expect(label).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'value' } });
    expect(input).toHaveValue('value');
  });
});
