import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function WhyVibeCodingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-0"
        title="왜 바이브 코딩인가?"
        description="바이브 코딩의 개념과 기존 개발 방식의 차이, 그리고 왜 지금 바이브 코딩을 배워야 하는지 알아봅니다."
      />

      {/* What is Vibe Coding */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">바이브 코딩이란?</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <blockquote className="border-l-4 border-accent pl-4 mb-4">
            <p className="text-body italic text-base leading-relaxed">
              &ldquo;코드를 직접 타이핑하는 대신, AI에게 자연어로 원하는 것을 설명하여
              소프트웨어를 만드는 새로운 프로그래밍 패러다임&rdquo;
            </p>
            <footer className="text-sm text-muted mt-2">
              — Andrej Karpathy, 2025년 2월 바이브 코딩 개념 최초 소개
            </footer>
          </blockquote>
          <p className="text-muted text-sm">
            바이브 코딩(Vibe Coding)은 LLM(대규모 언어 모델)에 자연어 프롬프트를 입력하여
            AI가 코드를 생성하는 방식입니다. 2025년 3월 Merriam-Webster 사전에도 등재될 만큼
            빠르게 확산되고 있습니다.
          </p>
        </div>
      </section>

      {/* Traditional vs Vibe Coding */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">기존 코딩 vs 바이브 코딩</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-surface-alt rounded-xl p-5 border border-edge">
            <h3 className="font-semibold text-heading text-sm mb-4 flex items-center gap-2">
              <span>⌨️</span> 기존 코딩
            </h3>
            <ul className="text-xs text-muted space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-dim mt-0.5">•</span>
                <span>코드를 한 줄씩 직접 타이핑</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dim mt-0.5">•</span>
                <span>문법, 라이브러리 API를 외워야 함</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dim mt-0.5">•</span>
                <span>오류 메시지를 직접 검색하고 해결</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-dim mt-0.5">•</span>
                <span>반복적인 보일러플레이트 코드 작성</span>
              </li>
            </ul>
          </div>
          <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
            <h3 className="font-semibold text-heading text-sm mb-4 flex items-center gap-2">
              <span>🎵</span> 바이브 코딩
            </h3>
            <ul className="text-xs text-muted space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>자연어로 &quot;이런 기능 만들어줘&quot;라고 요청</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>AI가 적절한 코드를 자동 생성</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>오류 발생 시 AI에게 수정 요청</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">✓</span>
                <span>&quot;무엇을&quot;에 집중, &quot;어떻게&quot;는 AI가 처리</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">왜 지금 바이브 코딩인가?</h2>
        <div className="space-y-4">
          {[
            {
              icon: "🚀",
              title: "개발 속도 혁신",
              desc: "프로토타입 제작 시간이 수일에서 수시간으로 단축됩니다. Y Combinator 2025년 스타트업 25%는 코드의 95%를 AI가 생성했습니다.",
              color: "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
            },
            {
              icon: "🌍",
              title: "진입 장벽 제거",
              desc: "프로그래밍 언어를 몰라도 자연어로 요청할 수 있어, 기획자·마케터·디자이너도 직접 프로토타입을 만들 수 있습니다.",
              color: "bg-green-100 dark:bg-green-500/10 border-green-200 dark:border-green-500/20",
            },
            {
              icon: "🔄",
              title: "반복 작업 자동화",
              desc: "보일러플레이트 코드, 테스트 작성, 문서화 같은 반복 작업을 AI에게 위임하고 핵심 로직에 집중할 수 있습니다.",
              color: "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
            },
            {
              icon: "🧠",
              title: "아키텍처에 집중",
              desc: "세부 구현은 AI가 처리하므로, 개발자는 설계와 의사결정이라는 더 가치 있는 작업에 집중할 수 있습니다.",
              color: "bg-orange-100 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20",
            },
          ].map((item) => (
            <div key={item.title} className={`rounded-xl p-5 border ${item.color}`}>
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-heading text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What you need */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">바이브 코딩에 필요한 것</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "💬", title: "명확한 요청 능력", desc: "원하는 것을 구체적으로 설명하는 프롬프트 작성 능력" },
            { icon: "👀", title: "결과 검토 능력", desc: "AI가 생성한 코드를 이해하고 검증하는 능력" },
            { icon: "🔁", title: "반복 개선 능력", desc: "피드백을 주고 점진적으로 완성도를 높이는 능력" },
          ].map((item) => (
            <div key={item.title} className="bg-panel rounded-xl p-4 border border-edge text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-heading text-xs mb-1">{item.title}</h3>
              <p className="text-[11px] text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 핵심:</strong> 바이브 코딩은 &quot;코드를 모른다&quot;가 아니라
            &quot;코드를 AI와 함께 작성한다&quot;는 관점입니다.
            기초 프로그래밍 개념을 알면 더 효과적으로 활용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 바이브 코딩 기초
        </Link>
        <Link href="/docs/vibe-coding/claude-md" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: CLAUDE.md란?
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
