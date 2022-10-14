import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export type TextProps = PropsWithChildren<{
  size?: keyof typeof SizeClassNames;
  className?: string;
  asChild?: boolean;
}>;

enum SizeClassNames {
  sm = 'text-sm',
  md = 'text-base',
  lg = 'text-lg',
}

export function Text({ children, size = 'md', className, asChild }: TextProps) {
  const Component = asChild ? Slot : 'span';
  const sizeClassName = SizeClassNames[size];

  return (
    <Component className={clsx(sizeClassName, className)}>{children}</Component>
  );
}
