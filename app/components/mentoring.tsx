import { EMAIL_URL, TWITTER_URL } from 'app/constants';

export const Mentoring: React.FC = () => (
  <section className="flex flex-col gap-6">
    <div>
      <h2 className="text-green text-xl font-semibold tracking-tight">
        Mentoring
      </h2>
      <p className="text-textSecondary text-base mt-2 max-w-prose leading-relaxed">
        Started mentoring friends who kept asking "how do I break into tech?"
        and somehow that turned into a whole thing. Over the past few years,
        I've helped people land their first roles, navigate the early years, and
        occasionally talk them out of quitting when imposter syndrome hits hard.
      </p>
    </div>

    <p className="text-base text-textSecondary leading-loose">
      I'm no longer active on platforms like Coding Coach or The Mentoring Club
      (turns out I prefer the organic, "let's grab coffee and figure this out"
      approach), but I'm always up for helping motivated people navigate this
      industry. If you're serious about levelling up and don't mind honest
      feedback mixed with questionable life advice, hit me up via{' '}
      <a
        className="text-green underline underline-offset-4 hover:text-purple transition-colors"
        href={EMAIL_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        email
      </a>{' '}
      or{' '}
      <a
        className="text-green underline underline-offset-4 hover:text-purple transition-colors"
        href={TWITTER_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        DM me on X
      </a>
      , and we can work something out.
    </p>
  </section>
);
