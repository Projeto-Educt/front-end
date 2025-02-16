import RegisterUserForm from '@/components/forms/register-user';
import { act, fireEvent, render, screen } from '@testing-library/react';

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

  it('Should render errors field completeName', async () => {
    render(<RegisterUserForm />);
    const inputName = screen.getByRole('textbox', { name: 'Nome Completo' });
    expect(inputName).toBeInTheDocument();

    const arrange = [
      { value: 'a'.repeat(6), error: 'Por favor, insira seu nome completo.' },
      { value: 'a'.repeat(101), error: 'O nome deve ter no máximo 100 caracteres.' },
      { value: '', error: 'Por favor, insira seu nome completo.' },
      { value: 'name', error: 'Por favor, insira seu nome completo.' },
      { value: '     ', error: 'Por favor, insira seu nome completo.' },
      { value: 'test name1', error: 'O nome deve conter apenas letras, espaços e hifens.' },
      { value: 'test name *', error: 'O nome deve conter apenas letras, espaços e hifens.' },
      { value: 'test na', error: 'Não use abreviações (Ex: João S. Pedro).' },
    ];

    for (const element of arrange) {
      await act(async () => {
        fireEvent.change(inputName, { target: { value: element.value } });
      });
      expect(screen.getByText(element.error)).toBeInTheDocument();
    }
  });

  it('Should render errors field email', async () => {
    render(<RegisterUserForm />);
    const inputEmail = screen.getByRole('textbox', { name: 'E-mail' });
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
    render(<RegisterUserForm />);
    const inputPassword = screen.getByRole('textbox', { name: 'Senha + 6 caracteres' });
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
    render(<RegisterUserForm />);
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
    render(<RegisterUserForm />);
    const [inputName, inputEmail, inputPassword, inputPasswordRepeat] =
      screen.getAllByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    await act(async () => {
      fireEvent.change(inputName, { target: { value: 'name test' } });
      fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
      fireEvent.change(inputPassword, { target: { value: '@Test123' } });
      fireEvent.change(inputPasswordRepeat, { target: { value: '@Test1234' } });

      fireEvent.click(button);
    });

    expect(screen.getByText('As senhas não coincidem.')).toBeInTheDocument();
  });
});
