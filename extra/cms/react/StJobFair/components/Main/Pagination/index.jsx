import React from 'react';

import style from '../../../index.css';

const Pagination = function() {
    return (
        <div className={style.pagination}>
            <button className={`${style.paginationButton} ${style.paginationButton1} ${style.active}`} type="button">1</button>
            <button className={`${style.paginationButton} ${style.paginationButton2}`} type="button">2</button>
            <button className={`${style.paginationButton} ${style.paginationButton3}`} type="button">3</button>
            <button className={`${style.paginationButton} ${style.paginationButton4}`} type="button">4</button>
            <button className={`${style.paginationButton} ${style.paginationButton5}`} type="button">5</button>
        </div>
    );
};

export default Pagination;
