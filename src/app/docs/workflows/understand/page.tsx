import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function UnderstandPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 2 · 핵심 워크플로우"
        title="코드베이스 이해하기"
        description="새로운 프로젝트에 투입되었을 때, Claude Code로 빠르게 코드를 파악하는 방법을 배웁니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">
          전체 프로젝트 구조 파악
        </h2>
        <p className="text-muted mb-4">
          새로운 프로젝트를 처음 접할 때, Claude에게 전체적인 구조를 물어보세요.
        </p>
        <CodeBlock
          code={`> 이 프로젝트의 전체 구조를 설명해줘. 
  주요 디렉토리와 각 디렉토리의 역할을 알려줘.

> 이 프로젝트에서 사용하는 주요 기술 스택과 
  의존성 패키지를 정리해줘.

> 이 프로젝트의 진입점(entry point)은 어디야?`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">
          특정 기능 찾기
        </h2>
        <p className="text-muted mb-4">
          특정 기능이 어디에 구현되어 있는지 찾고 싶을 때 유용합니다.
        </p>
        <CodeBlock
          code={`> 사용자 로그인 기능은 어디에 구현되어 있어?

> 결제 처리 로직을 찾아서 전체 흐름을 설명해줘.

> API 엔드포인트 목록을 정리해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">
          특정 파일/함수 이해하기
        </h2>
        <CodeBlock
          code={`> src/utils/auth.ts 파일을 분석해줘. 
  각 함수의 역할을 설명해줘.

> handlePayment 함수의 동작 방식을 
  단계별로 설명해줘.

> 이 코드에서 사용된 디자인 패턴이 있다면 설명해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      {/* Video Section */}
      <VideoSection>
        <YouTubeEmbed
          videoId="AJpK3YTTKZ4"
          title="Introducing Claude Code - 코드베이스 분석 데모"
          channel="Anthropic (공식)"
          description="공식 데모에서 Claude Code가 Next.js 프로젝트를 분석하고 전체 구조를 파악하는 과정을 볼 수 있습니다."
          duration="3:50"
        />
      </VideoSection>

      <section className="mb-12">
        <div className="tip-box">
          <p className="text-sm text-accent mb-2">
            <strong>💡 효율적인 코드 이해 팁</strong>
          </p>
          <ul className="text-sm text-accent space-y-1 list-disc list-inside">
            <li>전체 구조부터 파악한 후 세부 기능으로 들어가세요</li>
            <li>한 번에 너무 많은 것을 묻지 말고, 단계적으로 질문하세요</li>
            <li><code className="bg-accent/20 px-1 rounded">/init</code>으로 CLAUDE.md를 먼저 생성하면 더 정확한 답변을 받을 수 있습니다</li>
            <li>데이터 흐름이나 함수 호출 순서를 물어보면 로직 파악에 도움이 됩니다</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/basics" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 기본 사용법
        </Link>
        <Link href="/docs/workflows/bugfix" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 버그 수정
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
