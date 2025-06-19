import React, { useState } from 'react';

import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule2 = () => {
    const t = useTranslations();
    const [lastName, setLastName] = useState('');

    const onChange = (e) => {
        setLastName(e.currentTarget.value);
    };

    return (
        <div className={style.root}>
            <div className={style.field}>
                <label htmlFor="lastName">{t('playtech.mobile.system.stModule2.lastName')}</label>
                <input type="text" id="lastName" onChange={onChange} />
            </div>
            <div className={style.output}>{lastName}</div>
        </div>
    );
};

export default StModule2;
