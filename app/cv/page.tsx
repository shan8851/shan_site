import { Job } from 'app/components/job';
import { jobsData } from 'app/data/jobs';
import { LuDownload } from 'react-icons/lu';

const CvSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-purple">{title}</h2>
    {children}
  </section>
);

export default function Cv() {
  return (
    <div className="mt-10 space-y-10 text-base leading-relaxed text-text">
      <header className="space-y-6">
        <h1 className="text-4xl font-bold text-green">CV</h1>
        <a
          download
          href="/cv.pdf"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:bg-surface transition-colors"
        >
          <LuDownload className="text-lg" />
          Download PDF
        </a>

        <div className="space-y-3 max-w-3xl">
          <p className="text-lg font-semibold text-purple">
            Full Stack Engineer · DeFi
          </p>

          <p className="text-text">
            Full stack engineer with 6+ years of experience, currently leading
            development at a stealth DeFi startup building an onchain asset
            management platform. Passionate about crafting intuitive, scalable
            systems that simplify complex DeFi interactions. Previously scaled a
            DeFi analytics platform across 16+ EVM chains at Cielo Finance,
            driving 800% engagement growth, and co-founded a B2C startup.
            Focused on deepening expertise in backend infrastructure, AI
            integrations, RWA tokenization, and stablecoin mechanics to create
            user-centric, impactful crypto products.
          </p>
        </div>
      </header>

      <CvSection title="Work Experience">
        {jobsData.map((job) => (
          <Job key={job.company} jobDetails={job} />
        ))}
      </CvSection>

      <CvSection title="Tooling & Stack">
        <ul className="list-disc list-inside space-y-2 text-textSecondary">
          <li>
            <span className="font-semibold text-text">Frontend:</span> React,
            Next.js, Tailwind, TanStack
          </li>
          <li>
            <span className="font-semibold text-text">Web3:</span> Viem, Wagmi,
            Solidity, Foundry
          </li>
          <li>
            <span className="font-semibold text-text">Backend/Data:</span>{' '}
            Node.js, GraphQL, REST, Firebase, Rust (Learning)
          </li>
          <li>
            <span className="font-semibold text-text">Infra:</span> Docker,
            CI/CD, GitHub Actions
          </li>
        </ul>
      </CvSection>

      <div className="pt-6 border-t border-border">
        <a
          download
          href="/cv.pdf"
          className="inline-flex w-fit items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:bg-surface transition-colors"
        >
          <LuDownload className="text-lg" />
          Download CV
        </a>
      </div>
    </div>
  );
}
