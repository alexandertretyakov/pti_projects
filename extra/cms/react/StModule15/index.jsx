import React, { useState } from 'react';

import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule15 = () => {
    const t = useTranslations();
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value.replace(/[^\d]/g, '').slice(0, 6));
    };

    return (
        <div className={style.wrapper}>
            <label htmlFor="smsCode">{t('playtech.mobile.system.stModule15.field.smsCode.label')}</label>
            <input
                type="text"
                id="smsCode"
                onChange={onChange}
                value={value}
                placeholder={t('playtech.mobile.system.stModule15.field.smsCode.placeholder')}
            />
        </div>
    );
};

export default StModule15;
