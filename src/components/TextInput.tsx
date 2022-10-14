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
        'bg-gray-800 flex items-center gap-3 w-full h-12 px-4',
        'border-2 border-cyan-500 border-opacity-0 rounded',
        'focus-within:border-opacity-100 transition-colors',
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
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

(TextInputIcon as FC).displayName = 'TextInput.Icon';

export type TextInputInputProps = InputHTMLAttributes<HTMLInputElement>;

function TextInputInput({ type = 'text', ...props }: TextInputInputProps) {
  return (
    <input
      className="
        bg-transparent text-gray-200 placeholder:text-gray-400 text-sm
        outline-none flex-1
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
