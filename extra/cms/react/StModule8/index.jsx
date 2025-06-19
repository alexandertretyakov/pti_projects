import React, {useEffect, useState} from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';
import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule8 = () => {
    const t = useTranslations();
    const postsEndpoint = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_8_POSTS_ENDPOINT'])) || '';
    const imagesEndpoint = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_8_IMAGES_ENDPOINT'])) || '';
    const listURL = [postsEndpoint, imagesEndpoint];
    const [postsList, setPostsList] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const requests = listURL.map(url => fetch(url));

        Promise.all(requests)
            .then((responses) => {
                const rqt = responses.map((response) => response.json());

                return Promise.all(rqt);
            })
            .then(([posts, {message: images}]) => {
                setPostsList(parse(posts, images));
                setIsDataLoaded(true);
            });
    }, []);

    const parse = (posts, images) => {
        return posts
            .slice(0, 6)
            .map((post, idx) => ({
                ...post,
                image: images[idx]
            }));
    };

    return (
        <>
            {
                isDataLoaded
                    ? postsList.length
                        ? <div className={style.posts}>
                            {
                                postsList.map((post, idx) => {
                                    return (
                                        <article className={style.post} key={idx}>
                                            <img src={post.image} />
                                            <h6>{post.title}</h6>
                                            <p>{post.body}</p>
                                        </article>
                                    );
                                })
                            }
                        </div>
                        : <p>{t('playtech.mobile.system.stModule8.noPosts')}</p>
                    : '...'
            }
        </>
    );
};

export default StModule8;
