import { Slot } from '@radix-ui/react-slot';
import type { PropsWithChildren } from 'react';

export type HeadingProps = PropsWithChildren<{
  size?: keyof typeof SizeClassNames;
  asChild?: boolean;
}>;

enum SizeClassNames {
  sm = 'text-xl',
  md = 'text-2xl',
  lg = 'text-3xl',
}

export function Heading({ children, size = 'md', asChild }: HeadingProps) {
  const Component = asChild ? Slot : 'h2';
  const sizeClassName = SizeClassNames[size];

  return <Component className={sizeClassName}>{children}</Component>;
}
