import ContainerFormRegister from '@/components/containers/container-form-register';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ContainerFormRegister', () => {
  it('should render correctly', () => {
    render(<ContainerFormRegister />);
    const heading = screen.getByRole('heading', { name: 'Faça seu Registro' });
    const paragraph = screen.getAllByRole('paragraph');
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });
    const link = screen.getByRole('link', { name: 'Acessar' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toHaveLength(3);
    expect(inputs).toHaveLength(4);
    expect(button).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/login');
  });

  it('Should change component', () => {
    render(<ContainerFormRegister />);

    let heading = screen.queryByRole('heading', { name: 'Confirme seu e-mail' });
    const [inputName, inputEmail, inputPassword, inputPasswordRepeat] =
      screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).not.toBeInTheDocument();

    fireEvent.change(inputName, { target: { value: 'full name' } });
    fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
    fireEvent.change(inputPassword, { target: { value: '@Password123' } });
    fireEvent.change(inputPasswordRepeat, { target: { value: '@Password123' } });

    fireEvent.click(button);

    expect(inputName).not.toBeInTheDocument();
    expect(inputEmail).not.toBeInTheDocument();
    expect(inputPassword).not.toBeInTheDocument();
    expect(inputPasswordRepeat).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();

    heading = screen.getByRole('heading', { name: 'Confirme seu e-mail' });
    expect(heading).toBeInTheDocument();
  });
});
