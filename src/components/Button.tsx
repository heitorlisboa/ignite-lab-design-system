import { Slot } from '@radix-ui/react-slot';
import type { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  asChild?: boolean;
}>;

export function Button({ children, asChild }: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className="
        bg-cyan-500 hover:bg-cyan-400
        text-black font-sans font-semibold
        flex items-center justify-center
        w-full px-4 py-3 rounded transition-colors
      "
    >
      {children}
    </Component>
  );
}
