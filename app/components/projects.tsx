import { projectsData } from 'app/data/projects';
import React from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  url: string;
  isLast?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  url,
  isLast,
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="p-5 rounded-lg border border-border bg-surface/50 hover:bg-surface hover:border-textSecondary/30 transition-all duration-200">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-2">
          <h4 className="text-lg font-medium text-text group-hover:text-purple transition-colors">
            {title}
          </h4>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-background/60 text-textSecondary px-2 py-0.5 rounded-md border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-textSecondary leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
};

export const ProjectsPage: React.FC = () => {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <h3 className="text-green font-semibold tracking-tight text-xl">
          Tinkering
        </h3>
        <p className="text-base text-textSecondary mt-2 leading-loose">
          Building random stuff is basically my professional version of going to
          the gym - except instead of getting stronger, I get better at googling
          error messages. I throw together quick prototypes to test ideas,
          explore tools, or scratch some itch I didn't know I had. Some turn
          into something useful, others end up going nowhere. Either way, beats
          getting rusty.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            url={project.url}
            isLast={index === projectsData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
