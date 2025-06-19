import React from 'react';

import { useTranslations } from 'common/I18n';

import style from '../../index.css';

const Statistics = ({todoCount, completedCount}) => {
    const t = useTranslations();

    return (
        <div className={style.heading}>
            <h1>{t('playtech.mobile.system.todos.message.tasksList')}</h1>
            <h4 className={style.stats}>
                {t('playtech.mobile.system.todos.message.incompleted')} <span>{todoCount}</span>,
                {t('playtech.mobile.system.todos.message.completed')} <span>{completedCount}</span>
            </h4>
        </div>
    );
};

export default Statistics;
