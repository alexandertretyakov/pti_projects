import React, { useState } from 'react';

import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule11 = () => {
    const t = useTranslations();
    const telephoneNumber = '+38 (096) 111-22-33';
    const [isTelephoneNumberHidden, setIsTelephoneNumberHidden] = useState(false);

    const onButtonClick = () => {
        setIsTelephoneNumberHidden(() => !isTelephoneNumberHidden);
    };

    return (
        <div className={style.wrapper}>
            <p>{isTelephoneNumberHidden ? telephoneNumber.replace(/\d/g, '*') : telephoneNumber}</p>
            {
                isTelephoneNumberHidden
                    ? <button className={style.btn} onClick={onButtonClick}>{t('playtech.mobile.system.stModule11.hide')}</button>
                    : <button className={style.btn} onClick={onButtonClick}>{t('playtech.mobile.system.stModule11.display')}</button>
            }
        </div>
    );
};

export default StModule11;
