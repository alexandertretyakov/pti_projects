import React from 'react';

import style from '../../index.css';

import Location from './Location';

const Header = () => {
    return (
        <header className={style.header}>
            <a href="#"><span className={`${style.img} ${style.img3}`} /></a>

            <Location />

        </header>
    );
};

export default Header;
