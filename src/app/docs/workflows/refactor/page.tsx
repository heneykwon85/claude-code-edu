import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function RefactorPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 2 · 핵심 워크플로우"
        title="코드 리팩토링"
        description="Claude Code를 활용하여 코드 품질을 높이고 유지보수하기 좋은 코드로 개선하세요."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">코드 개선 요청하기</h2>
        <CodeBlock
          code={`> 이 함수를 더 읽기 쉽게 리팩토링해줘.
  복잡한 중첩 조건문을 early return 패턴으로 바꿔줘.

> src/services/userService.ts 파일에서 
  반복되는 에러 처리 로직을 공통 함수로 추출해줘.

> 이 컴포넌트를 작은 하위 컴포넌트로 분리해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">타입 변환 & 마이그레이션</h2>
        <CodeBlock
          code={`> 이 JavaScript 파일을 TypeScript로 변환해줘.
  타입을 최대한 구체적으로 지정해줘.

> class 컴포넌트를 함수형 컴포넌트 + Hooks로 변환해줘.

> CommonJS require 구문을 ES Module import로 변환해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">성능 최적화</h2>
        <CodeBlock
          code={`> 이 데이터베이스 쿼리의 성능을 개선해줘. 
  N+1 문제가 있는지 확인해봐.

> 이 React 컴포넌트에서 불필요한 리렌더링을 
  줄일 수 있는 방법을 알려줘.

> 이 API의 응답 시간을 줄일 수 있는 방법을 제안해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      {/* Video Section */}
      <VideoSection>
        <YouTubeEmbed
          videoId="0lL94h1z72A"
          title="Getting Started With Claude Code With VS Code"
          description="VS Code에서 Claude Code를 활용하여 코드 리팩토링과 개선 작업을 진행하는 방법을 보여줍니다."
        />
      </VideoSection>

      <section className="mb-12">
        <div className="tip-box">
          <p className="text-sm text-accent mb-2"><strong>💡 리팩토링 모범사례</strong></p>
          <ul className="text-sm text-accent space-y-1 list-disc list-inside">
            <li>리팩토링 전에 테스트가 있는지 확인하세요. 없다면 먼저 테스트를 작성하세요.</li>
            <li>한 번에 큰 변경보다 작은 단위로 나누어 진행하세요.</li>
            <li>각 단계마다 git commit으로 변경 이력을 남기세요.</li>
            <li>리팩토링 후 기존 테스트가 모두 통과하는지 확인하세요.</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/workflows/bugfix" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 버그 수정
        </Link>
        <Link href="/docs/workflows/testing" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 테스트 작성
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
