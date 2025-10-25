import React from 'react';

import bearSrc from './bear.jpg';

import style from './index.module.scss';

const Bear = () => {
    return (
        <img className={style.bearImg} src={bearSrc} alt='bear image' />
    );
};

export default Bear;
