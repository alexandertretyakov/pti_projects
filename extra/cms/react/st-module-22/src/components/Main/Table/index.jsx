import React from 'react';

import { useTranslations } from '../../../helpers';

import style from '../../../index.module.scss';

const helpIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M11.25 11.25l.041-.02a.75.75 0
        011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9
        9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z">
    </path>
</svg>;
const copyIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25
        0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25
        2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25
        0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6">
    </path>
</svg>;
const trimHash = (hash) => {
    const start = hash.slice(0, 6);
    const end = hash.slice(-4);

    return `${start}…${end}`;
};
const trimCall = (call) => call.length <= 20
    ? call
    : call.slice(0, 20) + '&hellip;';
const formatTime = (dateString) => {
    const pastDate = new Date(dateString);
    const now = new Date();

    const diffMs = now - pastDate;

    if (diffMs <= 0) {
        return 0;
    }

    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays) {
        return `${diffDays}d`;
    }

    if (diffHours) {
        return `${diffHours}h`;
    }

    if (diffMinutes) {
        return `${diffMinutes}m`;
    }

    if (diffSeconds) {
        return `${diffSeconds}s`;
    }
};
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Хэш скопирован! ${text}`);
        })
        .catch((err) => {
            console.error('Ошибка копирования:', err);
        });
};

const Table = ({ transactions }) => {
    const t = useTranslations();

    return (
        <div className={style.transactions}>
            <div className={style.tableTransactionsTitle}>
                <div className={style.titleItem}>
                    {t('Transaction Hash')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    {t('Block Num.')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    {t('Status')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    {t('Type')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    {t('Calls')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    {t('Address')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    {t('Age')} <span className={style.helpIcon}>{helpIcon}</span>
                </div>
            </div>

            {transactions.map((transaction, idx) => (
                <div className={style.tableTransaction} key={idx}>
                    <div className={style.dataItem}>
                        <a href="#">{trimHash(transaction.transactionHash)}</a>
                        <span className={style.copyIcon} onClick={() => copyToClipboard(transaction.transactionHash)}>{copyIcon}</span>
                    </div>

                    <div className={style.dataItem}>
                        <a href="#">{transaction.blockNum}</a>
                    </div>

                    <div className={style.dataItem}>
                        <div className={`${style.wrapperStatus} ${transaction.status === 'REVERTED' ? style.wrapperStatusReverted : ''}`}>
                            {transaction.status}
                        </div>
                    </div>

                    <div className={style.dataItem}>
                        <div className={`${style.wrapperType} ${transaction.type === 'DEPLOY_ACCOUNT' ? style.wrapperTypeDeploy : ''}`}>
                            {transaction.type}
                        </div>
                    </div>

                    <div className={style.dataItem}>
                        <div className={style.wrapperCalls} dangerouslySetInnerHTML={{__html: trimCall(transaction.calls)}} />
                    </div>

                    <div className={style.dataItem}>
                        <a href="#">{trimHash(transaction.address)}</a>
                        <span className={style.copyIcon} onClick={() => copyToClipboard(transaction.address)}>{copyIcon}</span>
                    </div>

                    <div className={style.dataItem}>
                        <span className={style.age}>{formatTime(transaction.timestamp)}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Table;
