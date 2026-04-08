import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from './index';

const meta: Meta<typeof Timeline> = {
  title: 'Layout/Timeline',
  component: Timeline,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem
        title="위성영상 분석 플랫폼 MSA 전환"
        period="2023.06 ~ 2024.03"
        tags={['Spring Boot', 'Kubernetes', 'Kafka']}
        href="/projects/simvex"
        delay={0}
      >
        <div className="space-y-4 mb-5">
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-2">백엔드 개발</h5>
            <ul className="space-y-1 pl-1">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1.5">·</span>
                모놀리식 서비스를 12개 마이크로서비스로 분리
              </li>
            </ul>
          </div>
        </div>
      </TimelineItem>
      <TimelineItem
        title="인증 시스템 고도화"
        period="2022.09 ~ 2023.02"
        tags={['Spring Security', 'JWT', 'Redis']}
        delay={0.15}
      >
        <p className="text-sm text-muted-foreground mb-4">JWT 기반 인증 시스템 설계 및 구현</p>
      </TimelineItem>
    </Timeline>
  ),
};
