import {
  BUY_COFFEE_URL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  TWITTER_URL,
} from 'app/constants';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri';
import { SiBuymeacoffee, SiGithub } from 'react-icons/si';
import { FaTelegram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/50 bg-surface/20">
      <div className="px-4 sm:px-6 md:px-8 w-full max-w-3xl mx-auto py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-textSecondary">
            <span className="font-medium text-text">shan8851.eth</span>
            <span className="hidden sm:inline text-border">•</span>
            <span>© 2025</span>
            <span className="hidden sm:inline text-border">•</span>
            <a
              href="https://opensource.org/license/mit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green transition-colors"
            >
              MIT License
            </a>
          </div>

          <div className="flex items-center gap-1">
            <IconLink
              href={GITHUB_URL}
              icon={<SiGithub />}
              label="GitHub"
              priority
            />
            <IconLink
              href={TWITTER_URL}
              icon={<RiTwitterXFill />}
              label="Twitter"
              priority
            />
            <IconLink
              href={LINKEDIN_URL}
              icon={<RiLinkedinBoxFill />}
              label="LinkedIn"
            />
            <IconLink
              href={TELEGRAM_URL}
              icon={<FaTelegram />}
              label="Telegram"
            />
            <IconLink href={EMAIL_URL} icon={<HiOutlineMail />} label="Email" />
            <IconLink
              href={BUY_COFFEE_URL}
              icon={<SiBuymeacoffee />}
              label="Buy Me a Coffee"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

function IconLink({
  href,
  icon,
  label,
  priority = false,
}: {
  href: string;
  icon: React.ReactNode;
  label?: string;
  priority?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-1.5 rounded-lg text-textSecondary hover:text-green hover:bg-surface/30 transition-all duration-200 hover:scale-105"
    >
      {icon}
    </a>
  );
}
