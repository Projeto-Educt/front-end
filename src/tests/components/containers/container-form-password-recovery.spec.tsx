import ContainerFormPasswordRecovery from '@/components/containers/container-form-password-recovery';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ContainerFormPasswordRecovery', () => {
  it('should render correctly', () => {
    render(<ContainerFormPasswordRecovery />);
    const heading = screen.getByRole('heading', { name: 'Recuperação de senha' });
    const paragraphs = screen.getAllByRole('paragraph');
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(paragraphs).toHaveLength(2);

    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'Insira seu e-mail');
  });

  it('should render correctly login link', () => {
    render(<ContainerFormPasswordRecovery />);

    const link = screen.getByRole('link', { name: 'Acessar' });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/login');
  });

  it('Should change layout in submit form', () => {
    render(<ContainerFormPasswordRecovery />);

    let heading = screen.queryByRole('heading', { name: 'Link para redefinir senha enviado' });
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: 'Confirmar' });

    expect(heading).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'test@test.com' } });
    expect(input).toHaveValue('test@test.com');

    fireEvent.click(button);
    expect(input).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();

    heading = screen.getByRole('heading', { name: 'Link para redefinir senha enviado' });
    expect(heading).toBeInTheDocument();
  });
});
