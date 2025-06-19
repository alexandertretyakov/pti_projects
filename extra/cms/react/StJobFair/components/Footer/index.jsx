import React from 'react';

import style from '../../index.css';

const Footer = function() {
    return (
        <footer className={style.footer}>
            <a href="#">О проекте</a>
            <a href="#">Обратная связь</a>
            <a href="#">Статистика проекта</a>
            <a href="#">Партнерская программа</a>
            <a href="#">Юридические соглашения</a>
        </footer>
    );
};

export default Footer;

