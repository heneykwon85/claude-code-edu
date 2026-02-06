import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import YouTubeEmbed, { VideoSection } from "@/components/YouTubeEmbed";
import Link from "next/link";

export default function GitHubActionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="Level 3 · 고급 기능"
        title="GitHub Actions 자동화"
        description="Claude Code를 CI/CD 파이프라인에 통합하여 코드 리뷰, 이슈 처리를 자동화하세요."
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">Claude Code + GitHub Actions</h2>
        <div className="bg-panel rounded-2xl p-6 border border-green-200 dark:border-green-500/20">
          <p className="text-[#aaa] leading-relaxed">
            Claude Code를 GitHub Actions에 연동하면, PR 자동 리뷰, 이슈 자동 분류,
            코드 품질 검사 등을 자동으로 수행할 수 있습니다.
            CI/CD 파이프라인에서 Claude의 지능을 활용해보세요.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">PR 자동 리뷰 설정</h2>
        <CodeBlock
          code={`name: Claude PR Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Install Claude Code
        run: curl -fsSL https://claude.ai/install.sh | bash
      
      - name: Run Claude Review
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude -p "이 PR의 변경사항을 리뷰해줘. 
          버그, 성능, 보안 이슈를 확인하고 
          개선 제안을 해줘." --output-format json`}
          language="yaml"
          filename=".github/workflows/claude-review.yml"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">이슈 자동 분류</h2>
        <CodeBlock
          code={`name: Claude Issue Triage
on:
  issues:
    types: [opened]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - name: Install Claude Code
        run: curl -fsSL https://claude.ai/install.sh | bash
      
      - name: Analyze Issue
        env:
          ANTHROPIC_API_KEY: \${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          claude -p "이 이슈를 분석해줘: 
          \${{ github.event.issue.title }}
          \${{ github.event.issue.body }}
          
          적절한 라벨(bug/feature/docs)을 제안해줘."`}
          language="yaml"
          filename=".github/workflows/claude-triage.yml"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">비대화형 모드 (-p 플래그)</h2>
        <p className="text-[#888] mb-4">
          GitHub Actions에서는 <code className="bg-raised px-2 py-0.5 rounded">-p</code> 플래그를 사용하여
          비대화형 모드로 Claude를 실행합니다.
        </p>
        <CodeBlock
          code={`# 비대화형 모드: 프롬프트를 직접 전달
claude -p "이 프로젝트의 README를 업데이트해줘"

# 파이프로 입력 전달
echo "이 코드를 리뷰해줘" | claude -p

# JSON 출력 모드
claude -p "분석 결과를 알려줘" --output-format json`}
          language="bash"
        />
      </section>

      {/* Video Section */}
      <VideoSection title="GitHub Actions 연동 영상">
        <div className="grid md:grid-cols-2 gap-4">
          <YouTubeEmbed
            videoId="L_WFEgry87M"
            title="Claude Code + GitHub Actions"
            description="Claude Code를 GitHub Actions에 연동하여 PR 자동 리뷰를 설정하는 과정을 보여줍니다."
          />
          <YouTubeEmbed
            videoId="VC6dmPcin2E"
            title="Using Claude Code to Build a GitHub Actions Workflow"
            description="Claude Code로 직접 GitHub Actions 워크플로우를 만드는 실습 영상입니다."
          />
        </div>
      </VideoSection>

      <section className="mb-12">
        <div className="warning-box">
          <p className="text-sm text-red-600 dark:text-red-300 mb-2"><strong>⚠️ 보안 주의</strong></p>
          <ul className="text-sm text-red-600 dark:text-red-300 space-y-1 list-disc list-inside">
            <li>API 키는 반드시 GitHub Secrets에 저장하세요</li>
            <li>코드에 API 키를 직접 넣지 마세요</li>
            <li>외부 PR에 대한 자동 실행은 보안상 주의가 필요합니다</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/advanced/mcp" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: MCP 서버 연결
        </Link>
        <Link href="/docs/tips/prompts" className="px-6 py-3 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2">
          다음: 효율적인 프롬프트
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
