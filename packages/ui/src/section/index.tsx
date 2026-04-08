import { cn } from '../utils/cn';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-24 border-t border-border', className)}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

export interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ title, titleHighlight, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
        {titleHighlight && (
          <> <span className="text-gradient">{titleHighlight}</span></>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
