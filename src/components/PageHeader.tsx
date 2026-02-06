interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export default function PageHeader({
  title,
  description,
  badge,
}: PageHeaderProps) {
  return (
    <div className="mb-12">
      {badge && (
        <span className="inline-block px-3 py-1 text-[11px] font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-4 tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4 tracking-tight leading-tight">
        {title}
      </h1>
      <p className="text-base text-muted leading-relaxed max-w-2xl">
        {description}
      </p>
      <div className="mt-8 h-px w-full bg-edge" />
    </div>
  );
}
