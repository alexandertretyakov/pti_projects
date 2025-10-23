import React from 'react';

import style from '../../index.module.scss';

const Loader = () => {
    return (
        <div className={style.loaderContainer}>
            <div className={style.spinner} />
        </div>
    );
};

export default Loader;
