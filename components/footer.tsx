'use client';

import { useI18n } from "./language-provider";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-20 border-t border-white/50 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-ink">Hort!</p>
          <p className="text-sm text-muted">{t.footer.brand}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-ink/80">
          {t.footer.links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
