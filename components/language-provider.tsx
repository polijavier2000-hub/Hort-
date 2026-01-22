'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionary, Language, Translations } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const DEFAULT_LANG: Language = "es";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem("hort-lang") as Language | null;
    if (stored === "ca" || stored === "es") {
      // Local-only sync after mount avoids SSR/client mismatch.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("hort-lang", next);
    }
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: dictionary[lang],
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className="min-h-screen bg-surface text-ink">{children}</div>
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return ctx;
}
