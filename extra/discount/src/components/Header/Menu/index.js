import React from "react";

const Menu = function() {
    return (
        <div className="menu">
            <a href="about_us.htm">О Клубе</a>
            <a className="active" href="the_participants.htm">Участники Клуба</a>
            <a href="for_entrepreneurs.htm">Для предпринимателей</a>
            <a href="contacts.htm">Контакты</a>
        </div>
    );
};

export default Menu;