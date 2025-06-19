import React from 'react';

import style from '../../index.css';

import NavigationCeil from './NavigationCeil';
import NavigationFloor from './NavigationFloor';

const Header = function() {
    return (
        <header className={style.header}>
            <NavigationCeil />

            <div className={style.informationContainer}>
                <div className={style.information}>
                    <a className={style.logo} href="#"><span className={style.img} /></a>

                    <div className={style.moduleNews}>
                        <button className={style.previous} type="button" />
                        <a className={style.news} href="#">Сегодня открылась новая версия нашего сайта...</a>
                        <button className={style.next} type="button" />
                    </div>

                    <a className={style.enter} href="#">Войти</a>
                    <a className={style.registration} href="#">Регистрация</a>

                    <NavigationFloor />
                </div>
            </div>
        </header>
    );
};

export default Header;
