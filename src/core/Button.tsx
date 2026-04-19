import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  fullWidth?: boolean;
}

export function Button({ variant = 'primary', fullWidth, className = '', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide focus-ring rounded-sm";
  
  const variants = {
    primary: "bg-primary text-base-100 hover:bg-opacity-90 hover:scale-[1.02] shadow-lg shadow-primary/20",
    secondary: "bg-base-100 text-text-primary border border-white/10 hover:border-primary/50 hover:bg-base-200",
    tertiary: "bg-transparent text-text-primary hover:text-primary underline-offset-4 hover:underline",
    outline: "bg-transparent text-text-primary border border-white/10 hover:border-white transition-colors"
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
