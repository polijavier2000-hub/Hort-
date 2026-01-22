"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Sparkles, ShieldCheck, Waves, SunMedium } from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Modelos | Hort!",
  description:
    "Hort! 6 y Hort! 10: huertos urbanos automáticos con IA, pensados para funcionar solos.",
};

const models = [
  {
    id: "hort-6",
    name: "Hort! 6",
    subtitle: "Para espacios pequeños. Cero esfuerzo.",
    image: "/assets/model-6.jpg",
    placeholderText: "Añade /public/assets/model-6.jpg",
    price: "499 €",
    features: [
      "Capacidad: 6 plantas con cápsulas modulares.",
      "Plástico técnico premium mate + acero tratado anticorrosión.",
      "Depósito sellado hidropónico en circuito cerrado.",
      "Riego inteligente y silencioso (baja vibración, control por pulsos).",
      "Luz LED automática por tipo de planta y ciclo día/noche.",
      "Mantenimiento invisible: pensado para olvidarte de él.",
      "App con estado, avisos y recomendaciones claras.",
      "Protección frente a sobre-riego y microcortes (modo seguro).",
      "Sonido ultrasilencioso para uso en casa.",
    ],
  },
  {
    id: "hort-10",
    name: "Hort! 10",
    subtitle: "Más cultivo. Misma tranquilidad.",
    image: "/assets/model-10.jpg",
    placeholderText: "Añade /public/assets/model-10.jpg",
    price: "749 €",
    features: [
      "Capacidad: 10 plantas para producción ampliada.",
      "Mismo enfoque premium: plástico técnico + acero tratado.",
      "Base reforzada para mayor estabilidad en casa.",
      "Depósito ampliado con gestión eficiente del agua.",
      "Iluminación LED por zonas para uniformidad.",
      "Riego inteligente y silencioso como en Hort! 6 o mejor.",
      "App con avisos y recomendaciones centradas en más producción.",
      "Sistema optimizado para rendimiento y consistencia.",
    ],
  },
];

const brainHighlights = [
  "IA propia que monitoriza humedad, luz, temperatura y nutrientes estimados en tiempo real.",
  "Ajusta riego, luz y ciclos sin configuraciones del usuario.",
  "Detecta estrés hídrico, exceso de luz o desbalance y corrige antes de que lo notes.",
  "Recomendaciones en app solo cuando hace falta: todo lo demás es invisible.",
  "Aprende de tu entorno doméstico para afinar cada cultivo.",
  "Filosofía: tú no cuidas plantas; Hort! lo hace por ti.",
];

export default function ModelosPage() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="min-h-screen bg-surface pb-16 pt-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-ink shadow-sm">
            Modelos · Hort!
            <Sparkles className="h-4 w-4 text-primary" aria-hidden />
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Dos formas de cultivar sin esfuerzo.
          </h1>
          <p className="max-w-3xl text-lg text-muted">
            Hort! 6 y Hort! 10 comparten la misma tecnología invisible: sensores,
            automatización y app con IA que se anticipa. Tú solo eliges dónde
            colocarlos.
          </p>
        </header>

        <section className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-10">
          <div className="flex flex-wrap items-start gap-4 pb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/25 text-primary">
              <Brain className="h-6 w-6" aria-hidden />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                El cerebro de Hort! (IA)
              </p>
              <h2 className="text-3xl font-semibold text-ink">
                Automatiza, previene y aprende de tu casa.
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {brainHighlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-surface px-4 py-3 text-ink/90"
              >
                <ShieldCheck className="mt-1 h-5 w-5 text-primary" aria-hidden />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          {models.map((model, index) => (
            <motion.article
              key={model.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex h-full flex-col rounded-3xl border border-white/70 bg-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              style={{ order: index === 0 ? 0 : 0 }}
            >
              <div className="relative h-80 overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary/30 via-white to-secondary/30">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority={index === 0}
                  onError={() =>
                    setImageErrors((prev) => ({ ...prev, [model.id]: true }))
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
                <div className="absolute inset-0 flex items-end justify-between p-6">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {model.subtitle}
                    </p>
                    <h3 className="text-3xl font-semibold text-white drop-shadow">
                      {model.name}
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-white/85 px-4 py-2 text-sm font-semibold text-ink shadow-sm">
                    {model.price}
                  </div>
                </div>
                {imageErrors[model.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-3xl border border-dashed border-white/50 bg-gradient-to-r from-primary/30 to-secondary/30 px-4 py-2 text-xs font-semibold uppercase text-white/80 backdrop-blur">
                      {model.placeholderText}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-wrap gap-3 text-sm font-semibold text-muted">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-2 text-ink">
                    <Waves className="h-4 w-4 text-primary" aria-hidden />
                    Hidropónico
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-3 py-2 text-ink">
                    <SunMedium className="h-4 w-4 text-secondary" aria-hidden />
                    Luz auto
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-ink shadow-sm">
                    IA activa
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-ink/90">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-surface px-4 py-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <div className="text-3xl font-semibold text-ink">{model.price}</div>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(155,207,155,0.35)] transition hover:translate-y-[-1px]"
                  >
                    Descubrir
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
}
