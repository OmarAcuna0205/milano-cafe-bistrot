"use client";

import { useState, useEffect } from "react";
import { ListIcon } from "@phosphor-icons/react";


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

        <nav className={`fixed flex items-center justify-between w-full px-10 py-5 z-50 duration-300 transition-colors ${isScrolled ? "bg-espresso/90 backdrop-blur-md" : "bg-transparent"}`} >

            <a href="#inicio" className="font-display text-5xl text-foreground tracking-wider mt-1 hover:text-gold duration-300 transition-colors" >
                Milano
            </a>

            <ul className="hidden md:flex items-center gap-8" >
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} className="relative text-md uppercase text-foreground hover:text-gold duration-300 transition-colors group" >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                        </a>
                    </li>
                ))}
            </ul>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <ListIcon size={32} className="text-foreground hover:text-gold duration-300 transition-colors" />
            </button>

        </nav>
    )
}