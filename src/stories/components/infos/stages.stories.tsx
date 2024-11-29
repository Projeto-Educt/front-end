import type { IStages } from '@/components/infos/stages';
import Stages from '@/components/infos/stages';

export default {
  title: 'infos/stages',
  component: Stages,
  args: {
    totalStages: 4,
    currentStage: 0,
  },
  argTypes: {
    totalStages: { type: 'number' },
    currentStage: { type: 'number' },
  },
};

export const TemplateWithoutStagesCompleted = (args: IStages) => {
  return (
    <div>
      <Stages {...args} />
    </div>
  );
};

export const TemplateWithStagesCompleted = (args: IStages) => {
  return (
    <div>
      <Stages {...args} />
    </div>
  );
};

TemplateWithStagesCompleted.args = {
  currentStage: 2,
};
