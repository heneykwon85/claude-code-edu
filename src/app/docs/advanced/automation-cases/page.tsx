import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function AutomationCasesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 3 · 고급 기능"
        title="Automation 케이스"
        description="Claude Code와 MCP를 활용한 실무 자동화 사례를 살펴봅니다. GPTers 커뮤니티와 실제 프로젝트에서 검증된 자동화 패턴을 소개합니다."
      />

      {/* 개요 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-4">왜 자동화인가?</h2>
        <p className="text-muted mb-4">
          Claude Code는 단순한 코드 생성 도구를 넘어, <strong className="text-heading">반복 업무를 자동화하는 강력한 엔진</strong>이 될 수 있습니다.
          MCP를 통해 외부 서비스와 연결하고, Skills로 워크플로우를 정의하면 복잡한 업무도 한 줄의 프롬프트로 처리할 수 있습니다.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: "⏱️", stat: "90%", label: "시간 절감", desc: "블로그 발행 2.5시간 → 15분" },
            { icon: "🚀", stat: "2배+", label: "생산성 향상", desc: "멀티 에이전트 협업 시스템" },
            { icon: "💰", stat: "$11,700", label: "연간 ROI", desc: "자동화 프로젝트 투자 대비 수익" },
          ].map((item) => (
            <div key={item.label} className="bg-panel rounded-xl p-4 border border-edge text-center">
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="text-2xl font-bold text-accent">{item.stat}</p>
              <p className="text-sm font-semibold text-heading">{item.label}</p>
              <p className="text-xs text-dim mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 케이스 1: 블로그 자동화 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-bold">1</span>
          <h2 className="text-xl font-bold text-heading">블로그 자동 발행 시스템</h2>
        </div>
        <div className="bg-panel rounded-xl p-6 border border-edge mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full font-medium">콘텐츠 마케팅</span>
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full font-medium">90% 시간 절감</span>
            <span className="text-[10px] px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full font-medium">PRD 기반</span>
          </div>
          <p className="text-sm text-muted mb-4">
            마크다운으로 글을 작성하면 <strong className="text-heading">한 줄 명령으로 한/영 블로그에 동시 발행</strong>하는 시스템입니다.
            자동 번역, 이미지 업로드, SEO 최적화, 광고 삽입까지 모든 과정을 자동화합니다.
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading">구현 프로세스</h3>
            <div className="grid sm:grid-cols-4 gap-2">
              {["PRD 작성", "Task 분해", "순차 실행", "검증 & 배포"].map((step, i) => (
                <div key={step} className="flex items-center gap-2 bg-surface-alt rounded-lg px-3 py-2">
                  <span className="text-[10px] font-bold text-accent bg-accent/10 w-5 h-5 flex items-center justify-center rounded-full">{i + 1}</span>
                  <span className="text-xs text-heading font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">핵심 포인트</p>
            <ul className="text-xs text-muted space-y-1 list-disc list-inside">
              <li>포스트당 소요 시간: <strong className="text-heading">2.5시간 → 15분</strong> (90% 절감)</li>
              <li>연간 250시간 절감, ROI 약 <strong className="text-heading">$11,700</strong></li>
              <li>체계적 PRD 작성이 성공의 핵심</li>
            </ul>
          </div>
          <p className="text-xs text-dim mt-3">
            출처:{" "}
            <a href="https://beomanro.com/ko/claude-code-blog-automation-project/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Claude Code로 2주만에 블로그 자동화 만들기
            </a>
          </p>
        </div>
      </section>

      {/* 케이스 2: 뉴스레터 자동화 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 text-green-400 text-sm font-bold">2</span>
          <h2 className="text-xl font-bold text-heading">뉴스레터 자동화 시스템</h2>
        </div>
        <div className="bg-panel rounded-xl p-6 border border-edge mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-full font-medium">MCP Webhook</span>
            <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full font-medium">Brave Search</span>
            <span className="text-[10px] px-2 py-0.5 bg-pink-500/10 text-pink-400 rounded-full font-medium">Make.com</span>
          </div>
          <p className="text-sm text-muted mb-4">
            MCP Webhook과 Claude를 연결하여 <strong className="text-heading">트렌드 조사 → 콘텐츠 작성 → HTML 이메일 생성 → 자동 발송</strong>까지
            뉴스레터 전체 파이프라인을 자동화한 사례입니다.
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading">자동화 파이프라인</h3>
            <div className="overflow-x-auto">
              <div className="flex items-center gap-2 min-w-max">
                {[
                  { icon: "🔍", label: "리서치" },
                  { icon: "→", label: "" },
                  { icon: "✍️", label: "콘텐츠 작성" },
                  { icon: "→", label: "" },
                  { icon: "🎨", label: "HTML 템플릿" },
                  { icon: "→", label: "" },
                  { icon: "📧", label: "이메일 발송" },
                ].map((item, i) => (
                  item.label ? (
                    <div key={i} className="bg-surface-alt rounded-lg px-3 py-2 text-center">
                      <span className="text-sm block">{item.icon}</span>
                      <span className="text-[10px] text-heading font-medium">{item.label}</span>
                    </div>
                  ) : (
                    <span key={i} className="text-dim text-xs">→</span>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">사용 기술</p>
            <ul className="text-xs text-muted space-y-1 list-disc list-inside">
              <li><strong className="text-heading">Brave Search / Perplexity</strong>로 키워드 기반 뉴스 자동 수집</li>
              <li><strong className="text-heading">Claude</strong>로 요약, 번역, 콘텐츠 생성</li>
              <li><strong className="text-heading">Make.com</strong> 연동으로 이메일 자동 발송</li>
            </ul>
          </div>
          <p className="text-xs text-dim mt-3">
            출처:{" "}
            <a href="https://www.gpters.org/dev/post/mcp-webook-claude-newsletter-LqTDHOMK7OIqLdt" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              MCP와 클로드로 만드는 뉴스레터 자동화 시스템 (GPTers)
            </a>
          </p>
        </div>
      </section>

      {/* 케이스 3: 멀티 에이전트 협업 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-bold">3</span>
          <h2 className="text-xl font-bold text-heading">멀티 에이전트 협업 시스템</h2>
        </div>
        <div className="bg-panel rounded-xl p-6 border border-edge mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full font-medium">3개 Claude 동시 운영</span>
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full font-medium">효율성 2배+</span>
            <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full font-medium">React Native</span>
          </div>
          <p className="text-sm text-muted mb-4">
            Cursor에서 <strong className="text-heading">3개의 Claude Code를 동시에 실행</strong>하고 각각에게 다른 업무를 할당하여
            React Native 앱의 웹 버전을 약 30분 만에 구현한 사례입니다.
          </p>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-heading">역할 분장 예시</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { role: "Claude A", task: "컴포넌트 개발", desc: "UI 컴포넌트 & 스타일링" },
                { role: "Claude B", task: "API 연동", desc: "백엔드 통신 & 상태 관리" },
                { role: "Claude C", task: "테스트 & 검증", desc: "테스트 코드 & 버그 수정" },
              ].map((item) => (
                <div key={item.role} className="bg-surface-alt rounded-lg p-3 text-center">
                  <p className="text-xs font-bold text-accent mb-1">{item.role}</p>
                  <p className="text-sm font-semibold text-heading">{item.task}</p>
                  <p className="text-[10px] text-dim mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">핵심 원칙</p>
            <ul className="text-xs text-muted space-y-1 list-disc list-inside">
              <li>각 에이전트는 <strong className="text-heading">하나의 역할만</strong> 수행</li>
              <li><strong className="text-heading">md 파일</strong>로 작업 목표와 진행 상황 공유</li>
              <li>명확한 타임아웃 설정, 실패 시 체크포인트에서 복구</li>
            </ul>
          </div>
          <p className="text-xs text-dim mt-3">
            출처:{" "}
            <a href="https://www.gpters.org/nocode/post/claude-code-3-automatic-dmTWkR3Z282RP7F" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Claude Code 3개 자동 협업 시스템으로 작업 효율성 2배 이상 (GPTers)
            </a>
          </p>
        </div>
      </section>

      {/* 케이스 4: n8n + Claude Code */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/10 text-orange-400 text-sm font-bold">4</span>
          <h2 className="text-xl font-bold text-heading">n8n 워크플로우 자동화</h2>
        </div>
        <div className="bg-panel rounded-xl p-6 border border-edge mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-full font-medium">n8n</span>
            <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full font-medium">MCP API</span>
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full font-medium">팀 컨벤션</span>
          </div>
          <p className="text-sm text-muted mb-4">
            기존 n8n 워크플로우를 버리지 않고, <strong className="text-heading">Claude Code로 n8n을 관리</strong>하는 방식입니다.
            AI 스터디 운영 자동화(문자 발송, 일정 안내, Slack/Gmail 연동)에 활용했습니다.
          </p>
          <div className="mt-3 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">통합 아키텍처</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
              <span className="bg-panel px-2 py-1 rounded border border-edge font-medium">소스코드 참조</span>
              <span className="text-dim">+</span>
              <span className="bg-panel px-2 py-1 rounded border border-edge font-medium">MCP API</span>
              <span className="text-dim">+</span>
              <span className="bg-panel px-2 py-1 rounded border border-edge font-medium">팀 컨벤션</span>
              <span className="text-dim">=</span>
              <span className="bg-accent/10 px-2 py-1 rounded text-accent font-medium">자동화 시스템</span>
            </div>
          </div>
          <div className="mt-4 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">핵심 팁</p>
            <ul className="text-xs text-muted space-y-1 list-disc list-inside">
              <li>팀의 <strong className="text-heading">credential ID, 네이밍 규칙, 자주 사용하는 패턴</strong>을 스킬 문서에 사전 기록</li>
              <li>반복 업무는 n8n, 비정형 업무는 Claude Code로 분담</li>
              <li>비개발자도 AI 스터디 운영 자동화 가능</li>
            </ul>
          </div>
          <p className="text-xs text-dim mt-3">
            출처:{" "}
            <a href="https://www.gpters.org/dev/post/when-n8n-user-encounters-tSwNPskf0Ll3rZw" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              n8n 유저가 Claude Code를 만났을 때 (GPTers)
            </a>
          </p>
        </div>
      </section>

      {/* 케이스 5: 메타 광고 리포팅 */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 text-sm font-bold">5</span>
          <h2 className="text-xl font-bold text-heading">메타 광고 자동 리포팅</h2>
        </div>
        <div className="bg-panel rounded-xl p-6 border border-edge mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] px-2 py-0.5 bg-pink-500/10 text-pink-400 rounded-full font-medium">Meta Ads API</span>
            <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full font-medium">MCP</span>
            <span className="text-[10px] px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full font-medium">Obsidian</span>
          </div>
          <p className="text-sm text-muted mb-4">
            MCP로 Meta Ads API와 Claude를 연결하여 <strong className="text-heading">주간 광고 성과 보고서를 자동 생성</strong>하는 시스템입니다.
            Obsidian을 Claude의 메모리로 활용해 전환 ID와 이름을 매핑합니다.
          </p>
          <div className="mt-3 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">자동화 흐름</p>
            <ol className="text-xs text-muted space-y-1 list-decimal list-inside">
              <li>MCP로 <strong className="text-heading">Meta Ads API</strong>에서 광고 성과 데이터 수집</li>
              <li><strong className="text-heading">Obsidian</strong> 노트에서 전환 ID ↔ 캠페인 이름 매핑 참조</li>
              <li>Claude가 데이터를 분석하고 <strong className="text-heading">주간 리포트 자동 생성</strong></li>
              <li>팀 공유용 포맷으로 정리하여 전달</li>
            </ol>
          </div>
          <p className="text-xs text-dim mt-3">
            출처:{" "}
            <a href="https://www.gpters.org/mcp-43q62kh1/post/automatic-reporting-meta-advertising-04jul0Bo9pgyw7R" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              MCP + Claude로 메타 광고 자동 리포팅 (GPTers)
            </a>
          </p>
        </div>
      </section>

      {/* 케이스 6: GitHub Actions CI/CD */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-500/10 text-gray-400 text-sm font-bold">6</span>
          <h2 className="text-xl font-bold text-heading">GitHub Actions + Slack 통합 자동화</h2>
        </div>
        <div className="bg-panel rounded-xl p-6 border border-edge mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-[10px] px-2 py-0.5 bg-gray-500/10 text-gray-400 rounded-full font-medium">GitHub Actions</span>
            <span className="text-[10px] px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded-full font-medium">Slack</span>
            <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 rounded-full font-medium">CI/CD</span>
          </div>
          <p className="text-sm text-muted mb-4">
            GitHub 이슈 또는 PR에서 <strong className="text-heading">@claude를 멘션</strong>하면 자동으로 코드 분석, 버그 수정, PR 생성까지 수행하고
            결과를 Slack으로 알림하는 엔드투엔드 워크플로우입니다.
          </p>
          <div className="mt-3 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">자동화 파이프라인</p>
            <ol className="text-xs text-muted space-y-1 list-decimal list-inside">
              <li>GitHub 이슈/PR에서 <strong className="text-heading">@claude 멘션</strong></li>
              <li>GitHub Actions가 Claude Code 세션 자동 실행</li>
              <li>코드 분석 → 수정 → <strong className="text-heading">PR 자동 생성</strong></li>
              <li>Slack 채널에 진행 상황 및 <strong className="text-heading">PR 링크 자동 전송</strong></li>
            </ol>
          </div>
          <div className="mt-3 bg-surface-alt rounded-lg p-4">
            <p className="text-xs font-medium text-heading mb-2">팀별 활용 예시</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                { team: "백엔드팀", result: "SQL 쿼리 최적화 50% 빠르게" },
                { team: "프론트엔드팀", result: "디자인 시스템 빌드 60% 단축" },
                { team: "DevOps팀", result: "K8s 설정 자동화, 보안 취약점 탐지" },
                { team: "QA팀", result: "테스트 커버리지 85% 달성" },
              ].map((item) => (
                <div key={item.team} className="flex items-start gap-2">
                  <span className="text-accent text-xs mt-0.5">▸</span>
                  <p className="text-xs text-muted">
                    <strong className="text-heading">{item.team}:</strong> {item.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-dim mt-3">
            출처:{" "}
            <a href="https://mangkyu.tistory.com/456" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Claude Code 활용을 극대화하기 위한 최신 기술들
            </a>
            ,{" "}
            <a href="https://claude.develop-on.co.kr/en/use-cases" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Claude Code Real-World Use Cases
            </a>
          </p>
        </div>
      </section>

      {/* 나만의 자동화 만들기 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">나만의 자동화 설계하기</h2>
        <p className="text-muted mb-4">
          위 사례들의 공통점을 분석하면, 성공적인 자동화 프로젝트에는 일정한 패턴이 있습니다.
        </p>
        <div className="space-y-4">
          <div className="bg-panel rounded-xl p-5 border border-edge">
            <h3 className="text-sm font-bold text-heading mb-3">Step 1: 반복 업무 식별</h3>
            <p className="text-sm text-muted mb-2">자동화할 가치가 있는 업무를 찾습니다.</p>
            <div className="bg-surface-alt rounded-lg p-3">
              <ul className="text-xs text-muted space-y-1 list-disc list-inside">
                <li>주 1회 이상 반복되는 업무</li>
                <li>매번 비슷한 패턴으로 진행되는 작업</li>
                <li>수동으로 하면 실수가 발생하기 쉬운 일</li>
                <li>여러 도구를 오가며 데이터를 옮기는 작업</li>
              </ul>
            </div>
          </div>

          <div className="bg-panel rounded-xl p-5 border border-edge">
            <h3 className="text-sm font-bold text-heading mb-3">Step 2: PRD(요구사항 문서) 작성</h3>
            <p className="text-sm text-muted mb-2">자동화할 워크플로우를 명확히 정의합니다.</p>
            <div className="bg-surface-alt rounded-lg p-3">
              <ul className="text-xs text-muted space-y-1 list-disc list-inside">
                <li><strong className="text-heading">입력:</strong> 어떤 데이터/트리거로 시작하는가?</li>
                <li><strong className="text-heading">처리:</strong> 어떤 단계를 거치는가?</li>
                <li><strong className="text-heading">출력:</strong> 최종 결과물은 무엇인가?</li>
                <li><strong className="text-heading">연동:</strong> 어떤 외부 서비스가 필요한가? (MCP)</li>
              </ul>
            </div>
          </div>

          <div className="bg-panel rounded-xl p-5 border border-edge">
            <h3 className="text-sm font-bold text-heading mb-3">Step 3: Task 분해 및 실행</h3>
            <p className="text-sm text-muted mb-2">큰 자동화를 작은 단위로 나누어 구현합니다.</p>
            <div className="bg-surface-alt rounded-lg p-3">
              <ul className="text-xs text-muted space-y-1 list-disc list-inside">
                <li>각 Task는 <strong className="text-heading">독립적으로 테스트 가능</strong>하게 분리</li>
                <li>Claude Code에게 <strong className="text-heading">한 번에 하나의 Task</strong>만 요청</li>
                <li>각 단계마다 결과를 <strong className="text-heading">검증 후 다음 단계</strong>로 진행</li>
                <li>필요 시 MCP/Skills를 조합하여 확장</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 도구 비교 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">자동화 도구 비교</h2>
        <p className="text-muted mb-4">상황에 맞는 도구를 선택하세요.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-edge">
                <th className="text-left py-3 pr-4 text-heading font-medium">구분</th>
                <th className="text-left py-3 pr-4 text-heading font-medium">Claude Code</th>
                <th className="text-left py-3 pr-4 text-heading font-medium">n8n / Make.com</th>
                <th className="text-left py-3 text-heading font-medium">GitHub Actions</th>
              </tr>
            </thead>
            <tbody className="text-muted text-xs">
              <tr className="border-b border-edge">
                <td className="py-2 pr-4 font-medium text-heading">강점</td>
                <td className="py-2 pr-4">비정형 데이터, 복잡한 로직</td>
                <td className="py-2 pr-4">반복 워크플로우, 시각적 빌더</td>
                <td className="py-2">CI/CD, 코드 기반 자동화</td>
              </tr>
              <tr className="border-b border-edge">
                <td className="py-2 pr-4 font-medium text-heading">적합한 작업</td>
                <td className="py-2 pr-4">1회성, 기획, 분석</td>
                <td className="py-2 pr-4">정기 실행, 웹훅, API 연동</td>
                <td className="py-2">코드 리뷰, 배포, 테스트</td>
              </tr>
              <tr className="border-b border-edge">
                <td className="py-2 pr-4 font-medium text-heading">난이도</td>
                <td className="py-2 pr-4">낮음 (프롬프트)</td>
                <td className="py-2 pr-4">중간 (노코드 빌더)</td>
                <td className="py-2">높음 (YAML 설정)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium text-heading">베스트 조합</td>
                <td className="py-2 pr-4" colSpan={3}>Claude Code + n8n + GitHub Actions를 함께 사용하면 가장 강력합니다!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 추천 리소스 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">더 알아보기</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "GPTers 커뮤니티",
              desc: "한국 최대 AI 커뮤니티. 실무 자동화 사례가 매일 공유됩니다.",
              url: "https://www.gpters.org",
              icon: "🤖",
            },
            {
              title: "Claude Code 공식 문서",
              desc: "Anthropic 공식 Claude Code 사용 가이드 및 베스트 프랙티스.",
              url: "https://docs.claude.com/en/docs/claude-code",
              icon: "📚",
            },
            {
              title: "MCP 서버 목록",
              desc: "사용 가능한 MCP 서버 목록과 설치 방법을 확인하세요.",
              url: "https://mcpservers.org",
              icon: "🔌",
            },
            {
              title: "Claude Code 실전 사례",
              desc: "팀별 활용법, 성과 지표 등 실전 사례 모음.",
              url: "https://claude.develop-on.co.kr/en/use-cases",
              icon: "💼",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-panel rounded-xl p-4 border border-edge hover:border-accent/30 transition-colors block"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h3 className="text-sm font-semibold text-heading mb-1">{item.title}</h3>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/advanced/github-actions" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: GitHub Actions
        </Link>
        <Link href="/docs/tips/prompts" className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 효율적인 프롬프트
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
