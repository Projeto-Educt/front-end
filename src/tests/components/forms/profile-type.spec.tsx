import ProfileTypeForm from '@/components/forms/profile-type';
import { fireEvent, render, screen } from '@testing-library/react';

describe('ProfileTypeForm', () => {
  it('should render correctly', () => {
    render(<ProfileTypeForm />);

    const heading = screen.getByRole('heading', { name: 'Qual é o seu perfil?' });
    const paragraph = screen.getByText(
      'Cadastre-se como mentor(a) ou aluno(a) e faça parte da nossa comunidade. Transforme sua jornada de aprendizado ou compartilhe seu conhecimento.',
    );
    const cardsRadio = screen.getAllByTestId('card-choose-profile');

    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(cardsRadio).toHaveLength(2);
  });

  it('should render correctly cardsRadio', () => {
    render(<ProfileTypeForm />);

    const cardsRadio = screen.getAllByTestId('card-choose-profile');

    const [card1, card2] = cardsRadio;

    const inputMentor = card1.querySelector('input');
    const inputAluno = card2.querySelector('input');

    expect(inputMentor).toHaveAttribute('value', 'mentor');
    expect(inputMentor).toHaveAttribute('name', 'profile');
    expect(inputAluno).toHaveAttribute('value', 'aluno');
    expect(inputAluno).toHaveAttribute('name', 'profile');
  });

  it('should select only one profile', () => {
    render(<ProfileTypeForm />);

    const cardsRadio = screen.getAllByTestId('card-choose-profile');
    const inputMentor = cardsRadio[0].querySelector('input') as HTMLInputElement;
    const inputAluno = cardsRadio[1].querySelector('input') as HTMLInputElement;

    expect(inputMentor).not.toBeChecked();
    expect(inputAluno).not.toBeChecked();

    fireEvent.click(inputMentor);
    expect(inputMentor).toBeChecked();
    expect(inputAluno).not.toBeChecked();

    fireEvent.click(inputAluno);
    expect(inputMentor).not.toBeChecked();
    expect(inputAluno).toBeChecked();
  });
});
