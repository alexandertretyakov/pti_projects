import React from 'react';

import { useTranslations } from '../../helpers';
import Table from './Table';

import style from '../../index.module.scss'

const transactions = [
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside',
        address: '0x003yjkolmjkb39e111',
        timestamp: '2025-10-15T10:22:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'apply_mint',
        address: '0x003612345678890b39e',
        timestamp: '2025-08-01T10:14:09Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003656778b39e',
        timestamp: '2025-07-30T10:14:39Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: '-',
        address: '0x003612345678890b39e',
        timestamp: '2025-07-27T09:45:07Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a',
        blockNum: 1897889,
        status: 'REVERTED',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003612345678890b39e',
        timestamp: '2025-07-15T10:37:22Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036gfhjdkfjghb39e',
        timestamp: '2025-07-09T20:50:36Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'DEPLOY_ACCOUNT',
        calls: 'execute_from_outside…',
        address: '0x0036jfjfkfkfkfkfkfkfkb39e',
        timestamp: '2025-06-29T10:14:42Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036ytutjfkfldb39e',
        timestamp: '2025-06-21T22:23:18Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003612345678890b39e',
        timestamp: '2025-06-15T10:12:27Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003612345678890b39e',
        timestamp: '2025-06-11T23:43:41Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-06-02T13:51:31Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-05-27T17:14:11Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-05-23T10:14:04Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-05-19T01:16:45Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003dfghjjkl',
        timestamp: '2025-05-16T07:14:22Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'DEPLOY_ACCOUNT',
        calls: 'execute_from_outside…',
        address: '0x003cfdghjjk',
        timestamp: '2025-05-12T05:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003cfdghjjk',
        timestamp: '2025-05-05T10:14:21Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x00hjkljjk',
        timestamp: '2025-05-01T15:14:55Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'REVERTED',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0ghjkkloo',
        timestamp: '2025-04-30T10:14:31Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x00oploplo',
        timestamp: '2025-04-28T20:14:59Z'
    }
];

const Main = () => {
    const t = useTranslations();

    return (
        <div className={style.main}>
            <div className={style.ololo}>
                <h3>{t('Transactions')}</h3>
                <p className={style.tableDescription}>{t('Transactions that change the state of the Starknet blockchain.')}</p>
            </div>
            <Table transactions={transactions} />
        </div>
    );
};

export default Main;
