import React from 'react';

import style from '../../../index.css';

const ContentTopNavigation = () => {
    return (
        <div className={style.navigationTwo}>
            <a href="#" className={style.active}>Home</a>
            <a href="#">Our Catalogue</a>
            <a href="#">Your wishlist</a>
            <a href="#">Service</a>
        </div>
    );
};

export default ContentTopNavigation;
