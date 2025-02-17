import Select from '@/components/forms/fields/select';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Select', () => {
  it('should render correctly', () => {
    render(<Select label="label" options={['option1', 'option2']} id="select" />);

    const select = screen.getByRole('combobox');
    const label = screen.getByText('label');
    const options = screen.queryByRole('listbox');

    expect(select).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(options).not.toBeInTheDocument();
  });

  it('should open options', () => {
    render(<Select label="label" options={['option1', 'option2']} id="select" />);

    const select = screen.getByTestId('select');
    fireEvent.click(select);

    const options = screen.queryByRole('listbox');

    expect(options).toBeInTheDocument();

    const optionsItems = screen.getAllByRole('option');
    expect(optionsItems).toHaveLength(2);
  });

  it('should change value', () => {
    render(<Select label="label" options={['option1', 'option2']} id="select" />);

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

  it('Should not render duplicate options', () => {
    render(<Select label="label" options={['option1', 'option1']} id="select" />);

    const select = screen.getByTestId('select');
    fireEvent.click(select);

    const options = screen.queryByRole('listbox');
    const optionsItems = screen.getAllByRole('option');

    expect(options).toBeInTheDocument();
    expect(optionsItems).toHaveLength(1);
  });

  it('Should render error messages', () => {
    const arrange = [
      { value: true, error: 'Por favor, selecione uma opção.' },
      { value: 'Algo deu errado', error: 'Algo deu errado' },
    ];

    const { rerender } = render(
      <Select label="label" options={['option1', 'option2']} id="select" />,
    );

    for (const element of arrange) {
      rerender(
        <Select
          label="label"
          options={['option1', 'option2']}
          id="select"
          messageError={element.value}
        />,
      );

      const paragraph = screen.getAllByRole('paragraph')[0];

      expect(paragraph).toHaveTextContent(element.error);
    }
  });
});
