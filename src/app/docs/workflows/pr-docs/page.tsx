import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function PrDocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 2 · 핵심 워크플로우"
        title="PR 생성 및 문서화"
        description="Claude Code로 깔끔한 PR을 만들고, 코드 문서를 자동 생성하는 방법을 배웁니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">PR (Pull Request) 생성</h2>
        <CodeBlock
          code={`> 현재 변경사항으로 PR을 생성해줘.
  변경 내용을 요약해서 PR 설명도 작성해줘.

> 지금까지의 커밋을 기반으로 PR 제목과 설명을 
  한국어로 작성해줘.

> 이 PR의 변경사항을 코드 리뷰어가 이해하기 쉽게
  정리해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">Git 커밋 관리</h2>
        <CodeBlock
          code={`> 현재 변경사항을 확인하고 적절한 커밋 메시지로 
  커밋해줘.

> 지금까지의 변경사항을 기능별로 나누어서 
  각각 커밋해줘.

> Conventional Commits 형식으로 커밋 메시지를 작성해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">문서 자동 생성</h2>
        <CodeBlock
          code={`> 이 프로젝트의 README.md를 작성해줘.
  설치 방법, 사용법, 기여 가이드를 포함해줘.

> src/api/ 디렉토리의 API 문서를 생성해줘.
  각 엔드포인트의 파라미터와 응답 형식을 포함해줘.

> 이 함수들에 JSDoc 주석을 추가해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <div className="tip-box">
          <p className="text-sm text-accent mb-2"><strong>💡 PR 작성 팁</strong></p>
          <ul className="text-sm text-accent space-y-1 list-disc list-inside">
            <li>Claude에게 &quot;PR 템플릿에 맞게&quot;라고 요청하면 팀의 형식에 맞춰 작성합니다</li>
            <li>스크린샷이 필요한 UI 변경은 별도로 추가하세요</li>
            <li>CLAUDE.md에 PR 템플릿을 저장해두면 일관된 형식을 유지할 수 있습니다</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/workflows/testing" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 테스트 작성
        </Link>
        <Link href="/docs/advanced/claude-md" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: CLAUDE.md 설정
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
