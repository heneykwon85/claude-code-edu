import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import StepCard from "@/components/StepCard";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 1 · 시작하기"
        title="스킬 개념 & 실습"
        description="Claude Code Skills는 반복 업무를 자동화하는 마크다운 기반 매뉴얼입니다. 직접 만들어보며 개념을 익혀봅시다."
      />

      {/* What is a Skill */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬(Skill)이란?</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "📦",
                title: "패키징된 지식",
                desc: "반복적인 절차와 기준을 마크다운으로 정리하여 Claude에게 가르치는 매뉴얼입니다.",
              },
              {
                icon: "🤖",
                title: "자동 활성화",
                desc: "사용자 요청에 맞는 스킬이 있으면 Claude가 자동으로 찾아서 적용합니다.",
              },
              {
                icon: "♻️",
                title: "재사용 가능",
                desc: "한 번 만들면 모든 프로젝트에서 반복 사용할 수 있어 효율적입니다.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-heading mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tip-box mb-6">
          <p className="text-sm text-accent">
            <strong>💡 쉽게 이해하기:</strong> 스킬은 &quot;이런 상황에서는 이렇게 해줘&quot;라는
            매뉴얼을 Claude에게 미리 알려주는 것입니다.
            코드 리뷰 기준, 커밋 메시지 포맷, 특정 프로젝트의 코딩 규칙 같은 것을 스킬로 만들면
            매번 설명하지 않아도 됩니다.
          </p>
        </div>
      </section>

      {/* How Skills Work */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬의 동작 방식</h2>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "메타데이터 로드",
              desc: "Claude Code 시작 시 각 스킬의 name과 description이 시스템에 등록됩니다.",
              color: "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
            },
            {
              step: "2",
              title: "자동 매칭",
              desc: "사용자 요청이 들어오면, Claude가 메타데이터를 보고 어떤 스킬이 관련 있는지 판단합니다.",
              color: "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
            },
            {
              step: "3",
              title: "SKILL.md 읽기",
              desc: "관련 스킬이 있으면 해당 SKILL.md 파일의 전체 내용을 대화에 포함시킵니다.",
              color: "bg-green-100 dark:bg-green-500/10 border-green-200 dark:border-green-500/20",
            },
            {
              step: "4",
              title: "점진적 확장",
              desc: "필요하면 SKILL.md에 링크된 추가 문서나 예시 파일도 읽어들입니다 (Progressive Disclosure).",
              color: "bg-orange-100 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20",
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`rounded-xl p-5 border ${item.color} flex items-start gap-4`}
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-heading text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILL.md Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">SKILL.md 기본 구조</h2>
        <p className="text-muted mb-4">
          스킬의 핵심 파일은 <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent text-sm">SKILL.md</code> 하나입니다.
          YAML 프론트매터(메타데이터)와 마크다운 본문으로 구성됩니다.
        </p>
        <CodeBlock
          code={`---
name: my-code-reviewer
description: >
  코드 리뷰 시 사용. PR이나 코드 변경사항을 리뷰할 때 자동으로 활성화됩니다.
  일반적인 코드 작성이나 버그 수정 작업에서는 사용하지 않습니다.
# allowed-tools: Read, Grep, Glob  (선택: 사용 가능한 도구 제한)
---

# 코드 리뷰 스킬

## Instructions

코드 리뷰 시 다음 기준을 따릅니다:

1. 보안 취약점이 있는지 먼저 확인
2. 성능에 영향을 줄 수 있는 변경사항 체크
3. 코드 스타일 가이드 준수 여부 확인
4. 테스트 커버리지가 충분한지 평가

## Examples

사용자: "이 PR을 리뷰해줘"
→ 위 기준에 따라 체계적으로 리뷰 진행`}
          language="markdown"
          filename="SKILL.md"
        />

        <div className="mt-6 bg-panel rounded-xl border border-edge overflow-hidden">
          <div className="px-5 py-3 bg-surface-alt border-b border-edge">
            <h3 className="font-semibold text-body text-sm">필수 메타데이터 필드</h3>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">필드</th>
                <th className="text-left px-5 py-3 font-semibold text-body">설명</th>
                <th className="text-left px-5 py-3 font-semibold text-body">규칙</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-edge">
                <td className="px-5 py-3">
                  <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">name</code>
                </td>
                <td className="px-5 py-3 text-muted">스킬의 고유 이름</td>
                <td className="px-5 py-3 text-muted">소문자, 숫자, 하이픈만 사용</td>
              </tr>
              <tr className="border-b border-edge">
                <td className="px-5 py-3">
                  <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">description</code>
                </td>
                <td className="px-5 py-3 text-muted">스킬 설명 (자동 활성화 기준)</td>
                <td className="px-5 py-3 text-muted">무엇을, 언제, 언제 쓰지 말지 포함</td>
              </tr>
              <tr>
                <td className="px-5 py-3">
                  <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">allowed-tools</code>
                </td>
                <td className="px-5 py-3 text-muted">사용 가능한 도구 제한 (선택)</td>
                <td className="px-5 py-3 text-muted">Read, Grep, Glob, Bash 등</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Skill Location */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 저장 위치</h2>
        <p className="text-muted mb-4">
          스킬이 저장되는 위치에 따라 적용 범위가 달라집니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "👤",
              title: "개인 스킬",
              path: "~/.claude/skills/",
              desc: "모든 프로젝트에서 나에게만 적용",
              tag: "개인용",
            },
            {
              icon: "📁",
              title: "프로젝트 스킬",
              path: ".claude/skills/",
              desc: "특정 프로젝트(레포)에만 적용",
              tag: "팀 공유",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-panel rounded-xl p-5 border border-edge"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="font-semibold text-heading text-sm">{item.title}</h3>
                <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                  {item.tag}
                </span>
              </div>
              <code className="text-xs bg-surface-alt px-2 py-1 rounded text-accent block mb-2">
                {item.path}
              </code>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <CodeBlock
          code={`# 개인 스킬 디렉토리 구조
~/.claude/skills/
  └── my-code-reviewer/
      └── SKILL.md

# 프로젝트 스킬 디렉토리 구조
my-project/
  └── .claude/skills/
      └── project-conventions/
          ├── SKILL.md          # 핵심 매뉴얼
          ├── reference.md      # 상세 참고 문서 (선택)
          ├── examples.md       # 예시 모음 (선택)
          └── templates/        # 템플릿 파일 (선택)`}
          language="bash"
          filename="디렉토리 구조"
        />
      </section>

      {/* Hands-on Practice */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">실습: 나만의 첫 스킬 만들기</h2>
        <p className="text-muted mb-6">
          간단한 커밋 메시지 스킬을 직접 만들어보겠습니다.
          아래 단계를 따라해보세요.
        </p>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="스킬 디렉토리 생성"
            description="먼저 스킬을 저장할 디렉토리를 만듭니다."
          >
            <CodeBlock
              code={`# 개인 스킬로 만들기 (모든 프로젝트에서 사용)
mkdir -p ~/.claude/skills/commit-message

# 또는 프로젝트 스킬로 만들기
mkdir -p .claude/skills/commit-message`}
              language="bash"
            />
          </StepCard>

          <StepCard
            step={2}
            title="SKILL.md 파일 작성"
            description="스킬의 핵심 파일을 작성합니다. 아래 내용을 복사하여 SKILL.md로 저장하세요."
          >
            <CodeBlock
              code={`---
name: commit-message
description: >
  Git 커밋 메시지를 작성하거나 커밋할 때 자동 활성화됩니다.
  한국어 커밋 컨벤션을 적용합니다.
  단순 코드 수정이나 파일 읽기 작업에서는 사용하지 않습니다.
---

# 커밋 메시지 컨벤션

## Instructions

커밋 메시지를 작성할 때 다음 규칙을 따릅니다:

### 형식
\`\`\`
<타입>: <제목>

<본문 (선택)>
\`\`\`

### 타입 종류
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 변경
- style: 코드 포맷팅 (세미콜론 등)
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 빌드, 설정 변경

### 규칙
1. 제목은 50자 이내
2. 제목은 한국어로 작성
3. 본문은 "왜" 변경했는지 설명
4. 한 커밋에 하나의 변경만 포함

## Examples

- feat: 사용자 로그인 기능 추가
- fix: 이메일 유효성 검사 오류 수정
- docs: README에 설치 가이드 추가`}
              language="markdown"
              filename="~/.claude/skills/commit-message/SKILL.md"
            />
          </StepCard>

          <StepCard
            step={3}
            title="스킬 테스트하기"
            description="Claude Code를 실행하고 커밋 관련 요청을 해보세요."
          >
            <CodeBlock
              code={`# Claude Code 실행
claude

# 아래와 같이 요청해보세요:
> 변경사항을 커밋해줘

# Claude가 자동으로 commit-message 스킬을 적용하여
# 컨벤션에 맞는 커밋 메시지를 생성합니다!`}
              language="bash"
              filename="터미널"
            />
          </StepCard>
        </div>
      </section>

      {/* Good vs Bad Description */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">효과적인 description 작성법</h2>
        <p className="text-muted mb-4">
          <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent text-sm">description</code>은
          스킬 자동 활성화의 핵심입니다. 구체적으로 작성할수록 정확하게 작동합니다.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-red-50 dark:bg-red-500/5 rounded-xl p-5 border border-red-200 dark:border-red-500/20">
            <h3 className="font-semibold text-red-700 dark:text-red-400 text-sm mb-3 flex items-center gap-2">
              <span>❌</span> 나쁜 예시
            </h3>
            <div className="space-y-3">
              <code className="text-xs bg-red-100 dark:bg-red-500/10 px-3 py-2 rounded text-red-800 dark:text-red-300 block">
                &quot;코드 리뷰를 도와줍니다&quot;
              </code>
              <code className="text-xs bg-red-100 dark:bg-red-500/10 px-3 py-2 rounded text-red-800 dark:text-red-300 block">
                &quot;커밋 메시지 관련 스킬&quot;
              </code>
              <p className="text-xs text-red-600 dark:text-red-400">
                너무 모호해서 언제 활성화할지 Claude가 판단하기 어렵습니다.
              </p>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-5 border border-green-200 dark:border-green-500/20">
            <h3 className="font-semibold text-green-700 dark:text-green-400 text-sm mb-3 flex items-center gap-2">
              <span>✅</span> 좋은 예시
            </h3>
            <div className="space-y-3">
              <code className="text-xs bg-green-100 dark:bg-green-500/10 px-3 py-2 rounded text-green-800 dark:text-green-300 block">
                &quot;PR 리뷰, 코드 변경사항 검토 시 활성화. 보안, 성능, 스타일 기준으로 리뷰. 단순 코드 작성에는 사용 안 함&quot;
              </code>
              <code className="text-xs bg-green-100 dark:bg-green-500/10 px-3 py-2 rounded text-green-800 dark:text-green-300 block">
                &quot;Git 커밋 시 활성화. 한국어 커밋 컨벤션 적용. 파일 읽기나 코드 분석에는 미사용&quot;
              </code>
              <p className="text-xs text-green-600 dark:text-green-400">
                무엇을, 언제, 언제 쓰지 말지를 명확하게 서술합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Skill Ideas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 아이디어 모음</h2>
        <p className="text-muted mb-4">
          실무에서 활용할 수 있는 스킬 아이디어입니다. 자신의 업무에 맞게 응용해보세요.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "📝",
              title: "코드 리뷰어",
              desc: "PR 리뷰 시 보안, 성능, 스타일 체크리스트를 자동 적용",
            },
            {
              icon: "🧪",
              title: "테스트 생성기",
              desc: "함수나 컴포넌트에 대한 테스트 코드를 프로젝트 컨벤션에 맞게 생성",
            },
            {
              icon: "📄",
              title: "문서 작성기",
              desc: "API 문서, README, 변경 로그를 팀의 포맷에 맞게 자동 생성",
            },
            {
              icon: "🏗️",
              title: "컴포넌트 생성기",
              desc: "React/Vue 컴포넌트를 프로젝트 디렉토리 구조와 네이밍 규칙에 맞게 생성",
            },
            {
              icon: "🔒",
              title: "보안 점검기",
              desc: "코드에서 보안 취약점(SQL Injection, XSS 등)을 체크",
            },
            {
              icon: "📊",
              title: "데이터 분석 보고서",
              desc: "데이터 분석 결과를 정해진 보고서 템플릿에 맞게 정리",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-panel rounded-xl p-4 border border-edge flex items-start gap-3"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-heading text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills vs CLAUDE.md */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 vs CLAUDE.md</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">구분</th>
                <th className="text-left px-5 py-3 font-semibold text-body">CLAUDE.md</th>
                <th className="text-left px-5 py-3 font-semibold text-body">Skills</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "로딩 시점",
                  claude: "항상 로드됨",
                  skill: "필요할 때만 로드",
                },
                {
                  label: "용도",
                  claude: "프로젝트 전반의 규칙/컨텍스트",
                  skill: "특정 작업의 절차/기준",
                },
                {
                  label: "토큰 소비",
                  claude: "매 대화마다 소비",
                  skill: "활성화될 때만 소비",
                },
                {
                  label: "적합한 내용",
                  claude: "코딩 스타일, 프로젝트 구조 설명",
                  skill: "코드 리뷰, 커밋, 배포 등 절차",
                },
              ].map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3 font-medium text-heading">{row.label}</td>
                  <td className="px-5 py-3 text-muted">{row.claude}</td>
                  <td className="px-5 py-3 text-muted">{row.skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 요약:</strong> CLAUDE.md는 &quot;항상 알아야 할 정보&quot;,
            Skills는 &quot;특정 상황에서만 필요한 절차&quot;에 적합합니다.
            둘을 함께 사용하면 토큰을 절약하면서도 더 정확한 결과를 얻을 수 있습니다.
          </p>
        </div>
      </section>

      {/* Sub-pages Navigation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">단계별 실습 가이드</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              step: "1-0",
              title: "스킬이란?",
              desc: "스킬의 핵심 개념, 동작 방식, SKILL.md 구조를 배웁니다.",
              href: "/docs/skills/what-is-skill",
              icon: "📖",
            },
            {
              step: "1-1",
              title: "공식 스킬 체험",
              desc: "Vercel 공식 스킬을 설치하고 직접 사용해봅니다.",
              href: "/docs/skills/official-skills",
              icon: "⚡",
            },
            {
              step: "1-2",
              title: "첫 스킬 만들기",
              desc: "커밋 메시지 컨벤션 스킬을 단계별로 직접 만들어봅니다.",
              href: "/docs/skills/first-skill",
              icon: "🛠️",
            },
            {
              step: "1-3",
              title: "배포 및 공유",
              desc: "만든 스킬을 팀원과 공유하고 GitHub로 배포합니다.",
              href: "/docs/skills/deploy-share",
              icon: "🚀",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 hover:shadow-sm transition-all group block"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <span className="text-[10px] text-dim font-medium">{item.step}</span>
                  <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">빠른 참고: 필수 명령어</h2>
        <CodeBlock
          code={`# 개인 스킬 만들기
mkdir -p ~/.claude/skills/my-skill
# → SKILL.md 작성

# 프로젝트 스킬 만들기
mkdir -p .claude/skills/my-skill
# → SKILL.md 작성

# 공식 스킬 설치
npx skills add vercel-labs/agent-skills

# 설치된 스킬 목록 확인
npx skills list

# Claude Code에서 스킬이 적용되는지 테스트
claude
> (스킬이 활성화되는 요청을 입력)`}
          language="bash"
          filename="터미널 명령어 모음"
        />
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/installation"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 사전 설치
        </Link>
        <Link
          href="/docs/skills/what-is-skill"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 스킬이란?
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
