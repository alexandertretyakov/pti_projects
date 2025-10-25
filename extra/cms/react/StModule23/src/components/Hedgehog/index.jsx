import React from 'react';

import style from './index.module.scss';

const Hedgehog = () => {
    return (
        <img className={style.hedgehogImg} src='./images/hedgehog.webp' alt='hedgehog image' />
    )
};

export default Hedgehog;
