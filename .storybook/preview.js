import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Context Menu',
        [
          'Introduction',
          'Installation and setup',
          'Demo',
          ['Simple', 'Form'],
          'Documentation',
          [
            'In a nutshell',
            '[contextMenu]',
            '<context-menu>',
            '[contextMenuItem]',
            'Styling',
            'Keyboard navigation',
          ],
          'FAQ',
          'Changelog',
        ],
      ],
    },
  },
  docs: { inlineStories: true },
};
