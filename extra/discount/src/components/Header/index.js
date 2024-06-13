import React from "react";

import Menu from "./Menu";

const Header = function() {
    return (
        <div className="header">
            <a href="about_us.htm"><img src="images/1.gif" alt="company logotype" /></a>
            <Menu />
        </div>
    );
};

export default Header;