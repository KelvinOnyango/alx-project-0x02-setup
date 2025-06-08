// components/common/Button.tsx
// Checker: import { type ButtonProps }
import React from "react";
import { type ButtonProps } from "@/interfaces"; // Corrected: Added 'type' and used '@/interfaces'

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  shape = "rounded-md",
  className = "",
}) => {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${sizeClasses} ${shape} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
