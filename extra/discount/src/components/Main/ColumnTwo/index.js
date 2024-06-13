import React from "react";

const ColumnTwo = function() {
    return (
        <div className="column-two">
            <div className="module-request">
                <h3>Вы еще не в Дисконт Клубе?</h3>
                <form action="#">
                    <label htmlFor="organization">Организация: </label><input type="text" id="organization" /><br />
                    <label htmlFor="telephone">Контактный телефон: </label><input type="text" id="telephone" /><br />
                    <button className="apply" type="button">Подать заявку</button>
                </form>
            </div>

            <div className="module-content">
                <div className="module-participants">
                    <h4>Где вы сможете экономить</h4>
                    <a className="all-businesses" href="#">Все предприятия</a>
                    <div className="links-container">
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