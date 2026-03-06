export type LabEntry = {
  title: string;
  status: 'live' | 'planned';
  summary: string;
  href: string;
};

export const labsLastUpdated = '2026-03-06';

export const labs: LabEntry[] = [
  {
    title: 'skills.shan8851.com',
    status: 'live',
    summary:
      'UI surface for browsing skills and related workflows in a faster, cleaner way.',
    href: 'https://skills.shan8851.com',
  },
];
