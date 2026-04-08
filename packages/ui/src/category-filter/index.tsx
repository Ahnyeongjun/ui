'use client';

import Link from 'next/link';

export interface CategoryFilterProps {
  categories: string[];
  currentCategory?: string;
  allHref?: string;
  categoryHrefPrefix?: string;
}

export function CategoryFilter({
  categories,
  currentCategory,
  allHref = '/blog',
  categoryHrefPrefix = '/blog/category/',
}: CategoryFilterProps) {
  const isAllActive = !currentCategory;

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={allHref}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          isAllActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
        }`}
      >
        전체
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={`${categoryHrefPrefix}${encodeURIComponent(category)}`}
          className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
            currentCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
