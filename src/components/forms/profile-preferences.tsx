import Select from '@/components/forms/fields/select';

interface IProfilePreferences {
  onChange?: () => void;
}

export default function ProfilePreferencesForm({ onChange }: IProfilePreferences) {
  const backPage = () => {
    onChange?.();
  };

  return (
    <div className="max-w-md max-h-[544px] h-full flex flex-col justify-between mt-4 gap-3">
      <h1 className="primary-title">Nos diga mais sobre você</h1>

      <p className="paragraph-description">
        Diga mais sobre o seu momento atual, dizendo se tem algum curso ou faculdade em mente para
        que possamos encontrar os melhores mentores para você.
      </p>
      <div className="flex flex-col gap-3 mt-2">
        <Select label="Nível de escolaridade" options={['item1', 'item2', 'item3']} />
        <Select label="Curso de interesse" options={['item1', 'item2', 'item3']} />
        <Select label="Faculdade de interesse" options={['item1', 'item2', 'item3']} />
        <div className="flex justify-between gap-8">
          <button className="secondary-button" onClick={backPage}>
            Voltar
          </button>
          <button className="primary-button" type="submit">
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
}
