import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox-example',
    label: 'Accept terms of service',
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
