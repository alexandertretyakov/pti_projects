import React from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';

import style from './index.css';

const StModule3 = () => {
    const spinnerCount = Number(useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_3_SPINNER_COUNT']))) || 1;
    const spinners = new Array(spinnerCount).fill('ololo');

    return (
        <div className={style.root}>
            { spinners.map((spinner, idx) => <div className={style.spinner2} key={idx} />) }
        </div>
    );
};

export default StModule3;
