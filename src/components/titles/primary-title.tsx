export interface IPrimaryTitle {
  title: string;
}

export default function PrimaryTitle({ title }: IPrimaryTitle) {
  return <h1 className="text-3xl font-bold text-primary-600 text-center sm:text-start">{title}</h1>;
}
