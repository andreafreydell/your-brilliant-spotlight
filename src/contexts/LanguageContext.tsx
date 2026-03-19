import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Lazy-load translations
let translations: Record<Language, Record<string, string>> = { en: {}, es: {} };
let loaded = false;

async function loadTranslations() {
  const [en, es] = await Promise.all([
    import("@/i18n/en").then((m) => m.default),
    import("@/i18n/es").then((m) => m.default),
  ]);
  translations = { en, es };
  loaded = true;
}

// Eagerly start loading
const loadPromise = loadTranslations();

import enTranslations from "@/i18n/en";
import esTranslations from "@/i18n/es";

const allTranslations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "es" ? "es" : "en") as Language;
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return allTranslations[language][key] || allTranslations.en[key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
