import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import StepCard from "@/components/StepCard";
import Link from "next/link";

export default function DeploySharePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="스킬 개념 & 실습 · 1-3"
        title="배포 및 공유"
        description="만든 스킬을 팀원과 공유하고, GitHub를 통해 배포하는 방법을 배웁니다."
      />

      {/* Sharing Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 공유 방법</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "📁",
              title: "프로젝트에 포함",
              desc: ".claude/skills/ 폴더에 넣어 Git으로 공유",
              tag: "가장 쉬움",
              color: "bg-green-100 dark:bg-green-500/10 border-green-200 dark:border-green-500/20",
            },
            {
              icon: "📦",
              title: "GitHub 저장소",
              desc: "별도 저장소로 관리하고 npx skills로 설치",
              tag: "재사용성 높음",
              color: "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
            },
            {
              icon: "🌐",
              title: "마켓플레이스 등록",
              desc: "skills.sh 등 공개 마켓플레이스에 게시",
              tag: "오픈소스",
              color: "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
            },
          ].map((method) => (
            <div
              key={method.title}
              className={`rounded-xl p-5 border ${method.color}`}
            >
              <div className="text-2xl mb-3">{method.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-heading text-sm">{method.title}</h3>
                <span className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                  {method.tag}
                </span>
              </div>
              <p className="text-xs text-muted">{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Method 1: Project Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">방법 1: 프로젝트에 직접 포함</h2>
        <p className="text-muted mb-4">
          가장 간단한 방법입니다. 프로젝트의 <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent text-sm">.claude/skills/</code> 폴더에
          스킬을 넣으면, Git으로 팀원들에게 자동으로 공유됩니다.
        </p>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="프로젝트 스킬 디렉토리 생성"
            description="프로젝트 루트에 .claude/skills/ 디렉토리를 만듭니다."
          >
            <CodeBlock
              code={`# 프로젝트 루트에서 실행
mkdir -p .claude/skills/commit-message`}
              language="bash"
            />
          </StepCard>

          <StepCard
            step={2}
            title="SKILL.md 복사"
            description="이전에 만든 스킬 파일을 프로젝트 디렉토리로 복사합니다."
          >
            <CodeBlock
              code={`# 개인 스킬을 프로젝트 스킬로 복사
cp ~/.claude/skills/commit-message/SKILL.md \\
   .claude/skills/commit-message/SKILL.md`}
              language="bash"
            />
          </StepCard>

          <StepCard
            step={3}
            title="Git으로 커밋 & 푸시"
            description="스킬을 버전 관리에 포함시킵니다."
          >
            <CodeBlock
              code={`git add .claude/skills/
git commit -m "feat: 커밋 메시지 컨벤션 스킬 추가"
git push`}
              language="bash"
            />
            <div className="tip-box mt-3">
              <p className="text-sm text-accent">
                <strong>💡 결과:</strong> 팀원이 이 레포를 clone하면 자동으로 스킬이 적용됩니다.
                별도의 설치 과정이 필요 없습니다!
              </p>
            </div>
          </StepCard>
        </div>
      </section>

      {/* Method 2: GitHub Repository */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">방법 2: GitHub 저장소로 배포</h2>
        <p className="text-muted mb-4">
          스킬을 별도 GitHub 저장소로 관리하면, 여러 프로젝트에서 재사용할 수 있고
          <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent text-sm">npx skills add</code>로
          간편하게 설치할 수 있습니다.
        </p>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="스킬 저장소 구조 만들기"
            description="GitHub에 새 저장소를 만들고 아래 구조로 파일을 배치합니다."
          >
            <CodeBlock
              code={`# 저장소 구조 예시
my-team-skills/
├── README.md           # 스킬 소개 및 사용 방법
├── commit-message/
│   └── SKILL.md        # 커밋 메시지 컨벤션 스킬
├── code-review/
│   ├── SKILL.md        # 코드 리뷰 스킬
│   └── checklist.md    # 리뷰 체크리스트 (참조 문서)
└── api-docs/
    ├── SKILL.md        # API 문서 생성 스킬
    └── templates/
        └── endpoint.md # 엔드포인트 문서 템플릿`}
              language="bash"
              filename="저장소 구조"
            />
          </StepCard>

          <StepCard
            step={2}
            title="GitHub에 푸시"
            description="저장소를 GitHub에 생성하고 코드를 올립니다."
          >
            <CodeBlock
              code={`# 저장소 초기화 및 커밋
cd my-team-skills
git init
git add -A
git commit -m "feat: 팀 스킬 모음 초기 커밋"

# GitHub 저장소 생성 (gh CLI 사용)
gh repo create my-team-skills --public --push

# 또는 수동으로 remote 추가 후 push
git remote add origin https://github.com/<username>/my-team-skills.git
git push -u origin main`}
              language="bash"
            />
          </StepCard>

          <StepCard
            step={3}
            title="다른 프로젝트에서 설치"
            description="이제 어떤 프로젝트에서든 한 줄로 스킬을 설치할 수 있습니다."
          >
            <CodeBlock
              code={`# 특정 스킬만 설치
npx skills add <username>/my-team-skills --skill commit-message

# 전체 스킬 설치
npx skills add <username>/my-team-skills --all

# 설치 확인
npx skills list`}
              language="bash"
            />
          </StepCard>
        </div>
      </section>

      {/* Method 3: Marketplace */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">방법 3: 마켓플레이스에 공개</h2>
        <p className="text-muted mb-4">
          만든 스킬을 더 넓은 커뮤니티와 공유하고 싶다면, 공개 마켓플레이스에 등록할 수 있습니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <a
            href="https://skills.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 transition-colors group block"
          >
            <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">
              🌐 skills.sh
            </h3>
            <p className="text-xs text-muted">
              Vercel에서 운영하는 공식 스킬 마켓플레이스. GitHub 저장소를 연결하여 등록합니다.
            </p>
          </a>
          <a
            href="https://skillsmp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel rounded-xl p-5 border border-edge hover:border-accent/30 transition-colors group block"
          >
            <h3 className="font-semibold text-heading text-sm mb-1 group-hover:text-accent transition-colors">
              🏪 Agent Skills Marketplace
            </h3>
            <p className="text-xs text-muted">
              145,000개 이상의 오픈소스 에이전트 스킬이 등록된 커뮤니티 마켓플레이스.
            </p>
          </a>
        </div>

        <div className="info-box">
          <p className="text-sm text-blue-500 dark:text-blue-300">
            <strong>ℹ️ 참고:</strong> 마켓플레이스 등록 시 README.md에 스킬 설명, 설치 방법,
            사용 예시를 상세히 작성하면 더 많은 사용자가 찾을 수 있습니다.
          </p>
        </div>
      </section>

      {/* Version Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 버전 관리 팁</h2>
        <div className="space-y-4">
          {[
            {
              icon: "🏷️",
              title: "Git 태그로 버전 관리",
              desc: "주요 변경 시 태그를 붙여 안정 버전을 표시합니다.",
              code: "git tag v1.0.0 && git push --tags",
            },
            {
              icon: "📝",
              title: "변경 로그 유지",
              desc: "CHANGELOG.md에 변경 내용을 기록합니다.",
              code: "# v1.1.0 - refactor 타입 추가",
            },
            {
              icon: "🔄",
              title: "업데이트 확인",
              desc: "설치된 스킬의 업데이트를 주기적으로 확인합니다.",
              code: "npx skills check && npx skills update",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-panel rounded-xl p-4 border border-edge flex items-start gap-4"
            >
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-heading text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted mb-2">{item.desc}</p>
                <code className="text-xs bg-surface-alt px-2 py-1 rounded text-accent block">
                  {item.code}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">정리: 어떤 방법을 선택할까?</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">상황</th>
                <th className="text-left px-5 py-3 font-semibold text-body">추천 방법</th>
              </tr>
            </thead>
            <tbody>
              {[
                { situation: "한 프로젝트 팀에서만 사용", method: "📁 프로젝트에 직접 포함 (.claude/skills/)" },
                { situation: "여러 프로젝트에서 재사용", method: "📦 GitHub 저장소로 배포" },
                { situation: "나만 쓰는 개인 도구", method: "👤 개인 스킬 (~/.claude/skills/)" },
                { situation: "커뮤니티와 공유", method: "🌐 마켓플레이스 등록" },
              ].map((row, i) => (
                <tr key={row.situation} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3 text-muted">{row.situation}</td>
                  <td className="px-5 py-3 font-medium text-heading">{row.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 추천:</strong> 처음에는 프로젝트에 직접 포함하는 방법으로 시작하고,
            스킬이 성숙해지면 별도 저장소로 분리하는 것이 좋습니다.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/skills/first-skill"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 첫 스킬 만들기
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
