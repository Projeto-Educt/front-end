import PasswordRecoveryForm from '@/components/forms/password-recovery';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('PasswordRecoveryForm', () => {
  it('should render correctly', () => {
    render(<PasswordRecoveryForm />);

    const heading = screen.getByRole('heading', { name: 'Recuperação de senha' });
    const paragraph = screen.getByText(
      'Digite o e-mail associado à sua conta enviaremos um link para que você possa redefinir sua senha.',
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'email');
  });

  it('Should render errors field email', async () => {
    render(<PasswordRecoveryForm />);
    const inputEmail = screen.getByRole('textbox', { name: 'Insira seu e-mail' });
    expect(inputEmail).toBeInTheDocument();

    const arrange = ['a'.repeat(6), 'a'.repeat(101), '', '   ', 'a@a', 'a@.com', 'a@a.'];

    for (const element of arrange) {
      await act(async () => {
        fireEvent.change(inputEmail, { target: { value: element } });
      });
      expect(
        screen.getByText('Por favor, insira um e-mail válido (ex: usuario@dominio.com).'),
      ).toBeInTheDocument();
    }
  });
});
