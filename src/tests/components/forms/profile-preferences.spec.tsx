import ProfilePreferencesForm from '@/components/forms/profile-preferences';
import { render, screen } from '@testing-library/react';

describe('ProfilePreferences', () => {
  it('should render correctly', () => {
    render(<ProfilePreferencesForm />);

    const heading = screen.getByRole('heading', { name: 'Nos diga mais sobre você' });
    const paragraph = screen.getByText(
      'Diga mais sobre o seu momento atual, dizendo se tem algum curso ou faculdade em mente para que possamos encontrar os melhores mentores para você.',
    );

    const comboboxes = screen.getAllByRole('combobox');

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(comboboxes).toHaveLength(3);
  });

  it('should render correctly comboboxes', () => {
    render(<ProfilePreferencesForm />);

    const comboboxes = screen.getAllByRole('combobox');

    const [combobox1, combobox2, combobox3] = comboboxes;

    expect(combobox1.querySelector('label')).toHaveTextContent('Nível de escolaridade');
    expect(combobox2.querySelector('label')).toHaveTextContent('Curso de interesse');
    expect(combobox3.querySelector('label')).toHaveTextContent('Faculdade de interesse');
  });
});
