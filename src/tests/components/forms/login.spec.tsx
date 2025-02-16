import LoginForm from '@/components/forms/login';
import { act, fireEvent, render, screen } from '@testing-library/react';

describe('LoginForm', () => {
  it('should render correctly', () => {
    render(<LoginForm />);

    const heading = screen.getByRole('heading', { name: 'Faça o seu Login' });
    const paragraph = screen.getByText(
      'Faça login para acessar sua conta e continuar sua jornada conosco',
    );
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(inputs).toHaveLength(2);
    const [inputEmail, inputPassword] = inputs;

    expect(inputEmail).toHaveAttribute('type', 'text');
    expect(inputEmail).toHaveAttribute('name', 'email');
    expect(inputPassword).toHaveAttribute('type', 'password');
    expect(inputPassword).toHaveAttribute('name', 'password');
  });

  it('Should render errors field email', async () => {
    render(<LoginForm />);
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
  it('Should render errors field password', async () => {
    render(<LoginForm />);
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
});
