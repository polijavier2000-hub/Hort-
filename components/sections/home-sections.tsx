'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Droplets,
  Package,
  Shield,
  Sparkles,
  Sprout,
  Smartphone,
} from "lucide-react";
import { useRef, useState } from "react";
import { ButtonLink } from "../ui/button";
import { Translations } from "@/lib/i18n";

type SectionProps = { t: Translations };

function ImageWithFallback({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  sizes,
  placeholderText,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  placeholderText?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative h-full w-full">
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          sizes={sizes}
          className={className}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/40 via-white to-secondary/40 text-center text-sm font-semibold text-ink">
          {placeholderText ?? "Añade la imagen en /public/assets"}
        </div>
      )}
    </div>
  );
}

export function HeroSection({ t }: SectionProps) {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-gradient-to-br from-primary/25 via-white to-secondary/30 pb-16 pt-10 sm:pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),transparent_50%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-ink shadow-sm">
            {t.hero.badge}
          </div>
          <div className="space-y-3">
            <p className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t.hero.title}
            </p>
            <p className="text-2xl font-semibold text-ink sm:text-3xl">
              {t.hero.claim}
            </p>
            <p className="max-w-xl text-base text-muted sm:text-lg">
              {t.hero.subtext}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#producto">{t.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#modelos" variant="secondary">
              {t.hero.secondaryCta}
            </ButtonLink>
          </div>
            <div className="flex items-center gap-4 text-xs text-muted">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{t.hero.tagline}</span>
            </div>
          </div>
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-105 rounded-[32px] bg-gradient-to-br from-primary/40 via-white to-secondary/50 blur-3xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            <ImageWithFallback
              src="/assets/product-10.jpg"
              alt="Hort! 10"
              width={960}
              height={720}
              className="h-full w-full object-cover"
              priority
              placeholderText="Añade /public/assets/product-10.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection({ t }: SectionProps) {
  return (
    <section id="problema" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-3xl bg-white/80 px-6 py-10 shadow-[0_18px_40px_rgba(0,0,0,0.07)] sm:grid-cols-3 sm:px-10">
        <div className="sm:col-span-1">
          <h2 className="text-2xl font-semibold text-ink">{t.problem.title}</h2>
        </div>
        <div className="sm:col-span-2 space-y-3">
          {t.problem.bullets.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl bg-surface px-4 py-3 text-ink"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <p className="text-base text-ink/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionSection({ t }: SectionProps) {
  return (
    <section
      id="producto"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 rounded-3xl bg-white/90 px-6 py-10 shadow-[0_20px_40px_rgba(0,0,0,0.06)] lg:grid-cols-3 lg:px-10">
        <div className="space-y-4 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t.solution.label}
          </p>
          <h2 className="text-3xl font-semibold text-ink">{t.solution.title}</h2>
          <p className="text-base text-muted">{t.solution.text}</p>
          <div className="rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-3 text-sm font-semibold text-ink">
            {t.solution.highlight}
          </div>
        </div>
        <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
          {t.solution.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-white px-4 py-4 shadow-sm"
            >
              <Sparkles className="mt-1 h-5 w-5 text-primary" aria-hidden />
              <p className="text-ink/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowSection({ t }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      ref={ref}
    >
      <div className="flex items-center justify-between gap-4 pb-6">
        <h2 className="text-3xl font-semibold text-ink">{t.how.title}</h2>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent md:block" />
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {t.how.steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex h-full flex-col gap-3 rounded-3xl border border-ink/5 bg-white px-4 py-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/20 text-ink font-semibold">
                {index + 1}
              </div>
              <ArrowUpRight className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function TechSection({ t }: SectionProps) {
  return (
    <section
      id="tecnologia"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-[32px] border border-white/60 bg-gradient-to-br from-secondary/25 via-white to-primary/20 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              {t.tech.subtitle}
            </p>
            <h2 className="text-3xl font-semibold text-ink">{t.tech.title}</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.tech.cards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-full flex-col gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                    {card.title.includes("Sens") && <Droplets className="h-5 w-5" />}
                    {card.title.includes("Autom") && <Shield className="h-5 w-5" />}
                    {card.title.includes("IA") && <Smartphone className="h-5 w-5" />}
                  </div>
                  <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="text-sm text-muted">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-ink/10 via-white to-secondary/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-2xl bg-primary/30" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Hort! app</p>
                    <p className="text-xs text-muted">{t.tech.appCopy}</p>
                  </div>
                </div>
                <span className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-semibold text-ink">
                  Live
                </span>
              </div>
              <div className="space-y-3 px-5 pb-5">
                {t.tech.status.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3 text-sm font-semibold text-ink"
                  >
                    <span>{row.label}</span>
                    <span className="text-ink/70">{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-b-[24px] bg-gradient-to-r from-primary/20 to-secondary/30 px-5 py-4">
                <p className="text-sm font-semibold text-ink">
                  {t.tech.bottomNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ModelsSection({ t }: SectionProps) {
  return (
    <section
      id="modelos"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-ink">{t.models.title}</h2>
          <p className="text-muted">{t.models.subtitle}</p>
        </div>
        <ButtonLink href="#packaging" variant="secondary">
          {t.nav.discover}
        </ButtonLink>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {t.models.cards.map((card) => (
          <div
            key={card.name}
            className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/30">
              <ImageWithFallback
                src={card.image}
                alt={card.name}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
                placeholderText={`Añade ${card.image}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
            </div>
            <div className="space-y-3 px-6 py-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {card.plants}
                  </p>
                  <h3 className="text-2xl font-semibold text-ink">{card.name}</h3>
                </div>
                <span className="rounded-full bg-ink text-white px-4 py-2 text-sm font-semibold shadow-sm">
                  {card.price}
                </span>
              </div>
              <p className="text-sm text-muted">
                {t.models.priceLabel}: {card.price}
              </p>
              <ButtonLink href="#producto" variant="secondary" className="w-full">
                {card.cta}
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SustainabilitySection({ t }: SectionProps) {
  return (
    <section
      id="sostenibilidad"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-[0_16px_44px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-semibold text-ink">{t.sustainability.title}</h2>
          <Package className="h-8 w-8 text-primary" aria-hidden />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {t.sustainability.bullets.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-surface px-4 py-3 text-ink/90"
            >
              <Shield className="mt-1 h-5 w-5 text-primary" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EcosystemSection({ t }: SectionProps) {
  return (
    <section
      id="ecosistema"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-semibold text-ink">{t.ecosystem.title}</h2>
        <p className="text-muted">{t.ecosystem.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {t.ecosystem.items.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col gap-3 rounded-3xl border border-ink/5 bg-white/90 px-4 py-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Sprout className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
            <p className="text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function MaintenanceSection({ t }: SectionProps) {
  const maint = t.maintenance;
  return (
    <section
      id="manteniment"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-ink">{maint.title}</h2>
          <p className="text-muted">{maint.subtitle}</p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex h-full flex-col gap-4 rounded-3xl border border-ink/5 bg-white/90 p-0 shadow-sm">
          <div className="relative h-44 overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary/25 via-white to-secondary/30">
            <ImageWithFallback
              src={maint.cards.replacements.image}
              alt={maint.cards.replacements.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
              placeholderText={maint.cards.replacements.placeholder}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col gap-3 px-6 pb-6">
            <div className="flex items-center justify-between gap-3">
              <div className="rounded-2xl bg-primary/20 px-3 py-1 text-xs font-semibold text-ink">
                {maint.cards.replacements.title}
              </div>
              <Sparkles className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <p className="text-sm text-ink/90">{maint.cards.replacements.description}</p>
            <ButtonLink href="#contacto" variant="secondary" className="w-full">
              {maint.cards.replacements.cta}
            </ButtonLink>
          </div>
        </div>

        <div className="flex h-full flex-col gap-4 rounded-3xl border border-ink/5 bg-white/90 p-0 shadow-sm">
          <div className="relative h-44 overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary/25 via-white to-secondary/30">
            <ImageWithFallback
              src={maint.cards.cleaning.image}
              alt={maint.cards.cleaning.title}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
              placeholderText={maint.cards.cleaning.placeholder}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </div>
          <div className="flex flex-1 flex-col gap-3 px-6 pb-6">
            <h3 className="text-lg font-semibold text-ink">
              {maint.cards.cleaning.title}
            </h3>
            <p className="text-sm text-ink/90">{maint.cards.cleaning.description}</p>
            <ButtonLink href="#contacto" variant="secondary" className="w-full">
              {maint.cards.cleaning.cta}
            </ButtonLink>
          </div>
        </div>

        <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/70 bg-gradient-to-br from-primary/20 via-white to-secondary/20 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.07)]">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {maint.cards.subscription.title}
              </p>
              <p className="text-3xl font-semibold text-ink">
                {maint.cards.subscription.price}
              </p>
              <p className="text-sm text-muted">{maint.cards.subscription.note}</p>
            </div>
            <Shield className="h-6 w-6 text-primary" aria-hidden />
          </div>
          <div className="space-y-3 text-sm text-ink/90">
            {maint.cards.subscription.bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-white/80 px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <ButtonLink href="#contacto" className="w-full">
              {maint.cards.subscription.ctaPrimary}
            </ButtonLink>
            <ButtonLink
              href="#contacto"
              variant="ghost"
              className="w-full text-ink"
            >
              {maint.cards.subscription.ctaSecondary}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DesignSection({ t }: SectionProps) {
  return (
    <section
      id="diseno"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
            {t.design.title}
          </p>
          <h2 className="text-3xl font-semibold text-ink">{t.design.subtitle}</h2>
          <p className="text-base text-muted">
            {t.design.note}
          </p>
          <div className="flex flex-wrap gap-2">
            {t.design.tags.map((tag, idx) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-2 text-sm font-semibold text-ink ${
                  idx === 0
                    ? "bg-primary/20"
                    : idx === 1
                      ? "bg-secondary/20"
                      : "bg-white shadow-sm"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-gradient-to-br from-primary/25 via-white to-secondary/20 shadow-[0_18px_38px_rgba(0,0,0,0.08)]">
          <ImageWithFallback
            src="/assets/lifestyle-1.jpg"
            alt={t.design.imageAlt}
            width={900}
            height={700}
            className="h-full w-full object-cover"
            placeholderText="Añade /public/assets/lifestyle-1.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export function PackagingSection({ t }: SectionProps) {
  return (
    <section
      id="packaging"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 rounded-[28px] border border-white/70 bg-gradient-to-br from-secondary/20 via-white to-primary/20 p-8 shadow-[0_20px_44px_rgba(0,0,0,0.07)] lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t.packaging.title}
          </p>
          <h2 className="text-3xl font-semibold text-ink">{t.packaging.subtitle}</h2>
          <div className="space-y-3">
            {t.packaging.bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-white/90 px-4 py-3 text-ink shadow-sm"
              >
                <Package className="mt-1 h-5 w-5 text-primary" />
                <p className="text-ink/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[24px] border border-white/70 bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
          <ImageWithFallback
            src="/assets/packaging.jpg"
            alt={t.packaging.imageAlt}
            width={900}
            height={700}
            className="h-full w-full object-cover"
            placeholderText="Añade /public/assets/packaging.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function RoadmapSection({ t }: SectionProps) {
  return (
    <section
      id="roadmap"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-3 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">{t.roadmap.title}</h2>
            <p className="text-muted">{t.roadmap.subtitle}</p>
          </div>
          <Sparkles className="h-8 w-8 text-primary" aria-hidden />
        </div>
        <div className="space-y-4">
          {t.roadmap.items.map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-ink/5 bg-surface px-4 py-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/20 text-sm font-semibold text-ink">
                {idx + 1}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection({ t }: SectionProps) {
  return (
    <section
      id="contacto"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid gap-8 rounded-[28px] border border-white/70 bg-gradient-to-br from-primary/20 via-white to-secondary/30 p-8 shadow-[0_22px_48px_rgba(0,0,0,0.08)] lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {t.finalCta.badge}
          </p>
          <h2 className="text-3xl font-semibold text-ink">{t.finalCta.title}</h2>
          <p className="text-base text-muted">{t.finalCta.subtitle}</p>
          <ButtonLink href="#producto">{t.finalCta.primaryCta}</ButtonLink>
        </div>
        <LeadForm t={t} />
      </div>
    </section>
  );
}

function LeadForm({ t }: SectionProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    if (!name || !email) {
      alert(t.finalCta.form.error);
      return;
    }
    console.log("Lead form", { name, email });
    alert(t.finalCta.form.success);
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white/90 p-6 shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
      aria-label="Formulario de solicitud d'informació"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          {t.finalCta.form.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-2xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink outline-none ring-primary/40 focus:ring"
          placeholder={t.finalCta.form.placeholderName}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-ink">
          {t.finalCta.form.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-2xl border border-ink/10 bg-surface px-4 py-3 text-sm text-ink outline-none ring-primary/40 focus:ring"
          placeholder={t.finalCta.form.placeholderEmail}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition hover:translate-y-[-1px]"
      >
        {t.finalCta.form.submit}
      </button>
    </form>
  );
}
