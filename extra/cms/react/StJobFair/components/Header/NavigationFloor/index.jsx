import React from 'react';

import style from '../../../index.css';

const NavigationFloor = function() {
    return (
        <div className={style.navigationTwo}>
            <a className={style.active} href="#">Главная</a>
            <a href="#">Рейтинги</a>
            <a href="#">Новости</a>
            <a href="#">База знаний</a>
            <a href="#">Форум</a>
            <a href="#">Личный кабинет</a>
            <a href="#">Выйти</a>
        </div>
    );
};

export default NavigationFloor;
