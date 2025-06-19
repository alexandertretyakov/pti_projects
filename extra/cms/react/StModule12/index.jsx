import React, { useState } from 'react';
import { prop, identity } from 'ramda';

import useDevice from 'device';

import style from './index.css';

const StModule12 = () => {
    const [showCircle, setShowCircle] = useState(true);
    const circleParamsByUrl = window.location.search
        .slice(1)
        .split('&')
        .map((el) => el.split('='))
        .reduce((memo, pair) => {
            const [key, value] = pair;

            return {
                ...memo,
                [key]: value
            };
        }, {});
    const circleParamsByDefault = {
        radius: 50,
        color: 'blue',
        offsetX: 0,
        offsetY: 0
    };
    const circleParams = Object.assign({}, circleParamsByDefault, circleParamsByUrl);
    const isDesktop = useDevice(prop('isDesktop'));
    console.log(useDevice(identity));

    const onCircleClick = () => {
        !isDesktop && setShowCircle(false);
    };

    return (
        <div className={style.container}>
            {showCircle && (
                <div className={style.circle}
                     onClick={onCircleClick}
                     style={{
                         bottom: `${circleParams.offsetY}px`,
                         left: `${circleParams.offsetX}px`,
                         width: `${circleParams.radius * 2}px`,
                         height: `${circleParams.radius * 2}px`,
                         backgroundColor: `${circleParams.color}`
                     }}
                />
            )}
        </div>
    );
};

export default StModule12;
