import React from 'react';

import style from '../../../index.module.scss';

const Table = () => {
    const transactionsData = [
        {
            transactionHash: '0x041b12',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside111',
            address: '0x003yjkolmjkb39e111'
        },
        {
            transactionHash: '0x041b',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'apply_mint',
            address: '0x003'
        },
        {
            transactionHash: '0x041b0x041b1234564a664',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x003656778b39e'
        },
        {
            transactionHash: '0x041b0x041b1234564a66',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: '-',
            address: '0x0036b39e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a',
            blockNum: 1897889,
            status: 'REVERTED',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x003612345678890b39e'
        },
        {
            transactionHash: '0x041b0x',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x0036gfhjdkfjghb39e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'DEPLOY_ACCOUNT',
            calls: 'execute_from_outside…',
            address: '0x0036jfjfkfkfkfkfkfkfkb39e'
        },
        {
            transactionHash: '0x041b0x041b',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x0036ytutjfkfldb39e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0b39e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x0bllll'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x003ppppp9e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x003polp9e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x003678990'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x0036rtyuiiooo'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x003dfghjjkl'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'DEPLOY_ACCOUNT',
            calls: 'execute_from_outside…',
            address: '0x003cfdghjjk'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x009e'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x00hjkljjk'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'REVERTED',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x0ghjkkloo'
        },
        {
            transactionHash: '0x041b0x041b1234564a664a6',
            blockNum: 1897889,
            status: 'ACCEPTED_ON_L2',
            type: 'INVOKE_FUNCTION',
            calls: 'execute_from_outside…',
            address: '0x00oploplo'
        }
    ];
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

    const cellHashTrim = (string) => {
        if (string.length < 12) {
            return {__html: string};
        }

        return {__html: string.slice(0, 6) + '&hellip;' + string.slice(string.length-4, string.length)};
    }

    const cellCallTrim = (string) => {
        if (string.length < 20) {
            return {__html: string};
        }

        return {__html:string.slice(0, 20) + '&hellip;'};
    };

    return (
        <>
            <div className={style.tableTransactionsTitle}>
                <div className={style.titleItem}>
                    Transaction Hash <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    Block Num. <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    Status <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    Type <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    Calls <span className={style.helpIcon}>{helpIcon}</span>
                </div>

                <div className={style.titleItem}>
                    Address <span className={style.helpIcon}>{helpIcon}</span>
                </div>
            </div>

            {
                transactionsData.map((transaction, index) => {
                    return (
                        <div className={style.tableTransaction}>
                            <div className={style.dataItem}>
                                <a href="#" dangerouslySetInnerHTML={cellHashTrim(transaction.transactionHash)}></a>
                                <span className={style.copyIcon}>{copyIcon}</span>
                            </div>

                            <div className={style.dataItem}>
                                <a href="#">{transaction.blockNum}</a>
                            </div>

                            <div className={style.dataItem}>
                                <div className={`${style.wrapperStatus} ${transaction.status === 'REVERTED' ? style.wrapperStatusReverted : null}`}>
                                    {transaction.status}
                                </div>
                            </div>

                            <div className={style.dataItem}>
                                <div className={`${style.wrapperType} ${transaction.type === 'DEPLOY_ACCOUNT' ? style.wrapperTypeDeploy : null}`}>
                                    {transaction.type}
                                </div>
                            </div>

                            <div className={style.dataItem}>
                                <div className={style.wrapperCalls}  dangerouslySetInnerHTML={cellCallTrim(transaction.calls)}></div>
                            </div>

                            <div className={style.dataItem}>
                                <a href="#" dangerouslySetInnerHTML={cellHashTrim(transaction.address)}></a>
                                <span className={style.copyIcon}>{copyIcon}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Table;