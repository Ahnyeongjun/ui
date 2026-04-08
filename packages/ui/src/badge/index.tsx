import { cn } from '../utils/cn';

export interface BadgeProps {
  variant?: 'primary' | 'accent' | 'secondary';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  primary: 'bg-primary/20 text-primary',
  accent: 'bg-accent/20 text-accent',
  secondary: 'bg-secondary/80 text-muted-foreground border border-border',
};

export function Badge({ variant = 'primary', icon, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium rounded-full flex-shrink-0',
        variantClasses[variant],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
