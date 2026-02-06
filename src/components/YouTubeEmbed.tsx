"use client";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  description?: string;
  channel?: string;
  duration?: string;
}

export default function YouTubeEmbed({
  videoId,
  title,
  description,
  channel,
  duration,
}: YouTubeEmbedProps) {
  return (
    <div className="my-4 bg-panel rounded-lg border border-edge overflow-hidden hover:border-accent/30 transition-colors">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-medium text-heading text-sm leading-snug">{title}</h3>
            {channel && <p className="text-[11px] text-dim mt-1">{channel}</p>}
            {description && <p className="text-sm text-muted mt-2 leading-relaxed">{description}</p>}
          </div>
          {duration && (
            <span className="flex-shrink-0 text-[11px] px-2 py-0.5 bg-raised text-dim rounded font-mono border border-edge">
              {duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function VideoSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-7 h-7 rounded bg-red-500/10">
          <svg className="w-3.5 h-3.5 text-red-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
            <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white" />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-heading">{title || "관련 영상으로 배우기"}</h2>
      </div>
      <p className="text-sm text-dim mb-4">아래 영상을 통해 더 쉽게 이해할 수 있습니다. (영문)</p>
      {children}
    </section>
  );
}
