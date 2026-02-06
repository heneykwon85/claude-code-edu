import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function BugfixPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 2 · 핵심 워크플로우"
        title="효율적인 버그 수정"
        description="에러 메시지만 붙여넣으면 Claude가 원인을 분석하고 수정까지 해줍니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">에러 메시지로 버그 수정</h2>
        <p className="text-muted mb-4">
          가장 빠른 방법은 에러 메시지를 그대로 Claude에게 전달하는 것입니다.
        </p>
        <CodeBlock
          code={`> 이 에러를 수정해줘:
  TypeError: Cannot read properties of undefined (reading 'map')
  at UserList (src/components/UserList.tsx:15:22)

> npm run build 할 때 이런 에러가 나:
  Module not found: Can't resolve './utils/helper'`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">증상 기반 디버깅</h2>
        <p className="text-muted mb-4">
          에러 메시지가 없어도 증상을 설명하면 Claude가 원인을 찾아줍니다.
        </p>
        <CodeBlock
          code={`> 로그인 버튼을 클릭하면 아무 반응이 없어. 원인을 찾아줘.

> 사용자 목록 페이지가 로딩 후 빈 화면만 보여. 
  데이터는 API에서 정상적으로 반환되는 것 같은데.

> 페이지를 새로고침하면 404 에러가 나. 
  처음 접속할 때는 괜찮은데.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">로그 분석</h2>
        <CodeBlock
          code={`> 이 로그를 분석해줘:
  [ERROR] 2024-01-15 10:23:45 - Connection refused to database
  [WARN]  2024-01-15 10:23:46 - Retry attempt 1/3
  [ERROR] 2024-01-15 10:23:50 - Max retries exceeded

> 서버 로그에서 메모리 누수가 의심되는 패턴을 찾아줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
      </section>

      {/* Video Section */}
      <VideoSection>
        <YouTubeEmbed
          videoId="1JDVrQr2pPc"
          title="How To Use Claude Code - 버그 수정 & 디버깅 워크플로우"
          channel="Leon Van Zyl"
          description="실제 프로젝트에서 에러를 발견하고 Claude Code로 수정하는 전체 과정을 보여줍니다."
        />
      </VideoSection>

      <section className="mb-12">
        <div className="warning-box">
          <p className="text-sm text-red-600 dark:text-red-300 mb-2">
            <strong>⚠️ 주의사항</strong>
          </p>
          <ul className="text-sm text-red-600 dark:text-red-300 space-y-1 list-disc list-inside">
            <li>Claude의 수정 제안을 적용하기 전에 항상 변경 내용을 확인하세요</li>
            <li>중요한 수정 전에는 git commit을 해두면 안전합니다</li>
            <li>수정 후 반드시 테스트를 실행해서 다른 곳이 깨지지 않았는지 확인하세요</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/workflows/understand" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 코드베이스 이해하기
        </Link>
        <Link href="/docs/workflows/refactor" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 코드 리팩토링
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
