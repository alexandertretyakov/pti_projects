import React from 'react';

import style from '../../index.css';

import Menu from './Menu';

const Header = () => {
    return (
        <div className={style.header}>
            <a href="about_us.htm"><span className={style.img} /></a>
            <Menu />
        </div>
    );
};

export default Header;
