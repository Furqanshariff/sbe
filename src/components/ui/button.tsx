import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-green text-navy hover:bg-brand-green/90 shadow-sm hover:-translate-y-0.5',
        primaryDarkText:
          'bg-brand-green-dark text-white hover:bg-brand-green-dark/90 shadow-sm hover:-translate-y-0.5',
        navy: 'bg-navy text-white hover:bg-navy-muted shadow-sm hover:-translate-y-0.5',
        ocean: 'bg-ocean text-white hover:bg-ocean-light shadow-sm hover:-translate-y-0.5',
        outlineLight:
          'border border-white/35 bg-transparent text-white hover:bg-white/10',
        outlineNavy:
          'border border-navy/25 bg-white text-navy hover:bg-surface hover:border-navy/40',
        ghost: 'text-navy hover:bg-surface',
      },
      size: {
        default: 'min-h-[44px] px-5 py-2.5',
        sm: 'min-h-[44px] px-4 text-xs',
        lg: 'min-h-[48px] px-7 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
