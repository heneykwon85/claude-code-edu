import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function PromptsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="팁 & 모범사례"
        title="효율적인 프롬프트 작성법"
        description="Claude Code에서 더 나은 결과를 얻기 위한 프롬프트 작성 팁을 배워보세요."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">좋은 프롬프트 vs 나쁜 프롬프트</h2>
        <div className="space-y-4">
          {[
            {
              bad: "코드 수정해줘",
              good: "src/components/UserList.tsx에서 API 호출 시 로딩 상태를 표시하는 코드를 추가해줘. isLoading state를 사용하고, 로딩 중에는 스피너를 보여줘.",
              reason: "구체적인 파일, 원하는 동작, 사용할 방법을 명시",
            },
            {
              bad: "테스트 만들어줘",
              good: "src/utils/validator.ts 파일의 validateEmail 함수에 대한 Jest 단위 테스트를 작성해줘. 정상 이메일, 빈 문자열, @없는 문자열, 도메인 없는 경우를 테스트해줘.",
              reason: "대상 파일/함수, 테스트 프레임워크, 테스트 케이스를 명시",
            },
            {
              bad: "이거 왜 안 돼?",
              good: "npm run dev 실행 시 'Module not found: Can't resolve @/utils/auth' 에러가 발생해. tsconfig.json의 paths 설정은 되어있는데, next.config.ts에서 별도 설정이 필요한건지 확인해줘.",
              reason: "에러 메시지, 이미 시도한 것, 의심되는 원인을 포함",
            },
          ].map((item, i) => (
            <div key={i} className="bg-panel rounded-xl border border-edge overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-5 bg-red-50 dark:bg-red-500/5 border-b md:border-b-0 md:border-r border-edge">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-red-600 dark:text-red-400 text-sm font-bold">✗ 나쁜 예시</span>
                  </div>
                  <p className="text-sm text-body font-mono bg-panel/80 p-3 rounded-lg">
                    {item.bad}
                  </p>
                </div>
                <div className="p-5 bg-green-50 dark:bg-green-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600 dark:text-green-400 text-sm font-bold">✓ 좋은 예시</span>
                  </div>
                  <p className="text-sm text-body font-mono bg-panel/80 p-3 rounded-lg">
                    {item.good}
                  </p>
                </div>
              </div>
              <div className="px-5 py-3 bg-surface-alt border-t border-edge">
                <p className="text-xs text-dim">
                  <strong>포인트:</strong> {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">프롬프트 작성 원칙</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "🎯",
              title: "구체적으로",
              desc: "파일명, 함수명, 라인 번호 등 구체적인 정보를 포함하세요.",
            },
            {
              icon: "📐",
              title: "범위를 명확히",
              desc: "변경할 범위를 정확히 지정하세요. \"이 파일만\", \"이 함수만\" 등.",
            },
            {
              icon: "🔄",
              title: "단계적으로",
              desc: "복잡한 작업은 여러 단계로 나누어 요청하세요.",
            },
            {
              icon: "📋",
              title: "맥락 제공",
              desc: "왜 이 변경이 필요한지 배경 설명을 추가하면 더 좋은 결과를 얻습니다.",
            },
            {
              icon: "✅",
              title: "기대 결과 명시",
              desc: "원하는 결과물의 형태를 구체적으로 설명하세요.",
            },
            {
              icon: "⚡",
              title: "제약조건 언급",
              desc: "\"기존 API를 변경하지 말고\", \"성능에 영향 없이\" 등 제약조건을 명시하세요.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-panel rounded-xl border border-edge p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-heading mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <VideoSection title="프롬프트 작성법 영상">
        <YouTubeEmbed
          videoId="ysPbXH0LpIE"
          title="Prompting 101 | Code w/ Claude"
          channel="Anthropic (공식)"
          description="Anthropic의 Applied AI 팀이 직접 알려주는 효과적인 프롬프트 작성 기법. Claude Code에서 최적의 결과를 얻는 방법을 배웁니다."
          duration="24:50"
        />
      </VideoSection>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">확장된 사고 활용하기</h2>
        <p className="text-muted mb-4">
          복잡한 문제를 해결할 때는 Claude에게 &quot;깊게 생각해봐&quot;라고 요청하면
          더 심층적인 분석을 수행합니다.
        </p>
        <CodeBlock
          code={`> 이 아키텍처 결정에 대해 깊게 생각해봐.
  마이크로서비스 vs 모놀리식, 우리 팀 상황에서
  어떤 선택이 나을지 장단점을 분석해줘.

> 이 보안 취약점에 대해 정말 깊게 분석해줘.
  공격 시나리오와 방어 방법을 모두 제시해줘.`}
          language="plaintext"
          filename="Claude Code에 입력"
        />
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 팁:</strong> &quot;깊게 생각해봐&quot;, &quot;심층 분석해줘&quot;, &quot;ultrathink&quot; 등의
            키워드를 사용하면 Claude가 확장된 사고(Extended Thinking)를 활용하여
            더 정교한 답변을 제공합니다.
          </p>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/advanced/github-actions" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: GitHub Actions
        </Link>
        <Link href="/docs/tips/faq" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 자주 묻는 질문
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
