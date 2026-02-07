import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function McpPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 3 · 고급 기능"
        title="MCP 서버 연결"
        description="Model Context Protocol(MCP)로 Claude Code의 능력을 확장하여 외부 도구와 연동하세요."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP란 무엇인가요?</h2>
        <div className="bg-panel rounded-2xl p-6 border border-purple-200 dark:border-purple-500/20">
          <p className="text-body leading-relaxed mb-4">
            <strong>MCP (Model Context Protocol)</strong>는 Claude가 외부 도구 및 서비스와
            통신할 수 있게 해주는 프로토콜입니다. 데이터베이스 조회, API 호출, 파일 시스템 접근 등
            다양한 작업을 Claude Code 안에서 바로 수행할 수 있습니다.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🗄️", title: "데이터베이스", desc: "DB 조회/수정" },
              { icon: "🌐", title: "웹 브라우저", desc: "웹 페이지 접근" },
              { icon: "📊", title: "외부 API", desc: "서드파티 연동" },
            ].map((item) => (
              <div key={item.title} className="bg-panel/80 rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-heading text-sm">{item.title}</h3>
                <p className="text-xs text-dim">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP 서버 설정하기</h2>

        <h3 className="font-semibold text-body mb-3">1. 설정 파일 생성</h3>
        <CodeBlock
          code={`# Claude Code 세션에서
/mcp`}
          language="bash"
          filename="Claude Code 세션 내부"
        />

        <h3 className="font-semibold text-body mb-3 mt-6">2. 또는 직접 설정 파일 작성</h3>
        <CodeBlock
          code={`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/allowed/directory"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    }
  }
}`}
          language="json"
          filename=".claude/settings.json"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">인기 MCP 서버</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              name: "Filesystem",
              desc: "파일 읽기/쓰기/검색",
              pkg: "@modelcontextprotocol/server-filesystem",
            },
            {
              name: "GitHub",
              desc: "이슈, PR, 리포지토리 관리",
              pkg: "@modelcontextprotocol/server-github",
            },
            {
              name: "PostgreSQL",
              desc: "PostgreSQL 데이터베이스 조회",
              pkg: "@modelcontextprotocol/server-postgres",
            },
            {
              name: "Puppeteer",
              desc: "웹 브라우저 자동화",
              pkg: "@modelcontextprotocol/server-puppeteer",
            },
            {
              name: "Lark (라크/페이슈)",
              desc: "메시지, 문서, 캘린더, Bitable 연동",
              pkg: "@larksuiteoapi/lark-mcp",
            },
            {
              name: "Slack",
              desc: "Slack 메시지 보내기/읽기",
              pkg: "@modelcontextprotocol/server-slack",
            },
            {
              name: "Memory",
              desc: "영구 메모리 저장소",
              pkg: "@modelcontextprotocol/server-memory",
            },
          ].map((server) => (
            <div key={server.name} className="bg-panel rounded-xl border border-edge p-4">
              <h3 className="font-semibold text-heading">{server.name}</h3>
              <p className="text-sm text-dim mb-2">{server.desc}</p>
              <code className="text-xs text-dim font-mono">{server.pkg}</code>
            </div>
          ))}
        </div>
      </section>

      {/* Lark MCP Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">Lark(라크) MCP 연결하기</h2>
        <div className="bg-accent/5 rounded-2xl p-6 border border-accent/20 mb-6">
          <p className="text-body leading-relaxed mb-3">
            <strong className="text-heading">Lark MCP</strong>는 Lark(라크/페이슈) Open Platform의
            API를 MCP 도구로 제공합니다. 메시지 전송, 그룹 관리, 문서 작성, 캘린더, Bitable 등
            Lark의 주요 기능을 Claude Code에서 자연어로 사용할 수 있습니다.
          </p>
        </div>

        <h3 className="font-semibold text-body mb-3">1단계: Lark 앱 생성 및 자격 증명 확보</h3>
        <div className="bg-panel rounded-xl p-4 border border-edge mb-6">
          <ol className="text-sm text-muted space-y-2 list-decimal list-inside">
            <li><a href="https://open.larksuite.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Lark Open Platform</a>에 접속하여 로그인</li>
            <li>&quot;Create App&quot;으로 새 앱을 생성</li>
            <li>앱의 <strong className="text-heading">App ID</strong>와 <strong className="text-heading">App Secret</strong>을 확인 (Credentials 탭)</li>
            <li>필요한 권한(Scopes)을 추가하고 앱을 게시(Publish)</li>
          </ol>
        </div>

        <h3 className="font-semibold text-body mb-3">2단계: Claude Code에 MCP 서버 추가</h3>
        <CodeBlock
          code={`# CLI로 바로 추가하기
claude mcp add lark -- npx -y @larksuiteoapi/lark-mcp mcp \\
  -a <YOUR_APP_ID> \\
  -s <YOUR_APP_SECRET>`}
          language="bash"
          filename="터미널"
        />

        <h3 className="font-semibold text-body mb-3 mt-6">또는 설정 파일에 직접 추가</h3>
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
          filename=".claude/settings.json"
        />

        <h3 className="font-semibold text-body mb-3 mt-6">3단계: 테스트</h3>
        <CodeBlock
          code={`# Claude Code 대화창에서 테스트
> Lark에서 내 캘린더 일정을 확인해줘
> Lark 그룹에 "배포 완료" 메시지를 보내줘
> Lark 문서에 오늘 회의록을 작성해줘`}
          language="bash"
          filename="Claude Code 세션"
        />

        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 팁:</strong> Lark MCP는 App Access Token과 User Access Token 두 가지 인증을 지원합니다.
            개인 작업은 User Token, 자동화 봇은 App Token을 사용하세요.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection title="MCP 서버 설정 영상">
        <div className="grid md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="DfWHX7kszQI"
            title="Claude Code MCP: How to Add MCP Servers (Complete Guide)"
            description="MCP 서버를 Claude Code에 추가하는 전체 과정을 단계별로 안내합니다."
          />
          <YouTubeEmbed
            videoId="X7lgIa6guKg"
            title="Claude Code Tutorial #7 - MCP Servers"
            channel="Net Ninja"
            description="MCP 서버의 개념부터 실제 설정까지, 시리즈 튜토리얼의 MCP 편입니다."
          />
        </div>
      </VideoSection>

      <section className="mb-12">
        <div className="info-box">
          <p className="text-sm text-blue-600 dark:text-blue-300 mb-2"><strong>ℹ️ MCP 서버 보안 주의사항</strong></p>
          <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1 list-disc list-inside">
            <li>API 키나 토큰은 환경변수로 관리하세요</li>
            <li>파일시스템 MCP는 허용할 디렉토리를 최소한으로 지정하세요</li>
            <li>사용하지 않는 MCP 서버는 비활성화하세요</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/advanced/commands" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 슬래시 명령어
        </Link>
        <Link href="/docs/advanced/github-actions" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: GitHub Actions
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
