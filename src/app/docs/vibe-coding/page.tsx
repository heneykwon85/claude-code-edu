import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function VibeCodingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 2 · 바이브 코딩 기초"
        title="바이브 코딩 기초"
        description="AI와 자연어로 대화하며 코드를 작성하는 바이브 코딩의 기초를 배웁니다. CLAUDE.md 설정부터 MCP 연동까지 실습합니다."
      />

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">이 섹션에서 배우는 것</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <p className="text-body text-base leading-relaxed mb-4">
            바이브 코딩(Vibe Coding)은 코드를 한 줄씩 타이핑하는 대신,
            <strong className="text-heading"> AI에게 자연어로 원하는 것을 설명하여 소프트웨어를 만드는 새로운 방식</strong>입니다.
          </p>
          <p className="text-muted text-sm">
            이 섹션에서는 바이브 코딩의 기초 개념부터 CLAUDE.md 설정, MCP 연동, 필수 기능까지
            실습을 통해 체계적으로 배웁니다.
          </p>
        </div>
      </section>

      {/* Learning Path */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">학습 로드맵</h2>
        <div className="space-y-4">
          {[
            {
              step: "2-0",
              title: "왜 바이브 코딩인가?",
              desc: "바이브 코딩의 개념, 장점, 기존 코딩과의 차이를 이해합니다.",
              href: "/docs/vibe-coding/why-vibe-coding",
              icon: "💡",
              tag: "개념",
            },
            {
              step: "2-1",
              title: "CLAUDE.md란?",
              desc: "프로젝트의 '사용 설명서' 역할을 하는 CLAUDE.md의 구조와 작성법을 배웁니다.",
              href: "/docs/vibe-coding/claude-md",
              icon: "📄",
              tag: "개념",
            },
            {
              step: "2-2",
              title: "실습: /init으로 프로젝트 초기화",
              desc: "/init 명령어로 CLAUDE.md를 자동 생성하고 프로젝트를 설정합니다.",
              href: "/docs/vibe-coding/init-practice",
              icon: "🛠️",
              tag: "실습",
            },
            {
              step: "2-3",
              title: "MCP란?",
              desc: "Claude Code를 외부 서비스와 연결하는 MCP(Model Context Protocol)를 이해합니다.",
              href: "/docs/vibe-coding/what-is-mcp",
              icon: "🔌",
              tag: "개념",
            },
            {
              step: "2-4",
              title: "실습: MCP 설치하기",
              desc: "실제 MCP 서버를 설치하고 Claude Code와 연동합니다.",
              href: "/docs/vibe-coding/mcp-install",
              icon: "⚡",
              tag: "실습",
            },
            {
              step: "2-5",
              title: "필수 기능",
              desc: "Plan Mode, Auto Accept, /compact 등 실무에서 꼭 알아야 할 기능을 정리합니다.",
              href: "/docs/vibe-coding/essential-features",
              icon: "⭐",
              tag: "핵심",
            },
            {
              step: "2-6",
              title: "정리",
              desc: "바이브 코딩 기초 전체를 복습하고 다음 단계를 안내합니다.",
              href: "/docs/vibe-coding/summary",
              icon: "📋",
              tag: "정리",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 hover:shadow-sm transition-all group flex items-start gap-4"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-[10px] text-dim font-medium">{item.step}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
              <svg className="w-4 h-4 text-dim group-hover:text-accent transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/skills/deploy-share"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 배포 및 공유
        </Link>
        <Link
          href="/docs/vibe-coding/why-vibe-coding"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 왜 바이브 코딩인가?
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
