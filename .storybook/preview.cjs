import { initialize, mswDecorator } from 'msw-storybook-addon';
import { themes } from '@storybook/theming';

import '../src/styles/global.css';

// Initializing MSW
initialize({
  onUnhandledRequest: 'bypass',
  serviceWorker: {
    url:
      process.env.NODE_ENV === 'production'
        ? '/ignite-lab-design-system/mockServiceWorker.js'
        : '/mockServiceWorker.js',
  },
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
