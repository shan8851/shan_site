import type { ReactElement } from 'react';

import type { LogChannel, LogEntry } from '../content/proofLog';

const logChannelTokens: Record<
  LogChannel,
  {
    label: string;
    colorClassName: string;
  }
> = {
  projects: {
    label: 'PROJECTS',
    colorClassName: 'text-[var(--log-channel-projects)]',
  },
  work: {
    label: 'WORK',
    colorClassName: 'text-[var(--log-channel-work)]',
  },
  write: {
    label: 'WRITING',
    colorClassName: 'text-[var(--log-channel-write)]',
  },
  ops: {
    label: 'OPS',
    colorClassName: 'text-[var(--log-channel-ops)]',
  },
  life: {
    label: 'LIFE',
    colorClassName: 'text-[var(--log-channel-life)]',
  },
};

type LogFeedVariant = 'preview' | 'full';

type LogFeedProps = {
  entries: readonly LogEntry[];
  emptyMessage?: string;
  variant?: LogFeedVariant;
};

const feedContainerClassNames: Record<LogFeedVariant, string> = {
  preview: 'log-feed-preview border-b border-border/70',
  full: 'log-feed-full border-b border-border/70',
};

const rowClassNames: Record<LogFeedVariant, string> = {
  preview: 'log-row-preview py-3',
  full: 'log-row-full py-3',
};

const messageClassNames: Record<LogFeedVariant, string> = {
  preview: 'min-w-0 break-words text-[13px] leading-6 text-soft',
  full: 'min-w-0 break-words text-[13px] leading-6 text-soft sm:text-sm',
};

const rowLayoutClassNames: Record<LogFeedVariant, string> = {
  preview: 'grid min-w-0 gap-2 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-4',
  full: 'grid min-w-0 gap-2 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-4',
};

const LogFeedRow = ({
  entry,
  variant,
}: {
  entry: LogEntry;
  variant: LogFeedVariant;
}): ReactElement => {
  const { colorClassName, label } = logChannelTokens[entry.channel];

  return (
    <li className={rowClassNames[variant]}>
      <div className={rowLayoutClassNames[variant]}>
        <div className="flex flex-wrap items-center gap-2 text-[11px] leading-5 uppercase tracking-[0.18em] sm:items-start">
          <span className="text-muted">[{entry.date}]</span>
          <span className={`font-semibold ${colorClassName}`}>[{label}]</span>
        </div>
        <p className={messageClassNames[variant]}>{entry.text}</p>
      </div>
    </li>
  );
};

export const LogFeed = ({
  entries,
  emptyMessage = 'No log entries yet.',
  variant = 'full',
}: LogFeedProps): ReactElement =>
  entries.length === 0 ? (
    <p className="text-muted">{emptyMessage}</p>
  ) : (
    <ul className={feedContainerClassNames[variant]}>
      {entries.map((entry) => (
        <LogFeedRow key={entry.id} entry={entry} variant={variant} />
      ))}
    </ul>
  );
