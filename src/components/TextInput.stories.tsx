import { Envelope } from 'phosphor-react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput, type TextInputInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Input,
  args: {
    placeholder: 'Enter your e-mail address',
    type: 'email',
  },
  argTypes: {
    type: {
      table: {
        defaultValue: {
          summary: 'text' as TextInputInputProps['type'],
        },
      },
    },
  },
} as ComponentMeta<typeof TextInput.Input>;

export const Default: ComponentStory<typeof TextInput.Input> = (props) => (
  <TextInput.Root>
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>
    <TextInput.Input {...props} />
  </TextInput.Root>
);

export const WithoutIcon: ComponentStory<typeof TextInput.Input> = (props) => (
  <TextInput.Root>
    <TextInput.Input {...props} />
  </TextInput.Root>
);
