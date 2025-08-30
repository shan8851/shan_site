import { Job } from 'app/components/job';
import { jobsData } from 'app/data/jobs';
import { createMetadata } from 'app/lib/metadata';
import { LuDownload } from 'react-icons/lu';

export const metadata = createMetadata({
  title: 'CV',
  description: 'Full Stack Web3 Engineer with 6+ years of experience in DeFi and blockchain development',
  path: '/cv',
  keywords: ['CV', 'Resume', 'Experience', 'Web3 Engineer', 'DeFi Developer'],
});

const CvSection = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
}) => (
  <section className="space-y-4">
    <h2 className="text-2xl font-semibold text-purple flex items-center gap-2">
      {icon && <span className="text-xl">{icon}</span>}
      {title}
    </h2>
    {children}
  </section>
);

export default function Cv() {
  return (
    <div className="space-y-10 text-base leading-relaxed text-text">
      <header className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-4xl font-bold text-green">CV</h1>
          <a
            download
            href="/cv.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-sm hover:bg-surface hover:border-textSecondary/30 transition-all group"
          >
            <LuDownload className="text-lg group-hover:text-green transition-colors" />
            Download PDF
          </a>
        </div>

        <div className="p-6 rounded-lg border border-border bg-surface/30 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👨‍💻</span>
            <p className="text-xl font-semibold text-purple">
              Full Stack Engineer · Making web3 less terrible
            </p>
          </div>

          <p className="text-text/90 leading-relaxed">
            Full stack engineer with 6+ years figuring out how to make
            blockchain tech actually usable. Currently at Polygon working on
            infrastructure that might (hopefully) bring millions to Web3.
          </p>
          <p className="text-text/90 leading-relaxed">
            Previously helped scale DeFi analytics across 16+ chains at Cielo,
            built governance tools at Aragon, and co-founded a B2C startup that
            taught me failure is just expensive education.
          </p>
          <p className="text-text/90 leading-relaxed">
            Currently obsessing over making web3 usable for all.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-xs bg-background/60 text-green px-2 py-1 rounded-md border border-border">
              6+ Years Experience
            </span>
            <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
              Senior Engineer
            </span>
            <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
              DeFi Expert
            </span>
            <span className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded-md border border-border">
              Full Stack
            </span>
          </div>
        </div>
      </header>

      <CvSection title="Work Experience" icon="💼">
        <div className="space-y-4">
          {jobsData.map((job) => (
            <Job key={job.company} jobDetails={job} />
          ))}
        </div>
      </CvSection>

      <CvSection title="Tooling & Stack" icon="🛠️">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface/30 border border-border">
            <h3 className="font-semibold text-green mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Tailwind', 'TanStack'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-surface/30 border border-border">
            <h3 className="font-semibold text-green mb-2">Web3</h3>
            <div className="flex flex-wrap gap-2">
              {['Viem', 'Wagmi', 'Solidity', 'Foundry'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-surface/30 border border-border">
            <h3 className="font-semibold text-green mb-2">Backend/Data</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Node.js',
                'GraphQL',
                'REST',
                'Firebase',
                'Rust (Learning)',
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-surface/30 border border-border">
            <h3 className="font-semibold text-green mb-2">Infrastructure</h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'CI/CD', 'GitHub Actions'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-background/60 text-textSecondary px-2 py-1 rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CvSection>

      <div className="pt-6 border-t border-border flex justify-center">
        <a
          download
          href="/cv.pdf"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm hover:bg-surface hover:border-textSecondary/30 transition-all group"
        >
          <LuDownload className="text-lg group-hover:text-green transition-colors" />
          Download Full CV
        </a>
      </div>
    </div>
  );
}
