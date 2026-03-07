export type LabEntry = {
  title: string;
  status: 'live' | 'planned';
  summary: string;
  href: string;
};

export const labsLastUpdated = '2026-03-07';

export const labs: LabEntry[] = [
  {
    title: 'skills.shan8851.com',
    status: 'live',
    summary:
      'UI surface for browsing skills and related workflows in a faster, cleaner way.',
    href: 'https://skills.shan8851.com',
  },
  {
    title: 'cv.shan8851.com',
    status: 'live',
    summary:
      'Terminal-style CV surface with downloadable formats and clear work signal.',
    href: 'https://cv.shan8851.com',
  },
];
