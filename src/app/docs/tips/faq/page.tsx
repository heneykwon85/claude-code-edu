"use client";

import PageHeader from "@/components/PageHeader";
import CodeBlock from "@/components/CodeBlock";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "Claude Code를 사용하려면 비용이 드나요?",
    a: "네, Claude Code는 유료 서비스입니다. Claude Pro ($20/월) 또는 Claude Max ($100/월) 구독을 통해 사용하거나, Anthropic API 키를 사용하여 사용량 기반으로 과금됩니다. Max 플랜이 Claude Code를 가장 많이 사용할 수 있어 권장됩니다.",
  },
  {
    q: "Claude Code가 내 코드를 학습에 사용하나요?",
    a: "아니요. Anthropic의 정책에 따르면, Claude Code를 통해 전송된 코드는 모델 학습에 사용되지 않습니다. 입력한 코드는 해당 세션의 응답 생성에만 사용됩니다.",
  },
  {
    q: "인터넷 없이 사용할 수 있나요?",
    a: "아니요, Claude Code는 Anthropic의 API 서버와 통신해야 하므로 인터넷 연결이 필수입니다. 오프라인에서는 사용할 수 없습니다.",
  },
  {
    q: "어떤 프로그래밍 언어를 지원하나요?",
    a: "Claude Code는 특정 언어에 국한되지 않습니다. Python, JavaScript/TypeScript, Java, C++, Go, Rust, Swift, Kotlin 등 대부분의 프로그래밍 언어를 지원합니다. 자연어로 요청하면 해당 언어에 맞게 코드를 작성합니다.",
  },
  {
    q: "Claude Code가 실수를 하면 어떻게 하나요?",
    a: "Git을 사용하고 있다면 git diff로 변경사항을 확인하고, git checkout이나 git stash로 되돌릴 수 있습니다. Claude에게 수정을 요청하기 전에 항상 커밋해두는 것이 좋습니다. Claude의 변경 제안을 승인하기 전에 항상 확인하세요.",
  },
  {
    q: "대화 내용이 너무 길어지면 어떻게 하나요?",
    a: "/compact 명령어를 사용하면 대화 내용을 요약하여 컨텍스트를 절약할 수 있습니다. 또는 /clear로 초기화한 후 새로운 대화를 시작할 수도 있습니다.",
  },
  {
    q: "VS Code에서도 사용할 수 있나요?",
    a: "네! Claude Code는 VS Code 확장으로도 제공됩니다. 터미널 기반 CLI뿐만 아니라 VS Code, JetBrains IDE 등 다양한 에디터에서 사용할 수 있습니다.",
  },
  {
    q: "팀원과 설정을 공유할 수 있나요?",
    a: "네, CLAUDE.md 파일과 .claude/commands/ 디렉토리를 Git에 커밋하면 팀원 모두가 같은 설정과 커스텀 명령어를 사용할 수 있습니다.",
  },
  {
    q: "Claude Code와 GitHub Copilot의 차이점은 무엇인가요?",
    a: "GitHub Copilot은 주로 에디터 내에서 코드 자동완성에 초점을 맞추고 있습니다. Claude Code는 대화형 인터페이스로 코드 작성, 수정, 리팩토링, 테스트, PR 생성, 버그 수정 등 보다 넓은 범위의 개발 작업을 수행할 수 있습니다. 또한 전체 프로젝트 맥락을 이해하고 여러 파일에 걸친 변경을 할 수 있습니다.",
  },
  {
    q: "토큰 사용량을 어떻게 확인하나요?",
    a: "/cost 명령어를 사용하면 현재 세션에서 사용한 토큰 수와 예상 비용을 확인할 수 있습니다.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-panel rounded-xl border border-edge overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-surface-alt/50 transition-colors"
      >
        <span className="font-semibold text-heading text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-dim transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-sm text-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader
        badge="팁 & 모범사례"
        title="자주 묻는 질문 (FAQ)"
        description="Claude Code 사용 중 궁금한 점들에 대한 답변을 모았습니다."
      />

      <section className="mb-12">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-heading mb-6">문제 해결 가이드</h2>
        <div className="space-y-4">
          <div className="bg-panel rounded-xl border border-edge p-5">
            <h3 className="font-semibold text-heading mb-2">
              설치 후 claude 명령어를 찾을 수 없는 경우
            </h3>
            <CodeBlock
              code={`# 터미널을 재시작하거나 아래 명령어 실행
source ~/.bashrc  # bash 사용 시
source ~/.zshrc   # zsh 사용 시

# PATH 확인
which claude`}
              language="bash"
            />
          </div>

          <div className="bg-panel rounded-xl border border-edge p-5">
            <h3 className="font-semibold text-heading mb-2">
              인증 오류가 발생하는 경우
            </h3>
            <CodeBlock
              code={`# 로그인 상태 확인
claude auth status

# 재로그인
claude auth login

# 환경 진단
/doctor`}
              language="bash"
            />
          </div>

          <div className="bg-panel rounded-xl border border-edge p-5">
            <h3 className="font-semibold text-heading mb-2">
              응답이 느리거나 타임아웃되는 경우
            </h3>
            <p className="text-sm text-muted mb-3">
              네트워크 상태를 확인하고, 요청하는 작업의 범위를 좁혀보세요.
              매우 큰 파일이나 프로젝트 전체를 한 번에 분석하면 시간이 오래 걸릴 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-panel rounded-2xl p-8 border border-accent/20 text-center">
          <h2 className="text-2xl font-bold text-heading mb-3">
            학습을 완료했습니다! 🎉
          </h2>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            이제 Claude Code의 기본부터 고급 기능까지 모두 살펴봤습니다.
            실제 프로젝트에서 활용하며 더 많은 경험을 쌓아보세요!
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-heading font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            처음으로 돌아가기
          </Link>
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-edge">
        <Link href="/docs/tips/prompts" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          이전: 효율적인 프롬프트
        </Link>
        <Link href="/" className="text-sm text-dim hover:text-heading transition-colors flex items-center gap-1">
          홈으로
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
