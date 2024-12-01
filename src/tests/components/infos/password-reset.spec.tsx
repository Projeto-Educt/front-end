import PasswordReset from '@/components/infos/password-reset';
import { render, screen } from '@testing-library/react';

describe('PasswordReset', () => {
  it('should render correctly', () => {
    render(<PasswordReset />);

    const img = screen.getByRole('img', { name: 'Senha alterada com sucesso' });
    const heading = screen.getByRole('heading', { name: 'Sua senha foi alterada com sucesso!' });
    const paragraph = screen.getByText(
      'Agora você já pode usar sua nova senha para fazer login na plataforma.',
    );
    const link = screen.getByRole('link', { name: 'Fazer Login' });

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', '/login');
  });
});
