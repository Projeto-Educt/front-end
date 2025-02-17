import { MessageError } from '@/components/infos/message-error';
import { render, screen } from '@testing-library/react';

describe('MessageError', () => {
  it('should render correctly', () => {
    render(<MessageError messageError="Something went wrong" />);

    const img = screen.getByRole('img', { name: 'Ícone de Alerta' });
    const paragraph = screen.getByRole('paragraph');

    expect(img).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Something went wrong');
  });
});
