import PageHeader from "@/components/PageHeader";
import StepCard from "@/components/StepCard";
import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="워크샵 사전 준비 · 소요 시간 15분"
        title="Claude Code 설치 가이드"
        description="본인 컴퓨터가 Mac인지 Windows인지 확인 후, 해당 섹션만 따라하세요."
      />

      {/* GitHub 계정 만들기 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-4">GitHub 계정 만들기</h2>
        <div className="tip-box mb-6">
          <p className="text-sm text-accent">
            팀 협업 및 코드 공유를 위해 필요합니다.
          </p>
        </div>
        <div className="space-y-6">
          <StepCard
            step={1}
            title="GitHub 가입"
            description="GitHub에 계정을 만드세요."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  github.com
                </a>{" "}접속
              </li>
              <li><strong className="text-heading">Sign up</strong> 클릭</li>
              <li><strong className="text-heading">Continue with Google</strong> 클릭 → 본인 Google 계정으로 로그인</li>
              <li>이메일 인증 완료</li>
            </ol>
            <div className="info-box mt-4">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                💡 Google로 가입하면 비밀번호 관리가 편하고, Vercel 등 다른 개발 서비스 가입 시에도 유용합니다.
              </p>
            </div>
          </StepCard>
        </div>
      </section>

      {/* ===== Mac 유저 ===== */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🍎</span>
          <h2 className="text-2xl font-bold text-heading">Mac 유저</h2>
        </div>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="Claude 계정 만들기"
            description="Claude AI 계정을 생성하고 구독합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  claude.ai
                </a>{" "}접속
              </li>
              <li>계정 생성 후 <strong className="text-heading">Pro 또는 Max</strong> 구독</li>
            </ol>
          </StepCard>

          <StepCard
            step={2}
            title="VS Code 설치"
            description="코드 편집기를 설치합니다."
          >
            <div className="info-box mb-4">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                💡 이미 <strong>Cursor</strong> 또는 <strong>Antigravity</strong> 쓰시는 분은 이 단계 건너뛰세요!
              </p>
            </div>
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>
                <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  code.visualstudio.com
                </a>{" "}접속
              </li>
              <li><strong className="text-heading">Mac</strong> 버전 다운로드</li>
              <li>다운로드된 파일 실행 → 응용 프로그램 폴더로 드래그</li>
            </ol>
          </StepCard>

          <StepCard
            step={3}
            title="Claude Code 설치 (CLI)"
            description="터미널에서 Claude Code를 설치합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-3">
              <li>
                VS Code 상단 메뉴에서 <strong className="text-heading">Terminal</strong> → <strong className="text-heading">New Terminal</strong> 클릭
                <div className="info-box mt-2 ml-4">
                  <p className="text-sm text-blue-500 dark:text-blue-300">
                    💡 단축키: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">Ctrl + `</code> (백틱, 숫자 1 왼쪽 키)
                  </p>
                </div>
              </li>
              <li>
                아래 명령어 복사 → 터미널에 붙여넣기 → Enter
                <div className="ml-4 mt-2">
                  <CodeBlock
                    code="curl -fsSL https://claude.ai/install.sh | bash"
                    language="bash"
                  />
                </div>
              </li>
              <li>VS Code 완전히 종료 후 다시 열기</li>
              <li>
                터미널에서 확인: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">claude --version</code> 입력 → 버전 나오면 성공
              </li>
            </ol>
          </StepCard>

          <StepCard
            step={4}
            title="Claude Code 로그인 (CLI)"
            description="터미널에서 Claude Code에 로그인합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>터미널에 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">claude</code> 입력 → Enter</li>
              <li>브라우저가 자동으로 열림 → Claude 계정으로 로그인</li>
              <li><strong className="text-heading">허용</strong> 클릭</li>
              <li>터미널로 돌아와서 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">안녕하세요</code> 입력 → 응답 오면 <strong className="text-heading">CLI 설정 완료!</strong></li>
            </ol>
          </StepCard>

          <StepCard
            step={5}
            title="Claude Extension 설치 (VS Code)"
            description="VS Code에서 Claude 확장 프로그램을 설치합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-3">
              <li>
                VS Code 왼쪽 사이드바에서 <strong className="text-heading">Extensions</strong> 아이콘 클릭 (네모 4개 모양)
                <div className="info-box mt-2 ml-4">
                  <p className="text-sm text-blue-500 dark:text-blue-300">
                    💡 단축키: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">Cmd + Shift + X</code>
                  </p>
                </div>
              </li>
              <li>검색창에 <strong className="text-heading">Claude</strong> 입력</li>
              <li><strong className="text-heading">Anthropic</strong> 제작 확인 후 <strong className="text-heading">Install</strong> 클릭</li>
            </ol>
            <div className="mt-4 rounded-xl overflow-hidden border border-edge">
              <Image
                src="/claude-extension-vscode.png"
                alt="VS Code에서 Claude Extension 검색 및 설치 화면"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-dim mt-2 text-center">
              VS Code Extensions에서 &quot;Claude&quot;를 검색하여 Anthropic 공식 확장을 설치합니다.
            </p>
          </StepCard>

          <StepCard
            step={6}
            title="Extension 로그인"
            description="설치한 Claude Extension에 로그인합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>VS Code 왼쪽 사이드바에서 <strong className="text-heading">Claude 아이콘</strong> 클릭 (방금 설치한 Extension)</li>
              <li><strong className="text-heading">Sign In</strong> 버튼 클릭</li>
              <li>브라우저에서 Claude 계정 로그인 → <strong className="text-heading">허용</strong> 클릭</li>
              <li>Claude 패널에 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">안녕하세요</code> 입력 → 응답 오면 <strong className="text-heading">완료!</strong></li>
            </ol>
          </StepCard>
        </div>
      </section>

      {/* ===== Windows 유저 ===== */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🪟</span>
          <h2 className="text-2xl font-bold text-heading">Windows 유저</h2>
        </div>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="Claude 계정 만들기"
            description="Claude AI 계정을 생성하고 구독합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>
                <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  claude.ai
                </a>{" "}접속
              </li>
              <li>계정 생성 후 <strong className="text-heading">Pro 또는 Max</strong> 구독</li>
            </ol>
          </StepCard>

          <StepCard
            step={2}
            title="VS Code 설치"
            description="코드 편집기를 설치합니다."
          >
            <div className="info-box mb-4">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                💡 이미 <strong>Cursor</strong> 또는 <strong>Antigravity</strong> 쓰시는 분은 이 단계 건너뛰세요!
              </p>
            </div>
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>
                <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  code.visualstudio.com
                </a>{" "}접속
              </li>
              <li><strong className="text-heading">Windows</strong> 버전 다운로드</li>
              <li>다운로드된 파일 실행 → 기본값으로 설치</li>
            </ol>
          </StepCard>

          <StepCard
            step={3}
            title="Claude Code 설치 (CLI)"
            description="터미널에서 Claude Code를 설치합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-3">
              <li>
                VS Code 상단 메뉴에서 <strong className="text-heading">Terminal</strong> → <strong className="text-heading">New Terminal</strong> 클릭
                <div className="info-box mt-2 ml-4">
                  <p className="text-sm text-blue-500 dark:text-blue-300">
                    💡 단축키: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">Ctrl + `</code> (백틱, 숫자 1 왼쪽 키)
                  </p>
                </div>
              </li>
              <li>
                아래 명령어 복사 → 터미널에 <strong className="text-heading">마우스 우클릭</strong>으로 붙여넣기 → Enter
                <div className="ml-4 mt-2">
                  <CodeBlock
                    code="irm https://claude.ai/install.ps1 | iex"
                    language="powershell"
                  />
                </div>
              </li>
              <li>VS Code 완전히 종료 후 다시 열기</li>
              <li>
                터미널에서 확인: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">claude --version</code> 입력 → 버전 나오면 성공
              </li>
            </ol>
          </StepCard>

          <StepCard
            step={4}
            title="Claude Code 로그인 (CLI)"
            description="터미널에서 Claude Code에 로그인합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>터미널에 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">claude</code> 입력 → Enter</li>
              <li>브라우저가 자동으로 열림 → Claude 계정으로 로그인</li>
              <li><strong className="text-heading">허용</strong> 클릭</li>
              <li>터미널로 돌아와서 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">안녕하세요</code> 입력 → 응답 오면 <strong className="text-heading">CLI 설정 완료!</strong></li>
            </ol>
          </StepCard>

          <StepCard
            step={5}
            title="Claude Extension 설치 (VS Code)"
            description="VS Code에서 Claude 확장 프로그램을 설치합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-3">
              <li>
                VS Code 왼쪽 사이드바에서 <strong className="text-heading">Extensions</strong> 아이콘 클릭 (네모 4개 모양)
                <div className="info-box mt-2 ml-4">
                  <p className="text-sm text-blue-500 dark:text-blue-300">
                    💡 단축키: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">Ctrl + Shift + X</code>
                  </p>
                </div>
              </li>
              <li>검색창에 <strong className="text-heading">Claude</strong> 입력</li>
              <li><strong className="text-heading">Anthropic</strong> 제작 확인 후 <strong className="text-heading">Install</strong> 클릭</li>
            </ol>
            <div className="mt-4 rounded-xl overflow-hidden border border-edge">
              <Image
                src="/claude-extension-vscode.png"
                alt="VS Code에서 Claude Extension 검색 및 설치 화면"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <p className="text-xs text-dim mt-2 text-center">
              VS Code Extensions에서 &quot;Claude&quot;를 검색하여 Anthropic 공식 확장을 설치합니다.
            </p>
          </StepCard>

          <StepCard
            step={6}
            title="Extension 로그인"
            description="설치한 Claude Extension에 로그인합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>VS Code 왼쪽 사이드바에서 <strong className="text-heading">Claude 아이콘</strong> 클릭 (방금 설치한 Extension)</li>
              <li><strong className="text-heading">Sign In</strong> 버튼 클릭</li>
              <li>브라우저에서 Claude 계정 로그인 → <strong className="text-heading">허용</strong> 클릭</li>
              <li>Claude 패널에 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">안녕하세요</code> 입력 → 응답 오면 <strong className="text-heading">완료!</strong></li>
            </ol>
          </StepCard>
        </div>
      </section>

      {/* 문제 해결 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">문제 해결</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-edge">
                <th className="text-left py-3 px-4 text-heading font-semibold bg-surface-alt rounded-tl-lg">증상</th>
                <th className="text-left py-3 px-4 text-heading font-semibold bg-surface-alt rounded-tr-lg">해결</th>
              </tr>
            </thead>
            <tbody>
              {[
                { symptom: "claude 명령어가 안 됨", solution: "VS Code 완전히 종료 후 재시작" },
                { symptom: "브라우저 로그인 후 터미널 반응 없음", solution: '브라우저에서 "허용" 클릭 확인' },
                { symptom: "Extension이 안 보임", solution: "VS Code 재시작" },
                { symptom: "로그인이 안 됨", solution: "브라우저 팝업 차단 해제" },
                { symptom: "응답이 안 옴", solution: "Claude 구독 상태 확인" },
              ].map((row) => (
                <tr key={row.symptom} className="border-b border-edge hover:bg-surface-alt/50 transition-colors">
                  <td className="py-3 px-4 text-muted">
                    <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">{row.symptom}</code>
                  </td>
                  <td className="py-3 px-4 text-muted">{row.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-panel border border-edge rounded-lg">
          <p className="text-sm text-muted">
            <strong className="text-heading">해결 안 되면</strong>: 워크샵 당일 12:30에 도움드립니다.
          </p>
        </div>
      </section>

      {/* 워크샵 사전 스킬 설치 & 실행 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-4">워크샵 사전 스킬 설치 & 실행</h2>
        <div className="warning-box mb-6">
          <p className="text-sm">
            🎯 <strong className="text-heading">필수!</strong> 워크샵 전에 이 스킬로 본인 업무를 정리하고, 만들 스킬 설계서를 받아오세요.
          </p>
        </div>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="사전 스킬 설치"
            description="터미널에서 아래 명령어를 실행하세요."
          >
            <CodeBlock
              code="claude install github:next-company/cc-skill-workshop/skills/workshop-prep"
              language="bash"
            />
            <div className="info-box mt-4">
              <p className="text-sm text-blue-500 dark:text-blue-300">
                💡 <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">claude install</code>은 GitHub에서 스킬을 다운받아 설치하는 명령어입니다.
              </p>
            </div>
          </StepCard>

          <StepCard
            step={2}
            title="스킬 실행"
            description="터미널에서 claude 실행 후 아래 명령어를 입력하세요."
          >
            <CodeBlock
              code="/workshop-prep"
              language="bash"
              filename="Claude Code 대화 중 입력"
            />
            <p className="text-sm text-muted mt-3">또는 자연스럽게:</p>
            <CodeBlock
              code="워크샵 준비 도와줘"
              language="bash"
              filename="Claude Code 대화 중 입력"
            />
          </StepCard>

          <StepCard
            step={3}
            title="대화 따라가기"
            description="스킬이 몇 가지 질문을 합니다."
          >
            <ol className="list-decimal list-inside text-sm text-muted space-y-2">
              <li>현재 하시는 일 (직무/역할)</li>
              <li>반복적으로 하는 작업</li>
              <li>가장 귀찮은/시간 걸리는 작업</li>
              <li>현재 프로세스 (시작 → 끝)</li>
              <li>이상적인 자동화 결과</li>
            </ol>
            <div className="tip-box mt-4">
              <p className="text-sm text-accent">
                <strong>솔직하고 구체적으로</strong> 답변해주세요!
              </p>
            </div>
          </StepCard>

          <StepCard
            step={4}
            title="설계서 저장"
            description="대화가 끝나면 스킬 설계서가 생성됩니다. 이 설계서를 워크샵 당일 가져오세요!"
          >
            <p className="text-sm text-muted mb-2">저장 방법:</p>
            <ul className="list-disc list-inside text-sm text-muted space-y-2">
              <li>복사해서 노트앱에 붙여넣기</li>
              <li>또는 파일로 저장 요청: <code className="px-1.5 py-0.5 bg-surface-alt rounded text-xs font-mono">이거 파일로 저장해줘</code></li>
            </ul>
          </StepCard>
        </div>
      </section>

      {/* 참고 문서 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">참고 문서</h2>
        <div className="space-y-3">
          {[
            {
              title: "Claude Code 공식 설치 가이드 (한국어)",
              url: "https://code.claude.com/docs/ko/setup",
              icon: "📘",
            },
            {
              title: "왕초보를 위한 Claude Code 설치 방법",
              url: "https://mildit.tistory.com/25",
              icon: "📝",
            },
          ].map((doc) => (
            <a
              key={doc.url}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-panel border border-edge rounded-lg hover:border-accent/30 transition-colors group"
            >
              <span className="text-xl">{doc.icon}</span>
              <span className="text-sm font-medium text-heading group-hover:text-accent transition-colors">
                {doc.title}
              </span>
              <svg className="w-4 h-4 ml-auto text-dim group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </section>

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
          href="/docs/skills"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 스킬 개념 &amp; 실습
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
