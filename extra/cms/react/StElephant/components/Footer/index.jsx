import React from 'react';

import style from '../../index.css';

const Footer = function() {
    return (
        <footer className={style.footer}>
            <div className={style.roadMap}>
                <h4><span className={style.firstLetter}>К</span>арта проезда</h4>
                <p>
                    Улица Королева Д.45 Главный корпус<br />
                    Вход со стороны метро.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
