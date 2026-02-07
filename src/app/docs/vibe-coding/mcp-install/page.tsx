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
        <h2 className="text-2xl font-bold text-heading mb-6">실습 3: Context7 MCP 설치</h2>
        <p className="text-muted mb-4">
          Context7은 최신 라이브러리 문서를 실시간으로 가져와주는 MCP 서버입니다.
          AI가 오래된 학습 데이터 대신 <strong className="text-heading">최신 공식 문서</strong>를 참고하여 정확한 코드를 생성합니다.
        </p>
        <div className="space-y-6">
          <StepCard step={1} title="Context7 MCP 추가 (OAuth 방식)" description="가장 간단한 OAuth 인증 방식으로 설치합니다.">
            <CodeBlock
              code={`# Claude Code 터미널에서 실행
claude mcp add --transport http context7 https://mcp.context7.com/oauth`}
              language="bash"
            />
            <div className="info-box mt-3">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                💡 설치 후 Claude Code에서 <code className="bg-blue-100 dark:bg-blue-500/10 px-1 rounded">/mcp</code> 입력 → Context7 선택 → <strong>Authenticate</strong> 클릭으로 인증을 완료하세요.
              </p>
            </div>
          </StepCard>
          <StepCard step={2} title="API Key 방식 (선택)" description="더 높은 사용량이 필요한 경우 API Key를 사용할 수 있습니다.">
            <CodeBlock
              code={`# context7.com/dashboard 에서 무료 API Key 발급 후 실행
claude mcp add --transport http context7 https://mcp.context7.com/mcp \\
  --header "CONTEXT7_API_KEY: YOUR_API_KEY"`}
              language="bash"
            />
          </StepCard>
          <StepCard step={3} title="테스트" description="라이브러리 문서를 기반으로 코드를 생성해봅니다.">
            <CodeBlock
              code={`# Claude Code 대화창에서
> Next.js 최신 문서를 참고해서 App Router로 API 라우트를 만들어줘

> React Query 최신 버전 기준으로 useQuery 사용법을 알려줘`}
              language="bash"
              filename="Claude Code 세션"
            />
          </StepCard>
        </div>
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 왜 Context7을 쓸까?</strong> AI 모델은 학습 시점의 오래된 API를 알려줄 수 있습니다.
            Context7은 <strong>실시간 최신 문서</strong>를 가져와 정확한 코드를 생성하도록 도와줍니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">실습 4: Playwright MCP 설치</h2>
        <p className="text-muted mb-4">
          Playwright MCP는 Claude Code에서 <strong className="text-heading">실제 브라우저를 제어</strong>할 수 있게 해주는 MCP 서버입니다.
          웹 자동화, 테스트, 스크린샷 등 25개 이상의 브라우저 도구를 제공합니다.
        </p>
        <div className="space-y-6">
          <StepCard step={1} title="Playwright MCP 추가" description="Microsoft 공식 Playwright MCP를 설치합니다.">
            <CodeBlock
              code={`# Claude Code 터미널에서 실행
claude mcp add playwright -- npx @playwright/mcp@latest`}
              language="bash"
            />
            <div className="info-box mt-3">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                💡 <strong>Node.js 18 이상</strong>이 필요합니다. <code className="bg-blue-100 dark:bg-blue-500/10 px-1 rounded">node --version</code>으로 확인하세요.
              </p>
            </div>
          </StepCard>
          <StepCard step={2} title="설치 확인" description="MCP 서버가 정상 등록되었는지 확인합니다.">
            <CodeBlock code={`claude mcp list`} language="bash" />
          </StepCard>
          <StepCard step={3} title="테스트" description="브라우저를 제어하는 요청을 해봅니다.">
            <CodeBlock
              code={`# Claude Code 대화창에서
> playwright mcp로 https://example.com 에 접속해서 스크린샷을 찍어줘

> playwright mcp로 구글에서 "Claude Code"를 검색하고 결과를 정리해줘`}
              language="bash"
              filename="Claude Code 세션"
            />
          </StepCard>
        </div>
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 팁:</strong> 프롬프트에 &quot;playwright mcp&quot;를 명시하면 Claude가 Bash 대신 Playwright 도구를 확실히 사용합니다.
            웹 스크래핑, E2E 테스트, UI 확인 등에 매우 유용합니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">실습 5: Lark(라크) MCP 설치</h2>
        <p className="text-muted mb-4">
          Lark(라크/페이슈) MCP는 Claude Code에서 <strong className="text-heading">Lark의 문서, 캘린더, 메신저</strong> 등과 연동할 수 있게 해줍니다.
          거의 모든 Lark API를 지원합니다.
        </p>
        <div className="space-y-6">
          <StepCard step={1} title="Lark 앱 생성 및 자격 증명 확보" description="Lark Open Platform에서 앱을 만들고 인증 정보를 받습니다.">
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>
                <a href="https://open.larksuite.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  open.larksuite.com
                </a>{" "}접속 (페이슈는{" "}
                <a href="https://open.feishu.cn/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  open.feishu.cn
                </a>)
              </li>
              <li><strong className="text-heading">Console</strong>에서 새 앱(Application) 생성</li>
              <li><strong className="text-heading">App ID</strong>와 <strong className="text-heading">App Secret</strong> 복사</li>
              <li>필요한 권한(Permissions) 추가 (문서, 캘린더 등)</li>
            </ol>
          </StepCard>
          <StepCard step={2} title="Lark MCP 추가" description="Claude Code에 Lark MCP를 등록합니다.">
            <CodeBlock
              code={`# Claude Code 터미널에서 실행
# <YOUR_APP_ID>와 <YOUR_APP_SECRET>을 실제 값으로 교체하세요
claude mcp add lark -- npx -y @larksuiteoapi/lark-mcp mcp \\
  -a <YOUR_APP_ID> \\
  -s <YOUR_APP_SECRET>`}
              language="bash"
            />
            <div className="mt-4">
              <p className="text-xs text-dim mb-2">또는 <code className="bg-surface-alt px-1.5 py-0.5 rounded text-accent text-[10px]">~/.claude/settings.json</code>에 직접 추가:</p>
              <CodeBlock
                code={`{
  "mcpServers": {
    "lark_mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@larksuiteoapi/lark-mcp",
        "mcp",
        "-a", "<YOUR_APP_ID>",
        "-s", "<YOUR_APP_SECRET>"
      ]
    }
  }
}`}
                language="json"
                filename="~/.claude/settings.json"
              />
            </div>
          </StepCard>
          <StepCard step={3} title="테스트" description="Lark 관련 요청을 해봅니다.">
            <CodeBlock
              code={`# Claude Code 대화창에서
> Lark에서 이번 주 캘린더 일정을 가져와줘

> Lark 문서 목록을 조회하고 최근 수정된 문서를 정리해줘`}
              language="bash"
              filename="Claude Code 세션"
            />
          </StepCard>
        </div>
        <div className="warning-box mt-4">
          <p className="text-sm text-orange-600 dark:text-orange-300">
            <strong>⚠️ 보안 주의:</strong> App ID와 App Secret은 절대 공개 저장소에 커밋하지 마세요.
            <code className="bg-orange-100 dark:bg-orange-500/10 px-1 rounded">.gitignore</code>에{" "}
            <code className="bg-orange-100 dark:bg-orange-500/10 px-1 rounded">.claude/settings.json</code>을 추가하는 것을 권장합니다.
          </p>
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
            <li><strong>웹 개발:</strong> Context7 + Playwright + Filesystem + GitHub</li>
            <li><strong>프론트엔드 테스트:</strong> Playwright + Fetch + Context7</li>
            <li><strong>데이터 분석:</strong> PostgreSQL + Fetch</li>
            <li><strong>팀 협업:</strong> Lark + GitHub + Slack + Notion</li>
            <li><strong>올인원:</strong> Context7 + Playwright + Filesystem + Fetch + GitHub</li>
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
