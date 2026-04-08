import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './index';
import { Tag as TagIcon, BookOpen } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: { children: 'Category', variant: 'primary' },
};

export const WithIcon: Story = {
  args: {
    children: 'Category',
    variant: 'primary',
    icon: <TagIcon className="w-3 h-3" />,
  },
};

export const Series: Story = {
  args: {
    children: '시리즈',
    variant: 'primary',
    icon: <BookOpen className="w-3 h-3" />,
  },
};

export const Accent: Story = {
  args: { children: 'Accent', variant: 'accent' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', variant: 'secondary' },
};
