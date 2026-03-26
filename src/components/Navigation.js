// src/components/Navigation.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Briefcase, FileText, HeartPulse, Building2, CreditCard, ChevronRight, Phone, Layers } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Inicio (Hub)', href: '/', icon: Home },
        { name: 'Nosotros', href: '/nosotros', icon: Building2 },
        { name: 'Todos los Servicios', href: '/servicios', icon: Layers },
    ];

    return (
        <>
            <button
                className={`${styles.menuBtn} ${isOpen ? styles.hidden : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Alternar Menú"
            >
                <span className={styles.menuText}>Menú</span>
                <div className={styles.iconCircle}>
                    <Menu size={24} color="var(--color-bg-card)" />
                </div>
            </button>

            <div
                className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
                onClick={() => setIsOpen(false)}
            />

            <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.brand}>
                        <img
                            src="https://raw.githubusercontent.com/casodiyte/imagenes/refs/heads/main/Picsart_26-03-07_12-57-34-298%20(1).png"
                            alt="C&C Consultores Logo"
                            className={styles.logoImage}
                        />
                    </div>
                    <button
                        className={styles.closeBtn}
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar Menú"
                    >
                        <X size={28} />
                    </button>
                </div>

                <nav className={styles.navContent}>
                    <p className={styles.navLabel}>Navegación Principal</p>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href) && !link.href.includes('#'));

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                                        onClick={(e) => {
                                            if (link.href.includes('#')) {
                                                setIsOpen(false);
                                            }
                                        }}
                                    >
                                        <Icon size={20} className={styles.linkIcon} />
                                        <span>{link.name}</span>
                                        {isActive && <ChevronRight size={16} className={styles.activeIcon} />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className={styles.sidebarFooter}>
                    <a href="https://wa.me/525543157421" target="_blank" rel="noopener noreferrer" className={styles.contactBtn} onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
                        Contactar Asesor
                    </a>
                    <p className={styles.footerText}>Atención personalizada y segura.</p>
                </div>
            </aside>
        </>
    );
}
