import ResetPasswordForm from '@/components/forms/reset-password';
import { act, fireEvent, render, screen } from '@testing-library/react';

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
    expect(inputPassword).toHaveAttribute('name', 'password');
    expect(inputPasswordRepeat).toHaveAttribute('type', 'password');
    expect(inputPasswordRepeat).toHaveAttribute('name', 'confirmPassword');
  });
  it('Should render errors field password', async () => {
    render(<ResetPasswordForm />);
    const inputPassword = screen.getByRole('textbox', { name: 'Senha' });
    expect(inputPassword).toBeInTheDocument();

    const arrange = [
      { value: 'abc123*', error: 'A senha deve ter no mínimo 1 letra maiúscula.' },
      { value: 'ABC123*', error: 'A senha deve ter no mínimo 1 letra minúscula.' },
      { value: 'ABCdef*', error: 'A senha deve ter no mínimo 1 número.' },
      { value: 'ABCdef1', error: 'A senha deve ter no mínimo 1 caractere especial.' },
      { value: 'Af1*', error: 'A senha deve ter no mínimo 6 caracteres.' },
    ];

    for (const element of arrange) {
      await act(async () => {
        fireEvent.change(inputPassword, { target: { value: element.value } });
      });
      expect(screen.getByText(element.error)).toBeInTheDocument();
    }
  });
  it('Should render errors field confirmPassword', async () => {
    render(<ResetPasswordForm />);
    const inputPassword = screen.getByRole('textbox', { name: 'Repetir senha' });
    expect(inputPassword).toBeInTheDocument();

    const arrange = [
      { value: 'abc123*', error: 'A senha deve ter no mínimo 1 letra maiúscula.' },
      { value: 'ABC123*', error: 'A senha deve ter no mínimo 1 letra minúscula.' },
      { value: 'ABCdef*', error: 'A senha deve ter no mínimo 1 número.' },
      { value: 'ABCdef1', error: 'A senha deve ter no mínimo 1 caractere especial.' },
      { value: 'Af1*', error: 'A senha deve ter no mínimo 6 caracteres.' },
    ];

    for (const element of arrange) {
      await act(async () => {
        fireEvent.change(inputPassword, { target: { value: element.value } });
      });
      expect(screen.getByText(element.error)).toBeInTheDocument();
    }
  });
  it('Should render error if passwords do not match', async () => {
    render(<ResetPasswordForm />);
    const [inputPassword, inputPasswordRepeat] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    await act(async () => {
      fireEvent.change(inputPassword, { target: { value: '@Test123' } });
      fireEvent.change(inputPasswordRepeat, { target: { value: '@Test1234' } });

      fireEvent.click(button);
    });

    expect(screen.getByText('As senhas não coincidem.')).toBeInTheDocument();
  });
});
