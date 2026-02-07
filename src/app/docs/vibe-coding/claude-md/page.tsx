import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function ClaudeMdPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-1"
        title="CLAUDE.md란?"
        description="프로젝트의 'AI 사용 설명서' 역할을 하는 CLAUDE.md 파일의 구조와 작성법을 배웁니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">CLAUDE.md = AI를 위한 사용 설명서</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <p className="text-body text-base leading-relaxed mb-3">
            <strong className="text-heading">CLAUDE.md</strong>는 Claude Code가
            자동으로 읽는 프로젝트 설정 파일입니다.
            프로젝트의 규칙, 코딩 스타일, 기술 스택, 실행 방법을 정의하면
            Claude가 <strong className="text-accent">일관되고 정확한 작업</strong>을 수행합니다.
          </p>
          <p className="text-muted text-sm">
            사람에게 README를 주는 것처럼, AI에게 CLAUDE.md를 주는 것입니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">파일 위치와 적용 범위</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">위치</th>
                <th className="text-left px-5 py-3 font-semibold text-body">범위</th>
                <th className="text-left px-5 py-3 font-semibold text-body">용도</th>
              </tr>
            </thead>
            <tbody>
              {[
                { path: "./CLAUDE.md", scope: "현재 디렉토리", use: "특정 모듈/서브프로젝트 규칙" },
                { path: "프로젝트루트/CLAUDE.md", scope: "전체 프로젝트", use: "가장 일반적 (Git 포함)" },
                { path: "~/.claude/CLAUDE.md", scope: "개인 전역", use: "개인 선호도 (언어, 스타일)" },
              ].map((row, i) => (
                <tr key={row.path} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3"><code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">{row.path}</code></td>
                  <td className="px-5 py-3 text-muted">{row.scope}</td>
                  <td className="px-5 py-3 text-muted">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">CLAUDE.md 기본 구조</h2>
        <CodeBlock
          code={`# 프로젝트 이름

## Project Overview
- 프로젝트명: My Awesome App
- 목적: 사용자 관리 웹 서비스
- 주요 기능: 로그인, 회원가입, 대시보드

## Tech Stack
- Language: TypeScript
- Framework: Next.js 15 (App Router)
- Database: PostgreSQL + Prisma
- Styling: Tailwind CSS v4

## Build & Run Commands
- 개발 서버: \`npm run dev\`
- 빌드: \`npm run build\`
- 테스트: \`npm test\`
- 린트: \`npm run lint\`

## Code Style & Conventions
- 함수형 컴포넌트 + React hooks 사용
- 파일명: kebab-case (예: user-profile.tsx)
- 컴포넌트명: PascalCase (예: UserProfile)
- 한국어 커밋 메시지 사용

## 🚫 금지사항
- any 타입 사용 금지
- console.log 프로덕션 코드에 남기지 않음
- 하드코딩된 API URL 사용 금지`}
          language="markdown"
          filename="CLAUDE.md 예시"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">작성 시 핵심 원칙</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-5 border border-green-200 dark:border-green-500/20">
            <h3 className="font-semibold text-green-700 dark:text-green-400 text-sm mb-3">✅ 이렇게 하세요</h3>
            <ul className="text-xs text-green-600 dark:text-green-400 space-y-2">
              <li>• 5KB 이하로 간결하게 유지</li>
              <li>• 구체적인 명령어와 경로 명시</li>
              <li>• 실제 예시 포함</li>
              <li>• 우선순위 표시 (중요도)</li>
              <li>• 월 1회 이상 업데이트</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-500/5 rounded-xl p-5 border border-red-200 dark:border-red-500/20">
            <h3 className="font-semibold text-red-700 dark:text-red-400 text-sm mb-3">❌ 이렇게 하지 마세요</h3>
            <ul className="text-xs text-red-600 dark:text-red-400 space-y-2">
              <li>• 장황한 설명 (토큰 낭비)</li>
              <li>• 애매한 지침 (&quot;적절히 작성&quot;)</li>
              <li>• 과도한 정보량</li>
              <li>• 오래된/잘못된 정보 방치</li>
              <li>• 다른 파일에서 이미 명시된 정보 중복</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="tip-box">
          <p className="text-sm text-accent">
            <strong>💡 팁:</strong> CLAUDE.md는 항상 로드되므로 토큰을 소비합니다.
            &quot;항상 알아야 할 핵심 정보&quot;만 넣고,
            특정 상황에서만 필요한 절차는 Skills로 분리하세요.
          </p>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding/why-vibe-coding" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 왜 바이브 코딩인가?
        </Link>
        <Link href="/docs/vibe-coding/init-practice" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 실습 - /init
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
