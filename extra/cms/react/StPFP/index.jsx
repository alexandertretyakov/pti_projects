import React from 'react';

import style from './index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const StPFP = () => {
    console.log('++++++++++++++++ style = ', style);

    return (
        <div className={style.root}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default StPFP;
