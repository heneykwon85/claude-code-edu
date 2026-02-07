import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import StepCard from "@/components/StepCard";
import Link from "next/link";

export default function OfficialSkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="스킬 개념 & 실습 · 1-1"
        title="공식 스킬 체험"
        description="Vercel이 제공하는 공식 에이전트 스킬을 설치하고 직접 사용해봅니다."
      />

      {/* What are Official Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">공식 스킬이란?</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <p className="text-body text-base leading-relaxed mb-3">
            Vercel의 <strong className="text-heading">vercel-labs/agent-skills</strong> 저장소에서
            제공하는 검증된 스킬 모음입니다. React, Next.js, 웹 디자인 등 실무에서 바로 사용할 수 있는
            고품질 스킬들이 포함되어 있습니다.
          </p>
          <p className="text-muted text-sm">
            <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent">npx skills</code> CLI로
            설치하며, 별도의 사전 설치 없이 바로 사용할 수 있습니다.
          </p>
        </div>
      </section>

      {/* Available Official Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">주요 공식 스킬 목록</h2>
        <div className="space-y-4">
          {[
            {
              name: "react-best-practices",
              icon: "⚛️",
              desc: "React & Next.js 성능 최적화",
              detail: "40개 이상의 규칙으로 워터폴 제거, 번들 사이즈 최적화, 서버사이드 성능 개선 등 8개 카테고리를 다룹니다.",
              tag: "React / Next.js",
            },
            {
              name: "web-design-guidelines",
              icon: "🎨",
              desc: "UI 코드 품질 감사",
              detail: "접근성, 성능, UX, 폼, 애니메이션, 타이포그래피, 이미지, 국제화 등 100개 이상의 규칙을 포함합니다.",
              tag: "디자인 / UX",
            },
            {
              name: "react-native-guidelines",
              icon: "📱",
              desc: "React Native 모바일 앱 베스트 프랙티스",
              detail: "모바일 성능, 레이아웃, 애니메이션, 플랫폼별 패턴 등 16개 규칙으로 구성됩니다.",
              tag: "Mobile",
            },
            {
              name: "composition-patterns",
              icon: "🧩",
              desc: "React 컴포넌트 아키텍처 패턴",
              detail: "prop drilling을 줄이고 확장 가능한 컴포넌트 구조를 설계하는 패턴을 제공합니다.",
              tag: "Architecture",
            },
            {
              name: "vercel-deploy-claimable",
              icon: "🚀",
              desc: "Vercel 원클릭 배포",
              detail: "40개 이상의 프레임워크를 자동 감지하여 Vercel에 즉시 배포합니다.",
              tag: "배포",
            },
          ].map((skill) => (
            <div
              key={skill.name}
              className="bg-panel rounded-xl p-5 border border-edge"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0">{skill.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">
                      {skill.name}
                    </code>
                    <span className="text-[10px] px-2 py-0.5 bg-surface-alt text-dim rounded-full font-medium border border-edge">
                      {skill.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold text-heading text-sm mb-1">{skill.desc}</h3>
                  <p className="text-xs text-muted">{skill.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hands-on: Install and Use */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">실습: 공식 스킬 설치 &amp; 체험</h2>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="skills CLI로 스킬 목록 확인"
            description="먼저 어떤 스킬이 있는지 확인합니다."
          >
            <CodeBlock
              code={`# 공식 스킬 목록 확인 (설치하지 않고 보기만)
npx skills add vercel-labs/agent-skills --list`}
              language="bash"
            />
          </StepCard>

          <StepCard
            step={2}
            title="react-best-practices 스킬 설치"
            description="React/Next.js 프로젝트에 유용한 스킬을 설치합니다."
          >
            <CodeBlock
              code={`# 특정 스킬만 설치
npx skills add vercel-labs/agent-skills --skill react-best-practices

# 또는 전체 설치
npx skills add vercel-labs/agent-skills --all`}
              language="bash"
            />
            <div className="info-box mt-3">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                <strong>ℹ️ 참고:</strong>{" "}
                <code className="bg-blue-100 dark:bg-blue-500/10 px-1 rounded">npx</code>는
                별도 설치 없이 바로 실행됩니다. Node.js만 있으면 됩니다.
              </p>
            </div>
          </StepCard>

          <StepCard
            step={3}
            title="설치된 스킬 확인"
            description="정상적으로 설치되었는지 확인합니다."
          >
            <CodeBlock
              code={`# 설치된 스킬 목록 보기
npx skills list

# 또는 디렉토리 직접 확인
ls .claude/skills/`}
              language="bash"
            />
          </StepCard>

          <StepCard
            step={4}
            title="Claude Code에서 체험"
            description="Claude Code를 실행하고 React 코드를 리뷰해달라고 요청해보세요."
          >
            <CodeBlock
              code={`# Claude Code 시작
claude

# 아래와 같이 요청해보세요:
> 이 React 컴포넌트의 성능을 개선해줘

# Claude가 자동으로 react-best-practices 스킬을 로드하고
# 40가지 이상의 규칙에 맞게 분석 및 개선을 수행합니다!`}
              language="bash"
              filename="터미널"
            />
          </StepCard>
        </div>
      </section>

      {/* Skills CLI Quick Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">skills CLI 주요 명령어</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">명령어</th>
                <th className="text-left px-5 py-3 font-semibold text-body">설명</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cmd: "npx skills add <owner/repo>", desc: "스킬 설치" },
                { cmd: "npx skills add <repo> --list", desc: "설치하지 않고 목록만 보기" },
                { cmd: "npx skills add <repo> --skill <name>", desc: "특정 스킬만 설치" },
                { cmd: "npx skills list", desc: "설치된 스킬 목록 확인" },
                { cmd: "npx skills find <검색어>", desc: "스킬 검색" },
                { cmd: "npx skills remove <name>", desc: "스킬 제거" },
                { cmd: "npx skills check", desc: "업데이트 확인" },
                { cmd: "npx skills update", desc: "모든 스킬 업데이트" },
              ].map((item, i) => (
                <tr key={item.cmd} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3">
                    <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">
                      {item.cmd}
                    </code>
                  </td>
                  <td className="px-5 py-3 text-muted">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Browse More */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">더 많은 스킬 찾기</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://skills.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 transition-colors group block"
          >
            <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">
              🌐 skills.sh
            </h3>
            <p className="text-xs text-muted">
              공식 스킬 마켓플레이스. 카테고리별 스킬을 검색하고 바로 설치할 수 있습니다.
            </p>
          </a>
          <a
            href="https://github.com/vercel-labs/agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 transition-colors group block"
          >
            <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">
              📦 GitHub: vercel-labs/agent-skills
            </h3>
            <p className="text-xs text-muted">
              Vercel 공식 에이전트 스킬 저장소. 소스 코드와 문서를 직접 확인할 수 있습니다.
            </p>
          </a>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/skills/what-is-skill"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 스킬이란?
        </Link>
        <Link
          href="/docs/skills/first-skill"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 첫 스킬 만들기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
