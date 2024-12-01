interface IColumnGrid {
  className?: string;
  children?: React.ReactNode;
}

export interface IGridTwoLayout {
  columnOne: IColumnGrid;
  columnTwo: IColumnGrid;
  className?: string;
}

export default function GridTwoLayout({ columnOne, columnTwo }: IGridTwoLayout) {
  return (
    <section className={`block space-y-10 sm:space-y-0 sm:flex justify-between w-full h-full`}>
      <div className={`w-full h-full ${columnOne?.className}`}>{columnOne?.children}</div>
      <div className={` w-full h-full ${columnTwo?.className}`}>{columnTwo?.children}</div>
    </section>
  );
}
