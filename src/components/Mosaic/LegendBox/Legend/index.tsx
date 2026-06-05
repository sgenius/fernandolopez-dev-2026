import React from 'react';
import styles from '../styles.module.css';
import { useTranslations } from 'next-intl';

const Legend: React.FC = () => {
    const t = useTranslations('projects.mosaic.legend');
    
    return (
        <details>
            <summary>
                {t('title')}
            </summary>
            <table className={styles.legendTable}>
                <tbody>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.water}`} />
                        </td>
                        <td>{t('river')}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.area} ${styles.water}`}>
                                <div />
                            </div>
                        </td>
                        <td>{t('bodyOfWater')}</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.levelCurve}`}>
                                <div>50</div>
                            </div>
                        </td>
                        <td>
                            {t('levelCurve')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.freeway}`} />
                        </td>
                        <td>
                            {t('freeway')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.mainRoad}`} />
                        </td>
                        <td>
                            {t('mainRoad')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.secondaryRoad}`} />
                        </td>
                        <td>
                            {t('secondaryRoad')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.otherRoad}`} />
                        </td>
                        <td>
                            {t('otherRoad')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.unpavedRoad}`} />
                        </td>
                        <td>
                            {t('unpavedRoad')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.rail}`}>
                                <div className={`${styles.verticalLineContainer} ${styles.railCrossContainer}`}>
                                    <div className={styles.railCross}/>
                                    <div className={styles.railCross}/>
                                    <div className={styles.railCross}/>
                                    <div className={styles.railCross}/>
                                </div>
                            </div>
                        </td>
                        <td>
                            {t('railroad')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.area} ${styles.park}`}>
                                Parque
                            </div>
                        </td>
                        <td>
                            {t('protectedArea')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.area} ${styles.airport}`}>
                                ABC
                            </div>
                        </td>
                        <td>
                            {t('airport')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.area} ${styles.urbanArea}`}></div>
                        </td>
                        <td>
                            {t('urbanArea')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.countryBorder}`}>
                                <div className={styles.countryBorderInternal} />
                            </div>
                        </td>
                        <td>
                            {t('countryBorder')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.stateBorder}`}>
                                <div className={styles.stateBorderInternal} />
                            </div>
                        </td>
                        <td>
                            {t('stateBorder')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.line} ${styles.municipalityBorder}`}></div>
                        </td>
                        <td>
                            {t('municipalityBorder')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.text} ${styles.stateCapital}`}>PINOTEPA</div>
                        </td>
                        <td>
                            {t('stateCapital')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.text} ${styles.municipalityCapital}`}>Puerto Marcos</div>
                        </td>
                        <td>
                            {t('municipalityCapital')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.text} ${styles.town}`}>Nuevo Inicio</div>
                        </td>
                        <td>
                            {t('otherTown')}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={`${styles.text} ${styles.municipalityName}`}>Andujano</div>
                        </td>
                        <td>
                            {t('municipalityName')}
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    );
};

export default Legend;