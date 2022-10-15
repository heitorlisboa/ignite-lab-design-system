import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import type { Meta, StoryObj } from '@storybook/react';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  parameters: {
    a11y: {
      config: {
        /* This rule doesn't detect when the button is labelled by a label HTML
        tag, which is the case */
        rules: [{ id: 'button-name', enabled: false }],
      },
    },
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({ message: 'Login realizado!' }));
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByPlaceholderText('johndoe@example.com');
    const passwordInput = canvas.getByPlaceholderText('•••••••••••••••');
    const rememberMeCheckbox = canvas.getByRole('checkbox');
    const submitButton = canvas.getByRole('button');

    await userEvent.type(emailInput, 'janedoe@example.com', { delay: 100 });
    await userEvent.type(passwordInput, '123456', { delay: 100 });
    userEvent.click(rememberMeCheckbox);
    userEvent.click(submitButton);

    await waitFor(() => {
      const successMessage = canvas.getByText('Login realizado com sucesso!');
      expect(successMessage).toBeInTheDocument();
    });
  },
};
