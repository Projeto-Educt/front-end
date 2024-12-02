import Select from '@/components/forms/fields/select';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Select', () => {
  it('should render correctly', () => {
    render(<Select label="label" options={['option1', 'option2']} />);

    const select = screen.getByRole('combobox');
    const label = screen.getByText('label');
    const options = screen.queryByRole('listbox');

    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(options).not.toBeInTheDocument();
  });

  it('should open options', () => {
    render(<Select label="label" options={['option1', 'option2']} />);

    const select = screen.getByTestId('select');
    fireEvent.click(select);

    const options = screen.queryByRole('listbox');

    expect(options).toBeInTheDocument();

    const optionsItems = screen.getAllByRole('option');
    expect(optionsItems).toHaveLength(2);
  });

  it('should change value', () => {
    render(<Select label="label" options={['option1', 'option2']} />);

    const select = screen.getByTestId('select');
    fireEvent.click(select);

    const options = screen.queryByRole('listbox');
    const optionsItems = screen.getAllByRole('option');

    expect(options).toBeInTheDocument();
    expect(optionsItems).toHaveLength(2);

    fireEvent.click(optionsItems[0]);

    expect(options).not.toBeInTheDocument();

    const value = screen.getByText('option1');
    expect(value).toBeInTheDocument();
  });
});
