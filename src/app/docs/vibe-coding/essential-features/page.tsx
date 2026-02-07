import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function EssentialFeaturesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-5"
        title="필수 기능"
        description="Plan Mode, Auto Accept, /compact 등 Claude Code를 효율적으로 사용하기 위한 핵심 기능을 정리합니다."
      />

      {/* Plan Mode */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">1. Plan Mode (계획 모드)</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-4">
          <p className="text-body text-base leading-relaxed mb-3">
            <strong className="text-heading">Plan Mode</strong>는 코드를 변경하지 않고
            <strong className="text-accent"> 분석과 계획만 수행</strong>하는 안전한 모드입니다.
            복잡한 작업 전에 먼저 계획을 세울 때 유용합니다.
          </p>
          <div className="bg-surface-alt rounded-lg p-3 mt-3">
            <p className="text-xs text-muted">
              <strong className="text-heading">단축키:</strong>{" "}
              <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent">Shift + Tab</code> (macOS) /{" "}
              <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent">Alt + M</code> (Windows)
            </p>
          </div>
        </div>
        <CodeBlock
          code={`# Plan Mode에서 분석 요청
> [Plan Mode] 이 프로젝트의 로그인 기능을 개선하려면
  어떤 파일을 수정해야 하는지 분석해줘

# Claude가 파일을 변경하지 않고 분석 결과만 제공합니다.
# 계획이 마음에 들면 일반 모드로 전환하여 실행합니다.`}
          language="bash"
          filename="Claude Code 세션"
        />
      </section>

      {/* Auto Accept */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">2. Auto Accept (자동 승인)</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-4">
          <p className="text-body text-base leading-relaxed mb-3">
            매번 &quot;Y&quot;를 누르는 대신, 특정 작업을 <strong className="text-accent">자동으로 승인</strong>하는 기능입니다.
            반복 작업 시 효율적이지만, 중요한 변경에는 주의가 필요합니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-4 border border-green-200 dark:border-green-500/20">
            <h3 className="font-semibold text-green-700 dark:text-green-400 text-xs mb-2">✅ 자동 승인 추천</h3>
            <ul className="text-[11px] text-green-600 dark:text-green-400 space-y-1">
              <li>• 파일 읽기 작업</li>
              <li>• 테스트 실행</li>
              <li>• 린트/포맷 실행</li>
            </ul>
          </div>
          <div className="bg-red-50 dark:bg-red-500/5 rounded-xl p-4 border border-red-200 dark:border-red-500/20">
            <h3 className="font-semibold text-red-700 dark:text-red-400 text-xs mb-2">⚠️ 수동 확인 추천</h3>
            <ul className="text-[11px] text-red-600 dark:text-red-400 space-y-1">
              <li>• 파일 삭제/수정</li>
              <li>• git push / 배포</li>
              <li>• 외부 API 호출</li>
            </ul>
          </div>
        </div>
        <CodeBlock
          code={`# 권한 설정 확인 및 조정
/permissions

# 특정 도구 자동 허용 설정
/allowed-tools`}
          language="bash"
          filename="Claude Code 세션"
        />
      </section>

      {/* /compact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">3. /compact (대화 압축)</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-4">
          <p className="text-body text-base leading-relaxed">
            대화가 길어지면 토큰을 많이 소비합니다.{" "}
            <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent">/compact</code>는
            핵심 내용은 유지하면서 <strong className="text-accent">대화를 요약하여 토큰을 절약</strong>합니다.
          </p>
        </div>
        <CodeBlock
          code={`# 기본 압축
/compact

# 특정 정보를 유지하며 압축
/compact 디버깅 정보는 유지해줘

# 대화 완전 초기화 (압축이 아닌 삭제)
/clear`}
          language="bash"
          filename="Claude Code 세션"
        />
        <div className="tip-box mt-3">
          <p className="text-sm text-accent">
            <strong>💡 팁:</strong> 작업 방향이 크게 바뀔 때는 <code className="bg-accent/20 px-1 rounded">/clear</code>,
            같은 작업을 계속할 때는 <code className="bg-accent/20 px-1 rounded">/compact</code>를 사용하세요.
          </p>
        </div>
      </section>

      {/* ESC Key */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">4. ESC (작업 중단)</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge">
          <p className="text-body text-base leading-relaxed mb-3">
            Claude가 잘못된 방향으로 작업하고 있다면{" "}
            <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent">ESC</code> 키로
            <strong className="text-accent"> 즉시 중단</strong>하고 새로운 지시를 줄 수 있습니다.
          </p>
          <p className="text-muted text-sm">
            이미 변경된 파일이 있다면 Git으로 되돌릴 수 있으니, 부담 없이 사용하세요.
          </p>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">필수 단축키 & 명령어 요약</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">기능</th>
                <th className="text-left px-5 py-3 font-semibold text-body">단축키 / 명령어</th>
                <th className="text-left px-5 py-3 font-semibold text-body">용도</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feat: "Plan Mode", key: "Shift+Tab", use: "코드 변경 없이 분석" },
                { feat: "작업 중단", key: "ESC", use: "잘못된 작업 즉시 중단" },
                { feat: "대화 압축", key: "/compact", use: "토큰 절약" },
                { feat: "대화 초기화", key: "/clear", use: "완전히 새로 시작" },
                { feat: "비용 확인", key: "/cost", use: "토큰 사용량 확인" },
                { feat: "도움말", key: "/help", use: "사용 가능한 명령어 목록" },
                { feat: "메모리 편집", key: "/memory", use: "CLAUDE.md 수정" },
                { feat: "IDE 연동", key: "/ide", use: "VS Code/Cursor 통합 확인" },
              ].map((item, i) => (
                <tr key={item.feat} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3 font-medium text-heading text-xs">{item.feat}</td>
                  <td className="px-5 py-3"><code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">{item.key}</code></td>
                  <td className="px-5 py-3 text-muted text-xs">{item.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding/mcp-install" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 실습 - MCP 설치
        </Link>
        <Link href="/docs/vibe-coding/summary" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 정리
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
