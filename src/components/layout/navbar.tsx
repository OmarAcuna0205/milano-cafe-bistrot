"use client";

import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence } from "motion/react";

const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
    { label: "Novedades", href: "#novedades" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (

        <nav className={`fixed flex items-center justify-between w-full px-8 py-4 z-50 duration-300 transition-colors ${isScrolled ? "bg-espresso/95" : "bg-transparent"}`} >

            <a href="#inicio" className="text-gold font-display text-5xl md:text-foreground tracking-wider mt-1.5 md:hover:text-gold duration-300 transition-colors" >
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
            </ul>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <ListIcon size={32} className="text-gold duration-300 transition-colors" />
            </button>


            <AnimatePresence>
                {isOpen && (

                    <motion.div className="fixed inset-0 z-50 bg-background flex flex-col px-8 py-10"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}>

                        <button className="self-end text-cream font-bold">
                            <XIcon size={32} onClick={() => setIsOpen(false)} />
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

                        <p className="text-cream text-xs mt-auto">Chihuahua, Chihuahua MX</p>

                    </motion.div>


                )}

            </AnimatePresence>

        </nav>
    )
}