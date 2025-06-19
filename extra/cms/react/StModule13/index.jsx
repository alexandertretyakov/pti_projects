import React, { useState, useEffect } from 'react';

import { useTranslations } from 'common/I18n';
import { useFormatter } from '/app-react/common/Formatter';

import style from './index.css';

const StModule13 = () => {
    const t = useTranslations();
    const f = useFormatter();
    const [debt, setDebt] = useState(19252128599192.75);
    const [isDebtRunning, setIsDebtRunning] = useState(true);

    useEffect(() => {
        if (isDebtRunning) {
            const intervalId = setInterval(() => {
                setDebt((state) => state + 2128599192.75);
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [isDebtRunning]);

    const onButtonClick = () => {
        setIsDebtRunning(false);
    };

    return (
        <div className={style.stModule13Replacer}>
            <div className={style.wrapper}>
                <h1>{t('playtech.mobile.system.stModule13.h1.externalDebt')}</h1>
                <div className={style.debt}>{f.currency(debt, 'USD', {symbolAtTheLeft: true})}</div>
                <div className={style.date}>{f.date(new Date, '%m/%d/%Y')}</div>
                <button className="btn" onClick={onButtonClick} disabled={!isDebtRunning}>{t('playtech.mobile.system.stModule13.btn.stop')}</button>
            </div>
        </div>
    );
};

export default StModule13;
