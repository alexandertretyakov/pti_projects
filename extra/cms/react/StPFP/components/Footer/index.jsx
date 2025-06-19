import React from 'react';

import style from '../../index.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            Copyright &copy; 1997-2006, Talent Incorporated Ltd. &reg; All right reserved.
            <div className={style.footerNavigation}>
                &bull; <a href="#">About Us</a>
                &bull; <a href="#">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;
