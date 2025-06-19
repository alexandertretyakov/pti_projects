import React, { useEffect, useState } from 'react';
import { path, prop, pipe, filter, flatten, map, slice, uniq, tap, identity } from 'ramda';

import { useAppSelector } from 'system/App/context';
import useDevice from 'device';
import Loader from '/app-react-licensee-account/common/Loader';
import Games from 'components/Games/index';
import { useTranslations } from 'common/I18n';

const StModule10 = () => {
    const t = useTranslations();
    const gamesCountDtag = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_10_GAMES_COUNT'])) || '';
    const isDesktop = useDevice(prop('isDesktop'));
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [games, setGames] = useState([]);
    console.log(useAppSelector(identity));

    useEffect(() => {
        async function f() {
            const existingGamesURL = '/library/st-module-10/existingGames.json';
            const playerBonusesURL = '/library/st-module-10/getBonusesResponse.json';

            const fetchPromises = [existingGamesURL, playerBonusesURL].map((url) => fetch(url));
            const responses = await Promise.all(fetchPromises);
            const jsonPromises = responses.map((response) => response.json());
            const data = await Promise.all(jsonPromises);

            setGames(parse(data));
            setIsDataLoaded(true);
        }
        f();
    }, []);

    const parse = (data) => {
        const [existingGames, getBonusesResponse] = data;
        const gamesCount = getGamesCount();

        return pipe(
            filter((bonusTemplate) => bonusTemplate.playType === 'freespins'),
            map((bonusTemplate) => bonusTemplate.gamingContext.selectedGames),
            flatten,
            tap(x => console.log('x is ', x)),
            uniq,
            filter((gameCode) => existingGames[gameCode]),
            map((gameCode) => existingGames[gameCode]),
            slice(0, gamesCount)
        )(getBonusesResponse.data.bonusTemplates);
    };

    const getGamesCount = () => {
        const gamesCount = gamesCountDtag
            .split(',')
            .map((num) => num.trim())
            .filter(Boolean)
            .map(Number);
        const [countOnDesktop = 8, countOnMobile = 20] = gamesCount;

        return isDesktop ? countOnDesktop : countOnMobile;
    };

    return (
        <>
            {
                isDataLoaded
                    ? games.length
                        ? <Games games={games} />
                        : <p>{t('playtech.mobile.system.stModule10.noGames')}</p>
                    : <Loader />
            }
        </>
    );
};

export default StModule10;
