import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../packages/ui/src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'next/link': require.resolve('./mocks/next-link.tsx'),
          'next/image': require.resolve('./mocks/next-image.tsx'),
          'next/navigation': require.resolve('./mocks/next-navigation.ts'),
        },
      },
    });
  },
};

export default config;
