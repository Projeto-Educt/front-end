import AlertIcon from '@public/icons/Alert.svg';
import Image from 'next/image';

export interface IMessageError {
  messageError: string;
}

export function MessageError({ messageError }: IMessageError) {
  return (
    <div className="flex space-x-1 items-center absolute">
      <span>
        <Image src={AlertIcon} alt="Ícone de Alerta" className="w-3" />
      </span>
      <p className="message-error">{messageError}</p>
    </div>
  );
}
