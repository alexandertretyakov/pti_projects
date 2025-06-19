import React, {useEffect, useState} from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';
import { useTranslations } from 'common/I18n';
import Loader from '/app-react-licensee-account/common/Loader';
import Accordion from './components/Accordion';

const StModule9 = () => {
    const t = useTranslations();
    const excludedBreedsDtag = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_9_EXCLUDED_BREEDS'])) || '';
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [breeds, setBreeds] = useState([]);

    const getBreedNames = () => {
        const breedsList = [
            'hound',
            'borzoi',
            'boxer',
            'bulldog',
            'chihuahua',
            'corgi'
        ];

        const excludedBreeds = excludedBreedsDtag
            .split(',')
            .map((breed) => breed.trim())
            .filter(Boolean);

        const isBreedValid = (breed) => {
            return !excludedBreeds.includes(breed);
        };

        return breedsList.filter(isBreedValid);
    };

    const breedNames = getBreedNames();

    useEffect(() => {
        async function f() {
            const fetchPromises = breedNames.map(breed => fetch(`https://dog.ceo/api/breed/${breed}/images`));
            const responses = await Promise.all(fetchPromises);
            const jsonPromises = responses.map((response) => response.json());
            const data = await Promise.all(jsonPromises);

            setBreeds(parse(data));
            setIsDataLoaded(true);
        }
        f();
    }, []);

    const parse = (data) => {
        return data.map((abc, index) => {
            return {
                name: breedNames[index],
                images: abc.message.slice(0, 9)
            };
        });
    };

    return (
        <>
            {
                isDataLoaded
                    ? breeds.length
                        ? <Accordion breeds={breeds} />
                        : <p>{t('playtech.mobile.system.stModule9.noBreeds')}</p>
                    : <Loader />
            }
        </>
    );
};

export default StModule9;
