"use client";
import React, { useEffect, useState } from 'react';
import Canvas from './Canvas';
import LegendBox from './LegendBox';
import styles from './index.module.css';
import { Mosaic2StateProvider } from './context';

const Mosaic: React.FC = () => {
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => setHasWindow(true), []);
    return (
        <>
            <Mosaic2StateProvider>
                <section className={styles.canvasWrap}>
                    <Canvas />
                    {hasWindow && (
                        <LegendBox />
                    )}
                </section>
            </Mosaic2StateProvider>
        </>
    );
};

export default Mosaic;