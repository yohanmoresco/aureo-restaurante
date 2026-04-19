import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  fullWidth?: boolean;
}

export function Button({ variant = 'primary', fullWidth, className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide focus-ring rounded-sm";
  
  const variants = {
    primary: "bg-gradient-premium text-dark-1 hover:brightness-110 hover:scale-[1.02] shadow-lg shadow-gold-3/20 font-semibold border border-transparent",
    secondary: "bg-transparent text-text-1 border border-border-gold hover:bg-gold-1/10",
    tertiary: "bg-transparent text-text-1 hover:text-gold-1 underline-offset-4 hover:underline",
    outline: "bg-transparent text-text-1 border border-border-gold hover:bg-gold-1/10 transition-colors"
  };

  const sizeStyles = variant === 'tertiary' ? "px-0 py-2" : "px-8 py-4";
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
