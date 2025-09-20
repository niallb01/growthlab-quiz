interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-gray-800 text-white hover:bg-gray-900 shadow-sm",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children || "Button"}
    </button>
  );
}
