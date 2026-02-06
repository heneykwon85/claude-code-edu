"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import ThemeToggle from "./ThemeToggle";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-64">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md border-b border-edge lg:hidden">
          <div className="flex items-center justify-between px-4 h-14">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-raised transition-colors"
              aria-label="메뉴 열기"
            >
              <svg className="w-5 h-5 text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <Image src="/logo-sidebar-light.png" alt="Logo" width={24} height={24} className="rounded block dark:hidden" />
              <Image src="/logo-sidebar.png" alt="Logo" width={24} height={24} className="rounded hidden dark:block" />
              <span className="text-sm font-medium text-heading tracking-wide">NEXT Academy</span>
            </div>
            <ThemeToggle compact />
          </div>
        </header>

        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}
