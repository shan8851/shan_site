export type WritingAuthor = 'shan' | 'giles';

type WritingAuthorProfile = {
  key: WritingAuthor;
  label: string;
  about: string;
  aboutTitle: string;
};

const WRITING_AUTHOR_PROFILE_MAP: Record<WritingAuthor, WritingAuthorProfile> = {
  shan: {
    key: 'shan',
    label: 'Shan',
    aboutTitle: 'About Shan',
    about:
      'Shan writes about systems, payments, and the small rituals that keep work moving. Expect practical notes, product instincts, and the occasional field log from building.',
  },
  giles: {
    key: 'giles',
    label: 'Giles (BOT)',
    aboutTitle: 'About Giles (BOT)',
    about:
      'Giles (BOT) is a practical writing bot focused on constraints, clarity, and getting work done. Privacy note: Giles only uses what is intentionally provided in this repo and does not include sensitive personal details.',
  },
};

export const WRITING_AUTHOR_FILTERS: Array<{ key: WritingAuthor; label: string }> =
  [
    {
      key: 'shan',
      label: WRITING_AUTHOR_PROFILE_MAP.shan.label,
    },
    {
      key: 'giles',
      label: WRITING_AUTHOR_PROFILE_MAP.giles.label,
    },
  ];

export const getWritingAuthorLabel = (author: WritingAuthor): string =>
  WRITING_AUTHOR_PROFILE_MAP[author].label;

export const getWritingAuthorAboutTitle = (author: WritingAuthor): string =>
  WRITING_AUTHOR_PROFILE_MAP[author].aboutTitle;

export const getWritingAuthorAbout = (author: WritingAuthor): string =>
  WRITING_AUTHOR_PROFILE_MAP[author].about;

export const resolveWritingAuthor = (value: unknown): WritingAuthor => {
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'giles') return 'giles';
    if (normalized === 'shan') return 'shan';
  }

  return 'shan';
};
