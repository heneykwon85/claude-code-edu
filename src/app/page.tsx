import Link from "next/link";
import Image from "next/image";

const features = [
  { title: "빠른 설치", description: "한 줄의 명령어로 설치 완료. 5분 안에 시작할 수 있습니다.", href: "/docs/installation" },
  { title: "쉬운 사용법", description: "자연어로 대화하듯 코딩하세요. 복잡한 명령어를 외울 필요가 없습니다.", href: "/docs/basics" },
  { title: "코드 이해", description: "새로운 프로젝트도 순식간에 파악. Claude가 코드베이스를 분석합니다.", href: "/docs/workflows/understand" },
  { title: "버그 수정", description: "에러 메시지를 붙여넣기만 하면 Claude가 원인을 찾아 수정합니다.", href: "/docs/workflows/bugfix" },
  { title: "리팩토링", description: "코드 품질을 높이고 싶다면? Claude에게 자연어로 요청하세요.", href: "/docs/workflows/refactor" },
  { title: "자동화", description: "GitHub Actions, MCP 서버 등 고급 자동화 기능을 활용하세요.", href: "/docs/advanced/github-actions" },
];

const steps = [
  { number: "01", title: "Claude Code 설치", description: "npm 또는 brew로 간단히 설치합니다" },
  { number: "02", title: "프로젝트 폴더에서 실행", description: "작업할 프로젝트 폴더에서 claude를 실행합니다" },
  { number: "03", title: "자연어로 요청", description: "원하는 작업을 한국어로 설명하면 끝" },
];

export default function Home() {
  return (
    <div className="bg-surface">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Image src="/logo.png" alt="Logo" width={48} height={48} className="mx-auto dark:invert opacity-60" />
          </div>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-8">
            Claude Code Workshop 2026
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[1.1] tracking-tight mb-8">
            코딩의 새로운
            <br />
            <span className="gradient-text">패러다임</span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-xl mx-auto mb-12 leading-relaxed">
            AI와 대화하며 코드를 작성하고, 버그를 수정하고, 프로젝트를 관리하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs/installation"
              className="px-8 py-3.5 bg-btn text-btn-text text-sm font-medium tracking-wide hover:bg-btn-hover transition-colors"
            >
              시작하기
            </Link>
            <Link
              href="/docs/basics"
              className="px-8 py-3.5 border border-edge text-heading text-sm font-medium tracking-wide hover:border-muted hover:bg-raised transition-colors"
            >
              가이드 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-t border-edge">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`py-12 md:py-16 px-6 ${i < 2 ? "md:border-r border-edge" : ""} ${i > 0 ? "border-t md:border-t-0 border-edge" : ""}`}
              >
                <span className="text-4xl font-extralight text-dim/50 block mb-4">{step.number}</span>
                <h3 className="text-heading font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-edge py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">Curriculum</p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">무엇을 배울 수 있나요?</h2>
            <p className="text-muted leading-relaxed">Claude Code의 다양한 기능을 체계적으로 학습합니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-edge">
            {features.map((f) => (
              <Link key={f.title} href={f.href} className="group bg-surface p-8 hover:bg-surface-alt transition-colors">
                <h3 className="text-heading font-semibold mb-3 group-hover:text-accent transition-colors">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{f.description}</p>
                <span className="text-[12px] text-dim group-hover:text-accent transition-colors tracking-wide uppercase font-medium">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="border-t border-edge py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-accent mb-4">Roadmap</p>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight">학습 로드맵</h2>
          </div>
          <div className="space-y-px">
            {[
              { level: "01", title: "시작하기", items: ["설치 및 설정", "기본 명령어", "첫 번째 대화"] },
              { level: "02", title: "핵심 워크플로우", items: ["코드 이해", "버그 수정", "리팩토링", "테스트"] },
              { level: "03", title: "생산성 향상", items: ["PR 생성", "문서화", "이미지 작업"] },
              { level: "04", title: "고급 기능", items: ["CLAUDE.md", "MCP 서버", "GitHub Actions", "커스텀 명령어"] },
            ].map((level) => (
              <div key={level.level} className="flex items-start gap-8 p-6 border border-edge hover:border-accent/30 hover:bg-surface-alt transition-all group">
                <span className="text-3xl font-extralight text-dim/50 group-hover:text-accent transition-colors flex-shrink-0 w-12">{level.level}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-heading mb-3">{level.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {level.items.map((item) => (
                      <span key={item} className="text-[12px] px-3 py-1 bg-raised text-muted border border-edge rounded-full">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-edge py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-6">지금 시작하세요</h2>
          <p className="text-muted mb-10 leading-relaxed">Claude Code와 함께라면 누구나 효율적인 개발자가 될 수 있습니다.</p>
          <Link href="/docs/installation" className="inline-block px-10 py-4 bg-btn text-btn-text text-sm font-medium tracking-wide hover:bg-btn-hover transition-colors">
            설치 가이드 바로가기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-edge py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={18} height={18} className="dark:invert opacity-50" />
            <span className="text-[12px] text-dim tracking-wide">Claude Code Workshop 2026</span>
          </div>
          <p className="text-[12px] text-dim/50">AI와 함께하는 새로운 코딩 경험</p>
        </div>
      </footer>
    </div>
  );
}
