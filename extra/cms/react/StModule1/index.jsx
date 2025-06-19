import React, { useState } from 'react';

import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule1 = () => {
    const t = useTranslations();
    const [backgroundColor, setBackgroundColor] = useState('red');

    const onClick = () => {
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);

        setBackgroundColor(`rgb(${r}, ${g}, ${b})`) ;
    };

    return (
        <button className={style.btn} onClick={onClick} style={{backgroundColor}}>{t('playtech.mobile.system.stModule1.btnText')}</button>
    );
};

export default StModule1;
