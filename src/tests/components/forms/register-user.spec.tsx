import RegisterUserForm from '@/components/forms/register-user';
import { render, screen } from '@testing-library/react';

describe('RegisterUserForm', () => {
  it('should render correctly', () => {
    render(<RegisterUserForm />);

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

  it('Should render correctly text paragraphs', () => {
    render(<RegisterUserForm />);

    const [paragraph1, paragraph2, paragraph3] = screen.getAllByRole('paragraph');

    expect(paragraph1).toHaveTextContent(
      'Crie sua conta de forma 100% gratuita e faça parte de uma comunidade de aprendizado mútuo.',
    );
    expect(paragraph2).toHaveTextContent('Preencha os campos abaixo:');
    expect(paragraph3).toHaveTextContent('Ja tem uma conta? Acessar');
  });

  it('Should render correctly inputs', () => {
    render(<RegisterUserForm />);

    const [inputName, inputEmail, inputPassword, inputPasswordRepeat] =
      screen.getAllByRole('textbox');

    expect(inputName).toHaveAttribute('type', 'text');
    expect(inputName).toHaveAttribute('name', 'Nome Completo');
    expect(inputEmail).toHaveAttribute('type', 'email');
    expect(inputEmail).toHaveAttribute('name', 'E-mail');
    expect(inputPassword).toHaveAttribute('type', 'password');
    expect(inputPassword).toHaveAttribute('name', 'Senha + 6 caracteres');
    expect(inputPasswordRepeat).toHaveAttribute('type', 'password');
    expect(inputPasswordRepeat).toHaveAttribute('name', 'Repetir senha');
  });
});
