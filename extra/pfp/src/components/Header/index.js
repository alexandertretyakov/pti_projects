import React from 'react';
import Location from "../Location";

const Header = function() {
    return (
        <header>
            <a className="logo" href="index.htm"><img src="images/3.gif" alt="Логотип компании" /></a>

            <Location />

        </header>
    );
};

export default Header;