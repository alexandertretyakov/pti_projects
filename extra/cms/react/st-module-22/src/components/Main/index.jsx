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
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'apply_mint',
        address: '0x003612345678890b39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003656778b39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: '-',
        address: '0x003612345678890b39e',
        timestamp: '2025-08-11T09:45:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a',
        blockNum: 1897889,
        status: 'REVERTED',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003612345678890b39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036gfhjdkfjghb39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'DEPLOY_ACCOUNT',
        calls: 'execute_from_outside…',
        address: '0x0036jfjfkfkfkfkfkfkfkb39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036ytutjfkfldb39e',
        timestamp: '2025-08-11T22:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003612345678890b39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003612345678890b39e',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-08-11T17:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0036rtyuiiooo',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003dfghjjkl',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'DEPLOY_ACCOUNT',
        calls: 'execute_from_outside…',
        address: '0x003cfdghjjk',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x003cfdghjjk',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x00hjkljjk',
        timestamp: '2025-08-11T15:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'REVERTED',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x0ghjkkloo',
        timestamp: '2025-08-11T10:14:30Z'
    },
    {
        transactionHash: '0x041b0x041b1234564a664a6',
        blockNum: 1897889,
        status: 'ACCEPTED_ON_L2',
        type: 'INVOKE_FUNCTION',
        calls: 'execute_from_outside…',
        address: '0x00oploplo',
        timestamp: '2025-08-11T20:14:30Z'
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
