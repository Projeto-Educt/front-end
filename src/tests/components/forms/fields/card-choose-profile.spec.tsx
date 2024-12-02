import type { ICardChooseProfile } from '@/components/forms/fields/card-choose-profile';
import CardChooseProfile from '@/components/forms/fields/card-choose-profile';
import { render, screen } from '@testing-library/react';

const data: ICardChooseProfile = {
  title: 'Jest',
  image: {
    src: 'https://via.placeholder.com/150',
    alt: 'image Alt',
  },
  description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
  inputRadio: {
    value: 'value',
    name: 'jestRadio',
  },
};

describe('CardChooseProfile', () => {
  it('should render correctly', () => {
    render(<CardChooseProfile {...data} />);

    const icon = screen.getByRole('img', { name: data.image.alt });
    const title = screen.getByRole('heading', { name: data.title });
    const description = screen.getByText(data.description);
    const input = screen.getByRole('radio');

    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute('name', data.inputRadio.name);
  });
});
