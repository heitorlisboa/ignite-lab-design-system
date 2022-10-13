import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
    asChild: false,
  },
  argTypes: {
    asChild: {
      table: {
        defaultValue: {
          summary: false,
        },
      },
      control: false,
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    children: (
      <a
        href="https://github.com/heitorlisboa"
        target="_blank"
        rel="noreferrer"
      >
        Using an {'<a>'} HTML tag to my GitHub profile
      </a>
    ),
    asChild: true,
  },
  argTypes: {
    children: { control: false },
  },
};
