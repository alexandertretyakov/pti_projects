import React, { useState } from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';
import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule6 = () => {
    const t = useTranslations();
    const catEndpoint = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_6_CAT_ENDPOINT'])) || '';
    const [cat, setCat] = useState();

    const onClick = () => {
        fetch(catEndpoint)
            .then((res) => res.json())
            .then((catData) => setCat(catData[0].url));
    };

    return (
        <>
            <button onClick={onClick}>{t('playtech.mobile.system.stModule6.heading')}</button>
            <div className={style.catWrapper}>
                {
                    cat && <img src={cat} />
                }
            </div>
        </>
    );
};

export default StModule6;
