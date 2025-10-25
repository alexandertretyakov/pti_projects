import React from 'react';

import hedgehogSrc from './hedgehog.webp';

import style from './index.module.scss';

const Hedgehog = () => {
    return (
        <img className={style.hedgehogImg} src={hedgehogSrc} alt='hedgehog image' />
    );
};

export default Hedgehog;
