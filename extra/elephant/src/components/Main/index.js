import React from "react";

const Main = function() {
    return (
        <main>
            <div className="our-company">
                <h1><span className="first-letter">О</span> нашей <span className="first-letter">К</span>омпании</h1>
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

            <div className="services">
                <div className="gallery">
                    <h4><span className="first-letter">Г</span>алерея</h4>
                    <img src="images/room_1.jpg" alt="Комната 1" />
                    <img src="images/room_2.jpg" alt="Комната 2" />
                    <img src="images/room_3.jpg" alt="Комната 3" />
                    <img src="images/room_4.jpg" alt="Комната 4" />
                </div>

                <div className="our-offer">
                    <h4><span className="first-letter">Н</span>аше предложение</h4>
                    <img src="images/tree.jpg" alt="Деревья" />
                    <p>
                        <em>Ante</em> <b>ipsum</b> prkisn faucibus orci luctus<br />etas ultrices
                        posuere cubili Curae;<br />Suspendisse sollicitudin velit sed leo.
                    </p>
                </div>

                <div className="our-services">
                    <h4><span className="first-letter">Н</span>аши услуги</h4>
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