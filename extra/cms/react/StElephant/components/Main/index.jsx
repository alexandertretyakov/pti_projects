import React from 'react';

import style from '../../index.css';

const Main = () => {
    return (
        <main>
            <div className={style.ourCompany}>
                <h1><span className={style.firstLetter}>О</span> нашей <span className={style.firstLetter}>К</span>омпании</h1>
                <p>
                    Totam rem aperiam ase eaque ab illo <a href="#">inve ntore</a> ativert artasert architeo
                    bamolu bertas ptatem, quia voluptas sit aspernater ur aut odit aut fugit sed equuntur magni
                    dolore.
                </p>
                <p>Do you have a decorating idea you would love to share with the world? TELL US ABOUT IT!</p>
                <p>Do you have a decorating idea you would love to share with the world? TELL US ABOUT IT!</p>
                <p>
                    Totam rem aperiam ase eaque ab illo <a href="#">inve ntore</a> ativert artasert architeo
                    bamolu bertas ptatem, quia voluptas sit aspernater ur aut odit aut fugit sed equuntur magni
                    dolore.
                </p>
            </div>

            <div className={style.services}>
                <div className={style.gallery}>
                    <h4><span className={style.firstLetter}>Г</span>алерея</h4>
                    <span className={`${style.product} ${style.productOne}`}>{null}</span>
                    <span className={`${style.product} ${style.productTwo}`}>{null}</span>
                    <span className={`${style.product} ${style.productThree}`}>{null}</span>
                    <span className={`${style.product} ${style.productFour}`}>{null}</span>
                </div>

                <div className={style.ourOffer}>
                    <h4><span className={style.firstLetter}>Н</span>аше предложение</h4>
                    <span className={style.tree}>{null}</span>
                    <p>
                        <em>Ante</em> <b>ipsum</b> prkisn faucibus orci luctus<br />etas ultrices
                        posuere cubili Curae;<br />Suspendisse sollicitudin velit sed leo.
                    </p>
                </div>

                <div className={style.ourServices}>
                    <h4><span className={style.firstLetter}>Н</span>аши услуги</h4>
                    <ul>
                        <li>dolore sit aas<br /> jertasero</li>
                        <li>avertas jase ferase</li>
                        <li>taserto yaretker pertas</li>
                    </ul>
                    <p>
                        <a href="#">Adipiing eraes entstas<br /> iuamagnis</a> tristique orci<br /> acse uis
                        ultriciet mag<br /> accumsan.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Main;
