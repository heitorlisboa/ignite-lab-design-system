import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { FC, InputHTMLAttributes, PropsWithChildren } from 'react';

export type TextInputRootProps = PropsWithChildren<{
  className?: string;
}>;

function TextInputRoot({ children, className }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        'bg-gray-800 relative flex items-center gap-3 w-full h-12',
        'ring-2 ring-transparent focus-within:ring-cyan-500',
        'ring-inset rounded transition-shadow',
        className
      )}
    >
      {children}
    </div>
  );
}

(TextInputRoot as FC).displayName = 'TextInput.Root';

export type TextInputIconProps = PropsWithChildren;

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="absolute left-4 w-6 h-6 text-gray-400 pointer-events-none">
      {children}
    </Slot>
  );
}

(TextInputIcon as FC).displayName = 'TextInput.Icon';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput({ type = 'text', ...props }: TextInputInputProps) {
  return (
    <input
      className="
        bg-transparent text-gray-200 placeholder:text-gray-400 text-sm
        w-full h-full px-4 last:pl-[3.25rem] outline-none
      "
      type={type}
      {...props}
    />
  );
}

(TextInputInput as FC).displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
