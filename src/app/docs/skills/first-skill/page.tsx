import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import StepCard from "@/components/StepCard";
import Link from "next/link";

export default function FirstSkillPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="스킬 개념 & 실습 · 1-2"
        title="첫 스킬 만들기"
        description="나만의 첫 번째 Claude Code 스킬을 직접 만들어봅니다. 커밋 메시지 컨벤션 스킬을 단계별로 작성합니다."
      />

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">무엇을 만드나요?</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge">
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">📝</span>
            <div>
              <h3 className="font-bold text-heading mb-2">커밋 메시지 컨벤션 스킬</h3>
              <p className="text-sm text-muted mb-3">
                Git 커밋 시 Claude가 자동으로 우리 팀의 커밋 메시지 규칙을 적용하는 스킬을 만듭니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">자동 활성화</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">한국어 커밋</span>
                <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">타입 + 제목 형식</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">단계별 실습</h2>

        <div className="space-y-6">
          <StepCard
            step={1}
            title="스킬 디렉토리 만들기"
            description="스킬을 저장할 폴더를 생성합니다. 개인 스킬로 만들면 모든 프로젝트에서 사용할 수 있습니다."
          >
            <CodeBlock
              code={`# 개인 스킬 (모든 프로젝트에서 사용)
mkdir -p ~/.claude/skills/commit-message

# 또는 프로젝트 스킬 (이 프로젝트에서만 사용)
mkdir -p .claude/skills/commit-message`}
              language="bash"
            />
            <div className="tip-box mt-3">
              <p className="text-sm text-accent">
                <strong>💡 팁:</strong> 처음에는 개인 스킬(<code className="bg-accent/20 px-1 rounded">~/.claude/skills/</code>)로
                만들어 모든 프로젝트에서 활용하는 것을 추천합니다.
              </p>
            </div>
          </StepCard>

          <StepCard
            step={2}
            title="SKILL.md 작성 - 메타데이터"
            description="YAML 프론트매터에 name과 description을 작성합니다. description이 자동 활성화의 핵심입니다."
          >
            <CodeBlock
              code={`---
name: commit-message
description: >
  Git 커밋 메시지를 작성하거나, 변경사항을 커밋할 때 자동 활성화됩니다.
  한국어 커밋 메시지 컨벤션을 적용합니다.
  단순 코드 수정, 파일 읽기, 코드 분석 작업에서는 사용하지 않습니다.
---`}
              language="yaml"
              filename="SKILL.md (메타데이터 부분)"
            />
            <div className="mt-4 bg-panel rounded-xl p-4 border border-edge">
              <h4 className="font-semibold text-heading text-xs mb-2">좋은 description의 3요소</h4>
              <div className="space-y-1">
                <p className="text-xs text-muted">✅ <strong className="text-heading">무엇을:</strong> &quot;한국어 커밋 메시지 컨벤션을 적용&quot;</p>
                <p className="text-xs text-muted">✅ <strong className="text-heading">언제:</strong> &quot;커밋 메시지를 작성하거나 커밋할 때&quot;</p>
                <p className="text-xs text-muted">✅ <strong className="text-heading">언제 안:</strong> &quot;단순 코드 수정, 파일 읽기에서는 사용하지 않음&quot;</p>
              </div>
            </div>
          </StepCard>

          <StepCard
            step={3}
            title="SKILL.md 작성 - Instructions"
            description="Claude가 따라야 할 구체적인 절차를 작성합니다."
          >
            <CodeBlock
              code={`# 커밋 메시지 컨벤션

## Instructions

커밋 메시지를 작성할 때 다음 규칙을 반드시 따릅니다.

### 형식
\`\`\`
<타입>: <제목>

<본문 (선택)>
\`\`\`

### 타입 종류
| 타입 | 의미 |
|------|------|
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 변경 |
| style | 코드 포맷팅 (기능 변경 없음) |
| refactor | 코드 리팩토링 |
| test | 테스트 추가/수정 |
| chore | 빌드, 설정 변경 |

### 규칙
1. 제목은 50자 이내
2. 제목은 한국어로 작성
3. 마침표로 끝내지 않음
4. 본문은 "왜" 변경했는지 설명 (선택)
5. 한 커밋에 하나의 논리적 변경만 포함`}
              language="markdown"
              filename="SKILL.md (Instructions 부분)"
            />
          </StepCard>

          <StepCard
            step={4}
            title="SKILL.md 작성 - Examples"
            description="구체적인 사용 예시를 추가합니다. 예시가 있으면 Claude가 더 정확하게 동작합니다."
          >
            <CodeBlock
              code={`## Examples

### 좋은 커밋 메시지
- feat: 사용자 로그인 기능 추가
- fix: 이메일 유효성 검사 오류 수정
- docs: README에 설치 가이드 추가
- refactor: 인증 모듈 구조 개선
- test: 결제 API 단위 테스트 추가

### 나쁜 커밋 메시지 (피해야 할 것)
- 수정함  ← 무엇을 수정했는지 알 수 없음
- update  ← 타입이 없고 영어
- feat: 여러 가지 기능 추가 및 버그 수정  ← 한 커밋에 여러 변경`}
              language="markdown"
              filename="SKILL.md (Examples 부분)"
            />
          </StepCard>

          <StepCard
            step={5}
            title="완성된 SKILL.md 전체 코드"
            description="위의 모든 부분을 합친 최종 파일입니다. 그대로 복사하여 사용하세요."
          >
            <CodeBlock
              code={`---
name: commit-message
description: >
  Git 커밋 메시지를 작성하거나, 변경사항을 커밋할 때 자동 활성화됩니다.
  한국어 커밋 메시지 컨벤션을 적용합니다.
  단순 코드 수정, 파일 읽기, 코드 분석 작업에서는 사용하지 않습니다.
---

# 커밋 메시지 컨벤션

## Instructions

커밋 메시지를 작성할 때 다음 규칙을 반드시 따릅니다.

### 형식
\\\`\\\`\\\`
<타입>: <제목>

<본문 (선택)>
\\\`\\\`\\\`

### 타입 종류
| 타입 | 의미 |
|------|------|
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| docs | 문서 변경 |
| style | 코드 포맷팅 (기능 변경 없음) |
| refactor | 코드 리팩토링 |
| test | 테스트 추가/수정 |
| chore | 빌드, 설정 변경 |

### 규칙
1. 제목은 50자 이내
2. 제목은 한국어로 작성
3. 마침표로 끝내지 않음
4. 본문은 "왜" 변경했는지 설명 (선택)
5. 한 커밋에 하나의 논리적 변경만 포함

## Examples

### 좋은 커밋 메시지
- feat: 사용자 로그인 기능 추가
- fix: 이메일 유효성 검사 오류 수정
- docs: README에 설치 가이드 추가
- refactor: 인증 모듈 구조 개선
- test: 결제 API 단위 테스트 추가

### 나쁜 커밋 메시지 (피해야 할 것)
- 수정함 ← 무엇을 수정했는지 알 수 없음
- update ← 타입이 없고 영어
- feat: 여러 가지 기능 추가 및 버그 수정 ← 한 커밋에 여러 변경`}
              language="markdown"
              filename="~/.claude/skills/commit-message/SKILL.md"
            />
          </StepCard>

          <StepCard
            step={6}
            title="스킬 테스트하기"
            description="Claude Code를 실행하고 커밋을 요청해보세요."
          >
            <CodeBlock
              code={`# Claude Code 실행
claude

# 테스트 1: 커밋 요청
> 지금까지 변경사항을 커밋해줘

# 테스트 2: 커밋 메시지 생성 요청
> 이 변경사항에 맞는 커밋 메시지를 만들어줘

# Claude가 자동으로 commit-message 스킬을 감지하고
# "feat: ~", "fix: ~" 형식의 한국어 커밋 메시지를 생성합니다!`}
              language="bash"
              filename="터미널"
            />
          </StepCard>
        </div>
      </section>

      {/* More Skill Ideas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">더 만들어볼 스킬 아이디어</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "🔍",
              title: "코드 리뷰어",
              trigger: "PR 리뷰, 코드 변경 검토 시",
              desc: "보안 → 성능 → 스타일 순서로 체계적 리뷰",
            },
            {
              icon: "🧪",
              title: "테스트 생성기",
              trigger: "테스트 작성 요청 시",
              desc: "프로젝트의 테스트 컨벤션에 맞는 테스트 코드 생성",
            },
            {
              icon: "📄",
              title: "API 문서 생성기",
              trigger: "API 문서 작성 시",
              desc: "OpenAPI/Swagger 형식으로 엔드포인트 문서 자동 생성",
            },
            {
              icon: "📊",
              title: "보고서 작성기",
              trigger: "데이터 분석 결과 정리 시",
              desc: "정해진 보고서 템플릿에 맞춰 분석 결과를 정리",
            },
          ].map((idea) => (
            <div
              key={idea.title}
              className="bg-panel rounded-xl p-4 border border-edge"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{idea.icon}</span>
                <div>
                  <h3 className="font-semibold text-heading text-sm mb-1">{idea.title}</h3>
                  <p className="text-[10px] text-accent mb-1 font-medium">활성화: {idea.trigger}</p>
                  <p className="text-xs text-muted">{idea.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 작성 체크리스트</h2>
        <div className="bg-panel rounded-xl p-5 border border-edge">
          <div className="space-y-3">
            {[
              "name은 소문자, 숫자, 하이픈만 사용했나요?",
              "description에 '무엇을', '언제', '언제 쓰지 말지' 3가지를 포함했나요?",
              "Instructions가 단계별로 구체적으로 작성되었나요?",
              "Examples에 좋은/나쁜 예시가 포함되었나요?",
              "Claude Code에서 실제로 테스트해봤나요?",
            ].map((item, i) => (
              <label key={i} className="flex items-start gap-3 cursor-pointer group">
                <span className="flex-shrink-0 w-5 h-5 rounded border border-edge bg-surface-alt flex items-center justify-center text-xs text-dim group-hover:border-accent transition-colors mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-muted group-hover:text-heading transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/skills/official-skills"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 공식 스킬 체험
        </Link>
        <Link
          href="/docs/skills/deploy-share"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 배포 및 공유
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
