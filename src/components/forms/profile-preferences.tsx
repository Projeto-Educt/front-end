import Select from '@/components/forms/fields/select';
import PrimaryButton from '../button/primary-button';
import SecondaryButton from '../button/secondary-button';

interface IProfilePreferences {
  onChange?: () => void;
}

export default function ProfilePreferencesForm({ onChange }: IProfilePreferences) {
  const backPage = () => {
    onChange?.();
  };

  return (
    <div className="max-w-md max-h-[544px] h-full flex flex-col justify-between mt-4 gap-3">
      <h1 className="text-3xl font-bold py-3 text-center sm:text-start">
        Nos diga mais sobre você
      </h1>
      <p className="text-center sm:text-start">
        Diga mais sobre o seu momento atual, dizendo se tem algum curso ou faculdade em mente para
        que possamos encontrar os melhores mentores para você.
      </p>
      <div className="flex flex-col gap-3 mt-2">
        <Select label="Nível de escolaridade" options={['item1', 'item2', 'item3']} />
        <Select label="Curso de interesse" options={['item1', 'item2', 'item3']} />
        <Select label="Faculdade de interesse" options={['item1', 'item2', 'item3']} />
        <div className="flex justify-between gap-8">
          <SecondaryButton onClick={backPage}>Voltar</SecondaryButton>
          <PrimaryButton type="submit">Finalizar</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
