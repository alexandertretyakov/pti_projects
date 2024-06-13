import React from 'react';
import MenuContactUs from "../MenuContactUs";
import ContentTopNavigation from "../ContentTopNavigation";
import ContentFloorNavigation from "../ContentFloorNavigation";

const Main = function() {
    return (
        <main>

            <MenuContactUs />

            <div className="page">
                <a href="#"><img src="images/5.gif" alt="Баннер Passion for Paintings" /></a>

                <ContentTopNavigation />

                <div className="content">
                    <img src="images/2.gif" alt="Спальная комната" />
                        <p>
                            Comfort whether anything so brilliant will ever happen to me, thought the fir-tree. It would
                            be much better than crossing the sea. I long for it almost with pain. Oh! when will
                            Christmas be here? I am now as tall and well grown as those which were taken away last year.
                            Oh! that I were now laid on the wagon, or standing in the warm room, with all that
                            brightness and splendor around me! Something better and more beautiful is to come after, or
                            the trees would not be so decked out. Yes, what follows will be grander and more splendid.
                            What can it be? I am weary with longing. I scarcely know how I feel.
                        </p>
                        <p>
                            Rejoice with us, said the air and the sunlight. Enjoy thine own bright life in the fresh
                            air.
                        </p>
                        <p>
                            Comfort whether anything so brilliant will ever happen to me, thought the fir-tree. It would
                            be much better than crossing the sea. I long for it almost with pain. Oh! when will
                            Christmas be here? I am now as tall and well grown as those which were taken away last year.
                            Oh! that I were now laid on the wagon, or standing in the warm room, with all that
                            brightness and splendor around me! Something better and more beautiful is to come after, or
                            the trees would not be so decked out. Yes, what follows will be grander and more splendid.
                            What can it be? I am weary with longing. I scarcely know how I feel.
                        </p>
                        <p>
                            Rejoice with us, said the air and the sunlight. Enjoy thine own bright life in the fresh
                            air.
                        </p>
                </div>

                <ContentFloorNavigation />
            </div>
        </main>
    );
};

export default Main;