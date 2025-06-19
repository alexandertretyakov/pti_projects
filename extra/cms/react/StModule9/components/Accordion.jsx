import React, {useState} from 'react';
import clsx from 'clsx';

import { useTranslations } from 'common/I18n';

import style from '../index.css';

const Accordion = ({breeds}) => {
    const t = useTranslations();
    const [activeAccordionItemIndex, setActiveAccordionItemIndex] = useState(0);

    return (
        <div className="accordion">
            {
                breeds.map((breed, index) => {
                    return (
                        <div className={style.accordionItem} onClick={() => setActiveAccordionItemIndex(index)} key={breed.name}>
                            <h2 className={style.accordionItemHead}>{t(`playtech.mobile.system.stModule9.heading.${breed.name}`)}</h2>
                            <div className={clsx(style.accordionItemBody, {[style.active]: index === activeAccordionItemIndex})}>
                                {
                                    breed.images.map((breedImage, j) => {
                                        return (
                                            <img src={breedImage} key={j} />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Accordion;

