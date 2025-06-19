import React, { useEffect, useState } from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';
import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule5 = () => {
    const t = useTranslations();
    const dogsEndpoint = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULES_5_DOGS_ENDPOINT'])) || '';
    const [dogs, setDogs] = useState([]);

    useEffect(async () => {
        const res = await fetch(dogsEndpoint);
        const dogsData = await res.json();

        setDogs(dogsData.message.slice(0, 10));
    }, []);

    return (
        <>
            <h6>{t('playtech.mobile.system.stModule5.heading')}</h6>
            <div className={style.dogs}>
                { dogs.map((dogURL, index) => <img key={index} src={dogURL} />) }
            </div>
        </>
    );
};

export default StModule5;
