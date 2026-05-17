"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

type LanguageProviderProps = {
  children: React.ReactNode;
  initialLanguage: string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState(initialLanguage);

  const router = useRouter();

  const handleSetLanguage = (newLang: string) => {
    if (newLang === language) {
      return;
    }

    setLanguage(newLang);
    document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${60 * 60 * 24 * 365}`;
    localStorage.setItem("language", newLang);

    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|pt-BR)(?=\/|$)/, "");
    const newPath = `/${newLang}${pathWithoutLocale}`;

    if (currentPath === newPath) {
      return;
    }

    router.push(newPath);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
