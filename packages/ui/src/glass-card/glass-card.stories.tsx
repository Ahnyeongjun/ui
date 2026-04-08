import type { Meta, StoryObj } from '@storybook/react';
import { GlassCard } from './index';

const meta: Meta<typeof GlassCard> = {
  title: 'Primitives/GlassCard',
  component: GlassCard,
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#0f1923' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GlassCard>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2">카드 제목</h3>
        <p className="text-sm text-muted-foreground">카드 내용입니다.</p>
      </div>
    ),
  },
};

export const WithDelay: Story = {
  args: {
    delay: 0.2,
    children: <p className="text-sm">애니메이션 딜레이 0.2s</p>,
  },
};

export const AsLink: Story = {
  args: {
    href: '#',
    target: '_blank',
    children: <p className="text-sm text-primary">링크로 감싸진 카드 →</p>,
  },
};
