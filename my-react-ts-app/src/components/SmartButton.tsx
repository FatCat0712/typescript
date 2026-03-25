import { type ButtonHTMLAttributes } from "react";

type SmartButtonProps = {
  variant?: "primary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SmartButton = ({
  variant = "primary",
  className,
  children,
  ...props
}: SmartButtonProps) => {
  const styles =
    variant === "ghost"
      ? "border border-gray-400 text-gray-200"
      : "bg-blue-600 text-white";
  return (
    <button className={`${styles} px-3 py-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default SmartButton;
