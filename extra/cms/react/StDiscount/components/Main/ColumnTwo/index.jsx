import React from 'react';

import style from '../../../index.css';

const ColumnTwo = () => {
    return (
        <div className={style.columnTwo}>
            <div className={style.moduleRequest}>
                <h3>Вы еще не в Дисконт Клубе?</h3>
                <form action="#">
                    <label htmlFor={style.organization}>Организация: </label><input type="text" id="organization" /><br />
                    <label htmlFor={style.telephone}>Контактный телефон: </label><input type="text" id="telephone" /><br />
                    <button className={style.apply} type="button">Подать заявку</button>
                </form>
            </div>

            <div className={style.moduleContent}>
                <div className={style.moduleParticipants}>
                    <h4>Где вы сможете экономить</h4>
                    <a className={style.allBusinesses} href="#">Все предприятия</a>
                    <div className={style.linksContainer}>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                        <a href="#"><img src="https://via.placeholder.com/105" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColumnTwo;
