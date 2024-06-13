import React from "react";
import NavigationCeil from "../NavigationCeil";
import NavigationFloor from "../NavigationFloor";

const Header = function() {
    return (
        <header>
            <NavigationCeil/>

            <div className="information-container">
                <div className="information">
                    <a className="logo" href="#"><img src="images/3.gif" alt="Логотип компании" /></a>

                    <div className="module-news">
                        <button className="previous" type="button"></button>
                        <a className="news" href="#">Сегодня открылась новая версия нашего сайта...</a>
                        <button className="next" type="button"></button>
                    </div>

                    <a className="enter" href="#">Войти</a>
                    <a className="registration" href="#">Регистрация</a>

                    <NavigationFloor/>
                </div>
            </div>
        </header>
    );
};

export default Header;