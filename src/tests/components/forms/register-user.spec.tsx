import RegisterUserForm from '@/components/forms/register-user';
import { render, screen } from '@testing-library/react';

describe('RegisterUserForm', () => {
  it('should render correctly', () => {
    render(<RegisterUserForm />);

    const heading = screen.getByRole('heading', { name: 'Faça seu Registro' });
    const paragraph = screen.getByRole('paragraph');
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(inputs).toHaveLength(4);
    expect(button).toBeInTheDocument();
  });

  it('Should render correctly text paragraphs', () => {
    render(<RegisterUserForm />);

    const paragraph = screen.getByRole('paragraph');

    expect(paragraph).toHaveTextContent(
      'Crie sua conta de forma 100% gratuita e faça parte de uma comunidade de aprendizado mútuo.',
    );
  });

  it('Should render correctly inputs', () => {
    render(<RegisterUserForm />);

    const [inputName, inputEmail, inputPassword, inputPasswordRepeat] =
      screen.getAllByRole('textbox');

    expect(inputName).toHaveAttribute('type', 'text');
    expect(inputName).toHaveAttribute('name', 'completeName');
    expect(inputEmail).toHaveAttribute('type', 'text');
    expect(inputEmail).toHaveAttribute('name', 'email');
    expect(inputPassword).toHaveAttribute('type', 'password');
    expect(inputPassword).toHaveAttribute('name', 'password');
    expect(inputPasswordRepeat).toHaveAttribute('type', 'password');
    expect(inputPasswordRepeat).toHaveAttribute('name', 'confirmPassword');
  });
});
