interface ISecondaryButton {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

export default function SecondaryButton({ children, className, onClick }: ISecondaryButton) {
  return (
    <button
      className={`text-primary-600 bg-white border border-primary-600 rounded-md h-10 text-center w-full font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
