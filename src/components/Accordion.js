// src/components/Accordion.js
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
            <button
                className={styles.header}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h4 className={styles.title}>{title}</h4>
                <ChevronDown
                    className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
                    size={20}
                />
            </button>
            <div
                className={styles.contentWrapper}
                style={{ height: isOpen ? 'auto' : 0 }}
            >
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}
