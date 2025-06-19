import React from 'react';

import style from '../../index.css';

import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';

const Main = () => {
    return (
        <div className={style.main}>
            <ColumnOne />
            <ColumnTwo />
        </div>
    );
};

export default Main;
