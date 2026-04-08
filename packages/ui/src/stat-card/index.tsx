import { cn } from '../utils/cn';

export interface StatCardProps {
  icon?: React.ReactNode;
  title: string;
  loading?: boolean;
  children: React.ReactNode;
  href?: string;
  delay?: number;
  className?: string;
}

export function StatCard({ icon, title, loading, children, href, delay, className }: StatCardProps) {
  const classes = cn(
    'glass rounded-xl p-6 animate-fade-in',
    href && 'hover:border-primary/50 transition-colors',
    className,
  );
  const style = delay !== undefined ? { animationDelay: `${delay}s` } : undefined;

  const inner = (
    <>
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      {loading ? (
        <div className="text-center text-muted-foreground">...</div>
      ) : (
        children
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
        {inner}
      </a>
    );
  }

  return (
    <div className={classes} style={style}>
      {inner}
    </div>
  );
}
