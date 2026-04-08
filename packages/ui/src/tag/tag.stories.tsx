import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './index';

const meta: Meta<typeof Tag> = {
  title: 'Primitives/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'secondary', 'mono'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: { children: 'Spring Boot', variant: 'primary' },
};

export const Mono: Story = {
  args: { children: 'TypeScript', variant: 'mono' },
};

export const Accent: Story = {
  args: { children: 'Accent', variant: 'accent' },
};

export const HashTag: Story = {
  args: { children: '#react', variant: 'mono' },
};
