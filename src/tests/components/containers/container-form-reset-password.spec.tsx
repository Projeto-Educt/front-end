import ContainerFormResetPassword from '@/components/containers/container-form-reset-password';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ContainerFormResetPassword', () => {
  it('should render correctly', () => {
    render(<ContainerFormResetPassword />);
    const img = screen.getByRole('img', { name: 'Cadeado' });
    const heading = screen.getByRole('heading', { name: 'Redefinir senha' });
    const paragraph = screen.getByText(
      'Insira uma nova senha para acessar sua conta. Lembre-se de escolher uma senha segura e fácil de lembrar.',
    );
    const info = screen.getByText('Preencha os campos abaixo:');
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(inputs).toHaveLength(2);
  });

  it('Should change component', () => {
    render(<ContainerFormResetPassword />);

    let heading = screen.queryByRole('heading', { name: 'Sua senha foi alterada com sucesso!' });
    const [inputPassword, inputPasswordRepeat] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).not.toBeInTheDocument();

    fireEvent.change(inputPassword, { target: { value: '@Password123' } });
    fireEvent.change(inputPasswordRepeat, { target: { value: '@Password123' } });
    fireEvent.click(button);

    expect(inputPassword).not.toBeInTheDocument();
    expect(inputPasswordRepeat).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();

    heading = screen.getByRole('heading', { name: 'Sua senha foi alterada com sucesso!' });
    expect(heading).toBeInTheDocument();
  });
});
