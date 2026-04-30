"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ES" | "EN";

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("ES"); // Español por defecto

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage debe ser usado dentro de un LanguageProvider");
    }
    return context;
};