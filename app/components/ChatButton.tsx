'use client';

import { usePathname } from 'next/navigation';
import type { ReactElement } from 'react';
import { useState, useSyncExternalStore } from 'react';

import { ChatPanel } from './ChatPanel';

const chatSeenStorageKey = 'ask-shan-chat-seen';
const chatSeenSubscribers = new Set<() => void>();

const subscribeToChatSeen = (onStoreChange: () => void): (() => void) => {
  chatSeenSubscribers.add(onStoreChange);

  return () => {
    chatSeenSubscribers.delete(onStoreChange);
  };
};

const emitChatSeenChange = (): void => {
  chatSeenSubscribers.forEach((subscriber) => subscriber());
};

const getChatSeenSnapshot = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.localStorage.getItem(chatSeenStorageKey) === 'true';
};

export const ChatButton = (): ReactElement | null => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const hasSeenChat = useSyncExternalStore(subscribeToChatSeen, getChatSeenSnapshot, () => false);
  const showAttentionDot = !hasSeenChat;

  if (pathname === '/chat') {
    return null;
  }

  const markAsSeen = (): void => {
    window.localStorage.setItem(chatSeenStorageKey, 'true');
    emitChatSeenChange();
  };

  const togglePanel = (): void => {
    setIsOpen((currentValue) => {
      const nextValue = !currentValue;

      if (nextValue) {
        markAsSeen();
      }

      return nextValue;
    });
  };

  const closePanel = (): void => {
    markAsSeen();
    setIsOpen(false);
  };

  return (
    <>
      <ChatPanel mode="floating" open={isOpen} onClose={closePanel} />

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
        <button
          type="button"
          onClick={togglePanel}
          aria-controls="ask-shan-chat-panel"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close Ask Shan chat' : 'Open Ask Shan chat'}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface text-lg font-semibold text-text shadow-[0_14px_40px_-24px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5"
        >
          <span aria-hidden>{isOpen ? '×' : '?'}</span>
          {showAttentionDot ? (
            <span className="absolute right-3 top-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-text/30 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-text" />
            </span>
          ) : null}
        </button>
      </div>
    </>
  );
};
