"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState(() => {
        if (typeof window === "undefined") return "en";

        const pathMatch = window.location.pathname.match(/^\/(en|pt-BR)(\/|$)/);
        if (pathMatch) return pathMatch[1];

        return "en";
    });

    const router = useRouter();

    const handleSetLanguage = (newLang: string) => {
        setLanguage(newLang);
        document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${60 * 60 * 24 * 365}`;

        const currentPath = window.location.pathname;
        const pathWithoutLocale = currentPath.replace(
            /^\/(en|pt-BR)(?=\/|$)/,
            ""
        );
        const newPath = `/${newLang}${pathWithoutLocale}`;
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
