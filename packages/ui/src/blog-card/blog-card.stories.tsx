import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './index';

const meta: Meta<typeof BlogCard> = {
  title: 'Components/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    slug: 'fastapi-testing',
    title: 'FastAPI 테스팅 완벽 가이드 - 단위/통합/E2E/TDD',
    description: 'FastAPI 애플리케이션의 테스팅 전략을 단계별로 알아봅니다. pytest를 활용한 단위 테스트부터 E2E 테스트까지 실전 예제와 함께 설명합니다.',
    date: '2025.03.15',
    category: 'Python/FastAPI',
    tags: ['FastAPI', 'Python', 'Testing', 'TDD'],
    readingTime: '12분',
  },
};

export const ShortContent: Story = {
  args: {
    slug: 'spring-gateway',
    title: 'Spring Cloud Gateway 설정',
    description: 'MSA 환경에서 API Gateway 구성하기.',
    date: '2025.01.10',
    category: 'Kotlin/Spring',
    tags: ['Spring', 'MSA'],
    readingTime: '5분',
  },
};
