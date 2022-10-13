import type { Meta, StoryObj } from '@storybook/react';

import { Heading, type HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem Ipsum',
    size: 'md',
    asChild: false,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'] as HeadingProps['size'][],
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    children: <h1>Using the {'<h1>'} HTML tag</h1>,
    asChild: true,
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
