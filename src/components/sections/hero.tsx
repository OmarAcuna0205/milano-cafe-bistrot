"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dictionaries } from "@/locales/dictionaries";

export default function Hero() {

    const { language } = useLanguage();
    const t = dictionaries[language].hero;

    return (

        <section id="inicio" className="relative w-full h-screen overflow-x-hidden">

            <Image src="/images/hero.jpg" alt="Galeria vittorio emanuele II" fill priority className="object-cover object-center" />

            <div className="absolute inset-0 bg-linear-to-b from-espresso/60 via-espresso/30 to-espresso/60" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">

                <motion.h1 className="text-7xl md:text-9xl uppercase text-foreground font-extrabold tracking-wider mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}>
                    {t.title}
                </motion.h1>

                <motion.p className="text-4xl md:text-6xl uppercase text-foreground tracking-wide mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}>
                    {t.subtitle}
                </motion.p>

                <div className="h-1 w-24 md:w-32 bg-gold mb-10" />

                <motion.a href="#menu" className="bg-gold md:bg-transparent text-espresso md:text-gold border-2 border-gold  text-xl uppercase px-8 py-2 hover:bg-gold hover:text-espresso transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1 }}>
                    {t.cta}
                </motion.a>

            </div>

        </section>
    );
}