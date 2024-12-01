import ConfirmEmail from '@/components/infos/confirm-email';
import { render, screen } from '@testing-library/react';

describe('ConfirmEmail', () => {
  it('should render correctly', () => {
    render(<ConfirmEmail />);

    const img = screen.getByAltText('Caixa de Cartas');
    const h1 = screen.getByRole('heading', { name: 'Confirme seu e-mail' });
    const paragraph = screen.getByText(
      'Quase pronto! Acesse seu e-mail e clique no link que enviamos para continuar. Se não encontrar nosso e-mail, verifique sua caixa de spam.',
    );

    expect(img).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });
});
