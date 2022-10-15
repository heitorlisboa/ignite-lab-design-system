import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import clsx from 'clsx';

export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  id: string;
  label: string;
  className?: string;
};

export function Checkbox({ id, label, className, ...props }: CheckboxProps) {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <CheckboxPrimitive.Root
        id={id}
        className="bg-gray-800 w-6 h-6 p-0.5 rounded"
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="w-5 h-5 text-cyan-500" weight="bold" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <label htmlFor={id} className="text-gray-200 text-sm">
        {label}
      </label>
    </div>
  );
}
