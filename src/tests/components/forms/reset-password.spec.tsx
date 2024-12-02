import ResetPasswordForm from '@/components/forms/reset-password';
import { render, screen } from '@testing-library/react';

describe('ResetPasswordForm', () => {
  it('should render correctly', () => {
    render(<ResetPasswordForm />);

    const heading = screen.getByRole('heading', { name: 'Redefinir sua senha' });
    const paragraph = screen.getByText('Insira uma nova senha para acessar sua conta.');
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
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
