import { EMAIL_URL } from 'app/constants';
import Image from 'next/image';
import { LuDownload, LuMail } from 'react-icons/lu';

export const Header = () => (
  <header className="flex flex-col gap-6 pt-10">
    <div className="flex items-center gap-4">
      <Image
        className="rounded-full w-20 h-20 border-2 border-green/30"
        src="/avatar.png"
        alt="avatar"
        height={100}
        width={100}
      />
      <h1 className="text-4xl font-extrabold text-green tracking-tight">
        shan8851.eth <span className="text-textSecondary">ᵍᵐ</span>
      </h1>
    </div>
    <p className="text-xl font-medium leading-snug text-text">
      Lead Full Stack <span className="text-purple">Web3 Engineer</span>, DeFi
      Builder, Relentless Learner
    </p>

    <p className="text-base leading-loose text-textSecondary max-w-prose">
      Leading end to end development for DeFi platforms, crafting user-centric
      systems for onchain asset management and AI-driven solutions.
    </p>
    <div className="flex items-center gap-3">
      <a
        download
        href="/cv.pdf"
        className="bg-purple text-background hover:bg-purple/90 rounded-xl py-2.5 px-4 flex gap-2 items-center font-medium transition-all hover:scale-105"
      >
        <LuDownload className="text-md" />
        Download CV
      </a>
      <a
        href={EMAIL_URL}
        className="border border-border hover:border-purple text-text hover:bg-surface rounded-xl py-2.5 px-4 flex gap-2 items-center font-medium transition-all"
      >
        <LuMail className="text-md" />
        Contact me
      </a>
    </div>
  </header>
);
