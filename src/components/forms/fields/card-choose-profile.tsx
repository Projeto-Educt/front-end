import '@/styles/components/forms/fields/card-choose-profile.scss';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type InputRadio = {
  value: string;
  name: string;
};

export interface ICardChooseProfile {
  title: string;
  description: string;
  image: string | StaticImageData;
  inputRadio: InputRadio;
  onChange?: (value: string) => void;
}

export default function CardChooseProfile({
  description,
  image,
  title,
  inputRadio,
  onChange,
}: ICardChooseProfile) {
  return (
    <div className="flex gap-3 border border-gray-200 p-6 rounded-lg justify-between card">
      <div className="flex gap-3">
        <Image className="w-6 h-6 mt-1" src={image} alt="Aluno" width={24} height={24} />
        <div>
          <h2 className="font-bold">{title}</h2>
          <p className="text-xs text-gray-500 paragraph">{description}</p>
        </div>
      </div>
      <input
        className="cursor-pointer input-radio"
        type="radio"
        id={inputRadio.value}
        name={inputRadio.name}
        value={inputRadio.value}
        onChange={() => onChange?.(inputRadio.value)}
      />
    </div>
  );
}
