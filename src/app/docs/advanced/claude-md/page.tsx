import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function ClaudeMdPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 3 · 고급 기능"
        title="CLAUDE.md 프로젝트 메모리"
        description="CLAUDE.md 파일을 설정하여 Claude가 프로젝트의 맥락을 항상 기억하도록 만드세요."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">CLAUDE.md란?</h2>
        <div className="bg-panel rounded-2xl p-6 border border-purple-200 dark:border-purple-500/20">
          <p className="text-body leading-relaxed">
            <strong>CLAUDE.md</strong>는 프로젝트 루트에 위치하는 특별한 파일입니다.
            Claude Code가 실행될 때 이 파일을 자동으로 읽어서 프로젝트의 맥락을 파악합니다.
            매번 같은 설명을 반복하지 않아도, Claude가 프로젝트의 규칙과 구조를 알고 있게 됩니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">자동 생성하기</h2>
        <CodeBlock
          code={`# Claude Code 세션에서 입력
/init`}
          language="bash"
          filename="Claude Code 세션 내부"
        />
        <p className="text-muted mt-3 text-sm">
          <code>/init</code> 명령어를 실행하면 Claude가 프로젝트를 분석하고
          CLAUDE.md 파일을 자동으로 생성합니다.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">CLAUDE.md 작성 예시</h2>
        <CodeBlock
          code={`# 프로젝트 개요
이 프로젝트는 Next.js 14 + TypeScript로 구축된 이커머스 플랫폼입니다.

## 기술 스택
- Frontend: Next.js 14 (App Router), Tailwind CSS
- Backend: Next.js API Routes
- Database: PostgreSQL + Prisma ORM
- Auth: NextAuth.js

## 프로젝트 구조
src/
  app/          # Next.js App Router 페이지
  components/   # 재사용 가능한 UI 컴포넌트
  lib/          # 유틸리티 함수, DB 연결
  services/     # 비즈니스 로직
  types/        # TypeScript 타입 정의

## 코딩 규칙
- 컴포넌트는 함수형 + TypeScript로 작성
- CSS는 Tailwind만 사용 (인라인 스타일 금지)
- API 응답은 항상 { success, data, error } 형태
- 에러 처리는 try-catch + custom error class 사용

## 자주하는 명령어
- 개발 서버: npm run dev
- 빌드: npm run build
- 테스트: npm test
- 린트: npm run lint

## 주의사항
- .env 파일은 커밋하지 않기
- 가격 관련 로직은 반드시 서버사이드에서 처리
- 사용자 입력은 항상 zod로 유효성 검사`}
          language="markdown"
          filename="CLAUDE.md"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">CLAUDE.md 계층 구조</h2>
        <p className="text-muted mb-4">
          CLAUDE.md는 여러 위치에 배치할 수 있으며, 모두 자동으로 읽힙니다.
        </p>
        <div className="space-y-3">
          {[
            {
              path: "~/.claude/CLAUDE.md",
              desc: "전역 설정 - 모든 프로젝트에 적용",
              scope: "전역",
            },
            {
              path: "프로젝트루트/CLAUDE.md",
              desc: "프로젝트 설정 - 해당 프로젝트에 적용",
              scope: "프로젝트",
            },
            {
              path: "하위폴더/CLAUDE.md",
              desc: "폴더 설정 - 해당 폴더 작업 시 추가 적용",
              scope: "폴더",
            },
          ].map((item) => (
            <div key={item.path} className="bg-panel rounded-xl p-4 border border-[#222] flex items-start gap-4">
              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded font-medium flex-shrink-0">
                {item.scope}
              </span>
              <div>
                <code className="text-sm text-body font-mono">{item.path}</code>
                <p className="text-sm text-dim mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="tip-box">
          <p className="text-sm text-accent mb-2"><strong>💡 CLAUDE.md 관리 팁</strong></p>
          <ul className="text-sm text-accent space-y-1 list-disc list-inside">
            <li>프로젝트 규칙이 변경되면 CLAUDE.md도 업데이트하세요</li>
            <li>너무 길면 Claude가 혼란스러울 수 있으니 핵심만 간결하게 작성하세요</li>
            <li>팀원들과 CLAUDE.md를 공유하면 일관된 코딩 스타일을 유지할 수 있습니다</li>
            <li>Git에 커밋하여 버전 관리하세요</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-[#222]">
        <Link href="/docs/workflows/pr-docs" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: PR 및 문서화
        </Link>
        <Link href="/docs/advanced/commands" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 슬래시 명령어
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
