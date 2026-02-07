import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function WhatIsMcpPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-3"
        title="MCP란?"
        description="Model Context Protocol(MCP)로 Claude Code를 외부 서비스와 연결하는 방법을 이해합니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP = Claude의 확장 플러그인</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <p className="text-body text-base leading-relaxed mb-3">
            <strong className="text-heading">MCP(Model Context Protocol)</strong>는
            Anthropic이 만든 오픈소스 프로토콜로, Claude Code가
            <strong className="text-accent"> GitHub, Slack, 데이터베이스 등 외부 서비스와 직접 연결</strong>할 수 있게 해줍니다.
          </p>
          <p className="text-muted text-sm">
            쉽게 말하면, 스마트폰에 앱을 설치하듯 Claude Code에 &quot;능력&quot;을 추가하는 것입니다.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP 없이 vs MCP와 함께</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-surface-alt rounded-xl p-5 border border-edge">
            <h3 className="font-semibold text-heading text-sm mb-3">🚫 MCP 없이</h3>
            <ul className="text-xs text-muted space-y-2">
              <li>• 로컬 파일만 읽기/수정 가능</li>
              <li>• GitHub 작업은 별도 CLI 사용</li>
              <li>• DB 작업을 위해 직접 쿼리 실행</li>
              <li>• Slack 알림을 수동으로 전송</li>
            </ul>
          </div>
          <div className="bg-accent/5 rounded-xl p-5 border border-accent/20">
            <h3 className="font-semibold text-heading text-sm mb-3">✅ MCP와 함께</h3>
            <ul className="text-xs text-muted space-y-2">
              <li>• &quot;GitHub 이슈 #42를 확인해줘&quot;</li>
              <li>• &quot;DB에서 최근 주문 10개를 조회해줘&quot;</li>
              <li>• &quot;Slack #dev 채널에 배포 완료 알림 보내줘&quot;</li>
              <li>• 모든 것을 자연어 하나로 처리!</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">인기 MCP 서버</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "🐙", name: "GitHub", desc: "이슈, PR, 코드 리뷰 관리", cmd: "claude mcp add github" },
            { icon: "💬", name: "Slack", desc: "팀 메시지, 알림 자동화", cmd: "claude mcp add slack" },
            { icon: "🗄️", name: "PostgreSQL", desc: "데이터베이스 쿼리, 분석", cmd: "claude mcp add postgres" },
            { icon: "📝", name: "Notion", desc: "문서 생성 및 관리", cmd: "claude mcp add notion" },
            { icon: "🌐", name: "Fetch", desc: "웹 페이지 크롤링, API 호출", cmd: "claude mcp add fetch" },
            { icon: "📁", name: "Filesystem", desc: "고급 파일시스템 작업", cmd: "claude mcp add filesystem" },
          ].map((mcp) => (
            <div key={mcp.name} className="bg-panel rounded-xl p-4 border border-edge">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{mcp.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-heading text-sm mb-0.5">{mcp.name}</h3>
                  <p className="text-xs text-muted mb-2">{mcp.desc}</p>
                  <code className="text-[10px] bg-surface-alt px-2 py-1 rounded text-accent block">{mcp.cmd}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP 동작 방식</h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "MCP 서버 등록", desc: "claude mcp add 명령어로 서버를 Claude Code에 등록합니다.", color: "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20" },
            { step: "2", title: "사용자 요청", desc: "자연어로 \"GitHub 이슈를 확인해줘\" 같은 요청을 합니다.", color: "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20" },
            { step: "3", title: "Claude가 MCP 호출", desc: "Claude가 적절한 MCP 서버를 찾아 API를 호출합니다.", color: "bg-green-100 dark:bg-green-500/10 border-green-200 dark:border-green-500/20" },
            { step: "4", title: "결과 반환", desc: "외부 서비스의 응답을 받아 사용자에게 보여줍니다.", color: "bg-orange-100 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20" },
          ].map((item) => (
            <div key={item.step} className={`rounded-xl p-4 border ${item.color} flex items-start gap-3`}>
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">{item.step}</span>
              <div>
                <h3 className="font-semibold text-heading text-sm">{item.title}</h3>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">MCP 관리 명령어</h2>
        <CodeBlock
          code={`# MCP 서버 추가
claude mcp add <서버명>

# 설치된 MCP 서버 목록 확인
claude mcp list

# MCP 서버 제거
claude mcp remove <서버명>`}
          language="bash"
          filename="터미널"
        />
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding/init-practice" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 실습 - /init
        </Link>
        <Link href="/docs/vibe-coding/mcp-install" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 실습 - MCP 설치
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
