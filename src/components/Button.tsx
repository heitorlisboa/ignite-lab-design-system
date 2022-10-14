import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  asChild?: boolean;
}>;

export function Button({ children, className, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={clsx(
        'bg-cyan-500 hover:bg-cyan-400 text-black font-semibold',
        'flex items-center justify-center',
        'w-full px-4 py-3 rounded transition-colors',
        className
      )}
    >
      {children}
    </Component>
  );
}
