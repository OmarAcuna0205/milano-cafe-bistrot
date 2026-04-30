"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { AnimatePresence } from "motion/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { dictionaries } from "@/locales/dictionaries";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
    const navLinks = dictionaries[language].nav;

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (

        <nav className={`fixed flex items-center justify-between w-full px-8 py-4 z-50 duration-300 transition-colors ${isScrolled ? "bg-espresso/95" : "bg-transparent"}`} >

            <a href="#inicio" className="text-gold font-display text-5xl md:text-foreground tracking-wider leading-none md:hover:text-gold duration-300 transition-colors" >
                Milano
            </a>

            <ul className="hidden md:flex items-center gap-8" >
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="relative uppercase text-foreground hover:text-gold duration-300 transition-colors group" >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                ))}

                <li className="hidden md:flex items-center gap-2">

                    <button onClick={() => setLanguage("ES")} className={`relative uppercase transition-colors duration-300 ${language === "ES" ? "text-gold" : "text-foreground hover:text-gold"}`}
                    >ES
                        {language === "ES" && (
                            <motion.span layoutId="active-lang" className="absolute -bottom-0.5 left-0 w-full h-px bg-gold"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                        )}</button>

                    <span className="text-foreground text-lg">/</span>

                    <button onClick={() => setLanguage("EN")} className={`relative uppercase transition-colors duration-300 ${language === "EN" ? "text-gold" : "text-foreground hover:text-gold"}`}
                    >EN
                        {language === "EN" && (
                            <motion.span layoutId="active-lang" className="absolute -bottom-0.5 left-0 w-full h-px bg-gold"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                        )}</button>

                </li>

            </ul>

            <div className="md:hidden flex items-center gap-4">

                <div className="flex items-center justify-center">
                    <button onClick={() => setLanguage("ES")} className={`relative text-lg uppercase transition-colors duration-300 ${language === "ES" ? "text-gold" : "text-foreground"}`}
                    >ES</button>

                    <span className="text-cream/30 text-2xl">/</span>

                    <button onClick={() => setLanguage("EN")} className={`relative text-lg uppercase transition-colors duration-300 ${language === "EN" ? "text-gold" : "text-foreground"}`}
                    >EN</button>

                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <ListIcon size={32} className="text-gold duration-300 transition-colors" />
                </button>

            </div>

            <AnimatePresence>
                {isOpen && (

                    <motion.div className="fixed inset-0 z-50 bg-background flex flex-col px-8 py-10"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>

                        <button onClick={() => setIsOpen(false)} className="self-end text-cream font-bold">
                            <XIcon size={32} />
                        </button>

                        <ul className="flex flex-col mt-8">
                            {navLinks.map((link, index) => (

                                <motion.li key={link.label} className="border-b border-cream py-8 flex justify-start items-center"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: (index + 1) * 0.15, ease: "easeOut" }}>

                                    <a href={link.href} className="font-display text-cream text-5xl" onClick={() => setIsOpen(false)}>
                                        {link.label}
                                    </a>

                                </motion.li>
                            ))}

                        </ul>

                    </motion.div>

                )}

            </AnimatePresence>

        </nav>
    )
}