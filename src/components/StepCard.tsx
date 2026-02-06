interface StepCardProps {
  step: number;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function StepCard({
  step,
  title,
  description,
  children,
}: StepCardProps) {
  return (
    <div className="step-card bg-panel border border-edge rounded-lg p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-9 h-9 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center text-accent font-medium text-sm">
          {step}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-heading mb-1">{title}</h3>
          <p className="text-muted text-sm leading-relaxed mb-3">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
