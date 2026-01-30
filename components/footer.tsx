'use client';

import { useI18n } from "./language-provider";
import Image from "next/image";
import Link from "next/link";

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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 justify-start sm:justify-start">
          <Link href="/" aria-label="Hort!" className="flex items-center gap-2">
            <Image
              src="/assets/logo-hort.png"
              alt="Hort!"
              width={96}
              height={28}
              className="h-7 w-auto object-contain opacity-90 transition hover:opacity-100"
            />
          </Link>
          <p className="text-sm font-semibold text-ink/80">{t.footer.follow}</p>
        </div>
        <div className="flex items-center gap-4 text-ink/80 sm:justify-start justify-center">
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/hooort2026?igsh=MTZodGRwcHBwbjVjMA"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="0.8" />
            </svg>
          </a>
          <a
            aria-label="TikTok"
            href="https://www.tiktok.com/@hort4192?_r=1&_t=ZN-93Jcg2iZ8ru"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M16 4c.2 1.8 1.4 4 4 4" />
              <path d="M12 5v9a4 4 0 1 1-4-4" />
              <path d="M12 5a4 4 0 0 0 4 4" />
            </svg>
          </a>
          <a
            aria-label="X"
            href="https://x.com/hort_bcn"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-ink"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5"
            >
              <path d="M4 4l16 16" />
              <path d="M20 4L4 20" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
