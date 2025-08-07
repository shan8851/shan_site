import Link from 'next/link';

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="px-4 sm:px-6 md:px-8 w-full max-w-3xl mx-auto">
        <nav className="flex items-center justify-end gap-5 text-md font-medium text-text py-4">
          <NavLink href="/">home</NavLink>
          <NavLink href="/now">/now</NavLink>
          <NavLink href="/cv">cv</NavLink>
          <NavLink href="/writing">writing</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="hover:text-green  transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
