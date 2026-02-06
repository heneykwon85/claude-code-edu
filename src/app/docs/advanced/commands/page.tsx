import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function CommandsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 3 · 고급 기능"
        title="슬래시 명령어 & 커스텀 명령어"
        description="내장 슬래시 명령어와 나만의 커스텀 명령어를 만들어 생산성을 높이세요."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">내장 슬래시 명령어</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">명령어</th>
                <th className="text-left px-5 py-3 font-semibold text-body">설명</th>
                <th className="text-left px-5 py-3 font-semibold text-body">사용 상황</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cmd: "/init", desc: "CLAUDE.md 생성", usage: "프로젝트 첫 설정 시" },
                { cmd: "/clear", desc: "대화 내용 초기화", usage: "새로운 주제로 전환 시" },
                { cmd: "/compact", desc: "대화 요약 & 압축", usage: "대화가 길어졌을 때" },
                { cmd: "/cost", desc: "토큰 사용량 확인", usage: "비용 관리 시" },
                { cmd: "/doctor", desc: "환경 진단", usage: "문제 발생 시 디버깅" },
                { cmd: "/help", desc: "도움말 표시", usage: "명령어를 모를 때" },
                { cmd: "/exit", desc: "세션 종료", usage: "작업 완료 시" },
              ].map((item, i) => (
                <tr key={item.cmd} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3">
                    <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">{item.cmd}</code>
                  </td>
                  <td className="px-5 py-3 text-muted">{item.desc}</td>
                  <td className="px-5 py-3 text-dim text-xs">{item.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">커스텀 슬래시 명령어 만들기</h2>
        <p className="text-muted mb-4">
          반복적인 작업을 커스텀 명령어로 등록하면 한 번의 명령으로 실행할 수 있습니다.
        </p>

        <h3 className="font-semibold text-body mb-3">1. 명령어 파일 생성</h3>
        <CodeBlock
          code={`# 프로젝트 루트에서
mkdir -p .claude/commands
# 명령어 파일 생성 (파일명이 명령어 이름)
touch .claude/commands/review.md`}
          language="bash"
        />

        <h3 className="font-semibold text-body mb-3 mt-6">2. 명령어 내용 작성</h3>
        <CodeBlock
          code={`현재 git diff의 변경사항을 코드 리뷰해줘.
아래 기준으로 체크해줘:

1. 버그 가능성이 있는 코드
2. 성능 이슈
3. 보안 취약점
4. 코딩 컨벤션 위반
5. 더 나은 방법이 있는 코드

각 항목에 대해 구체적인 개선 방안을 제시해줘.`}
          language="markdown"
          filename=".claude/commands/review.md"
        />

        <h3 className="font-semibold text-body mb-3 mt-6">3. 사용하기</h3>
        <CodeBlock
          code={`# Claude Code 세션에서
/project:review`}
          language="bash"
          filename="Claude Code 세션 내부"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">커스텀 명령어 예시 모음</h2>
        <div className="space-y-4">
          {[
            {
              name: "commit.md",
              desc: "스마트 커밋",
              content: "현재 변경사항을 분석하고 Conventional Commits 형식으로 적절한 커밋 메시지를 작성해서 커밋해줘.",
            },
            {
              name: "test-this.md",
              desc: "현재 파일 테스트",
              content: "현재 열려있는 파일의 테스트를 작성하고 실행해줘. 엣지 케이스도 포함해줘.",
            },
            {
              name: "optimize.md",
              desc: "성능 최적화",
              content: "이 파일의 성능을 분석하고 최적화 방안을 제시해줘. 가능하면 바로 적용해줘.",
            },
          ].map((cmd) => (
            <div key={cmd.name} className="bg-panel rounded-xl border border-edge p-5">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">
                  .claude/commands/{cmd.name}
                </code>
                <span className="text-dim">·</span>
                <span className="text-sm text-dim">{cmd.desc}</span>
              </div>
              <p className="text-sm text-muted bg-surface-alt px-4 py-3 rounded-lg font-mono">
                {cmd.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/advanced/claude-md" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: CLAUDE.md 설정
        </Link>
        <Link href="/docs/advanced/mcp" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: MCP 서버 연결
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
