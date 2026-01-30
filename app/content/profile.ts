export type PinnedLink = {
  title: string;
  href: string;
  note: string;
};

export type Profile = {
  handle: string;
  name: string;
  tagline: string;
  bio: string;
  location?: string;
  links: {
    github?: string;
    x?: string;
    telegram?: string;
    email?: string;
    linkedin?: string;
  };
  pinned: PinnedLink[];
};

// Single source of truth for both the UI and the /agents.json export.
export const PROFILE: Profile = {
  handle: 'shan8851.eth',
  name: 'shan',
  tagline: 'shan. engineer. builder.',
  bio: 'I work on systems that move money around without drama. I like clean interfaces, sharp tools, and the kind of reliability you only notice when it’s missing.',
  links: {
    github: 'https://github.com/shan8851',
    x: 'https://x.com/shan8851',
    telegram: 'https://t.me/shan8851',
    email: 'mailto:shan8851@proton.me',
    // optional — de-emphasised in UI, but useful for future-you.
    linkedin: 'https://www.linkedin.com/',
  },
  pinned: [
    {
      title: 'Polygon',
      href: 'https://polygon.technology/',
      note: 'Payments + infra. On-chain rails. Boring reliability (the good kind).',
    },
    {
      title: 'Aragon',
      href: 'https://github.com/aragon/app',
      note: 'Modular, programmatic governance on-chain.',
    },
    {
      title: 'Web3Privacy Now',
      href: 'https://web3privacy.info/',
      note: 'Contributor. Privacy nerd. Occasional spreadsheet enjoyer.',
    },
  ],
};
