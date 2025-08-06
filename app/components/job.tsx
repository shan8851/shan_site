export interface JobDetails {
  company: string;
  title: string;
  date: string;
  description: string[];
}

interface JobProps {
  jobDetails: JobDetails;
}

export const Job = ({ jobDetails }: JobProps) => {
  const { company, title, date, description } = jobDetails;

  return (
    <div className="p-5 rounded-lg border border-border bg-surface/30 hover:bg-surface/50 transition-colors space-y-3">
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h4 className="text-lg font-semibold text-purple">{company}</h4>
          <p className="text-base text-text mt-1">{title}</p>
        </div>
        <span className="text-sm text-textSecondary bg-background/60 px-3 py-1 rounded-full border border-border">
          {date}
        </span>
      </div>
      <ul className="space-y-2 text-textSecondary text-sm">
        {description.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green mr-2 mt-1">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
