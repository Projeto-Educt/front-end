import PasswordRecoveryForm from '@/components/forms/password-recovery';
import { render, screen } from '@testing-library/react';

describe('PasswordRecoveryForm', () => {
  it('should render correctly', () => {
    render(<PasswordRecoveryForm />);

    const heading = screen.getByRole('heading', { name: 'Recuperação de senha' });
    const paragraph = screen.getByText(
      'Digite o e-mail associado à sua conta enviaremos um link para que você possa redefinir sua senha.',
    );

    const info = screen.getByText('Preencha os campos abaixo:');
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'Insira seu e-mail');
  });
});
