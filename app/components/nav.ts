import {
  FiHome,
  FiTool,
  FiClock,
  FiMessageCircle,
  FiFeather,
  FiCpu,
} from 'react-icons/fi';

export type NavItem = {
  href: string;
  label: string;
  shortLabel?: string;
  Icon: React.ComponentType<{ className?: string }>;
  description?: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: 'Home',
    shortLabel: 'Home',
    Icon: FiHome,
    description: 'Snapshot',
  },
  {
    href: '/now',
    label: 'Now',
    shortLabel: 'Now',
    Icon: FiClock,
    description: 'What I’m doing',
  },
  {
    href: '/uses',
    label: 'Uses',
    shortLabel: 'Uses',
    Icon: FiTool,
    description: 'Tools & setup',
  },
  {
    href: '/giles',
    label: 'Giles',
    shortLabel: 'Giles',
    Icon: FiCpu,
    description: 'Robot assistant',
  },
  {
    href: '/writing',
    label: 'Writing',
    shortLabel: 'Write',
    Icon: FiFeather,
    description: 'Notes, essays',
  },
  {
    href: '/contact',
    label: 'Ping',
    shortLabel: 'Ping',
    Icon: FiMessageCircle,
    description: 'Say hi',
  },
];
