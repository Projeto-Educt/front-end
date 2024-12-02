import SendLinkToPasswordRecovery from '@/components/infos/send-link-to-password-recovery';
import { render, screen } from '@testing-library/react';

describe('SendLinkToPasswordRecovery', () => {
  it('should render correctly', () => {
    render(<SendLinkToPasswordRecovery />);

    const img = screen.getByRole('img', { name: 'Cartão de acesso com uma chave na frente' });
    const heading = screen.getByRole('heading', { name: 'Link para redefinir senha enviado' });
    const paragraph = screen.getByRole('paragraph');

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(
      'Confira seu e-mail e use o link que enviamos para confirmar sua nova senha.',
    );
  });
});
