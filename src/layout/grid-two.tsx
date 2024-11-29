interface IColumnGrid {
  className?: string;
  children?: React.ReactNode;
}
interface IGridTwoLayout {
  columnOne?: IColumnGrid;
  columnTwo?: IColumnGrid;
  className?: string;
}

export default function GridTwoLayout({ columnOne, columnTwo }: IGridTwoLayout = {}) {
  return (
    <section className={`block sm:flex justify-between w-full h-full`}>
      <div className={`w-full h-full ${columnOne?.className}`}>{columnOne?.children}</div>
      <div className={` w-full h-full hidden sm:block  ${columnTwo?.className}`}>
        {columnTwo?.children}
      </div>
    </section>
  );
}
