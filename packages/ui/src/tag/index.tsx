import { cn } from '../utils/cn';

export interface TagProps {
  variant?: 'primary' | 'accent' | 'secondary' | 'mono';
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<NonNullable<TagProps['variant']>, string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
  secondary: 'bg-secondary text-secondary-foreground',
  mono: 'bg-secondary text-secondary-foreground font-mono',
};

export function Tag({ variant = 'secondary', children, className }: TagProps) {
  return (
    <span className={cn('px-2 py-1 text-xs rounded', variantClasses[variant], className)}>
      {children}
    </span>
  );
}
