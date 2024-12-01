import ResetPasswordForm from '@/components/forms/reset-password';
import { render, screen } from '@testing-library/react';

describe('ResetPasswordForm', () => {
  it('should render correctly', () => {
    render(<ResetPasswordForm />);

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

  it('Should render correctly inputs', () => {
    render(<ResetPasswordForm />);

    const [inputPassword, inputPasswordRepeat] = screen.getAllByRole('textbox');

    expect(inputPassword).toHaveAttribute('type', 'password');
    expect(inputPassword).toHaveAttribute('name', 'senha');
    expect(inputPasswordRepeat).toHaveAttribute('type', 'password');
    expect(inputPasswordRepeat).toHaveAttribute('name', 'Repetir senha');
  });
});
