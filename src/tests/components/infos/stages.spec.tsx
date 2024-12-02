import Stages from '@/components/infos/stages';
import { render, screen } from '@testing-library/react';

describe('Stages', () => {
  it('should render correctly', () => {
    render(<Stages totalStages={4} />);

    const stages = screen.getAllByTestId('stage-item');

    stages.forEach((_, index) => {
      const stageNumber = screen.getByText(`${index + 1}`);
      expect(stageNumber).toBeInTheDocument();
    });
  });

  it('should render correctly with current stage', () => {
    render(<Stages totalStages={2} currentStage={1} />);

    const stages = screen.getAllByTestId('stage-item');

    expect(stages).toHaveLength(2);

    const [stage1, stage2] = stages;

    const img = stage1.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Check');

    expect(stage2).toHaveTextContent('2');
  });
});
