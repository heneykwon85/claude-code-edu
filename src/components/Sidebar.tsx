"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  {
    title: "시작하기",
    items: [
      { name: "소개", href: "/" },
      { name: "사전 설치", href: "/docs/installation" },
      { name: "기본 사용법", href: "/docs/basics" },
    ],
  },
  {
    title: "핵심 워크플로우",
    items: [
      { name: "코드베이스 이해하기", href: "/docs/workflows/understand" },
      { name: "버그 수정", href: "/docs/workflows/bugfix" },
      { name: "코드 리팩토링", href: "/docs/workflows/refactor" },
      { name: "테스트 작성", href: "/docs/workflows/testing" },
      { name: "PR 및 문서화", href: "/docs/workflows/pr-docs" },
    ],
  },
  {
    title: "고급 기능",
    items: [
      { name: "CLAUDE.md 설정", href: "/docs/advanced/claude-md" },
      { name: "슬래시 명령어", href: "/docs/advanced/commands" },
      { name: "MCP 서버 연결", href: "/docs/advanced/mcp" },
      { name: "GitHub Actions", href: "/docs/advanced/github-actions" },
    ],
  },
  {
    title: "팁 & 모범사례",
    items: [
      { name: "효율적인 프롬프트", href: "/docs/tips/prompts" },
      { name: "자주 묻는 질문", href: "/docs/tips/faq" },
    ],
  },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 dark:bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`sidebar-panel fixed top-0 left-0 z-50 h-full w-64 overflow-y-auto transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="sidebar-section-border px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
            <Image src="/logo-sidebar.png" alt="Logo" width={32} height={32} className="rounded" />
            <div>
              <h1 className="text-sm font-semibold sidebar-heading tracking-wide">NEXT Academy</h1>
              <p className="text-[10px] sidebar-dim tracking-widest uppercase">Claude Code 101</p>
            </div>
          </Link>
          <ThemeToggle compact />
        </div>

        {/* Navigation */}
        <nav className="py-6">
          {navigation.map((section) => (
            <div key={section.title} className="mb-5">
              <h3 className="px-6 pb-2 text-[10px] font-medium uppercase tracking-[0.15em] sidebar-dim">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`sidebar-link flex items-center px-6 py-2 text-[13px] ${
                        pathname === item.href
                          ? "active font-medium"
                          : "sidebar-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="sidebar-section-border-top px-6 py-4">
          <p className="text-[10px] sidebar-dim tracking-wide">
            &copy; 2026 Claude Code 101
          </p>
        </div>
      </aside>
    </>
  );
}
