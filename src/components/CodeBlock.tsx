"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  code,
  language = "bash",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block my-4">
      <div className="code-header">
        <span className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--code-dot)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--code-dot)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--code-dot)" }} />
          </span>
          <span className="ml-2">{filename || language}</span>
        </span>
        <button
          onClick={handleCopy}
          className="px-2.5 py-1 rounded text-[11px] hover:opacity-70 transition-opacity flex items-center gap-1.5"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              copied
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              copy
            </>
          )}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
