import { siteConfig, socials, navItems } from "../../data/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <a
            href="#home"
            className="font-display text-sm font-semibold text-foreground"
          >
            {siteConfig.name}
          </a>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            {siteConfig.role} - {siteConfig.footerTagline}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map(({ label, href, Icon, brand }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{ "--brand": brand } as React.CSSProperties}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface hover:text-(--brand)"
            >
              <Icon width={16} height={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
