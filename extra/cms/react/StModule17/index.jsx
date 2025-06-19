import React, { useEffect, useState } from 'react';
import { countBy, toUpper } from 'ramda';

import { useTranslations } from 'common/I18n';
import { useFormatter } from '/app-react/common/Formatter';

import Comments from 'components/Comments/index';

import style from './index.css';

const StModule17 = () => {
    const t = useTranslations();
    const f = useFormatter();
    const [isSwearOn, setIsSwearOn] = useState(false);
    const [comments, setComments] = useState(null);
    const [badWords, setBadWords] = useState(null);
    const [categories, setCategories] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const uniqId = Date.now();

    useEffect(() => {
        async function f() {
            const badWordsURL = '/library/st-module-17/bad_words.json';
            const commentsURL = '/library/st-module-17/comments.json';

            const fetchPromises = [badWordsURL, commentsURL].map((url) => fetch(url));
            const responses = await Promise.all(fetchPromises);
            const jsonPromises = responses.map((response) => response.json());
            const data = await Promise.all(jsonPromises);

            const {comments, badWords, categories} = parse(data);

            setComments(comments);
            setBadWords(badWords);
            setCategories(categories);
        }
        f();
    }, []);

    const parse = (data) => {
        let [badWords, comments] = data;
        const categories = Object
            .entries(countBy((comment) => comment.rank)(comments))
            .map((pair) => {
                return {
                    code: pair[0],
                    quantityOfComments: pair[1]
                };
        });

        comments = comments.map((comment) => ({
            ...comment,
            date: f.date(comment.date, '%m.%d.%Y')
        }));

        return {
            comments,
            badWords,
            categories
        };
    };

    const onCategoryClick = (e) => {
        const targetRank = e.currentTarget.dataset.rank;

        targetRank === activeCategory ? setActiveCategory(null) : setActiveCategory(targetRank);
    };

    const getFilteredComments = () => {
        let _comments = [...comments];
        const swearImageTag = '<img src="/library/st-module-17/swear.png">';

        if (activeCategory !== null) {
            _comments = _comments.filter((comment) => comment.rank === activeCategory);
        }

        if (isSwearOn) {
            _comments = _comments.map((comment) => {
                return {
                    ...comment,
                    text: badWords.reduce((memo, badWord) => {
                        return memo.replaceAll(badWord, swearImageTag);
                    }, comment.text)
                };
            });
        }

        return _comments;
    };

    const onSwearTogglerClick = () => {
        setIsSwearOn((isSwearOn) => !isSwearOn);
    };

    return (
        <div className={style.stModule17React}>
            <div className={style.filtersMenu}>
                <div className={style.categories}>
                    {
                        categories === null
                            ? 'No categories'
                            : categories.map((category, idx) => {
                                return (
                                    <button
                                        key={idx}
                                        className={`${style.category} ${style[`category${toUpper(category.code)}`]} ${activeCategory === category.code ? style.active : ''}`}
                                        data-rank={category.code}
                                        onClick={onCategoryClick}
                                    >
                                        <div className={style.categoryClose}>&#x2716;</div>
                                        {t(`playtech.mobile.system.stModule17.category.${category.code}`)}
                                        <span className={style.categoryCommentsQty}>{category.quantityOfComments}</span>
                                    </button>
                                );
                            })
                    }
                </div>

                <div className={style.swearTogglerSection}>
                    <span>{t('playtech.mobile.system.stModule17.hideSwear')}</span>
                    <input
                        type="checkbox"
                        id={`switch${uniqId}`}
                        checked={isSwearOn}
                        onChange={onSwearTogglerClick}
                    />
                    <label htmlFor={`switch${uniqId}`} />
                </div>
            </div>

            {
                comments === null
                    ? 'No comments'
                    : <Comments comments={getFilteredComments()} />
            }
        </div>
    );
};

export default StModule17;
