"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

export type Lang = "ar" | "en";

export const DEFAULT_LANG: Lang = "ar";
const STORAGE_KEY = "energize-lang";

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isAr: boolean;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Pick a value by current language. */
  t: (ar: string, en: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocumentLang(lang: Lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Read persisted choice on mount (client only).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "ar" || stored === "en") {
        setLangState(stored);
        applyDocumentLang(stored);
        return;
      }
    } catch {
      /* ignore */
    }
    applyDocumentLang(DEFAULT_LANG);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    applyDocumentLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const t = useCallback((ar: string, en: string) => (lang === "ar" ? ar : en), [lang]);

  const value: LanguageContextValue = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    isAr: lang === "ar",
    setLang,
    toggle,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so non-wrapped usage never crashes.
    return {
      lang: DEFAULT_LANG,
      dir: "rtl",
      isAr: true,
      setLang: () => {},
      toggle: () => {},
      t: (ar) => ar,
    };
  }
  return ctx;
}
