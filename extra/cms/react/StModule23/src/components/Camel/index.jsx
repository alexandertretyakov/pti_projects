import React from 'react';

import camelSrc from './camel.jpg';

import style from './index.module.scss';

const Camel = () => {
    return (
        <img className={style.camelImg} src={camelSrc} alt='camel image' />
    );
};

export default Camel;
