"use client";

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './styles.module.css';
import Legend from './Legend';

const LegendBox: React.FC = () => {
    const t = useTranslations('projects.mosaic');
    return (
        <section id="legend" className={styles.legend}>
            <div className={styles.internalScroller}>
                <h1>{t('title')}</h1>
                <p>{t('slug')}</p>
                <p><Link href="/projects/mosaic/about">{t('aboutLink')}</Link></p>
                <Legend />
            </div>
        </section>
    );
};

export default LegendBox;