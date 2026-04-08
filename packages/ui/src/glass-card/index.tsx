import { cn } from '../utils/cn';

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function GlassCard({ children, className, delay, href, target, rel, onClick }: GlassCardProps) {
  const classes = cn('glass rounded-xl p-6 animate-fade-in', className);
  const style = delay !== undefined ? { animationDelay: `${delay}s` } : undefined;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} style={style}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} style={style} onClick={onClick}>
      {children}
    </div>
  );
}
