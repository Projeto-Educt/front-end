import LoginForm from '@/components/forms/login';
import { render, screen } from '@testing-library/react';

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

    expect(inputEmail).toHaveAttribute('type', 'email');
    expect(inputEmail).toHaveAttribute('name', 'Insira seu e-mail');
    expect(inputPassword).toHaveAttribute('type', 'password');
    expect(inputPassword).toHaveAttribute('name', 'Senha');
  });
});
