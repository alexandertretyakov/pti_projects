import React from 'react';

import style from '../../index.css';

import { useTranslations } from 'common/I18n';

const Filters = ({filter, onFilterChange}) => {
    const t = useTranslations();

    const buttons = [
        {name: 'all', title: t('playtech.mobile.system.todos.actions.all')},
        {name: 'incompleted', title: t('playtech.mobile.system.todos.actions.incompleted')},
        {name: 'completed', title: t('playtech.mobile.system.todos.actions.completed')}
    ];

    return (
        <div className={style.actions}>
            {
                buttons.map((button) => {
                    const className = filter === button.name ? 'active' : null;

                    return (
                        <button className={style[className]} onClick={onFilterChange.bind(null, button.name)}>{button.title}</button>
                    );
                })
            }
        </div>
    );
};

export default Filters;
