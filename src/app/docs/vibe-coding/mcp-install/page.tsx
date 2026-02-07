import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import StepCard from "@/components/StepCard";
import Link from "next/link";

export default function McpInstallPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-4"
        title="실습: MCP 설치하기"
        description="실제 MCP 서버를 설치하고 Claude Code에서 외부 서비스와 연동하는 실습을 진행합니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">사전 준비</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "📦", title: "Node.js", desc: "대부분의 MCP 서버가 npx로 실행", check: "node --version" },
            { icon: "🐍", title: "Python & uv (선택)", desc: "Python 기반 MCP 서버 사용 시 필요", check: "python3 --version" },
          ].map((item) => (
            <div key={item.title} className="bg-panel rounded-xl p-4 border border-edge">
              <div className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-heading text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted mb-2">{item.desc}</p>
                  <code className="text-[10px] bg-surface-alt px-2 py-1 rounded text-accent">{item.check}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">실습 1: Filesystem MCP 설치</h2>
        <p className="text-muted mb-4">가장 기본적인 Filesystem MCP를 설치해봅니다.</p>
        <div className="space-y-6">
          <StepCard step={1} title="MCP 서버 추가" description="Claude Code에서 filesystem MCP를 등록합니다.">
            <CodeBlock
              code={`# Claude Code 터미널에서 실행
claude mcp add filesystem -- npx -y @anthropic-ai/mcp-filesystem ~/projects`}
              language="bash"
            />
          </StepCard>
          <StepCard step={2} title="설치 확인" description="MCP 서버가 정상 등록되었는지 확인합니다.">
            <CodeBlock code={`claude mcp list`} language="bash" />
          </StepCard>
          <StepCard step={3} title="테스트" description="Claude Code에서 파일시스템 관련 요청을 해봅니다.">
            <CodeBlock
              code={`# Claude Code 대화창에서
> ~/projects 폴더에 있는 모든 프로젝트를 정리해줘`}
              language="bash"
              filename="Claude Code 세션"
            />
          </StepCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">실습 2: Fetch MCP 설치</h2>
        <p className="text-muted mb-4">웹 페이지 크롤링과 API 호출이 가능한 Fetch MCP를 설치합니다.</p>
        <div className="space-y-6">
          <StepCard step={1} title="Fetch MCP 추가" description="웹 데이터를 가져올 수 있는 Fetch MCP를 등록합니다.">
            <CodeBlock
              code={`claude mcp add fetch -- npx -y @anthropic-ai/mcp-fetch`}
              language="bash"
            />
          </StepCard>
          <StepCard step={2} title="테스트" description="웹 페이지를 가져와보세요.">
            <CodeBlock
              code={`# Claude Code 대화창에서
> https://news.ycombinator.com 의 오늘 인기 기사 5개를 정리해줘`}
              language="bash"
              filename="Claude Code 세션"
            />
          </StepCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP 설정 관리</h2>
        <CodeBlock
          code={`# 설치된 MCP 서버 목록 확인
claude mcp list

# 특정 MCP 서버 제거
claude mcp remove filesystem

# MCP 설정 파일 직접 확인
cat ~/.claude/settings.json`}
          language="bash"
          filename="MCP 관리 명령어"
        />
        <div className="info-box mt-4">
          <p className="text-sm text-blue-500 dark:text-blue-300">
            <strong>ℹ️ 참고:</strong> MCP 설정은{" "}
            <code className="bg-blue-100 dark:bg-blue-500/10 px-1 rounded">~/.claude/settings.json</code>에
            저장됩니다. 문제가 생기면 이 파일을 직접 편집할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <div className="tip-box">
          <p className="text-sm text-accent mb-2"><strong>💡 추천 MCP 조합</strong></p>
          <ul className="text-sm text-accent space-y-1 list-disc list-inside">
            <li><strong>웹 개발:</strong> Filesystem + Fetch + GitHub</li>
            <li><strong>데이터 분석:</strong> PostgreSQL + Fetch</li>
            <li><strong>팀 협업:</strong> GitHub + Slack + Notion</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding/what-is-mcp" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: MCP란?
        </Link>
        <Link href="/docs/vibe-coding/essential-features" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 필수 기능
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
