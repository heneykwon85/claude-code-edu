import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";

export default function WhatIsSkillPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="스킬 개념 & 실습 · 1-0"
        title="스킬이란?"
        description="Claude Code Skills의 핵심 개념을 이해합니다. 스킬이 무엇이고, 왜 필요하며, 어떻게 동작하는지 알아봅니다."
      />

      {/* Core Concept */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬의 핵심 개념</h2>
        <div className="bg-panel rounded-2xl p-6 border border-edge mb-6">
          <p className="text-body text-base leading-relaxed mb-4">
            <strong className="text-heading">Claude Code Skill</strong>은
            특정 작업을 잘 수행하도록 <strong className="text-accent">절차와 기준을 패키징해서 Claude에게 가르치는
            마크다운 기반 매뉴얼</strong>입니다.
          </p>
          <p className="text-muted text-sm leading-relaxed">
            코드 리뷰 기준, 커밋 메시지 포맷, 특정 도메인의 코딩 규칙 등
            반복적으로 설명하기 번거로운 것들을 한 번 만들어두면
            매번 설명하지 않아도 Claude가 자동으로 참고합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "📦",
              title: "패키징된 지식",
              desc: "반복 절차와 기준을 마크다운으로 정리한 매뉴얼",
            },
            {
              icon: "🤖",
              title: "자동 활성화 (Model-Invoked)",
              desc: "사용자 요청에 맞는 스킬을 Claude가 자동으로 찾아 적용",
            },
            {
              icon: "📖",
              title: "점진적 읽기 (Progressive Disclosure)",
              desc: "필요한 만큼만 문서를 읽어 토큰을 절약",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-alt rounded-xl p-5 border border-edge text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-heading text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">왜 스킬이 필요한가요?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-red-50 dark:bg-red-500/5 rounded-xl p-5 border border-red-200 dark:border-red-500/20">
            <h3 className="font-semibold text-red-700 dark:text-red-400 text-sm mb-3">❌ 스킬 없이 작업할 때</h3>
            <ul className="text-xs text-red-600 dark:text-red-400 space-y-2">
              <li>• 매번 같은 규칙을 반복 설명</li>
              <li>• 설명을 빠뜨리면 결과가 일관되지 않음</li>
              <li>• 전체 컨텍스트를 매번 스캔 → 느린 응답</li>
              <li>• 토큰 소비가 높아 비용 증가</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-5 border border-green-200 dark:border-green-500/20">
            <h3 className="font-semibold text-green-700 dark:text-green-400 text-sm mb-3">✅ 스킬을 사용할 때</h3>
            <ul className="text-xs text-green-600 dark:text-green-400 space-y-2">
              <li>• 한 번 정의하면 자동으로 적용</li>
              <li>• 항상 일관된 기준으로 작업 수행</li>
              <li>• 지정된 경로로 직접 진입 → 빠른 응답</li>
              <li>• 필요한 만큼만 로드 → 토큰 절약</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How Skills Work */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬의 동작 방식</h2>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "메타데이터 등록",
              desc: "Claude Code 시작 시 각 스킬의 name과 description이 시스템에 등록됩니다.",
              detail: "이때 SKILL.md 본문은 아직 읽지 않습니다 — 메타데이터만 참조합니다.",
              color: "bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
            },
            {
              step: "2",
              title: "자동 매칭",
              desc: "사용자 요청이 들어오면, Claude가 등록된 description을 보고 관련 스킬을 판단합니다.",
              detail: "description이 구체적일수록 매칭 정확도가 올라갑니다.",
              color: "bg-purple-100 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20",
            },
            {
              step: "3",
              title: "SKILL.md 로드",
              desc: "매칭된 스킬의 SKILL.md 전체 내용을 현재 대화 컨텍스트에 포함시킵니다.",
              detail: "이 시점에서 Instructions와 Examples를 참고하여 작업합니다.",
              color: "bg-green-100 dark:bg-green-500/10 border-green-200 dark:border-green-500/20",
            },
            {
              step: "4",
              title: "점진적 확장 (Progressive Disclosure)",
              desc: "SKILL.md에 링크된 추가 문서(reference.md, templates/ 등)가 필요하면 그때 읽어들입니다.",
              detail: "한 번에 모든 문서를 로드하지 않아 토큰을 효율적으로 사용합니다.",
              color: "bg-orange-100 dark:bg-orange-500/10 border-orange-200 dark:border-orange-500/20",
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`rounded-xl p-5 border ${item.color}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-heading text-sm mb-1">{item.title}</h3>
                  <p className="text-sm text-muted mb-1">{item.desc}</p>
                  <p className="text-xs text-dim italic">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILL.md Structure */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">SKILL.md 기본 구조</h2>
        <p className="text-muted mb-4">
          스킬의 핵심은 <code className="bg-accent/20 px-1.5 py-0.5 rounded text-accent text-sm">SKILL.md</code> 하나입니다.
          YAML 프론트매터(메타데이터) + 마크다운 본문으로 구성됩니다.
        </p>
        <CodeBlock
          code={`---
name: my-skill-name          # 필수: 소문자, 숫자, 하이픈만 사용
description: >                # 필수: 언제/어떻게/언제 쓰지 말지 서술
  이 스킬은 ~할 때 사용합니다.
  ~한 상황에서는 사용하지 않습니다.
# allowed-tools: Read, Grep   # 선택: 사용 가능한 도구 제한
---

# 스킬 이름

## Instructions
Claude가 따라야 할 절차를 단계별로 작성합니다.

1. 첫 번째 단계
2. 두 번째 단계
3. 세 번째 단계

## Examples
구체적인 사용 예시를 보여줍니다.

사용자: "~해줘"
→ 위 절차에 따라 수행`}
          language="markdown"
          filename="SKILL.md 기본 템플릿"
        />
      </section>

      {/* Skill Locations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 저장 위치</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">위치</th>
                <th className="text-left px-5 py-3 font-semibold text-body">경로</th>
                <th className="text-left px-5 py-3 font-semibold text-body">적용 범위</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-edge">
                <td className="px-5 py-3 font-medium text-heading">👤 개인 스킬</td>
                <td className="px-5 py-3">
                  <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">~/.claude/skills/</code>
                </td>
                <td className="px-5 py-3 text-muted">모든 프로젝트에서 나에게만 적용</td>
              </tr>
              <tr className="border-b border-edge">
                <td className="px-5 py-3 font-medium text-heading">📁 프로젝트 스킬</td>
                <td className="px-5 py-3">
                  <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">.claude/skills/</code>
                </td>
                <td className="px-5 py-3 text-muted">해당 레포에서 팀 전체가 사용</td>
              </tr>
              <tr>
                <td className="px-5 py-3 font-medium text-heading">🌐 플러그인 스킬</td>
                <td className="px-5 py-3">
                  <code className="text-accent bg-accent/10 px-2 py-0.5 rounded font-mono text-xs">npx skills add</code>
                </td>
                <td className="px-5 py-3 text-muted">외부 마켓플레이스에서 설치하여 사용</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Skills vs CLAUDE.md */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">스킬 vs CLAUDE.md</h2>
        <div className="bg-panel rounded-xl border border-edge overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-alt border-b border-edge">
                <th className="text-left px-5 py-3 font-semibold text-body">구분</th>
                <th className="text-left px-5 py-3 font-semibold text-body">CLAUDE.md</th>
                <th className="text-left px-5 py-3 font-semibold text-body">Skills</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "로딩", claude: "항상 전부 로드", skill: "필요할 때만 로드" },
                { label: "용도", claude: "프로젝트 전반 규칙/컨텍스트", skill: "특정 작업의 절차/기준" },
                { label: "토큰", claude: "매 대화마다 소비", skill: "활성화될 때만 소비" },
                { label: "예시", claude: "코딩 스타일, 디렉토리 구조", skill: "코드 리뷰, 커밋 규칙, 배포 절차" },
              ].map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "" : "bg-surface-alt/50"}>
                  <td className="px-5 py-3 font-medium text-heading">{row.label}</td>
                  <td className="px-5 py-3 text-muted">{row.claude}</td>
                  <td className="px-5 py-3 text-muted">{row.skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tip-box mt-4">
          <p className="text-sm text-accent">
            <strong>💡 요약:</strong> CLAUDE.md는 &quot;항상 알아야 할 정보&quot;,
            Skills는 &quot;특정 상황에서만 필요한 절차&quot;에 적합합니다.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link
          href="/docs/skills"
          className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          이전: 스킬 개념 &amp; 실습
        </Link>
        <Link
          href="/docs/skills/official-skills"
          className="px-6 py-2.5 bg-btn text-btn-text text-sm font-medium hover:bg-btn-hover transition-colors flex items-center gap-2"
        >
          다음: 공식 스킬 체험
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
