import { Slot } from '@radix-ui/react-slot';
import type { PropsWithChildren } from 'react';

export type TextProps = PropsWithChildren<{
  size?: keyof typeof SizeClassNames;
  asChild?: boolean;
}>;

enum SizeClassNames {
  sm = 'text-sm',
  md = 'text-base',
  lg = 'text-lg',
}

export function Text({ children, size = 'md', asChild }: TextProps) {
  const Component = asChild ? Slot : 'span';
  const sizeClassName = SizeClassNames[size];

  return <Component className={sizeClassName}>{children}</Component>;
}
