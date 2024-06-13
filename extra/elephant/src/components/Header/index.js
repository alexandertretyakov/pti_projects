import React from "react";

const Header = function() {
    return (
        <header>
            <a className="logo" href="#"><img src="images/logo.gif" alt="Логотип компании" /></a>
            <div className="telephone">
                Позвоните нам<br />
                (312) 65-33-22<br />
                (312) 65-33-11
            </div>
        </header>
    );
};

export default Header;