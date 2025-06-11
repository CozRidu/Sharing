import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseClass = 'btn';
    const variantClass =
      variant === 'primary' || variant === 'outline'
        ? 'btn-primary'
        : 'btn-secondary';
    const sizeClass =
      size === 'sm'
        ? 'h-8 px-3 text-sm'
        : size === 'lg'
        ? 'h-12 px-6 text-lg'
        : 'h-10 px-4 text-base';
    return (
      <button
        ref={ref}
        className={cn(baseClass, variantClass, sizeClass, className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;