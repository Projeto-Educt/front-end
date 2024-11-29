interface IPrimaryButton {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  className,
  onClick,
  type = 'button',
}: IPrimaryButton) {
  return (
    <button
      className={`text-white bg-primary-600 rounded-md h-10 text-center w-full font-bold ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
