import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import enTranslations from "@/i18n/en";
import esTranslations from "@/i18n/es";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const allTranslations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  es: esTranslations,
};

const fallbackContext: LanguageContextType = {
  language: "en",
  setLanguage: () => undefined,
  t: (key: string) => allTranslations.en[key] || key,
};

const LanguageContext = createContext<LanguageContextType>(fallbackContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("lang");
      return saved === "es" ? "es" : "en";
    } catch {
      return "en";
    }
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);

    try {
      localStorage.setItem("lang", lang);
    } catch {
      // no-op when storage is unavailable
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return allTranslations[language][key] || allTranslations.en[key] || key;
    },
    [language]
  );

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
