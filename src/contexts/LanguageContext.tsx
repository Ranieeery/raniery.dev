"use client";

import { createContext, useContext, useState, useEffect } from "react";
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

        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) return storedLanguage;

        const cookies = document.cookie.split(";");
        const localeCookie = cookies.find((c) =>
            c.trim().startsWith("NEXT_LOCALE=")
        );

        if (localeCookie) {
            return localeCookie.split("=")[1];
        }

        return navigator.language.startsWith("pt") ? "pt-BR" : "en";
    });

    const router = useRouter();

    const handleSetLanguage = (newLang: string) => {
        setLanguage(newLang);
        localStorage.setItem("language", newLang);
        document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${60 * 60 * 24 * 365}`;

        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(/^\/(en|pt-BR)/, `/${newLang}`);
        router.push(newPath);
    };

    useEffect(() => {
        localStorage.setItem("language", language);
        document.cookie = `NEXT_LOCALE=${language};path=/;max-age=${60 * 60 * 24 * 365}`;
    }, [language]);

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
