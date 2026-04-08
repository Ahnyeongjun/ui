'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
      <div className="space-y-10">{children}</div>
    </div>
  );
}

export interface TimelineItemProps {
  title: string;
  period?: string;
  tags?: string[];
  href?: string;
  linkLabel?: string;
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}

export function TimelineItem({
  title,
  period,
  tags,
  href,
  linkLabel = '자세히 보기',
  children,
  delay,
  className,
}: TimelineItemProps) {
  return (
    <div
      className={cn('relative pl-10 animate-fade-in', className)}
      style={delay !== undefined ? { animationDelay: `${delay}s` } : undefined}
    >
      <div className="absolute left-[9px] top-1.5 w-[13px] h-[13px] rounded-full bg-primary border-2 border-background" />
      <div className="glass rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
          {period && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
              <Calendar className="w-3.5 h-3.5" />
              {period}
            </div>
          )}
        </div>

        {children}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-4"
          >
            {linkLabel} <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
