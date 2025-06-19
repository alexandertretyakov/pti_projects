import React, {useEffect, useState} from 'react';
import { path } from 'ramda';

import { useAppSelector } from 'system/App/context';
import { useTranslations } from 'common/I18n';

import style from './index.css';

const StModule7 = () => {
    const t = useTranslations();
    const badWordsDtag = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_7_BAD_WORDS'])) || '';
    const commentsEndpoint = useAppSelector(path(['dynamicTags', 'DTAG_ST_MODULE_7_COMMENTS_ENDPOINT'])) || '';
    const badWords = badWordsDtag
        .split(',')
        .map((badWord) => badWord.trim())
        .filter((badWord) => badWord !== '');
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch(commentsEndpoint)
            .then((res) => res.json())
            .then((rawData) => {
                setComments(parse(rawData));
            });
    }, []);

    const parse = (rawData) => {
        const isCommentValid = (comment) => {
            return !badWords.some((word) => {
                return comment.body.includes(word);
            });
        };
        const addDateToComment = (comment) => {
            return {
                ...comment,
                date: getRandomDate()
            };
        };

        return rawData
            .filter(isCommentValid)
            .map(addDateToComment);
    };

    const getRandomDate = () => {
        const to = new Date().getTime();
        const randomTime = Math.round(Math.random() * to);
        const randomDate = new Date(randomTime);

        return `${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDate()}`;
    };

    return (
        <>
            {
                comments === null
                    ? '...'
                    : !comments.length
                        ? <div className="no-comments">{t('playtech.mobile.system.stModule7.noComments')}</div>
                        : <div className={style.comments}>
                            {
                                comments.map((comment) => {
                                    return (
                                        <article className={style.comment} key={comment.id}>
                                            <header>
                                                <strong className="email">{comment.email}</strong>
                                                <strong className={style.date}>{comment.date}</strong>
                                            </header>
                                            <p>{comment.body}</p>
                                        </article>
                                    );
                                })
                            }
                        </div>
            }
        </>
    );
};

export default StModule7;
