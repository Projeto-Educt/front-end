import ContainerProfilePreferences from '@/components/containers/container-profile-preferences';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ContainerProfilePreferences', () => {
  it('should render correctly', () => {
    render(<ContainerProfilePreferences />);

    const heading = screen.getByRole('heading', { name: 'Qual é o seu perfil?' });
    const [stagesCompleted, description, descMentor, descAluno] = screen.getAllByRole('paragraph');
    const button = screen.getByRole('button', { name: 'Continuar' });

    expect(heading).toBeInTheDocument();
    expect(stagesCompleted).toHaveTextContent('0/2 - Etapas completadas');
    expect(description).toHaveTextContent(
      'Cadastre-se como mentor(a) ou aluno(a) e faça parte da nossa comunidade. Transforme sua jornada de aprendizado ou compartilhe seu conhecimento.',
    );
    expect(descMentor).toHaveTextContent(
      'Ajude estudantes a se descobrirem! Compartilhe suas experiências e oriente-os com dicas práticas para o futuro.',
    );
    expect(descAluno).toHaveTextContent(
      'Descubra novas oportunidades e direcione sua carreira. Aprenda com especialistas e receba orientações valiosas de quem já passou pelo que você está vivendo.',
    );
    expect(button).toBeInTheDocument();
  });

  it('Should change component and stage', () => {
    render(<ContainerProfilePreferences />);

    let heading = screen.queryByRole('heading', { name: 'Nos diga mais sobre você' });

    const [stagesCompleted, description, descMentor, descAluno] = screen.getAllByRole('paragraph');
    const [inputMentor] = screen.getAllByRole('radio');
    const button = screen.getByRole('button', { name: 'Continuar' });

    expect(heading).not.toBeInTheDocument();
    expect(stagesCompleted).toHaveTextContent('0/2 - Etapas completadas');

    fireEvent.click(inputMentor);
    fireEvent.click(button);

    expect(stagesCompleted).toHaveTextContent('1/2 - Etapas completadas');
    expect(description).not.toBeInTheDocument();
    expect(descMentor).not.toBeInTheDocument();
    expect(descAluno).not.toBeInTheDocument();

    heading = screen.queryByRole('heading', { name: 'Nos diga mais sobre você' });
    expect(heading).toBeInTheDocument();
  });

  it('Should change component and stage clicked tto back', () => {
    render(<ContainerProfilePreferences />);

    let heading = screen.queryByRole('heading', { name: 'Nos diga mais sobre você' });

    const [stagesCompleted, , descMentor] = screen.getAllByRole('paragraph');
    const [inputMentor] = screen.getAllByRole('radio');
    const button = screen.getByRole('button', { name: 'Continuar' });

    expect(heading).not.toBeInTheDocument();
    expect(stagesCompleted).toHaveTextContent('0/2 - Etapas completadas');

    fireEvent.click(inputMentor);
    fireEvent.click(button);

    expect(stagesCompleted).toHaveTextContent('1/2 - Etapas completadas');
    expect(descMentor).not.toBeInTheDocument();

    heading = screen.getByRole('heading', { name: 'Nos diga mais sobre você' });
    expect(heading).toBeInTheDocument();

    const buttonBack = screen.getByRole('button', { name: 'Voltar' });
    fireEvent.click(buttonBack);

    expect(stagesCompleted).toHaveTextContent('0/2 - Etapas completadas');

    heading = screen.getByRole('heading', { name: 'Qual é o seu perfil?' });
    expect(heading).toBeInTheDocument();
  });
});
