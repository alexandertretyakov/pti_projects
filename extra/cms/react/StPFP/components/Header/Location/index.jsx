import React from 'react';

import style from '../../../index.css';

const Location = function() {
    return (
        <div className={style.location}>
            <label htmlFor="country">&bull; Worldwide Locations</label>
            <select className={style.country} id="country">
                <option>Nederland</option>
                <option>England</option>
                <option>Germany</option>
                <option>Italy</option>
                <option>Ukraine</option>
            </select>
        </div>
    );
};

export default Location;
