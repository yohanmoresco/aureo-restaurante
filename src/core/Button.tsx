/**
 * File: src/core/Button.tsx
 * Purpose: A standardized, reusable button component.
 * It encapsulates the design system's interactive elements (primary, secondary, etc.)
 * mapping directly to Tailwind CSS utility classes.
 */
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant mapped to the restaurant's premium theme */
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  /** If true, the button will take up the full width of its container */
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  // Base structural and interactive styles
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide focus-ring rounded-sm";

  // Visual variants mapping to the premium color system
  const variants = {
    primary:
      "bg-gradient-premium text-dark-1 hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-gold-3/20 font-semibold border border-transparent",
    secondary:
      "bg-transparent text-text-1 border border-border-gold hover:bg-gold-1/10",
    tertiary:
      "bg-transparent text-text-1 hover:text-gold-1 underline-offset-4 hover:underline",
    outline:
      "bg-transparent text-text-1 border border-border-gold hover:bg-gold-1/10 transition-colors",
  };

  // Dimensional configuration
  const sizeStyles = variant === "tertiary" ? "px-0 py-2" : "px-8 py-4";
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${widthStyle} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
