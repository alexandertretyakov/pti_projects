import React from 'react';

import foxSrc from './fox.jpg';

import style from './index.module.scss';

const Fox = () => {
    return (
        <img className={style.foxImg} src={foxSrc} alt='fox image' />
    );
};

export default Fox;
