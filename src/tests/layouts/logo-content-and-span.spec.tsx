import LogoContentAndSpan from '@/layout/logo-content';
import { render } from '@testing-library/react';

describe('LogoContentAndSpan', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <LogoContentAndSpan textSpan="Para recuperar sua senha, vocé concorda com nossos Termos de Serviço e Política de Privacidade.">
        <h1>Test</h1>
      </LogoContentAndSpan>,
    );
    expect(container).toMatchSnapshot();
  });
});
