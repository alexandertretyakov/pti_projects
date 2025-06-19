import React, { useState, useRef } from 'react';

import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule16 = () => {
    const t = useTranslations();
    const lpFrameRef = useRef(null);
    const lpIsHoldingRef = useRef(false);
    const lpIntervalIdRef = useRef(null);
    const [lpProgress, setLpProgress] = useState(0);
    const [count, setCount] = useState(0);

    const lpOnMouseDown = () => {
        lpIsHoldingRef.current = true;
        if (lpIntervalIdRef.current === null) {
            lpIntervalIdRef.current = setInterval(() => lpFrameRef.current(), 40); // 25 fps
        }
    };

    const lpOnMouseUp = (e) => {
        e.preventDefault(); // prevent context menu on mobile
        lpIsHoldingRef.current = false;
    };

    lpFrameRef.current = () => {
        let nextLpProgress;

        if (!lpIsHoldingRef.current && lpProgress === 0) { // hack for tap
            setLpProgress(2); // avoid infinite loop
            return;
        }

        if (lpIsHoldingRef.current) {
            nextLpProgress = lpProgress + 1.33; // interpolate(3000ms/(25fps*3s), [0, 3000ms], [0, 100%])
        } else {
            nextLpProgress = lpProgress - 2.66;
        }

        if (nextLpProgress <= 0) {
            setLpProgress(0);
            clearInterval(lpIntervalIdRef.current);
            lpIntervalIdRef.current = null;
        } else if (nextLpProgress >= 100) {
            setLpProgress(0);
            clearInterval(lpIntervalIdRef.current);
            lpIntervalIdRef.current = null;
            setCount((prevCount) => prevCount + 1);
        } else {
            setLpProgress(nextLpProgress);
        }
    };

    const buttonStyle = {
        backgroundPositionX: `${100 - lpProgress}%`
    };

    return (
        <div className={style.wrapper}>
            <div className={style.count}>{count}</div>
            <button style={buttonStyle}
                onMouseDown={lpOnMouseDown}
                onTouchStart={lpOnMouseDown}
                onMouseUp={lpOnMouseUp}
                onMouseLeave={lpOnMouseUp}
                onTouchEnd={lpOnMouseUp}
                onTouchMove={lpOnMouseUp}
            >{t('playtech.mobile.system.stModule16.button.increment')}</button>
        </div>
    );
};

export default StModule16;
