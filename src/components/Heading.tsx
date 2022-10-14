import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

export type HeadingProps = PropsWithChildren<{
  size?: keyof typeof SizeClassNames;
  className?: string;
  asChild?: boolean;
}>;

enum SizeClassNames {
  sm = 'text-xl',
  md = 'text-2xl',
  lg = 'text-3xl',
}

export function Heading({
  children,
  size = 'md',
  className,
  asChild,
}: HeadingProps) {
  const Component = asChild ? Slot : 'h2';
  const sizeClassName = SizeClassNames[size];

  return (
    <Component className={clsx(sizeClassName, className)}>{children}</Component>
  );
}
