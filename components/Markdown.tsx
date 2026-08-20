"use client";

import ReactMarkdown from "react-markdown";

export default function Markdown({ source }: { source: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="font-display text-3xl font-semibold text-text-primary tracking-tight mt-8 mb-4">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="font-display text-2xl font-semibold text-text-primary tracking-tight mt-8 mb-3">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="font-display text-xl font-semibold text-text-primary tracking-tight mt-6 mb-2">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-text-primary underline underline-offset-4 decoration-border hover:decoration-text-primary transition-colors"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="text-text-primary font-semibold">{children}</strong>
        ),
        code: ({ children }) => (
          <code className="font-mono text-sm text-text-primary bg-code-bg px-1.5 py-0.5 rounded">
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className="bg-code-bg border border-border rounded-lg p-4 overflow-x-auto mb-4">
            {children}
          </pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-border pl-4 text-text-secondary italic my-4">
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside text-text-secondary mb-4 space-y-1">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside text-text-secondary mb-4 space-y-1">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="leading-relaxed">{children}</li>
        ),
        hr: () => <hr className="border-border my-8" />,
      }}
    >
      {source}
    </ReactMarkdown>
  );
}
