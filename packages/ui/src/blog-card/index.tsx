import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';

export interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  href?: string;
}

export function BlogCard({ slug, title, description, date, category, tags, readingTime, href }: BlogCardProps) {
  return (
    <Link href={href ?? `/blog/${slug}`} className="block group">
      <article className="glass rounded-xl px-6 py-5 hover:bg-white/5 transition-colors">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full flex-shrink-0">
            <Tag className="w-3 h-3" />{category}
          </span>
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate flex-1 min-w-0">{title}</h3>
          <span className="text-xs text-muted-foreground flex-shrink-0 hidden sm:block">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs font-mono bg-secondary text-secondary-foreground rounded">#{tag}</span>
            ))}
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-shrink-0">
            <span className="sm:hidden">{date}</span>
            <div className="flex items-center gap-1"><Clock className="w-3 h-3" />{readingTime}</div>
          </div>
        </div>
      </article>
    </Link>
  );
}
