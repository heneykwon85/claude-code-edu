import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function TestingPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 2 · 핵심 워크플로우"
        title="테스트 작성"
        description="Claude Code로 단위 테스트, 통합 테스트를 빠르게 작성하는 방법을 배웁니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">테스트 자동 생성</h2>
        <CodeBlock
          code={`> src/utils/calculator.ts 파일의 모든 함수에 대해 
  단위 테스트를 작성해줘.

> UserService 클래스의 테스트를 작성해줘. 
  Jest와 mock을 사용해줘.

> 이 API 엔드포인트의 통합 테스트를 작성해줘. 
  성공/실패 케이스를 모두 포함해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">테스트 커버리지 향상</h2>
        <CodeBlock
          code={`> 현재 테스트 커버리지가 낮은 파일을 찾아서
  누락된 테스트 케이스를 추가해줘.

> 이 함수의 엣지 케이스 테스트를 작성해줘.
  null, undefined, 빈 배열 등을 처리하는 케이스.

> 이 테스트에서 빠진 경계값 테스트를 추가해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">테스트 실행 및 수정</h2>
        <CodeBlock
          code={`> 테스트를 실행하고 실패하는 테스트가 있으면 수정해줘.

> npm test를 실행해서 결과를 알려줘.

> 이 테스트가 왜 실패하는지 분석하고 수정해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <div className="info-box">
          <p className="text-sm text-blue-600 dark:text-blue-300 mb-2"><strong>ℹ️ 테스트 팁</strong></p>
          <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1 list-disc list-inside">
            <li>Claude에게 프로젝트의 테스트 프레임워크를 미리 알려주면 더 정확한 결과를 얻습니다</li>
            <li>CLAUDE.md에 테스트 실행 명령어를 기록해두면 편리합니다</li>
            <li>&quot;테스트를 작성하고 실행까지 해줘&quot;라고 한 번에 요청할 수도 있습니다</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-[#222]">
        <Link href="/docs/workflows/refactor" className="text-sm text-[#666] hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 코드 리팩토링
        </Link>
        <Link href="/docs/workflows/pr-docs" className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-[#e5e5e5] transition-colors flex items-center gap-2">
          다음: PR 및 문서화
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
