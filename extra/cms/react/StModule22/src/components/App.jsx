import React, { useEffect, useState } from 'react';

import Header from './Header';
import Main from './Main';

import '../colors.css';
import style from '../index.module.scss';

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark', darkTheme);
    }, [darkTheme]);

    return (
        <div className={`${style.page}`}>
            <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            <Main />
        </div>
  );
};

export default App;
