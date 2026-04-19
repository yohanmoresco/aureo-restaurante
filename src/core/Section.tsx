import type { ReactNode, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  children: ReactNode;
  'aria-labelledby'?: string;
  disablePadding?: boolean;
}

export function Section({ id, children, className = '', disablePadding = false, ...props }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`${disablePadding ? '' : 'py-24 md:py-32'} ${className}`} 
      {...props}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1440px] w-full">
        {children}
      </div>
    </section>
  );
}
