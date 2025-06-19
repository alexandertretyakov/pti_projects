import React from 'react';

import style from '../../index.css';

const Header = () => {
    return (
        <header className={style.header}>
            <a href="#"><span className={style.logo} /></a>
            <div className={style.telephone}>
                Позвоните нам<br />
                (312) 65-33-22<br />
                (312) 65-33-11
            </div>
        </header>
    );
};

export default Header;
