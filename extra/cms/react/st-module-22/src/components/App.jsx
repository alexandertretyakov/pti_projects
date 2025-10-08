import React, { useState } from 'react';

import style from '../index.module.scss';

import Header from './Header/index';
import Main from "./Main";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className={`${style.pageTransactions} ${darkTheme ? style.dark : null}`}>
            <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            <Main />
        </div>
  );
}

export default App;
