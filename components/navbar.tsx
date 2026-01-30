'use client';

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink, Button } from "./ui/button";
import { useI18n } from "./language-provider";
import Image from "next/image";
import Link from "next/link";

const navIds = {
  product: "#producto",
  tech: "#tecnologia",
  models: "#modelos",
  sustainability: "#sostenibilidad",
  maintenance: "#manteniment",
  packaging: "#packaging",
  contact: "#contacto",
};

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const links = [
    { href: navIds.product, label: t.nav.product },
    { href: navIds.tech, label: t.nav.tech },
    { href: navIds.models, label: t.nav.models },
    { href: navIds.sustainability, label: t.nav.sustainability },
    { href: navIds.maintenance, label: t.nav.maintenance },
    { href: navIds.packaging, label: t.nav.packaging },
    { href: navIds.contact, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-surface/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Hort!">
          <div className="relative h-7 w-24 sm:h-8 sm:w-28">
            <Image
              src="/assets/logo-hort.png"
              alt="Hort!"
              fill
              className="object-contain transition hover:opacity-90"
              sizes="120px"
              priority
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-ink/10 bg-white px-2 py-1">
            <Button
              aria-label="Canviar a català"
              variant={lang === "ca" ? "primary" : "ghost"}
              className="px-3 py-2 text-xs"
              onClick={() => setLang("ca")}
            >
              CA
            </Button>
            <Button
              aria-label="Cambiar a castellano"
              variant={lang === "es" ? "primary" : "ghost"}
              className="px-3 py-2 text-xs"
              onClick={() => setLang("es")}
            >
              ES
            </Button>
            <Button
              aria-label="Switch to English"
              variant={lang === "en" ? "primary" : "ghost"}
              className="px-3 py-2 text-xs"
              onClick={() => setLang("en")}
            >
              EN
            </Button>
          </div>
          <ButtonLink href={navIds.contact} variant="secondary">
            {t.nav.discover}
          </ButtonLink>
        </div>
        <button
          aria-label="Toggle navigation"
          className="rounded-full border border-ink/10 bg-white p-2 text-ink md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/40 bg-surface px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-semibold text-ink shadow-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <Button
                aria-label="Canviar a català"
                variant={lang === "ca" ? "primary" : "secondary"}
                className="flex-1"
                onClick={() => setLang("ca")}
              >
                CA
              </Button>
              <Button
                aria-label="Cambiar a castellano"
                variant={lang === "es" ? "primary" : "secondary"}
                className="flex-1"
                onClick={() => setLang("es")}
              >
                ES
              </Button>
              <Button
                aria-label="Switch to English"
                variant={lang === "en" ? "primary" : "secondary"}
                className="flex-1"
                onClick={() => setLang("en")}
              >
                EN
              </Button>
            </div>
            <ButtonLink href={navIds.contact}>{t.nav.discover}</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
