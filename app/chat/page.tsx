import type { Metadata } from 'next';
import type { ReactElement } from 'react';

import { ChatPanel } from '../components/ChatPanel';

export const metadata: Metadata = {
  title: 'Chat — Shan',
  description: "Ask questions about Shan's work, projects, and writing.",
};

export default function ChatPage(): ReactElement {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl tracking-tight">Ask Shan</h1>
        <p className="max-w-2xl text-soft">
          Ask questions about work, projects, writing, and current focus. Replies are grounded only
          in the public site content.
        </p>
      </header>

      <ChatPanel mode="page" />
    </div>
  );
}
