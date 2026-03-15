'use client';

import Link from 'next/link';
import type { FormEvent, ReactNode } from 'react';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';

const LINK_PATTERN = /(https?:\/\/[^\s,)]+|\/(?:projects|notes|now|log|labs|uses|chat)(?:\/[a-z0-9-]+)*)/gi;

const renderMessageWithLinks = (text: string): ReactNode[] => {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const regex = new RegExp(LINK_PATTERN.source, 'gi');

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const url = match[0].replace(/[.,]+$/, '');
    regex.lastIndex = match.index + url.length;

    parts.push(
      <Link
        key={`${match.index}-${url}`}
        href={url}
        target={url.startsWith('/') ? undefined : '_blank'}
        className="underline underline-offset-4 transition-colors hover:text-text"
      >
        {url}
      </Link>
    );

    lastIndex = match.index + url.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

type ChatPanelProps = {
  mode?: 'floating' | 'page';
  onClose?: () => void;
  open?: boolean;
};

const CHAT_INPUT_LIMIT = 500;
const chatPanelId = 'ask-shan-chat-panel';
const suggestedQuestions = [
  'What does Shan work on?',
  'What has he built recently?',
  "What's his tech stack?",
] as const;

const createMessageId = (): string => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  return `chat-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const getResponseError = async (response: Response): Promise<string> => {
  try {
    const json = (await response.json()) as { error?: string };

    return json.error ?? 'Something went wrong. Try again in a moment.';
  } catch {
    return 'Something went wrong. Try again in a moment.';
  }
};

export const ChatPanel = ({
  mode = 'floating',
  onClose,
  open = true,
}: ChatPanelProps): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isFloating = mode === 'floating';
  const hasMessages = messages.length > 0;
  const trimmedInputValue = inputValue.trim();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isStreaming]);

  useEffect(() => {
    if (!open || isStreaming) {
      return;
    }

    inputRef.current?.focus();
  }, [isStreaming, open]);

  const sendMessage = async (nextMessage: string): Promise<void> => {
    const normalizedMessage = nextMessage.trim().slice(0, CHAT_INPUT_LIMIT);

    if (!normalizedMessage || isStreaming) {
      return;
    }

    const userMessageId = createMessageId();
    const assistantMessageId = createMessageId();

    setStatusMessage(null);
    setInputValue('');
    setIsStreaming(true);
    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: userMessageId,
        role: 'user',
        text: normalizedMessage,
      },
      {
        id: assistantMessageId,
        role: 'assistant',
        text: '',
      },
    ]);

    try {
      const pageParams = new URLSearchParams(window.location.search);
      const bypassValue = pageParams.get('bypass');
      const chatEndpoint = bypassValue ? `/api/chat?bypass=${encodeURIComponent(bypassValue)}` : '/api/chat';

      const response = await fetch(chatEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: normalizedMessage }),
      });

      if (!response.ok) {
        const errorMessage = await getResponseError(response);

        setMessages((currentMessages) =>
          currentMessages.map((message) =>
            message.id === assistantMessageId
              ? { ...message, text: errorMessage }
              : message
          )
        );
        setIsStreaming(false);
        return;
      }

      if (!response.body) {
        setMessages((currentMessages) =>
          currentMessages.map((message) =>
            message.id === assistantMessageId
              ? {
                  ...message,
                  text: 'The chat returned an empty response. Try again in a moment.',
                }
              : message
          )
        );
        setIsStreaming(false);
        return;
      }

      const reader = response.body.getReader();
      const textDecoder = new TextDecoder();
      let streamedText = '';

      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        streamedText += textDecoder.decode(value, { stream: true });
        setMessages((currentMessages) =>
          currentMessages.map((message) =>
            message.id === assistantMessageId
              ? { ...message, text: streamedText }
              : message
          )
        );
      }

      if (streamedText.trim().length === 0) {
        setMessages((currentMessages) =>
          currentMessages.map((message) =>
            message.id === assistantMessageId
              ? {
                  ...message,
                  text: 'I do not have info on that from the site, but you can reach Shan at asamshan456@gmail.com',
                }
              : message
          )
        );
      }
    } catch {
      setMessages((currentMessages) =>
        currentMessages.map((message) =>
          message.id === assistantMessageId
            ? {
                ...message,
                text: 'Something went wrong while streaming the reply. Try again in a moment.',
              }
            : message
        )
      );
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await sendMessage(inputValue);
  };

  const containerClassName = isFloating
    ? [
        'fixed bottom-20 right-4 z-40 w-[calc(100vw-2rem)] max-w-sm transition-all duration-200 ease-out sm:bottom-24 sm:right-5',
        open ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      ].join(' ')
    : 'mx-auto w-full max-w-2xl';

  const panelClassName = isFloating
    ? 'flex max-h-[min(500px,calc(100vh-7.5rem))] min-h-[460px] flex-col rounded-2xl border border-border bg-surface shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)]'
    : 'flex min-h-[70vh] flex-col rounded-3xl border border-border bg-surface';

  const messageAreaClassName = isFloating
    ? 'min-h-0 flex-1 overflow-y-auto px-4 py-4'
    : 'min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6';

  return (
    <section
      id={chatPanelId}
      aria-hidden={isFloating ? !open : undefined}
      className={containerClassName}
    >
      <div className={panelClassName}>
        <header className="flex items-start justify-between gap-4 border-b border-border px-4 py-4 sm:px-5">
          <div className="space-y-1">
            <h2 className="text-sm font-semibold tracking-tight text-text">
              Ask about Shan&apos;s work
            </h2>
            <p className="text-xs text-muted">
              Answers are grounded only in shan8851.com content.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {isFloating ? (
              <Link
                href="/chat"
                className="text-xs text-muted underline-offset-4 transition-colors hover:text-text hover:underline"
                title="Open full page chat"
              >
                ↗
              </Link>
            ) : null}
            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                className="text-lg leading-none text-muted transition-colors hover:text-text"
                title="Close chat"
              >
                ×
              </button>
            ) : null}
          </div>
        </header>

        <div className={messageAreaClassName}>
          {!hasMessages ? (
            <div className="space-y-5">
              <div className="space-y-2">
                <p className="max-w-xl text-sm text-soft">
                  Ask about current work, recent builds, writing, tools, or experience. If it is not
                  on the site, the assistant will say so.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(question)}
                    disabled={isStreaming}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-left text-xs text-soft transition-colors hover:text-text disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-3" role="log" aria-live="polite">
              {messages.map((message, index) => {
                const isAssistantStreaming =
                  isStreaming && message.role === 'assistant' && index === messages.length - 1;

                return (
                  <div
                    key={message.id}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-relaxed sm:max-w-[85%] ${
                        message.role === 'user'
                          ? 'border border-text/20 bg-text/10 text-text'
                          : 'text-soft'
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">
                        {message.text
                          ? (message.role === 'assistant' ? renderMessageWithLinks(message.text) : message.text)
                          : (isAssistantStreaming ? 'Thinking…' : '')}
                        {isAssistantStreaming && message.text ? (
                          <span className="ml-1 inline-flex h-1.5 w-1.5 rounded-full bg-text/60 align-middle animate-pulse" />
                        ) : null}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t border-border px-4 py-4 sm:px-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 text-[11px] text-muted">
              <span>{statusMessage ?? 'Keep it to one question at a time for the best answer.'}</span>
              <span>{inputValue.length}/{CHAT_INPUT_LIMIT}</span>
            </div>

            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                name="message"
                value={inputValue}
                maxLength={CHAT_INPUT_LIMIT}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Ask me anything about Shan"
                disabled={isStreaming || (isFloating && !open)}
                className="h-11 flex-1 rounded-xl border border-border bg-background px-3 text-sm text-text outline-none transition-colors placeholder:text-muted focus:border-text disabled:cursor-not-allowed disabled:opacity-70"
              />

              <button
                type="submit"
                disabled={!trimmedInputValue || isStreaming}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-text px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isStreaming ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
