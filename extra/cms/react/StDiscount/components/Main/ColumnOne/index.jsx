import React from 'react';

import style from '../../../index.css';

const ColumnOne = () => {
    return (
        <div className={style.columnOne}>
            <div className={style.moduleAdvertising}>
                <h3>Для Тех Кто Любит и Умеет <span className={style.word}>Экономить</span></h3>
                <p>Дисконт клуб для предпринимателей. Дисконты для клиентов. Выгода для всех.</p>
            </div>

            <div className={style.moduleLocation}>
                <p>Мы всегда готовы к сотрудничеству звоните и приходите к нам:</p>

                <p><em>Кривой Рог, <br />ул. Мелешкина 14а, офис 607 <br />тел. 80675395858 (Татьяна)</em></p>

                <p>
                    По вопросам приобретения дисконт-карт <br />обратитесь непосредственно к нам, либо к <br />любому из
                    предпринимателей- участников клуба.
                </p>
                <button className={style.apply} type="button">Подать заявку</button>
            </div>
        </div>
    );
};

export default ColumnOne;
