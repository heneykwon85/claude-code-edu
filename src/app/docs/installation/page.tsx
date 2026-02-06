import PageHeader from "@/components/PageHeader";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 1 · 시작하기"
        title="사전 설치 가이드"
        description="Claude Code를 사용하기 위한 환경을 준비합니다. 약 5분이면 충분합니다."
      />

      {/* System Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">시스템 요구사항</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "💻",
              title: "운영체제",
              detail: "macOS 13.0+, Ubuntu 20.04+, Windows 10+",
            },
            {
              icon: "🧠",
              title: "메모리",
              detail: "최소 4GB RAM",
            },
            {
              icon: "🌐",
              title: "네트워크",
              detail: "인터넷 연결 필수 (API 통신)",
            },
            {
              icon: "📦",
              title: "Node.js (선택)",
              detail: "npm 설치 시 Node.js 18+ 필요",
            },
          ].map((req) => (
            <div
              key={req.title}
              className="bg-surface-alt rounded-xl p-4 flex items-start gap-3 border border-edge"
            >
              <span className="text-2xl">{req.icon}</span>
              <div>
                <h3 className="font-semibold text-heading text-sm">
                  {req.title}
                </h3>
                <p className="text-sm text-dim">{req.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation Steps */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">설치 방법</h2>

        <div className="tip-box mb-6">
          <p className="text-sm text-accent">
            <strong>💡 팁:</strong> 가장 쉬운 방법은 네이티브 설치(curl)입니다.
            Node.js가 없어도 설치할 수 있습니다.
          </p>
        </div>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="방법 1: 네이티브 설치 (권장)"
            description="운영체제에 맞는 명령어를 터미널에 붙여넣으세요."
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold text-dim uppercase tracking-wide">
                macOS / Linux
              </p>
              <CodeBlock
                code="curl -fsSL https://claude.ai/install.sh | bash"
                language="bash"
              />
              <p className="text-xs font-semibold text-dim uppercase tracking-wide mt-4">
                Windows (PowerShell)
              </p>
              <CodeBlock
                code="irm https://claude.ai/install.ps1 | iex"
                language="powershell"
              />
            </div>
          </StepCard>

          <StepCard
            step={2}
            title="방법 2: Homebrew (macOS)"
            description="macOS 사용자라면 Homebrew로도 설치할 수 있습니다."
          >
            <CodeBlock
              code="brew install --cask claude-code"
              language="bash"
            />
          </StepCard>

          <StepCard
            step={3}
            title="방법 3: npm (Node.js 필요)"
            description="Node.js가 이미 설치되어 있다면 npm으로 설치할 수 있습니다."
          >
            <CodeBlock
              code="npm install -g @anthropic-ai/claude-code"
              language="bash"
            />
          </StepCard>

          <StepCard
            step={4}
            title="방법 4: WinGet (Windows)"
            description="Windows 패키지 관리자로도 설치 가능합니다."
          >
            <CodeBlock
              code="winget install Anthropic.ClaudeCode"
              language="powershell"
            />
          </StepCard>
        </div>
      </section>

      {/* Verify Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">설치 확인</h2>
        <StepCard
          step={1}
          title="버전 확인"
          description="설치가 완료되면 아래 명령어로 정상 설치를 확인하세요."
        >
          <CodeBlock code="claude --version" language="bash" />
          <div className="info-box mt-4">
            <p className="text-sm text-blue-500 dark:text-blue-300">
              <strong>ℹ️ 참고:</strong> 버전 번호가 출력되면 설치가 성공한 것입니다.
              오류가 발생하면 터미널을 재시작해보세요.
            </p>
          </div>
        </StepCard>
      </section>

      {/* Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">인증 (로그인)</h2>
        <p className="text-muted mb-6">
          Claude Code를 사용하려면 Anthropic 계정이 필요합니다.
          아래 중 하나의 방법으로 인증할 수 있습니다.
        </p>
        <div className="space-y-4">
          {[
            {
              title: "Claude Pro/Max 구독",
              desc: "claude.ai에서 Pro 또는 Max 플랜을 구독하면 바로 사용 가능합니다.",
              recommended: true,
            },
            {
              title: "Anthropic Console (API Key)",
              desc: "console.anthropic.com에서 API Key를 생성하여 사용할 수 있습니다.",
              recommended: false,
            },
            {
              title: "기업용 플랫폼",
              desc: "AWS Bedrock, Google Vertex AI 등 기업용 플랫폼을 통해 연결할 수 있습니다.",
              recommended: false,
            },
          ].map((method) => (
            <div
              key={method.title}
              className={`bg-panel rounded-xl p-5 border ${
                method.recommended
                  ? "border-accent/30 ring-1 ring-accent/10"
                  : "border-edge"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-heading">{method.title}</h3>
                {method.recommended && (
                  <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                    추천
                  </span>
                )}
              </div>
              <p className="text-sm text-dim">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First Run */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">처음 실행하기</h2>
        <div className="space-y-6">
          <StepCard
            step={1}
            title="프로젝트 폴더로 이동"
            description="작업하려는 프로젝트의 루트 폴더로 이동합니다."
          >
            <CodeBlock code="cd my-project" language="bash" />
          </StepCard>

          <StepCard
            step={2}
            title="Claude Code 시작"
            description="터미널에 claude를 입력하면 대화형 세션이 시작됩니다."
          >
            <CodeBlock code="claude" language="bash" />
          </StepCard>

          <StepCard
            step={3}
            title="프로젝트 초기화 (선택)"
            description="/init 명령어로 CLAUDE.md 파일을 자동 생성할 수 있습니다. 이 파일에 프로젝트 정보를 저장하면 매 대화마다 컨텍스트를 유지할 수 있습니다."
          >
            <CodeBlock
              code="/init"
              language="bash"
              filename="Claude Code 대화 중 입력"
            />
          </StepCard>
        </div>
      </section>

      {/* Video Section - Korean */}
      <VideoSection title="한국어 영상으로 따라하기">
        <div className="grid md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="1bw5flB9IJ8"
            title="Claude Code 완벽 설치 방법 (Windows)"
            channel="한국어"
            description="Windows 환경에서 Claude Code를 설치하고 설정하는 방법을 단계별로 안내합니다."
          />
          <YouTubeEmbed
            videoId="bTMs71I2vO8"
            title="AI 바이브코딩 3대장 비교: 클로드 코드 vs 커서 AI vs Gemini CLI"
            channel="한국어"
            description="2025 AI 코딩 도구 비교 영상. Claude Code의 설치부터 실제 사용까지 살펴봅니다."
          />
        </div>
      </VideoSection>

      {/* Video Section - English */}
      <VideoSection title="영문 영상으로 따라하기">
        <div className="grid md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="eMZmDH3T2bY"
            title="Claude Code Tutorial for Beginners"
            channel="Kevin Stratvert"
            description="설치부터 첫 프로젝트까지 초보자를 위한 전체 과정을 안내합니다."
          />
          <YouTubeEmbed
            videoId="dRaHQRxJAEs"
            title="Anthropic Claude Code in 15 Minutes"
            channel="Prompt Engineering"
            description="15분 만에 Claude Code 설치, 인증, 코드 생성까지 빠르게 살펴봅니다."
          />
        </div>
      </VideoSection>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          홈으로
        </Link>
        <Link
          href="/docs/basics"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 기본 사용법
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
