import React from 'react';
import { prop } from 'ramda';

import useDevice from 'device';

import style from '../../index.css';

const Games = ({games}) => {
    const isDesktop = useDevice(prop('isDesktop'));

    return (
        <div className={style.games}>
            {
                games.map((game) => {
                    return (
                        <div className={style.game} key={game.name}>
                            {
                                isDesktop
                                    ? <img src={`https://portal-admin-casino-build.ifortuna.cz${game.imageURL}`} />
                                    : <div>{game.name}</div>
                            }
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Games;
