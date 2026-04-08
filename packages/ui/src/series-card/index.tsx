'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, ChevronDown, ChevronRight } from 'lucide-react';
import { Tag } from '../tag';
import { Badge } from '../badge';

export interface SeriesPost {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
}

export interface SeriesGroup {
  name: string;
  posts: SeriesPost[];
}

export interface SeriesCardProps {
  series: SeriesGroup;
  defaultOpen?: boolean;
  postHrefPrefix?: string;
}

export function SeriesCard({ series, defaultOpen = false, postHrefPrefix = '/blog/' }: SeriesCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { name, posts } = series;
  const firstPost = posts[0];
  const totalReadingTime = posts.reduce((acc, post) => acc + (parseInt(post.readingTime) || 0), 0);

  return (
    <article className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 hover:bg-white/5 transition-colors text-left"
      >
        <div className="flex items-center gap-3 mb-2">
          <Badge icon={<BookOpen className="w-3 h-3" />}>시리즈</Badge>
          <h3 className="text-base font-semibold text-foreground truncate flex-1 min-w-0">{name}</h3>
          <span className="text-xs text-muted-foreground flex-shrink-0 hidden sm:block">{firstPost.date}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          {firstPost.category} 카테고리 · {posts.length}편의 시리즈
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {firstPost.tags.slice(0, 3).map((tag) => (
              <Tag key={tag} variant="mono">#{tag}</Tag>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-shrink-0">
            <span className="sm:hidden">{firstPost.date}</span>
            {totalReadingTime > 0 && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />총 {totalReadingTime}분
              </div>
            )}
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? '' : '-rotate-90'}`}
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-border/50 px-6 py-2">
          <div className="space-y-0.5">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`${postHrefPrefix}${post.slug}`}
                className="group/item flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors truncate">
                    {post.title}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-muted-foreground hidden sm:block">{post.readingTime}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/item:text-primary group-hover/item:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
