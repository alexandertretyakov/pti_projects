import React from 'react';
import { prop, toUpper } from 'ramda';

import useDevice from 'device';
import { useTranslations } from 'common/I18n';

import style from '../../index.css';

const Comments = ({comments}) => {
    const isDesktop = useDevice(prop('isDesktop'));
    const t = useTranslations();

    return (
        <div>
            {
                comments.map((comment, idx) => {
                    return (
                        <div className={`${style.comment} ${style[`commentRank${toUpper(comment.rank)}`]}`} key={idx}>
                            { isDesktop ? (
                                <>
                                    <div className={style.commentClassification}>
                                        <span className={style.commentRank}>{t(`playtech.mobile.system.stModule17.category.${comment.rank}`)}</span>
                                    </div>

                                    <div className={style.commentMain}>
                                        <div className={style.commentText} dangerouslySetInnerHTML={{ __html: comment.text }} />
                                        <div className={style.commentFooter}>
                                            <div>
                                                <span className={style.commentDate}>{comment.date}</span>

                                                <div className={style.commentRating}>
                                                    <button className={style.commentLike}>&uArr;<span>{comment.like}</span></button>
                                                    <button className={style.commentDislike}>&dArr;<span>{comment.dislike}</span></button>
                                                </div>
                                            </div>

                                            <div>
                                                <button className={style.commentAnswer}>{t('playtech.mobile.system.stModule17.comment.action.answer')}</button>
                                                <button className={style.commentDelete}>&#9746;</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={style.commentText} dangerouslySetInnerHTML={{ __html: comment.text }} />

                                    <div className={style.commentClassification}>
                                        <span className={style.commentRank}>{t(`playtech.mobile.system.stModule17.category.${comment.rank}`)}</span>
                                    </div>

                                    <span className={style.commentDate}>{comment.date}</span>
                                    <button className={style.commentDelete}>&#9746;</button>
                                </>
                            )}
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Comments;
