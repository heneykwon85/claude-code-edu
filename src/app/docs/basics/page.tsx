import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function BasicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 1 · 시작하기"
        title="기본 사용법"
        description="Claude Code의 기본적인 사용법을 배워봅니다. 자연어로 대화하듯 코딩하세요."
      />

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">
          Claude Code는 어떻게 동작하나요?
        </h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "자연어 입력",
                desc: "터미널에서 원하는 작업을 한국어/영어로 설명합니다.",
              },
              {
                icon: "🧠",
                title: "AI 분석",
                desc: "Claude가 코드베이스를 분석하고 최적의 방법을 찾습니다.",
              },
              {
                icon: "✨",
                title: "코드 실행",
                desc: "사용자 확인 후 파일 수정, 생성, 명령 실행을 수행합니다.",
              },
            ].map((step) => (
              <div key={step.title} className="text-center">
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-bold text-heading mb-1">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Commands */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">기본 명령어</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-body mb-3">Claude Code 시작 & 종료</h3>
            <CodeBlock
              code={`# Claude Code 시작
claude

# 대화 종료
/exit

# 또는 Ctrl+C`}
              language="bash"
            />
          </div>

          <div>
            <h3 className="font-semibold text-body mb-3">이전 대화 이어하기</h3>
            <CodeBlock
              code={`# 가장 최근 대화 이어하기
claude --continue

# 이전 대화 목록에서 선택하여 이어하기
claude --resume`}
              language="bash"
            />
            <div className="tip-box mt-3">
              <p className="text-sm text-accent">
                <strong>💡 팁:</strong> <code className="bg-accent/20 px-1 rounded">--continue</code>는
                마지막 대화를 바로 이어가고, <code className="bg-accent/20 px-1 rounded">--resume</code>은
                대화 목록을 보여주어 선택할 수 있습니다.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-body mb-3">프로젝트 초기화</h3>
            <CodeBlock
              code={`# Claude Code 대화 중 입력
/init

# CLAUDE.md 파일이 자동으로 생성됩니다`}
              language="bash"
              filename="Claude Code 세션 내부"
            />
          </div>
        </div>
      </section>

      {/* Natural Language Examples */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">
          이렇게 말해보세요
        </h2>
        <p className="text-muted mb-6">
          Claude Code에서는 자연어로 요청할 수 있습니다.
          아래는 실제로 사용할 수 있는 예시들입니다.
        </p>

        <div className="space-y-4">
          {[
            {
              category: "코드 이해",
              examples: [
                "이 프로젝트의 전체 구조를 설명해줘",
                "src/utils/auth.ts 파일이 무슨 일을 하는지 설명해줘",
                "이 프로젝트에서 사용자 인증은 어떻게 처리되고 있어?",
              ],
            },
            {
              category: "코드 작성",
              examples: [
                "사용자 로그인 API 엔드포인트를 만들어줘",
                "이메일 유효성 검사 함수를 작성해줘",
                "React로 Todo 리스트 컴포넌트를 만들어줘",
              ],
            },
            {
              category: "버그 수정",
              examples: [
                "이 에러를 수정해줘: TypeError: Cannot read property 'map' of undefined",
                "로그인할 때 500 에러가 나는데 원인을 찾아줘",
                "이 함수가 null을 반환하는 이유를 찾아줘",
              ],
            },
            {
              category: "리팩토링",
              examples: [
                "이 함수를 더 읽기 쉽게 개선해줘",
                "반복되는 코드를 공통 유틸로 추출해줘",
                "이 클래스를 TypeScript로 변환해줘",
              ],
            },
          ].map((group) => (
            <div
              key={group.category}
              className="bg-panel rounded-xl border border-edge overflow-hidden"
            >
              <div className="px-5 py-3 bg-surface-alt border-b border-edge">
                <h3 className="font-semibold text-body text-sm">
                  {group.category}
                </h3>
              </div>
              <div className="p-5 space-y-3">
                {group.examples.map((example) => (
                  <div
                    key={example}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                      &gt;
                    </span>
                    <code className="text-body bg-surface-alt px-3 py-1.5 rounded-lg block w-full">
                      {example}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Permission System */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">권한 시스템</h2>
        <p className="text-muted mb-4">
          Claude Code는 안전을 위해 중요한 작업 전에 사용자 확인을 요청합니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "📄",
              title: "파일 읽기",
              desc: "자동 허용 - 확인 불필요",
              color: "bg-green-100 dark:bg-green-500/10 border-green-200 dark:border-green-500/20",
            },
            {
              icon: "✏️",
              title: "파일 수정/생성",
              desc: "변경 내용을 보여주고 확인 요청",
              color: "bg-yellow-100 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/20",
            },
            {
              icon: "⚡",
              title: "명령어 실행",
              desc: "실행할 명령어를 보여주고 확인 요청",
              color: "bg-orange-100 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20",
            },
            {
              icon: "🛡️",
              title: "위험한 작업",
              desc: "git push 등 되돌리기 어려운 작업은 추가 경고",
              color: "bg-red-100 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-xl p-4 border ${item.color}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{item.icon}</span>
                <h3 className="font-semibold text-heading text-sm">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="info-box mt-4">
          <p className="text-sm text-blue-500 dark:text-blue-300">
            <strong>ℹ️ 알아두세요:</strong> Yes를 누르면 해당 작업을 허용합니다.
            항상 변경 내용을 확인한 후 승인하세요. 실수로 허용해도 git으로 되돌릴 수 있습니다.
          </p>
        </div>
      </section>

      {/* Slash Commands */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">
          유용한 슬래시 명령어
        </h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">
                  명령어
                </th>
                <th className="text-left px-5 py-3 font-semibold text-body">
                  설명
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { cmd: "/init", desc: "CLAUDE.md 파일 생성 (프로젝트 초기화)" },
                { cmd: "/clear", desc: "현재 대화 내용 초기화" },
                { cmd: "/compact", desc: "대화 내용을 요약하여 컨텍스트 절약" },
                { cmd: "/cost", desc: "현재 세션의 토큰 사용량 확인" },
                { cmd: "/help", desc: "도움말 표시" },
                { cmd: "/exit", desc: "Claude Code 종료" },
              ].map((item, i) => (
                <tr
                  key={item.cmd}
                  className={i % 2 === 0 ? "" : "bg-surface-alt/50"}
                >
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

      {/* Video Section - Korean */}
      <VideoSection title="한국어 영상으로 배우기">
        <div className="grid md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="kiY2yo1Wx64"
            title="비개발자도 가능한 바이브 코딩 8분 튜토리얼"
            channel="한국어"
            description="AI에게 말을 걸어 1시간 만에 웹사이트를 완성하는 실제 과정을 보여줍니다."
          />
          <YouTubeEmbed
            videoId="H0Bux5SIkGs"
            title="Cursor + Claude로 진짜 Vibe Coding 세팅하기"
            channel="한국어"
            description="Claude와 Cursor를 함께 활용하는 실전 바이브 코딩 세팅 방법을 알려줍니다."
          />
        </div>
      </VideoSection>

      {/* Video Section - English */}
      <VideoSection title="영문 영상으로 배우기">
        <div className="grid md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="AJpK3YTTKZ4"
            title="Introducing Claude Code"
            channel="Anthropic (공식)"
            description="Anthropic 공식 소개 영상. Claude Code의 핵심 기능을 빠르게 살펴봅니다."
            duration="3:50"
          />
          <YouTubeEmbed
            videoId="1JDVrQr2pPc"
            title="How To Use Claude Code (Complete Tutorial)"
            channel="Leon Van Zyl"
            description="프로젝트를 처음부터 만들며 Claude Code의 실제 사용법을 보여줍니다."
          />
        </div>
      </VideoSection>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/skills"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 스킬 개념 &amp; 실습
        </Link>
        <Link
          href="/docs/workflows/understand"
          className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 코드베이스 이해하기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
