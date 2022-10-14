import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox-example',
    label: 'Accept terms of service',
  },
  parameters: {
    a11y: {
      config: {
        /* This rule doesn't detect when the button is labelled by a label HTML
        tag, which is the case */
        rules: [{ id: 'button-name', enabled: false }],
      },
    },
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
