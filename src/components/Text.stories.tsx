import type { Meta, StoryObj } from '@storybook/react';

import { Text, type TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem Ipsum',
    size: 'md',
    asChild: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'] as TextProps['size'][],
      control: { type: 'inline-radio' },
    },
    asChild: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: false,
        },
      },
      control: false,
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    children: <p>Using the {'<p>'} HTML tag</p>,
    asChild: true,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
