import ConfirmedEmail from '@/components/infos/confirmed-email';
import { render, screen } from '@testing-library/react';

describe('ConfirmedEmail', () => {
  it('should render correctly', () => {
    render(<ConfirmedEmail />);

    const img = screen.getByRole('img', { name: 'Carta aberta' });
    const heading = screen.getByRole('heading', { name: 'E-mail Confirmado!' });
    const paragraph = screen.getByRole('paragraph');
    const link = screen.getByRole('link', { name: 'Continuar' });

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(link).toBeInTheDocument();

    expect(paragraph).toHaveTextContent(
      'Seu e-mail foi confirmado com sucesso. Clique em continuar para finalizar seu cadastro.',
    );

    expect(link).toHaveAttribute('href', 'register-user/create-profile');
  });
});
