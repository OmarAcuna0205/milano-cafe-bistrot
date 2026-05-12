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

            <div className="absolute inset-0 bg-linear-to-b from-espresso/50 via-espresso/25 to-espresso/50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">

                <motion.h1 className="text-7xl md:text-9xl uppercase text-foreground font-bold tracking-wider mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.25 }}>
                    <img src="/images/logo.png" alt="Logo" className="h-35 md:h-50 mr-7.5 w-auto" />
                </motion.h1>

                <div className="h-1 w-24 md:w-32 bg-gold mb-10" />

                <motion.a href="#menu" className="bg-gold text-espresso border-2 border-gold  text-xl uppercase px-8 py-2 hover:-translate-y-1 transition-all duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.75 }}>
                    {t.cta}
                </motion.a>

            </div>

        </section>
    );
}