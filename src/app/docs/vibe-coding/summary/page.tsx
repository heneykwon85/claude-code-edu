import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function SummaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-6"
        title="정리"
        description="바이브 코딩 기초에서 배운 내용을 복습하고, 다음 단계를 안내합니다."
      />

      {/* What we learned */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">이 섹션에서 배운 것</h2>
        <div className="space-y-4">
          {[
            { step: "2-0", title: "왜 바이브 코딩인가?", summary: "AI와 자연어로 대화하며 코드를 작성하는 새로운 패러다임. 개발 속도 혁신, 진입 장벽 제거, 반복 작업 자동화.", icon: "💡" },
            { step: "2-1", title: "CLAUDE.md란?", summary: "프로젝트의 규칙과 기술 스택을 정의하는 AI 사용 설명서. 5KB 이하로 간결하게, 구체적으로 작성.", icon: "📄" },
            { step: "2-2", title: "실습: /init", summary: "/init으로 CLAUDE.md를 자동 생성하고, 직접 검토·수정하여 프로젝트에 최적화.", icon: "🛠️" },
            { step: "2-3", title: "MCP란?", summary: "Claude Code를 GitHub, Slack, DB 등 외부 서비스와 연결하는 확장 프로토콜.", icon: "🔌" },
            { step: "2-4", title: "실습: MCP 설치", summary: "claude mcp add 명령어로 Filesystem, Fetch 등 MCP 서버를 설치하고 활용.", icon: "⚡" },
            { step: "2-5", title: "필수 기능", summary: "Plan Mode(Shift+Tab), /compact, ESC, /clear 등 실무 필수 단축키와 명령어.", icon: "⭐" },
          ].map((item) => (
            <div key={item.step} className="bg-panel rounded-xl p-4 border border-edge flex items-start gap-4">
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] text-dim font-medium">{item.step}</span>
                  <h3 className="font-semibold text-heading text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-muted">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">자가 점검 체크리스트</h2>
        <div className="bg-panel rounded-xl p-5 border border-edge">
          <div className="space-y-3">
            {[
              "바이브 코딩의 개념과 기존 코딩과의 차이를 설명할 수 있다",
              "CLAUDE.md의 역할과 기본 구조를 이해한다",
              "/init 명령어로 CLAUDE.md를 생성하고 수정할 수 있다",
              "MCP가 무엇인지, 왜 필요한지 설명할 수 있다",
              "claude mcp add 명령어로 MCP 서버를 설치할 수 있다",
              "Plan Mode, /compact, ESC 등 필수 기능을 사용할 수 있다",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded border border-accent/30 bg-accent/5 flex items-center justify-center text-[10px] text-accent font-bold mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Workflow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">핵심 워크플로우 요약</h2>
        <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20">
          <div className="grid grid-cols-5 gap-2 text-center">
            {[
              { step: "1", label: "/init", sub: "프로젝트 설정" },
              { step: "→", label: "", sub: "" },
              { step: "2", label: "MCP 설치", sub: "외부 연동" },
              { step: "→", label: "", sub: "" },
              { step: "3", label: "바이브 코딩!", sub: "자연어로 개발" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                {item.label ? (
                  <>
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold mb-1">
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold text-heading">{item.label}</span>
                    <span className="text-[10px] text-muted">{item.sub}</span>
                  </>
                ) : (
                  <span className="text-accent text-lg">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">다음 단계</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/docs/basics" className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 transition-all group block">
            <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">📚 기본 사용법</h3>
            <p className="text-xs text-muted">Claude Code의 기본 명령어와 자연어 요청 방법을 더 깊이 배웁니다.</p>
          </Link>
          <Link href="/docs/workflows/understand" className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 transition-all group block">
            <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">🔍 코드베이스 이해하기</h3>
            <p className="text-xs text-muted">새로운 프로젝트에 투입되었을 때 빠르게 코드를 파악하는 방법을 배웁니다.</p>
          </Link>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding/essential-features" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 필수 기능
        </Link>
        <Link href="/docs/basics" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 기본 사용법
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
