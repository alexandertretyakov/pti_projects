import React from 'react';

import style from '../../../index.css';

const Menu = function() {
    return (
        <div className={style.menu}>
            <a className={style.menuItem} href="about_us.htm">О Клубе</a>
            <a className={`${style.menuItem} ${style.active}`} href="the_participants.htm">Участники Клуба</a>
            <a className={style.menuItem} href="for_entrepreneurs.htm">Для предпринимателей</a>
            <a className={style.menuItem} href="contacts.htm">Контакты</a>
        </div>
    );
};

export default Menu;
