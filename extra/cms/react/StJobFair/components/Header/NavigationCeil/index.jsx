import React from 'react';

import style from '../../../index.css';

const NavigationCeil = function() {
    return (
        <div className={style.navigationContainer}>
            <div className={style.navigationOne}>
                <a href="#">Сайт в избранное</a>
                <a href="#">Рекомендовать сайт</a>
                <a href="#">Баннеры и гаджеты</a>
                <a href="#">Установить счетчики</a>
                <a href="#">Подписаться на новости</a>
                <a href="#">RSS</a>
                <a href="#">Помощь</a>
            </div>
        </div>
    );
};

export default NavigationCeil;
