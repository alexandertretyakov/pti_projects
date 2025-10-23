import React, { useState, Suspense, lazy } from 'react';

import Loader from './Loader';
import { useTranslations } from '../helpers';

import style from '../index.module.scss';

const Bear = lazy(() => import('./Bear'));
const Fox = lazy(() => import('./Fox'));
const Hedgehog = lazy(() => import('./Hedgehog'));
const Camel = lazy(() => import('./Camel'));

const App = () => {
    const t = useTranslations();
    const [isBearOpen, setIsBearOpen] = useState(false);
    const [isFoxOpen, setIsFoxOpen] = useState(false);
    const [isHedgehogOpen, setIsHedgehogOpen] = useState(false);
    const [isCamelOpen, setIsCamelOpen] = useState(false);

    return (
        <div className={style.page}>
            <div className={style.buttons}>
                <button className={style.btn} onClick={() => setIsBearOpen(true)}>{t('Bear')}</button>
                <button className={style.btn} onClick={() => setIsFoxOpen(true)}>{t('Fox')}</button>
                <button className={style.btn} onClick={() => setIsHedgehogOpen(true)}>{t('Hedgehog')}</button>
                <button className={style.btn} onClick={() => setIsCamelOpen(true)}>{t('Camel')}</button>
            </div>

            <div className={style.content}>
                <div className={style.container}>
                    { isBearOpen && <Suspense fallback={<Loader />}><Bear /></Suspense> }
                </div>
                <div className={style.container}>
                    { isFoxOpen && <Suspense fallback={<Loader />}><Fox /></Suspense> }
                </div>
                <div className={style.container}>
                    { isHedgehogOpen && <Suspense fallback={<Loader />}><Hedgehog /></Suspense> }
                </div>
                <div className={style.container}>
                    { isCamelOpen && <Suspense fallback={<Loader />}><Camel /></Suspense> }
                </div>
            </div>
        </div>
  );
};

export default App;
