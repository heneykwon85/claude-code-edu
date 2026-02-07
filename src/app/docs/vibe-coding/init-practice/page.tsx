import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import StepCard from "@/components/StepCard";
import Link from "next/link";

export default function InitPracticePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="바이브 코딩 기초 · 2-2"
        title="실습: /init으로 프로젝트 초기화"
        description="/init 명령어로 CLAUDE.md를 자동 생성하고 프로젝트를 Claude Code에 최적화합니다."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">/init이 하는 일</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge">
          <p className="text-body text-base leading-relaxed mb-4">
            <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent">/init</code>은
            Claude Code가 프로젝트를 자동으로 분석하여 <strong className="text-heading">CLAUDE.md 파일을 생성</strong>하는 명령어입니다.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mt-4">
            {[
              { icon: "📂", title: "구조 분석", desc: "디렉토리와 파일 구조를 파악" },
              { icon: "🔧", title: "스택 감지", desc: "package.json 등에서 기술 스택 추출" },
              { icon: "📄", title: "CLAUDE.md 생성", desc: "분석 결과를 정리하여 파일 작성" },
            ].map((item) => (
              <div key={item.title} className="bg-surface-alt rounded-lg p-3 text-center">
                <div className="text-xl mb-1">{item.icon}</div>
                <h3 className="font-semibold text-heading text-xs mb-1">{item.title}</h3>
                <p className="text-[10px] text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">단계별 실습</h2>
        <div className="space-y-6">
          <StepCard step={1} title="프로젝트 폴더로 이동" description="작업할 프로젝트의 루트 디렉토리로 이동합니다.">
            <CodeBlock code={`cd ~/my-project`} language="bash" />
          </StepCard>

          <StepCard step={2} title="Claude Code 실행" description="터미널에서 claude 명령어로 대화형 세션을 시작합니다.">
            <CodeBlock code={`claude`} language="bash" />
          </StepCard>

          <StepCard step={3} title="/init 실행" description="Claude Code 대화창에서 /init을 입력합니다.">
            <CodeBlock
              code={`# Claude Code 대화창에서 입력
/init

# Claude가 프로젝트를 스캔하고 CLAUDE.md를 자동 생성합니다.
# 생성된 내용을 검토하고 승인하세요.`}
              language="bash"
              filename="Claude Code 세션"
            />
          </StepCard>

          <StepCard step={4} title="생성된 CLAUDE.md 확인 및 수정" description="자동 생성된 파일을 검토하고 필요한 부분을 수정합니다.">
            <CodeBlock
              code={`# 생성된 CLAUDE.md 확인
cat CLAUDE.md

# Claude Code에서 직접 수정 요청
> CLAUDE.md에 한국어 커밋 메시지 규칙을 추가해줘
> 테스트 실행 명령어를 npm test로 변경해줘`}
              language="bash"
            />
            <div className="tip-box mt-3">
              <p className="text-sm text-accent">
                <strong>💡 팁:</strong> 자동 생성된 내용이 100% 정확하지 않을 수 있습니다.
                프로젝트에 맞게 꼭 검토하고 수정하세요.
              </p>
            </div>
          </StepCard>

          <StepCard step={5} title="Git에 커밋 (선택)" description="CLAUDE.md를 버전 관리에 포함시켜 팀원과 공유합니다.">
            <CodeBlock
              code={`git add CLAUDE.md
git commit -m "docs: CLAUDE.md 프로젝트 설정 추가"
git push`}
              language="bash"
            />
          </StepCard>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">/init 이후 유용한 명령어</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">명령어</th>
                <th className="text-left px-5 py-3 font-semibold text-body">설명</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cmd: "/memory", desc: "CLAUDE.md 파일을 직접 편집" },
                { cmd: "/status", desc: "현재 모델, 계정, 연결 상태 확인" },
                { cmd: "/cost", desc: "세션 토큰 사용량 확인" },
                { cmd: "/compact", desc: "대화 내용을 요약하여 토큰 절약" },
              ].map((item, i) => (
                <tr key={item.cmd} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3"><code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">{item.cmd}</code></td>
                  <td className="px-5 py-3 text-muted">{item.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/vibe-coding/claude-md" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: CLAUDE.md란?
        </Link>
        <Link href="/docs/vibe-coding/what-is-mcp" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: MCP란?
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
